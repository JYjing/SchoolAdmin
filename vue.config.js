module.exports={
    configureWebpack:{
        module:{
            rules:[{
                test:/\.ico$/,
                use:'file-loader'
            }]
        }
    },
    baseUrl: './',
}