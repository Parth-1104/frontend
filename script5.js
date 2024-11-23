
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function videoconanimation()
{
    var videocon=document.querySelector("#videocontainer")
var playbtn=document.querySelector('#play')
videocon.addEventListener("mouseenter",function(){
    // playbtn.style.opacity=1
    // playbtn.style.scale=1
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })

})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-30,
        top:dets.y-100
    })
})
}
videoconanimation()


function loadinganimation()
{
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
    
        stagger:0.2,
        scale:1.3
    
    })
    gsap.from("#page1 #videocontainer",{
        scale:1.1,
        opacity:0,
        delay:1.4,
        duration:1
    
    })
}
loadinganimation()
