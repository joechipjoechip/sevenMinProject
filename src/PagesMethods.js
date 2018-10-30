import { TimelineLite } from "gsap/TweenMax";

const transitionOptions = {
    deltaEnterLeave: 2
};

const pageEnter = function(el) {
    console.log('hey, ici le pageEnter', el);

    const tl = new TimelineLite();
    tl.from(el,
        transitionOptions.deltaEnterLeave,
        {
            x: -200,
            autoAlpha: 0
        });
};

const pageLeave = function(el) {
    console.log('hey, ici le pageLeave', el);

    const tl = new TimelineLite();
    tl.to(el,
        2,
        {
            x: 200,
            autoAlpha: 0
        });
};

export {
    pageEnter,
    pageLeave
 };