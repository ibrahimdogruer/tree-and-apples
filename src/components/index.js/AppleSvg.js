import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 176.57 185.42"
    {...props}
  >
    <defs>
      <radialGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        cy={95.46}
        cx={68.09}
        gradientTransform="matrix(1.0296 0 0 .97122 -15.125 -11.41)"
        r={91.219}
      >
        <stop
          style={{
            stopColor: "red",
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "#8c3300",
          }}
          offset={1}
        />
      </radialGradient>
      <radialGradient
        id="c"
        fx={63.822}
        fy={133.67}
        gradientUnits="userSpaceOnUse"
        cy={127.9}
        cx={68.57}
        gradientTransform="matrix(1.6741 0 0 .59732 -15.125 -11.41)"
        r={17.183}
      >
        <stop
          style={{
            stopColor: "#c8b800",
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "red",
            stopOpacity: 0.59259,
          }}
          offset={0.7}
        />
        <stop
          style={{
            stopColor: "red",
            stopOpacity: 0,
          }}
          offset={1}
        />
      </radialGradient>
      <linearGradient
        id="b"
        y2={44.934}
        spreadMethod="reflect"
        gradientUnits="userSpaceOnUse"
        y1={83.208}
        gradientTransform="scale(1.4426 .6932)"
        x2={25.064}
        x1={69.297}
      >
        <stop
          style={{
            stopColor: "#0f0",
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "#009000",
          }}
          offset={1}
        />
      </linearGradient>
    </defs>
    <path
      style={{
        stroke: "#000",
        strokeWidth: "1pt",
        fill: "url(#a)",
      }}
      d="M70.625 43.89c-20 5-45-5-50 35s30 115 60 105c15-5 10-5 29.995 0 40 10 80-89 60-120-20-30-60-30-99.995-20z"
    />
    <path
      style={{
        stroke: "#000",
        strokeWidth: "1pt",
        fill: "url(#b)",
      }}
      d="M130 80c-10-30-35-45-60-45-10 0-20 0-35 5 15 10 25 25 45 25 15 0 40 12 50 15z"
      transform="translate(-34.375 -31.11)"
    />
    <path
      style={{
        stroke: "#000",
        strokeWidth: "1pt",
        fill: "none",
      }}
      d="M35 40c35 5 70 10 95 40"
      transform="translate(-34.375 -31.11)"
    />
    <path
      style={{
        stroke: "#000",
        strokeWidth: 0.625,
        fill: "none",
      }}
      d="M55 35.15c4 1 7 5.85 10 9.85-5 6-9.5 5-16.7 5.15M72 35c8 4 10 8 13 15-3 4-9.75 10.125-20.75 11.125M92 39c5 4 9.5 13.5 10.5 18.5-5 3-12.5 7.5-22.5 7.5M110 50c5.5 7 3 9 5 15-6 1-8 4-15 4"
      transform="translate(-34.375 -31.11)"
    />
    <path
      style={{
        fillRule: "evenodd",
        fill: "url(#c)",
      }}
      d="M60.625 58.89c5-15 59.995-20 64.995 0-15 5-20 10-34.995 10-15 0-20-5-30-10z"
    />
    <path
      style={{
        strokeLinejoin: "bevel",
        stroke: "#000",
        strokeWidth: "1pt",
        fill: "#af6700",
      }}
      d="m95.625 68.59-5 .3c0-25 5-45 9.995-55 5-10 7-18 15-10 5 5-6.84 3.68-10 10-5 10-9.995 25-9.995 54.7z"
    />
    <path
      style={{
        strokeLinejoin: "round",
        stroke: "#000",
        strokeLinecap: "round",
        strokeWidth: "1pt",
        fill: "none",
      }}
      d="M125.62 58.89c-10 5-20 10-34.995 10-15 0-20-5-30-10"
    />
  </svg>
)

export default SvgComponent
