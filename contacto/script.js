gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})


$(document).ready(function() {
  $('.menu-toggle').click(function() {
      $('.menu').toggleClass('active'); // Agrega o quita la clase "active"
  });
});

gsap.to('.img-container',{
  scale:52,
  ease:"ease",
  scrollTrigger:{
    trigger:'.video-section',
    scrub:1,
    start:"top top",
    end:"bottom",
    pin:true
  }
})


gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})
gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})


gsap.to('.txt-bottom',{
  autoAlpha:0,
  letterSpacing:-10,
  duration:1.8,
  scrollTrigger:{
    start:2
  }
})


const tl = gsap.timeline();

tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})



ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
})



gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-50,
    scrollTrigger:{
      trigger:image,
      start:"10%",
      stagger:{
        amount:.4
      }
    }
  })
})

const timeline = gsap.timeline();


timeline.add(
  gsap.from('.title span', {
    y: 150,
    skewY: 7,
    duration: 3
  })
);

timeline.add(
  gsap.from('.txt-bottom', {
    letterSpacing: -10,
    opacity: 0,
    duration: 3
  }),
  0  // Set the position of this animation to start at the same time as the first one
);

$(document).ready(function() {
  $('#about-link').click(function(e) {
      e.preventDefault(); // Evita que el enlace recargue la página
      $('.v_container').toggleClass('visible'); // Agrega o quita la clase "visible"
  });
});

