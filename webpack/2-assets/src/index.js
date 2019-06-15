import _ from 'lodash'
import './style.less'
import Icon from './xyxjpg.jpg'
import data from './data'

function component(){
    var element = document.createElement('div');

    element.innerHTML=_.join(['hello',data.name],' ')
    //添加样式
    element.classList.add('hello')
    //添加图片
    let myIco=new Image()
    myIco.src=Icon
    element.appendChild(myIco)
    
    return element
}
document.body.appendChild(component());