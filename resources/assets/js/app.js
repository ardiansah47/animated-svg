tl = new TimelineMax({paused: true});
tl.to('.btn-primary', .9,{y:'-50', opacity: 0, ease:Power4.easeOut})
tl.to('.section', .5,{backgroundColor:'#31BF86'})
tl.from('#bowl', 1, {x:'-50', opacity: 0, ease: Power4.easeOut});
tl.from('#Path_7', 1,{opacity: 0}, '-=.7' )
tl.from('#sushi_1', 1, {y: '-200', rotation: 100, transformOrigin:"50% 50%", opacity: 0, ease: Bounce.easeOut}, '-=.4');
tl.from('#sushi_2', 1, {y: '-200', rotation: -200, transformOrigin:"50% 50%", opacity: 0, ease: Bounce.easeOut}, '-=.7');
tl.from('#chopstick_1', .4, {y: '-500%', rotation: 20, transformOrigin:"50% 50%", opacity: 0, ease: Power1.easeOut}, '-=.7');
tl.from('#chopstick_2', .4, {y: '-400%', rotation: -60, transformOrigin:"50% 50%", opacity: 0, ease: Power1.easeOut}, '-=.6');
tl.from('#bg1', 1, {x: 500, opacity: 0, ease: Power1.easeOut}, '-=.7');
tl.from('#bg2', 1, {x: 450, opacity: 0, ease: Power4.easeOut}, '-=.7');
tl.from('.hidden-text', 1, {y:'100%', ease:Power4.easeOut}, '-=.9')


var buttonPlay = document.getElementsByClassName('btn-primary')
buttonPlay[0].addEventListener("click", function(){ 
    tl.play();
});
