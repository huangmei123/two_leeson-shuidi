PC端扫码登录方案 并需要传递哪些信息
1. jwt（cookie session传统的表单登录） 轮询怎么做 mongodb 二维码扫码登录（node）
JSON Web Token 是 rfc7519 出的一份标准，使用 JSON 来传递数据，用于判定用户是否登录状态
2. node 前端 登录 封装api的业务

1. 二维码是包含一段信息的图片， node相应的包orcode生成
头像 id 用户名---->二维码， 二维码等待手机端传信息过来，（在扫码的时候，二维码发送ajax请求 把传过来的信息放到二维码里），二维码把信息存在mongodb的qrcode_id
2. 通过微信App（手机微信登录了）进行扫码
  - 手机app 微信或者github或者QQ 已经登录（前提） cookie（token）
3. 扫码之后，App里的一些用户信息（头像、id、登录状态）都传到pc端
4. 结果是PC站登录了


  1. 生成二维码  二维码是mongodb存 qrcode_id time expires（过期） 这些东西通过node qrcode
  2. 手机扫码的时候是已登录的状态,就有一个 token（cookie），把token给二维码，通过扫码触发一下ajax post请求，到服务器端。通过token在服务器端解析用户身份。
  3. mongodb二维码登陆中，user信息 token也传给pc页面 ，pc端也登录成功
  4. 跳转 已登录成功
  服务器端要认识你的谁，token oAuth 用token代替cookie（因为不同设备的cookie不同，不好传；安全性更不好）

二维码是随机生成的需要接口， 手机扫码是一个认领的过程。
过几分钟刷新 轮循 是为了安全问题，
在二维码的生命周期涉及一些复杂操作：

代码逻辑：
1. node插入一条qrcode记录，{qrcode_id,expires_at,create_at}生成一个二维码图片
2. 显示一个pc端的登录页 把生成的二维码显示出来。
3. 扫码得到qrcode，使用postmon模拟登录注册的整个过程 ，