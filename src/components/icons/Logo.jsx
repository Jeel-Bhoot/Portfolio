import React from "react";

export default function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="JB logo"
    >
      <defs>
        <linearGradient id="logo-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <rect
        fill="#111827"
        x="40"
        y="40"
        width="320"
        height="320"
        rx="72"
      />

      <rect
        stroke="#3b82f6"
        x="52"
        y="52"
        width="296"
        height="296"
        rx="60"
        fill="none"
        strokeWidth="6"
      />

      <g fill="url(#logo-accent)" transform="translate(8.5, 22.5)">
        <path d="M 135 110 L 175 110 L 175 205 C 175 230, 160 245, 130 245 C 110 245, 95 235, 85 220 L 108 200 C 114 208, 120 213, 132 213 C 145 213, 147 206, 147 195 Z" />
        <path d="M 205 110 L 255 110 C 280 110, 295 122, 295 140 C 295 153, 285 165, 268 170 C 288 175, 298 190, 298 208 C 298 230, 280 245, 252 245 L 205 245 Z M 233 134 L 233 161 L 252 161 C 264 161, 269 154, 269 147 C 269 140, 264 134, 252 134 Z M 233 184 L 233 221 L 255 221 C 267 221, 272 214, 272 203 C 272 191, 267 184, 255 184 Z" />
      </g>
    </svg>
  );
}
