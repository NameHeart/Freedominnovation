import React from 'react';

export default function renderIcon({
  width = 20,
  height = 20,
  color = 'white',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0011 5.00065C7.30709 5.00065 4.96746 6.92614 3.50508 9.83026C3.48115 9.87778 3.46343 9.913 3.44849 9.94365C3.43532 9.97066 3.42714 9.98838 3.4218 10.0007C3.42714 10.0129 3.43532 10.0306 3.44849 10.0577C3.46343 10.0883 3.48115 10.1235 3.50508 10.171C4.96746 13.0752 7.30709 15.0007 10.0011 15.0007C12.6951 15.0007 15.0347 13.0752 16.4971 10.171C16.521 10.1235 16.5387 10.0883 16.5537 10.0577C16.5669 10.0306 16.575 10.0129 16.5804 10.0006C16.575 9.98838 16.5669 9.97066 16.5537 9.94365C16.5387 9.913 16.521 9.87778 16.4971 9.83026C15.0347 6.92614 12.6951 5.00065 10.0011 5.00065ZM2.01649 9.08068C3.63289 5.87068 6.43425 3.33398 10.0011 3.33398C13.5679 3.33398 16.3693 5.87068 17.9857 9.08068C17.9915 9.09229 17.9976 9.10419 18.0038 9.11638C18.0799 9.26645 18.1781 9.4602 18.2221 9.69911C18.257 9.8891 18.257 10.1122 18.2221 10.3022C18.1781 10.5411 18.0799 10.7349 18.0037 10.8849C17.9976 10.8971 17.9915 10.909 17.9857 10.9206C16.3693 14.1306 13.5679 16.6673 10.0011 16.6673C6.43425 16.6673 3.63289 14.1306 2.01649 10.9206C2.01064 10.909 2.00461 10.8971 1.99843 10.8849C1.92233 10.7349 1.82407 10.5411 1.78012 10.3022C1.74517 10.1122 1.74517 9.8891 1.78012 9.69911C1.82407 9.4602 1.92233 9.26644 1.99843 9.11638C2.00461 9.10419 2.01064 9.09229 2.01649 9.08068ZM10.0011 8.33398C9.08062 8.33398 8.33442 9.08018 8.33442 10.0007C8.33442 10.9211 9.08062 11.6673 10.0011 11.6673C10.9216 11.6673 11.6678 10.9211 11.6678 10.0007C11.6678 9.08018 10.9216 8.33398 10.0011 8.33398ZM6.66776 10.0007C6.66776 8.1597 8.16014 6.66732 10.0011 6.66732C11.842 6.66732 13.3344 8.1597 13.3344 10.0007C13.3344 11.8416 11.842 13.334 10.0011 13.334C8.16014 13.334 6.66776 11.8416 6.66776 10.0007Z"
        fill={color}
      />
    </svg>
  );
}
