const webpackDevServer= require('webpack-dev-server');
const webpack =require('webpack');

const config=require('../webpack.config');
const options={
    contentBase:'./dist',
    hot:true
}

webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server =new webpackDevServer(compiler,options);
server.listen(3000,'localhost',()=>{
    console.log('3000')
})