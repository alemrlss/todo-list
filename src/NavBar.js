import {projects} from './leftPanel'
import { tasks } from './rigthPanel'
const navBar= ()=>{ 

const nav = document.querySelector('.nav')

const icon = document.createElement('img')
icon.classList.add('icon')
icon.setAttribute('src','./img/menu.png')

icon.addEventListener('click',e=>{

    let leftPanel = document.querySelector('.leftPanel')
    leftPanel.classList.toggle('hidden')

})
nav.appendChild(icon)


const title = document.createElement('h1')
title.classList.add('navbar-title')
title.textContent = 'to-do list project'



    const btn = document.createElement('button')
    btn.textContent = ' main array'


btn.addEventListener('click',e=>{
    console.log(tasks)
})


    nav.appendChild(btn)
nav.appendChild(title)
}

export default navBar