import {merge, bounceInRight, pulse, slideOutUp, bounceInLeft, slideInLeft, slideInDown, slideInUp, headShake, fadeInDown } from 'react-animations'
import Radium from 'radium'

const shaky = merge(pulse, headShake)


const animation = {
    bounceInRight: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
    },
    pulse: {
        animation: 'x 2s',
        animationName: Radium.keyframes(pulse, 'pulse')
    },
    bounceInLeft: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
    },
    slideOutUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideOutUp, 'slideOutUp')
    },
    slideInLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInDown: {
        animation: 'x 0.7s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
    slideInUp: {
        animation: 'x 0.7s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    },
    headShake: {
        animation: 'x 2s',
        animationName: Radium.keyframes(headShake, 'headShake')
    },
    shaky: {
        animation: 'x 2s',
        animationName: Radium.keyframes(shaky, 'shaky')
    },
    fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },

}

export {animation}