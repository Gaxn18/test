let movies = [
    {
        name: "Teri Meri Doriyaann",
        des: "It's hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues.",
        image: "images/1.webp"
    },
    {
        name: "Aashiqana",
        des: "NEW EPISODES FROM MON-SAT. A roaring rampage of revenge! Terror reigns the city as masked maniacs wreak carnage. Racing against time, Yash and Chikki must put an end to this nightmare.",
        image: "images/6.webp"
    },
    {
        name: "Veera Simha Reddy",
        des: "Jai's reunion with his long-lost influential father Veera gets chaotic when the latter's past returns to haunt him. How will Jai save Veera from his ill-fate?",
        image: "images/3.webp"
    },
    {
        name: "The Night Manager",
        des: "A hotel's night manager is the only weapon against a dangerous arms dealer. Will he be able to stop him?",
        image: "images/4.webp"
    },
    {
        name: "Black Panther: Wakanda Forever",
        des: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers after the death of beloved King T’Ch",
        image: "images/5.webp"
    },
    {
        name: "Yeh Rishta Kya Kehlata Hai",
        des: "A personal tragedy creates a rift in Abhimanyu and Akshara’s marital life. Years later, when destiny offers a second chance, will the duo embrace love?",
        image: "images/8.webp"
    },
    {
        name: "Malikappuram",
        des: "Little Kallu longs for a glimpse of Swami Ayyappan. When she sets out on the pilgrimage to Sabarimala, a mysterious person steps forward to help. Who is he?",
        image: "images/7.webp"
    },
    {
        name: "Fursat",
        des: "An ancient relic lets a man peek into the future. In trying to control what lies ahead, he risks all that matters most in the present. Shot on iPhone 14 Pro.",
        image: "images/9.webp"
    }
];
const carousel = document.querySelector('.carousel');
let sliders=[];
let slideIndex=0;
const createSlide = ()=>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    slide.className='slider';
    content.className='slide-content';
    h1.className='movtitle';
    p.className='movdescription';

    sliders.push(slide);
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;;
    }
};
for (let i = 0; i < 3; i++) {
    createSlide();    
}
setInterval(()=>{
    createSlide();
},3000);