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
    btn.textContent = ' array tasks'


btn.addEventListener('click',e=>{
    console.log(tasks)
})

    const btnarray = document.createElement('button')
    btnarray.textContent = ' array projects'


    btnarray.addEventListener('click',e=>{
    console.log(projects)
})



nav.appendChild(title)
}

export default navBar