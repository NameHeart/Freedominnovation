import React from 'react';

export default function renderIcon({
  width = 26,
  height = 26,
  color = '#67C7FE',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.543 25.875C14.2528 25.875 15.8627 25.5472 17.3728 24.8917C18.8828 24.2444 20.2092 23.345 21.3517 22.1939C22.5022 21.0428 23.405 19.7159 24.0602 18.2131C24.7153 16.7023 25.043 15.0876 25.043 13.369C25.043 11.6584 24.7153 10.0517 24.0602 8.54886C23.405 7.03806 22.5022 5.70714 21.3517 4.55606C20.2092 3.40497 18.8789 2.50569 17.3608 1.85822C15.8508 1.20274 14.2408 0.875 12.531 0.875C10.8212 0.875 9.21123 1.20274 7.70117 1.85822C6.19109 2.50569 4.8608 3.40497 3.71028 4.55606C2.56773 5.70714 1.66889 7.03806 1.01373 8.54886C0.366555 10.0517 0.0429688 11.6584 0.0429688 13.369C0.0429688 15.0876 0.366555 16.7023 1.01373 18.2131C1.66889 19.7159 2.57173 21.0428 3.72227 22.1939C4.87278 23.345 6.20308 24.2444 7.71316 24.8917C9.22322 25.5472 10.8332 25.875 12.543 25.875ZM11.2127 19.3162C10.965 19.3162 10.7413 19.2642 10.5415 19.1603C10.3418 19.0484 10.154 18.8806 9.97825 18.6567L7.08995 15.1796C6.97809 15.0277 6.8902 14.8798 6.82628 14.7359C6.77036 14.584 6.74239 14.4282 6.74239 14.2683C6.74239 13.9325 6.85825 13.6488 7.08995 13.417C7.32166 13.1772 7.6053 13.0572 7.94086 13.0572C8.14061 13.0572 8.32037 13.1012 8.48017 13.1891C8.63997 13.2691 8.79977 13.409 8.95956 13.6088L11.1767 16.3906L16.0066 8.66877C16.2942 8.21312 16.6497 7.98531 17.0731 7.98531C17.3928 7.98531 17.6764 8.08923 17.9241 8.29706C18.1797 8.50489 18.3077 8.77667 18.3077 9.11241C18.3077 9.26428 18.2756 9.41617 18.2117 9.56805C18.1558 9.71992 18.0839 9.86381 17.9959 9.9997L12.3992 18.6567C12.2553 18.8645 12.0796 19.0284 11.8718 19.1484C11.6721 19.2603 11.4524 19.3162 11.2127 19.3162Z"
        fill={color}
      />
    </svg>
  );
}
