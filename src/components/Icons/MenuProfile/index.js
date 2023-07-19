import React from 'react';

export default function renderIcon({
  width = 34.1,
  height = 34.1,
  color = '#0F1729',
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
        d="M11.491 14.8956C11.491 11.7563 14.0359 9.21145 17.1751 9.21145C20.3144 9.21145 22.8592 11.7563 22.8592 14.8956C22.8592 18.0348 20.3144 20.5797 17.1751 20.5797C14.0359 20.5797 11.491 18.0348 11.491 14.8956ZM17.1751 12.0535C15.6055 12.0535 14.3331 13.3259 14.3331 14.8956C14.3331 16.4652 15.6055 17.7376 17.1751 17.7376C18.7447 17.7376 20.0172 16.4652 20.0172 14.8956C20.0172 13.3259 18.7447 12.0535 17.1751 12.0535Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.96484 17.7376C2.96484 9.8895 9.327 3.52734 17.1751 3.52734C25.0232 3.52734 31.3854 9.8895 31.3854 17.7376C31.3854 25.5857 25.0232 31.9479 17.1751 31.9479C9.327 31.9479 2.96484 25.5857 2.96484 17.7376ZM17.1751 6.3694C10.8966 6.3694 5.8069 11.4591 5.8069 17.7376C5.8069 20.8459 7.05439 23.6629 9.07603 25.7152C9.57913 24.722 10.4708 23.9343 11.446 23.3771C12.983 22.4988 15.0116 22.0007 17.1751 22.0007C19.3386 22.0007 21.3672 22.4988 22.9042 23.3771C23.8794 23.9343 24.7711 24.722 25.2742 25.7152C27.2958 23.6629 28.5433 20.8459 28.5433 17.7376C28.5433 11.4591 23.4536 6.3694 17.1751 6.3694ZM22.8579 27.5857C22.8589 27.5617 22.8592 27.5313 22.8592 27.4818C22.8592 27.0907 22.5689 26.4588 21.4942 25.8447C20.4597 25.2535 18.9357 24.8427 17.1751 24.8427C15.4146 24.8427 13.8906 25.2535 12.8561 25.8447C11.7813 26.4588 11.491 27.0907 11.491 27.4818C11.491 27.5313 11.4913 27.5617 11.4923 27.5857C13.1641 28.5525 15.105 29.1058 17.1751 29.1058C19.2452 29.1058 21.1861 28.5525 22.8579 27.5857Z"
        fill={color}
      />
    </svg>
  );
}