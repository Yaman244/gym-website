let menuButten = document.querySelector('.toggle');
let navList = document.querySelector('.nav-list');



menuButten.addEventListener('click', ()=> {
    menuButten.classList.toggle('open');

    if(navList.classList.contains('active')) {
        navList.classList.remove('active')
        navList.style.maxHeight = 0 + 'px' ;
        
    }else {
        navList.style.maxHeight = 500 + 'px';
        navList.classList.add('active')
    }
})




let down = document.querySelector('.down .orang');
down.addEventListener('click', () => {
window.scrollBy({
    top: 100,
    behavior: "smooth"
})
})

let actLeft = document.getElementById('act-lft');
let actRigth = document.getElementById('act-right');
let activitiesScroller = document.querySelector('.activities-cards');
let card = document.querySelectorAll('.activities-cards .card');
let cmfortrigth = document.querySelector('.comfort .right');
let cmfortLeft = document.querySelector('.comfort .left');
let joinUsRight = document.querySelector('.join-us-container .right');
let joinUsleft = document.querySelector('.join-us-container .left')

window.addEventListener('scroll', () => {
    scrollcard(activitiesScroller, activitiesScroller.offsetTop , window.innerHeight - 150 ,'translateY(50%)');
    scrollcard(cmfortLeft, cmfortLeft.offsetTop, window.innerHeight - 150 , 'translateX(-50%)');
    scrollcard(cmfortrigth, cmfortrigth.offsetTop, window.innerHeight - 150 , 'translateX(50%)');
    scrollcard(joinUsRight, joinUsRight.offsetTop, window.innerHeight - 150 , 'translateX(50%)');
    scrollcard(joinUsleft, joinUsleft.offsetTop, window.innerHeight - 150 , 'translateX(-50%)');
    
});
function scrollcard(element, elementOffset ,num , translate) {
    if(window.scrollY >= (elementOffset - num) ) {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0%)';
    }else{
        element.style.opacity = '0';
        element.style.transform = translate;

    }
}
let start;
activitiesScroller.addEventListener('touchstart', (e)=>  {
    let touches = [...e.changedTouches];
    touches.forEach( touch => {
        start = touch.pageX;
    })
})

activitiesScroller.addEventListener('touchmove', (e)=>  {
    e.preventDefault();

})
activitiesScroller.addEventListener('touchend', (e)=>  {
    let touches = [...e.changedTouches];
    touches.forEach( touch => {
        let xaxis = touch.pageX;
        if(xaxis - start < 0){
            activitiesScroller.scrollBy({
                left: 320,
                behavior:"smooth"
            })
        } else {
            activitiesScroller.scrollBy({
                left: -320,
                behavior:"smooth"
            })
        }
    })

})




actRigth.classList.add('active');

actLeft.addEventListener('click' , () => {
    activitiesScroller.scrollBy({
        left: -320,
        behavior: "smooth"
    })
actLeft.classList.add('active');

    if(actLeft.classList.contains('active')){
        actRigth.classList.remove('active')
    }
})
actRigth.addEventListener('click' , () => {
    activitiesScroller.scrollBy({
        left: 320,
        behavior: "smooth"
    })

    if(actLeft.classList.contains('active')){
        actLeft.classList.remove('active')
    }
    actRigth.classList.add('active')
})

