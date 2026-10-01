
const products=[
    {
        img:"/images/shoe1.jpg",
        name:"Nike zoom Vomero 5",
        category:"Women's Shoes",
        price:"$250",
    },
    {
        img:"/images/shoe2.jpg",
        name:"Nike zoom skylon 11",
        category:"Women's shoes",
        price:"$350",
    },
    {
        img:"/images/shoe3.jpg",
        name:"Nike Vomero 18",
        category:"Running shoes",
        price:"$330",
    },
    {
        img:"/images/shoe4.jpg",
        name:"Nike pegasus 42",
        category:"Men's Shoes",
        price:"$220",
    },

     {
        img:"/images/shoe5.jpg",
        name:"Nike Air Jordan 1 High OG ",
        category:"Women's Shoes",
        price:"$213",
    },

     {
        img:"/images/shoe6.jpg",
        name:"Nike Air Max Moto 2k",
        category:"Kids shoes",
        price:"$110",
    },

     {
        img:"images/shoe7.jpg",
        name:"Nike SB janoski+ slip",
        category:"skate shoes",
        price:"$174",
    },

     {
        img:"images/shoe8.jpg",
        name:"Nike Air Force 1 '07 LV8",
        category:"Men's shoes",
        price:"$220",
    },
];

export default function FreshDrops(){
    const slideLeft=() =>{
        document.getElementById("slider").scrollLeft-=400;
    };

    const slideRight=() =>{
        document.getElementById("slider").scrollLeft +=400;
    };

    return (
        <section className="fresh-drops">
            <h2>Fresh Drops</h2>

            <div className="slider-container">
                <button className="arrow left" onClick={slideLeft}>
                     ❮
                </button>
                <button className="arrow right" onClick={slideRight}>
                   ❯
                </button>

                <div className="slider" id="slider">
                    {products.map((item,index) => (
                        <div className="card" key={index}>
                            <img src={item.img} alt={item.name}/>
                            <h3>{item.name}</h3>
                            <p>{item.category}</p>
                            <span>{item.price}</span>
                    
                </div>
            ))}
            </div>

            
            </div>
        </section>

    );
}