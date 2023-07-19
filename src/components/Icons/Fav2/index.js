import React from 'react';

export default function renderIcon({
  width = 30,
  height = 30,
  color = '#0F1729',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72656 5C5.67124 5 2.5 8.52477 2.5 12.6949C2.5 14.8639 2.8471 16.65 4.14104 18.5293C5.37563 20.3224 7.42863 22.1321 10.6142 24.5194L15 27.5L19.3855 24.5197C22.5712 22.1322 24.6243 20.3225 25.859 18.5293C27.1529 16.65 27.5 14.8639 27.5 12.6949C27.5 8.52477 24.3288 5 20.2734 5C18.2387 5 16.4773 5.82901 15 7.32904C13.5228 5.82901 11.7613 5 9.72656 5ZM9.72656 7.5C7.21939 7.5 5 9.73187 5 12.6949C5 13.3812 5.03884 13.9843 5.13566 14.5407C5.29783 15.4725 5.62268 16.2728 6.20017 17.1116C7.18165 18.5371 8.93576 20.1375 12.1145 22.5196L15 24.6867L17.8855 22.5196C21.0642 20.1375 22.8183 18.5371 23.7998 17.1116C24.7221 15.7721 25 14.5306 25 12.6949C25 9.73187 22.7806 7.5 20.2734 7.5C18.7289 7.5 17.3126 8.23284 16.0042 9.99788C15.7684 10.3159 15.3959 10.5035 15 10.5035C14.6041 10.5035 14.2316 10.3159 13.9958 9.99788C12.6874 8.23284 11.2711 7.5 9.72656 7.5Z"
        fill={color}
      />
    </svg>
  );
}
