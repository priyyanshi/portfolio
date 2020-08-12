import {bounceInRight, pulse, bounceInLeft, slideInLeft, slideInUp } from 'react-animations'
import Radium from 'radium'

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
}

export {animation}