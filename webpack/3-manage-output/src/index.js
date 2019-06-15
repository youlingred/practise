import print from './print'
import './style.css'
var btn;
function component(){
    var element = document.createElement('div')
    btn = document.createElement('button')
    element.innerHTML='hello'

    btn.innerHTML='click me2111212121133221112211221'
    btn.onclick=print
    element.appendChild(btn)
    let btn1 = document.createElement('button')
    btn1.innerHTML='click'
    element.appendChild(btn1)
    return element
}
let element = component();
document.body.appendChild(element);
if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('hot replace'),
        document.body.removeChild(element);
        element=component();
        document.body.appendChild(element)
    })
}