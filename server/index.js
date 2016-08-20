import express from "express";
import path from "path";
import webpack from "webpack";
import webpackdevMiddleware from "webpack-dev-middleware";
import webpackHotMiddlware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";
let app=express();

const compiler=webpack(webpackConfig);
app.use(webpackdevMiddleware(compiler,{
    hot:true,
    publicPath :webpackConfig.output.publicPath,
    noInfo:true
}));
app.use(webpackHotMiddlware(compiler));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./index.html"));
});

app.listen("3001",()=>console.log('Running on 3001'));