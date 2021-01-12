import React from 'react';

export default function Clock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(0.196 0.299)">
        <rect className="a" width="32" height="32" transform="translate(-0.196 -0.299)" />
        <path
          fill="#6b778d"
          className="b"
          d="M11.753,23.505A11.753,11.753,0,1,1,23.505,11.753,11.753,11.753,0,0,1,11.753,23.505Z"
          transform="translate(3.918 5.223)"
        />
        <path
          className="c"
          d="M.578.452A.49.49,0,0,1,1.067,0h.409a.49.49,0,0,1,.487.441l.609,6.088L6.9,9a.49.49,0,0,1,.247.425v.381a.49.49,0,0,1-.619.472L.351,8.594a.49.49,0,0,1-.359-.51Z"
          transform="translate(14.404 9.794)"
        />
      </g>
    </svg>
  );
}
