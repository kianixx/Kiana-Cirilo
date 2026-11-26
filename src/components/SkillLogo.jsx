function SkillLogo({ id }) {
  switch (id) {
    case "figma":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path d="M11 4a4 4 0 0 0 0 8h5V4h-5Z" fill="#F24E1E" />
          <path d="M16 4v8h5a4 4 0 0 0 0-8h-5Z" fill="#FF7262" />
          <path d="M16 12h5a4 4 0 0 1 0 8h-5v-8Z" fill="#1ABCFE" />
          <path d="M7 16a4 4 0 0 1 4-4h5v8h-5a4 4 0 0 1-4-4Z" fill="#A259FF" />
          <path d="M7 24a4 4 0 0 1 4-4h5v4a4 4 0 1 1-8 0Z" fill="#0ACF83" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="2.3" fill="#38BDF8" />
          <ellipse cx="16" cy="16" rx="12" ry="4.6" stroke="#38BDF8" strokeWidth="1.7" />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.6"
            transform="rotate(60 16 16)"
            stroke="#38BDF8"
            strokeWidth="1.7"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.6"
            transform="rotate(120 16 16)"
            stroke="#38BDF8"
            strokeWidth="1.7"
          />
        </svg>
      );
    case "js":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M15 22.8c0 1.9-1.1 2.8-2.8 2.8-1.3 0-2.2-.6-2.7-1.5l1.5-.9c.3.5.6.8 1.1.8.6 0 .9-.3.9-1.3v-6.7H15v6.8Zm3.1.2c.4.7 1.1 1.2 2.2 1.2.9 0 1.5-.4 1.5-1 0-.7-.6-1-1.6-1.4l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.5.5 3.2 1.8l-1.7 1.1c-.4-.7-.8-.9-1.5-.9-.7 0-1.1.4-1.1.9 0 .6.4.9 1.4 1.3l.6.2c2 .8 3.1 1.7 3.1 3.5 0 2-1.6 3.1-3.7 3.1-2.1 0-3.4-1-4.1-2.3l1.8-1Z"
            fill="#1E1E1E"
          />
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path d="M6 4h20l-1.8 20.6L16 27l-8.2-2.4L6 4Z" fill="#E34F26" />
          <path d="M16 6v19.2l6.6-1.9L24.1 6H16Z" fill="#EF652A" />
          <path
            d="M10.5 9.5h11l-.3 2.6h-7.9l.2 2.7h7.5l-.7 7.1-4.3 1.2-4.3-1.2-.3-3.4h2.5l.2 1.6 1.9.5 1.9-.5.3-2.9h-6.6l-.6-7.7Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path d="M6 4h20l-1.8 20.6L16 27l-8.2-2.4L6 4Z" fill="#1572B6" />
          <path d="M16 6v19.2l6.6-1.9L24.1 6H16Z" fill="#33A9DC" />
          <path
            d="M10.4 9.5h11.2l-.3 2.6h-5.3l5.1 2.1-.7 7.7-4.4 1.2-4.4-1.2-.3-3.4h2.5l.2 1.6 2 .5 2-.5.2-2.9h-6.8l-.2-2.5 5-2.1h-5.4l-.4-2.6Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path
            d="M16 8c-3.7 0-6 1.8-7 5.5 1.4-1.8 3-2.5 4.9-2 1.1.3 1.8 1 2.7 1.9 1.4 1.4 3 3 6.4 3 3.7 0 6-1.8 7-5.5-1.4 1.8-3 2.5-4.9 2-1.1-.3-1.8-1-2.7-1.9-1.4-1.4-3-3-6.4-3ZM9 16.5C5.3 16.5 3 18.3 2 22c1.4-1.8 3-2.5 4.9-2 1.1.3 1.8 1 2.7 1.9 1.4 1.4 3 3 6.4 3 3.7 0 6-1.8 7-5.5-1.4 1.8-3 2.5-4.9 2-1.1-.3-1.8-1-2.7-1.9-1.4-1.4-3-3-6.4-3Z"
            fill="#38BDF8"
          />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path d="M16 3.5 26.8 9.8v12.4L16 28.5 5.2 22.2V9.8L16 3.5Z" fill="#539E43" />
          <path
            d="M11.6 20.5v-9h2l4.7 6v-6h2v9h-2l-4.7-6v6h-2Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <ellipse cx="16" cy="16" rx="13" ry="7.8" fill="#777BB4" />
          <text
            x="16"
            y="19"
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fontFamily="sans-serif"
            fill="#FFFFFF"
          >
            php
          </text>
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
          <path
            d="M6 8.5 11.5 5l5.5 3.5v10.2l6-3.5 4 2.5v5.8L16 29 6 23V8.5Z"
            stroke="#FF2D20"
            strokeWidth="2.1"
            strokeLinejoin="round"
          />
          <path d="M11.5 12v11M17 18.7 11.5 22" stroke="#FF2D20" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path
            d="M17.8 27.2c-.6.8-1.9.3-1.9-.7V17h8.7c1.6 0 2.5 1.8 1.5 3.1l-8.3 7.1Z"
            fill="#3ECF8E"
          />
          <path
            d="M14.2 4.8c.6-.8 1.9-.3 1.9.7V15H7.4c-1.6 0-2.5-1.8-1.5-3.1l8.3-7.1Z"
            fill="#3ECF8E"
            fillOpacity="0.75"
          />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path
            d="M6.5 21.5c1.5-4.5 4.8-9.5 10.5-11 2.6-.7 5.2-.2 6.8 1.2-2.2.3-4.1 1.6-4.7 3.3 2 .2 3.8 1.4 4.8 3.2-2.3-.5-4.7.2-6.5 1.8-1.9 1.7-3.6 2-5.6 1.5-1.5-.4-3.3-.2-5.3 0Z"
            fill="#00758F"
          />
          <circle cx="19" cy="12.5" r="1" fill="#F29111" />
        </svg>
      );
    case "sqlserver":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
          <ellipse cx="16" cy="8.5" rx="8.5" ry="3.2" stroke="#CC2927" strokeWidth="2" />
          <path
            d="M7.5 8.5v15c0 1.8 3.8 3.2 8.5 3.2s8.5-1.4 8.5-3.2v-15"
            stroke="#CC2927"
            strokeWidth="2"
          />
          <path
            d="M7.5 13.5c0 1.8 3.8 3.2 8.5 3.2s8.5-1.4 8.5-3.2M7.5 18.5c0 1.8 3.8 3.2 8.5 3.2s8.5-1.4 8.5-3.2"
            stroke="#CC2927"
            strokeWidth="2"
          />
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
          <path
            d="M10.5 16.5h9.5v4.2a4.8 4.8 0 0 1-9.5 0v-4.2Z"
            stroke="#EA7C24"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M20 17.5h2.2a2 2 0 0 1 0 4H20"
            stroke="#EA7C24"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M13 13c0-1.5 2-1.8 1.5-3.5M17 13c0-1.5 2-1.8 1.5-3.5"
            stroke="#5382A1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M9 26.5h13" stroke="#5382A1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "c":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path d="M16 4 26.4 10v12L16 28 5.6 22V10L16 4Z" fill="#00599C" />
          <path
            d="M20.2 13.2A5.2 5.2 0 1 0 20.2 18.8"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "csharp":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path d="M16 4 26.4 10v12L16 28 5.6 22V10L16 4Z" fill="#7C3AED" />
          <path
            d="M16.8 12.6a4.4 4.4 0 1 0 0 6.8"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M20.2 13.4v5.2M22.8 13.4v5.2M19 15h5M19 17h5"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path
            d="M15.8 5c-4 0-3.8 1.8-3.8 1.8v2.7h3.9v1H9.8S6 10 6 14.5s2.8 4.4 2.8 4.4h1.7v-2.2s-.1-2.8 2.8-2.8h4.5s2.6.1 2.6-2.5V7.5S20.8 5 15.8 5Z"
            fill="#3776AB"
          />
          <path
            d="M16.2 27c4 0 3.8-1.8 3.8-1.8v-2.7h-3.9v-1h6.1s3.8.5 3.8-4-2.8-4.4-2.8-4.4h-1.7v2.2s.1 2.8-2.8 2.8h-4.5s-2.6-.1-2.6 2.5v3.9S11.2 27 16.2 27Z"
            fill="#FFD43B"
          />
          <circle cx="13.8" cy="7.5" r="0.9" fill="#FFFFFF" />
          <circle cx="18.2" cy="24.5" r="0.9" fill="#FFFFFF" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <rect
            x="6.8"
            y="6.8"
            width="18.4"
            height="18.4"
            rx="3.2"
            transform="rotate(45 16 16)"
            fill="#F05032"
          />
          <path
            d="M12.5 9.5 18 15m-2-2v8.5"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="13" r="1.8" fill="#FFFFFF" />
          <circle cx="16" cy="21" r="1.8" fill="#FFFFFF" />
          <circle cx="19" cy="16" r="1.8" fill="#FFFFFF" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-ink" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 4.5C9.6 4.5 4.5 9.6 4.5 16c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 27.5 16c0-6.4-5.1-11.5-11.5-11.5Z"
          />
        </svg>
      );
    case "jira":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path d="M25.6 5H15.2a4.6 4.6 0 0 0 4.6 4.6h1.9v1.8a4.6 4.6 0 0 0 4.6 4.6V5.7c0-.4-.3-.7-.7-.7Z" fill="#2684FF" />
          <path d="M20.4 10.2H10a4.6 4.6 0 0 0 4.6 4.6h1.9v1.8a4.6 4.6 0 0 0 4.6 4.6V10.9c0-.4-.3-.7-.7-.7Z" fill="#2684FF" fillOpacity="0.82" />
          <path d="M15.2 15.4H4.8a4.6 4.6 0 0 0 4.6 4.6h1.9v1.8a4.6 4.6 0 0 0 4.6 4.6V16.1c0-.4-.3-.7-.7-.7Z" fill="#0052CC" />
        </svg>
      );
    default:
      return null;
  }
}

export default SkillLogo;
