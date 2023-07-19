import React from 'react';

export default function renderIcon({
  width = 35,
  height = 35,
  color = 'white',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7509 3.4614L5.70926 8.97182C2.77968 9.70422 2.41398 13.7197 5.16304 14.9692L11.9542 18.0561C13.3465 18.689 14.8537 18.9176 16.3183 18.7615C16.1623 20.2262 16.3909 21.7334 17.0238 23.1257L20.1106 29.9168C21.3602 32.6659 25.3756 32.3001 26.108 29.3706L31.6185 7.32893C32.2024 4.99319 30.0867 2.87748 27.7509 3.4614ZM13.1302 15.4688C14.4619 16.0741 15.9523 16.1204 17.2869 15.6469C17.7913 15.468 18.2735 15.2148 18.7164 14.8895C18.7781 14.8442 18.839 14.7975 18.8991 14.7494L22.1516 12.1475C22.6693 11.7333 23.3465 12.4106 22.9324 12.9283L20.3304 16.1807C20.2823 16.2408 20.2356 16.3018 20.1903 16.3634C19.865 16.8064 19.6119 17.2885 19.4329 17.793C18.9595 19.1276 19.0058 20.618 19.6111 21.9496L22.6979 28.7408C22.834 29.04 23.2711 29.0002 23.3508 28.6813L28.8613 6.63963C28.9248 6.38536 28.6945 6.15503 28.4402 6.2186L6.39855 11.729C6.07963 11.8088 6.03982 12.2459 6.33909 12.3819L13.1302 15.4688Z"
        fill={color}
      />
    </svg>
  );
}
