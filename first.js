const imgs=document.querySelectorAll('.header-slider ul img')
const prev_btn=document.querySelector('.control_prev')
const next_btn=document.querySelector('.control_next')


let n=0;  // n=0 means first image

function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }

    imgs[n].style.display='block';  /*image will be visible*/
}   
// changeSlide();

prev_btn.addEventListener('click',(e)=>{
if(n>0){
    n--;
}
else{
    n=imgs.length-1;
}
changeSlide()
})
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++
    }
    else{
        n=0;
    }
    changeSlide();
})


// To scroll with the help of mouse Wheel
const scrollContainer=document.querySelectorAll('.products');
for(const item of scrollContainer){
item.addEventListener('wheel',(evt)=>{
// first remove the default feature
evt.preventDefault();
item.scrollLeft += evt.deltaY;
})
}
