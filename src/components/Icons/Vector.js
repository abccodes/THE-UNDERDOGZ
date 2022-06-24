import * as React from 'react'
// import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

const Vector = ({ progress = 0, ...props }) => {
  return (
    <svg viewBox="0 0 52 2047" fill={props.fill || 'none'} {...props}>
      <path
        strokeWidth="6px"
        className="svg-path"
        d="M1 0v2048.5"
        stroke="black"
      />
    </svg>
  )
}

export default Vector
