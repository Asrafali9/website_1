// counter
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });


 // scroll top button

 window.onscroll=function(){arwDsply()};
 const scrollArrow=document.querySelector(".scroll-top");
 const arwDsply=()=>{
     if (document.documentElement.scrollTop>30||document.body.scrollTop>30) {
         scrollArrow.style.opacity=1;
     } else {
        scrollArrow.style.opacity=0;
         
     }
 }


 function directTop(){
     document.documentElement.scrollTop=0;
     document.body.scrollTop=0;
 }