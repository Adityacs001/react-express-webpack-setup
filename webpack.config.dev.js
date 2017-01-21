import path from "path";
import webpack from "webpack";
export default {
devtools : "eval-source-map",
entry:[
    'webpack-hot-middleware/client',
    path.join(__dirname,"/client/index.js"),
],
output:{
    path:"/",
    publicPath:"/"
},
plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
],
module:{
    loaders:[
        {
            test:/\.js$/,
            include:path.join(__dirname,"client"),
            loaders:['react-hot','babel']
        },
     // CSS
        { 
            test: /\.styl$/, 
            include: path.join(__dirname, 'static'),
            loader: 'style-loader!css-loader!stylus-loader'
        }
    ]

},
resolve:{
    extensions:['','.js','.styl']
}
}