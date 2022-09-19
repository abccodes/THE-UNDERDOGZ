import * as React from 'react'
// import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

const Vector = ({ progress = 0, ...props }) => {
  return (
    <svg viewBox="0 0 1 2047" fill={props.fill || 'none'} {...props}>
      <path
        strokeWidth="6px"
        className="svg-path"
        d="M1 0v2048.5"
        stroke="#2d2d2d"
      />
    </svg>
  )
}

export default Vector
