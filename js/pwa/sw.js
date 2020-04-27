const CACHE_NAME = 'sw-' +0;
//serviceWorker生命周期
//self是全局变量，相当于window（window是整个窗口的全局变量）
//当监听install时,按照常理会接着下一个阶段activate，但是waitUntil是会停下了完成一件事情，再去下一个阶段
self.addEventListener('install',() => {
    //缓存一件事才进入下一个阶段 cache-storage
    let cacheComplete = caches.open(CACHE_NAME).then(cache =>{
        return cache.addAll([
            './',//当前的根目录 https://localhost:8080/ 缓存的是整个html文件
            './1001504.jpg'
        ])
    })
    event.waitUntil(cacheComplete)
})
self.addEventListener('activate',()=>{})
//监听浏览器发出的请求
//判断一下 如果在我们缓存的空间里，那么我们直接取出缓存空间里的内容返回
//如果没在，sw就帮浏览器发出请求，请求完之后再放到缓存里，供下次使用。
self.addEventListener('fetch',(event)=>{
    //用什么返回
    //如果匹配上了request 就给reponse
    //promise的返回值就是then回调里面的返回值。

   let thisReqRes= caches.match(event.request)
    .then((response) =>{
        if(response) {
            //1.缓存有就 return出来
            return response;
        }else{
            
            fetch(event.request)
            //放到缓存
            .then(res =>{
                //缓存前 存一下再reutrn
                return caches.open(CACHE_NAME).then(function(cache){
                    //res是以流的形式返回的，（流的特点用一次就没有了）
                    caches.put(event.request,res.clone());
                    //2.缓存没有 就把请求完的结果return出来。
                    return res;
                })
            })
        }
    })
  event.respondWith(thisReqRes)
})