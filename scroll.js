gsap.registerPlugin(ScrollTrigger);



gsap.utils.toArray(".fade-up").forEach((el)=>{

gsap.to(el,{
opacity:1,
y:0,
duration:1.2,
scrollTrigger:{
trigger:el,
start:"top 80%"
}

});

});



gsap.utils.toArray(".fade-left").forEach((el)=>{

gsap.fromTo(el,

{x:-100,opacity:0},

{x:0,opacity:1,duration:1.2,
scrollTrigger:{
trigger:el,
start:"top 80%"
}}

);

});



gsap.utils.toArray(".fade-right").forEach((el)=>{

gsap.fromTo(el,

{x:100,opacity:0},

{x:0,opacity:1,duration:1.2,
scrollTrigger:{
trigger:el,
start:"top 80%"
}}

);

});