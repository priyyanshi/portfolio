import React from 'react' 

function Circle(props) {
    return(
        <svg style={{position:"absolute"}} height={props.height} width={props.width}>
            <circle cx={props.x} cy={props.y} r={props.r} stroke={props.s} stroke-width={props.w} fill={props.f}/>
        </svg>
    )
}

export {Circle}