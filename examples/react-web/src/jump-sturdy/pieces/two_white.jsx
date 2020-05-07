import React from "react";

const two_white = props => (
  <svg width={44} height={44} {...props}>
    <defs>
      <linearGradient id="a">
        <stop offset={0} stopColor="#fff" stopOpacity={1} />
        <stop offset={0.31032619} stopColor="#fff" stopOpacity={1} />
        <stop offset={1} stopColor="#7c7c7c" stopOpacity={1} />
      </linearGradient>
      <radialGradient
        cx={-264.07739}
        cy={471.29514}
        r={14.983361}
        fx={-264.07739}
        fy={471.29514}
        xlinkHref="#a"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1.22763 0 0 -1.00551 -588.267 948.84)"
      />
      <radialGradient
        cx={-264.07739}
        cy={471.29514}
        r={14.983361}
        fx={-264.07739}
        fy={471.29514}
        xlinkHref="#a"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1.22763 0 0 -1.00551 -588.267 956.595)"
      />
      <radialGradient
        cx={-264.07739}
        cy={471.29514}
        r={14.983361}
        fx={-264.07739}
        fy={471.29514}
        id="b"
        xlinkHref="#a"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1.22763 0 0 -1.00551 -588.267 956.595)"
      />
      <radialGradient
        cx={-264.07739}
        cy={471.29514}
        r={14.983361}
        fx={-264.07739}
        fy={471.29514}
        id="c"
        xlinkHref="#a"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1.22763 0 0 -1.00551 -588.267 948.84)"
      />
    </defs>
    <g
      fillOpacity={1}
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={0.98981297}
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit={4}
      strokeDashoffset={0}
      strokeOpacity={1}
    >
      <path
        d="M-255.844 479.443v7.752c0 4.368-6.49 7.913-14.489 7.913-7.997 0-14.488-3.545-14.488-7.913v-7.752h28.977z"
        fill="url(#b)"
        transform="translate(293.429 -456.076) translate(-1.096 -1.362)"
      />
      <path
        d="M-255.844 471.688v7.752c0 4.368-6.49 7.912-14.489 7.912-7.997 0-14.488-3.544-14.488-7.912v-7.752h28.977z"
        fill="url(#c)"
        transform="translate(293.429 -456.076) translate(-1.096 -1.362)"
      />
      <path
        d="M37.638 15.718a14.488 7.752 0 11-28.977 0 14.488 7.752 0 1128.977 0z"
        transform="translate(293.429 -456.076) translate(-1.096 -1.362) matrix(1 0 0 1.02069 -293.482 455.644)"
        opacity={1}
        fill="#fff"
        strokeDasharray="none"
      />
    </g>
  </svg>
);

export default two_white;
