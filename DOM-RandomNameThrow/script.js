btn=document.querySelector('button')
main=document.querySelector('main')

var arr=['Hey! I am Deva','Deva is the best','Are u a web devlopers!?','Ronaldo is the best??','Messi is the best','greatest defender of Italy,Maldini','U know Diego Maradona','Wait let me shoot:Roberto C']

btn.addEventListener('click',function(){

    var h1=document.createElement('h1')

    var x=Math.random()*100
    var y=Math.random()*100
    var rot=Math.random()*360
    var a=Math.floor(Math.random()*arr.length)

    h1.innerHTML=arr[a]

    h1.style.position='absolute'

    h1.style.left=x+'%'
    h1.style.top=y+'%'
    h1.style.rotate=y=rot+'deg'

    main.appendChild(h1)
})



