export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-mono font-bold tracking-tight whitespace-nowrap ${className}`}
    >
      fomin<span className="text-red">()</span>
      <span className="blink-caret text-red">_</span>
    </span>
  );
}
