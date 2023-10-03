type Props = {
  size?: string;
};

const LoadingSpinner = (props: Props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <g clip-path="url(#clip0_89_2007)">
        <path d="M10.0001 1.6665V4.99984M10.0001 14.9998V18.3332M5.00008 9.99984H1.66675M18.3334 9.99984H15.0001M15.8988 15.8985L13.5417 13.5415M15.8988 4.16646L13.5417 6.52348M4.10139 15.8985L6.45841 13.5415M4.10139 4.16646L6.45841 6.52348" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_89_2007">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default LoadingSpinner;
