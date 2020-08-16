import {merge, bounceInRight, pulse, bounceInLeft, slideInLeft, slideInUp, headShake } from 'react-animations'
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
    slideInLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInUp: {
        animation: 'x 2s',
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

}

export {animation}