var arr= [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'lime',
        full_name:"Chennai Super Kings",
        trophies:5,
        captain:"MSD",
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'silver',
        full_name:"Mumbai Indian",
        trophies:5,
        captain:"Rohit sharma",
    },{
        team:'KKR',
        primary:'voilet',
        secondary:'peach',
         full_name:"Kolkata Knight Riders",
        trophies:2,
        captain:"Gautam Gambhir",

    },{
        team:'KXIP',
        primary:'orange',
        secondary:'maroon',
        full_name:"Kings XI Punjab",
        trophies:0,
        captain:"KL Rahul",
    },{
        team:'RR',
        primary:'skyblue',
        secondary:'pink',
        full_name:"Rajasthan Royals",
        trophies:1,
        captain:"Sanju Samson",
    },{
        team:'RCB',
        primary:'red',
        secondary:'navy',
         full_name:"Royal Challengers Bangalore",
        trophies:1,
        captain:"Virat Kohli",
    },
]

var btn=document.querySelector('button')
var h1=document.querySelector('h1')
var main=document.querySelector('main')

btn.addEventListener('click',function(){
    var winner=arr[Math.floor(Math.random()*arr.length)]
   
   
    h1.innerHTML=winner.team
    h1.style.backgroundColor=winner.secondary
    main.style.backgroundColor=winner.primary
})
