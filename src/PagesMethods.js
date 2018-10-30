import { TimelineLite } from "gsap/TweenMax";

const options = {
    routerTransitionDuration: 1000,
    ratioDeltaEnterLeave: 0.85
};

const routerTransitionOptions = () => {
    return  {
        enter: options.routerTransitionDuration, 
        leave: options.routerTransitionDuration * options.ratioDeltaEnterLeave,
    };
};

const pageEnter = (el) => {
    // console.log('hey, ici le pageEnter', el);

    const tl = new TimelineLite();
    tl.from(el,
        options.routerTransitionDuration / 1000,
        {
            autoAlpha: 0,
            scale: 20,
            force3D: false
        });
};

const pageLeave = (el) => {
    // console.log('hey, ici le pageLeave', el);

    const tl = new TimelineLite();
    tl.to(el,
        (options.routerTransitionDuration / 1000) * options.ratioDeltaEnterLeave,
        {
            autoAlpha: 0,
            scale: 0.5,
            rotation: -25,
            force3D: false

        });
};

export {
    pageEnter,
    pageLeave,
    routerTransitionOptions
 };