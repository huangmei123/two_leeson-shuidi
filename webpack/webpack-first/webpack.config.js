module.exports = {
    mode:"development",
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"],
                        plugins:[
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs":3
                                }
                            ]
                        ]
                    }
                },
                exclude:/node_modules/ //排除nodule_modules目录
            }
        ]
    }
}