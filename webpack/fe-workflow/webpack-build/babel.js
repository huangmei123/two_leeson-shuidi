module.exports = function(){
    return {
        'presets':[
            [
                '@babel/preset-env',
                {
                    targets:{
                        chrome:59,
                        edge:13,//ie浏览器的代号
                        firsfox:50,
                        safari:8
                    }
                }
            ]
        ]
    }
}