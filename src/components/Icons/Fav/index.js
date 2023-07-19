import React from 'react';

export default function renderIcon({
  width = 12,
  height = 19,
  color = '#855DFF',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.2094 0.407593C26.5138 0.407593 23.2062 2.28576 21.144 5.16704C19.0818 2.28576 15.7742 0.407593 12.0787 0.407593C5.81051 0.407593 0.726562 5.7433 0.726562 12.3382C0.726562 14.878 1.11449 17.2257 1.78827 19.4027C5.01423 30.0741 14.9575 36.4556 19.8781 38.2057C20.5723 38.4618 21.7157 38.4618 22.4099 38.2057C27.3305 36.4556 37.2738 30.0741 40.4997 19.4027C41.1735 17.2257 41.5615 14.878 41.5615 12.3382C41.5615 5.7433 36.4775 0.407593 30.2094 0.407593Z"
        fill={color}
      />
    </svg>
  );
}
