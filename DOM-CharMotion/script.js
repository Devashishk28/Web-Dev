        const p1=document.querySelector(".p1 p")
        const p2=document.querySelector(".p2 p")
        const p3=document.querySelector(".p3 p")

const text1=p1.innerText
const text2=p2.innerText
const text3=p3.innerText


const characters="ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"

let iteration=0

function randomText(){

    //for p1:
    const str1=text1.split("").map((char,index)=>{
    if(index<iteration){
    return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]}).join("")
        p1.innerText=str1;


    //for p2:
    const str2=text2.split("").map((char,index)=>{
    if(index<iteration){
    return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]}).join("")
        p2.innerText=str2;


    //for p3:
     const str3=text3.split("").map((char,index)=>{
    if(index<iteration){
    return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]}).join("")
        p3.innerText=str3;

        
        iteration+=0.9

        console.log(iteration)
    }

    setInterval(randomText,30)

