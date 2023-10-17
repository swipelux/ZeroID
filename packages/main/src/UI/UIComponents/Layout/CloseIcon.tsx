import style from './closeIcon.module.css';
export function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style.icon}
    >
      <g clipPath="url(#clip0_17_36)">
        <path
          d="M25.3334 8.54663L23.4534 6.66663L16 14.12L8.54669 6.66663L6.66669 8.54663L14.12 16L6.66669 23.4533L8.54669 25.3333L16 17.88L23.4534 25.3333L25.3334 23.4533L17.88 16L25.3334 8.54663Z"
          fill="#050505"
        />
      </g>
      <defs>
        <clipPath id="clip0_17_36">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
