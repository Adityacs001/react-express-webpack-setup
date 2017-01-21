import express from "express";
import path from "path";
import bodyParser from "body-parser";
import webpack from "webpack";
import webpackdevMiddleware from "webpack-dev-middleware";
import webpackHotMiddlware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";
import loginroute from "./routes/loginroute";
let app=express();

app.use(bodyParser.json());

const compiler=webpack(webpackConfig);
app.use(webpackdevMiddleware(compiler,{
    hot:true,
    publicPath :webpackConfig.output.publicPath,
    noInfo:true
}));
app.use(webpackHotMiddlware(compiler));
app.use('/static', express.static(path.resolve(__dirname,'..', 'static')))
app.use('/api/login',loginroute);
app.get("*",(req,res)=>{ 
    res.sendFile(path.join(__dirname,"./index.html"));
});

//middleware to handle any invalid request
app.use((req,res)=>{
    res.status(404).json({
        errors:{
            global:"still working on it,please try sometime later!!"
        }
    });
});
app.listen("3001",()=>console.log('Running on 3001'));