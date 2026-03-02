var btn=document.querySelector('button')
var h1=document.querySelector('h1')

btn.addEventListener('click',(()=>{
  h1.innerHTML='changing user...'

    setTimeout(function(){
        h1.innerHTML='Hello I am Devaa!'
    },2000)

}))
