let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')


dayNight.onclick=function(){
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
}
    menuToggle.onclick=function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

let btn =document.getElementById("btn");
let top_Form=document.getElementById("top-form");
let close_Btn=document.getElementById('close')
btn.addEventListener('click',function(){
top_Form.classList.toggle('sign-btn')
})
close_Btn.addEventListener('click',function(){
top_Form.classList.remove('sign-btn')
})


let home_btn = document.getElementById("home-btn");
window.onscroll=function(){
    if(window.scrollY>=400){
        home_btn.style.display="block";
    }else{
        home_btn.style.display="none"
    }

}
home_btn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}