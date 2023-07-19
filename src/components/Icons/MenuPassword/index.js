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
        d="M17.1721 4.61744C14.8176 4.61744 12.909 6.52609 12.909 8.88053V13.1436C12.909 13.1447 12.909 13.1458 12.909 13.1469C13.3313 13.1436 13.7871 13.1436 14.2795 13.1436H20.0646C21.346 13.1436 22.3797 13.1436 23.2209 13.201C24.086 13.26 24.8509 13.3844 25.5752 13.6845C27.3161 14.4056 28.6993 15.7888 29.4205 17.5297C29.7205 18.254 29.8449 19.0189 29.9039 19.884C29.9613 20.7252 29.9613 21.7589 29.9613 23.0403V23.1413C29.9613 24.4227 29.9613 25.4564 29.9039 26.2976C29.8449 27.1627 29.7205 27.9276 29.4205 28.6519C28.6993 30.3928 27.3161 31.776 25.5752 32.4971C24.8509 32.7972 24.086 32.9216 23.2209 32.9806C22.3797 33.038 21.346 33.038 20.0646 33.038H14.2795C12.9981 33.038 11.9644 33.038 11.1232 32.9806C10.2581 32.9216 9.49323 32.7972 8.76893 32.4971C7.02797 31.776 5.64479 30.3928 4.92366 28.6519C4.62365 27.9276 4.49922 27.1627 4.44019 26.2976C4.3828 25.4564 4.3828 24.4227 4.38281 23.1413V23.0403C4.3828 21.7589 4.3828 20.7252 4.44019 19.884C4.49921 19.0189 4.62365 18.254 4.92366 17.5297C5.64479 15.7888 7.02797 14.4056 8.76893 13.6845C9.18774 13.511 9.62014 13.3962 10.0776 13.3188C10.0706 13.2614 10.0669 13.2029 10.0669 13.1436V8.88053C10.0669 4.95647 13.248 1.77539 17.1721 1.77539C21.0961 1.77539 24.2772 4.95647 24.2772 8.88053C24.2772 9.66534 23.641 10.3016 22.8562 10.3016C22.0714 10.3016 21.4351 9.66534 21.4351 8.88053C21.4351 6.52609 19.5265 4.61744 17.1721 4.61744ZM11.3166 16.0365C10.5963 16.0856 10.1768 16.1775 9.85654 16.3102C8.81196 16.7428 7.98205 17.5728 7.54938 18.6173C7.41671 18.9376 7.3248 19.3571 7.27566 20.0774C7.22564 20.8105 7.22487 21.7471 7.22487 23.0908C7.22487 24.4345 7.22564 25.3711 7.27566 26.1042C7.3248 26.8245 7.41671 27.244 7.54938 27.5643C7.98205 28.6088 8.81196 29.4387 9.85654 29.8714C10.1768 30.0041 10.5963 30.096 11.3166 30.1451C12.0497 30.1952 12.9863 30.1959 14.33 30.1959H20.0141C21.3578 30.1959 22.2944 30.1952 23.0275 30.1451C23.7478 30.096 24.1673 30.0041 24.4876 29.8714C25.5322 29.4387 26.3621 28.6088 26.7947 27.5643C26.9274 27.244 27.0193 26.8245 27.0685 26.1042C27.1185 25.3711 27.1192 24.4345 27.1192 23.0908C27.1192 21.7471 27.1185 20.8105 27.0685 20.0774C27.0193 19.3571 26.9274 18.9376 26.7947 18.6173C26.3621 17.5728 25.5322 16.7428 24.4876 16.3102C24.1673 16.1775 23.7478 16.0856 23.0275 16.0365C22.2944 15.9864 21.3578 15.9857 20.0141 15.9857H14.33C12.9863 15.9857 12.0497 15.9864 11.3166 16.0365ZM17.1721 20.2487C17.9569 20.2487 18.5931 20.885 18.5931 21.6698V24.5118C18.5931 25.2966 17.9569 25.9328 17.1721 25.9328C16.3872 25.9328 15.751 25.2966 15.751 24.5118V21.6698C15.751 20.885 16.3872 20.2487 17.1721 20.2487Z"
        fill={color}
      />
    </svg>
  );
}