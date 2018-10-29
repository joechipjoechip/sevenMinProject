import { TimelineLite } from "gsap/TweenMax";

const pageEnter = function(el) {
    console.log('hey, ici le pageEnter', el);

    const tl = new TimelineLite();
    tl.from(el,
        2,
        {
            x: -200,
            opacity: 0
        });
};

const pageLeave = function(el) {
    console.log('hey, ici le pageLeave', el);

    const tl = new TimelineLite();
    tl.to(el,
        2,
        {
            x: 200,
            opacity: 0
        });
};

export {
    pageEnter,
    pageLeave
 };