export function ViberIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.3 2C7.6 2 4 5.2 4 9.6c0 2.3 1 4.3 2.7 5.7-.1.9-.4 2.5-1.2 3.6a.4.4 0 0 0 .5.6c1.6-.5 3.2-1.4 3.9-1.9.8.2 1.6.3 2.4.3 4.7 0 8.3-3.2 8.3-7.6C20.6 5.2 17 2 12.3 2Zm4.4 10.8c-.2.5-1.1 1-1.6 1.1-.4.1-.9.1-2.8-.6-2.4-1-4-3.4-4.1-3.6-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.5 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.6-.1 1.1Z"/>
      <path d="M12.3 5.4a.5.5 0 1 0 0 1c2.9.1 5.1 2.3 5.3 5.2a.5.5 0 0 0 1-.1c-.2-3.4-2.8-5.9-6.3-6.1Z"/>
      <path d="M12.4 7.5a.5.5 0 0 0 0 1c1.6.1 2.8 1.3 2.9 2.9a.5.5 0 0 0 1-.1c-.2-2.1-1.8-3.7-3.9-3.8Z"/>
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/>
      <path d="M12 2C6.5 2 2 6.4 2 11.9c0 1.9.5 3.6 1.5 5.2L2 22l5-1.4c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.4 10-9.9S17.5 2 12 2Zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3c-.9-1.4-1.4-3-1.4-4.7C3.5 7.2 7.3 3.5 12 3.5s8.5 3.7 8.5 8.4-3.8 8.4-8.5 8.4Z"/>
    </svg>
  );
}

export function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 4.1 2.8 11.5c-1 .4-1 1.5.1 1.8l4.6 1.4 1.8 5.5c.2.7 1 .9 1.6.4l2.5-2.2 4.7 3.4c.7.5 1.6.1 1.8-.7l3-15.1c.2-1-.7-1.7-1.4-1.9ZM17.9 7.8l-7.3 6.5-.3 3.6-1.3-4.1L17 7.3c.3-.2.6.2.3.5Z"/>
    </svg>
  );
}

export function CopyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="8.5" y="8.5" width="11" height="11" rx="1.5" />
      <path d="M5.5 15.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}
