var grow=0
var btn=document.querySelector('button')
var h2=document.querySelector('h2')
var inner=document.querySelector('.inner')

btn.addEventListener('click',function(){
        btn.style.pointerEvents='none'

        var num=50+Math.floor(Math.random()*50);
        console.log(num);

    var int=setInterval(()=>{
        grow++
        h2.innerHTML=grow+"%"
        inner.style.width=grow+'%'
    },num);
    
    setTimeout(()=>{
    clearInterval(int)
    btn.innerHTML='Downloaded'
       console.log('Downloaded in ',num/10,'Seconds');
    btn.style.opacity=0.5
   },num*100);

})