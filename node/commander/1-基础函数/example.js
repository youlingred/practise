var program = require('commander')

program
    .version('1.0.0')  //显示版本，默认添加 -V --version选项
    .usage('自定义命令使用说明:[command] [option]')
    
program.parse(process.argv);  //解析并执行
