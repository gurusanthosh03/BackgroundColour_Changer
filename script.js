let btn = document.getElementById("btn")
const wrap = document.getElementById('wrap')
const colortext = document.getElementById('col')
let nav = document.getElementById('nav')
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn = addEventListener('click',changeBg)

function changeBg()
{
    let frnd = '#'
    for(i=1;i<=6;i++)
    {
        let color = hexRandom()
        frnd +=color
    }
    wrap.style.backgroundColor=frnd
    colortext.innerHTML=frnd
    colortext.style.color = frnd
    nav.style.color = frnd
}

function hexRandom(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
}

