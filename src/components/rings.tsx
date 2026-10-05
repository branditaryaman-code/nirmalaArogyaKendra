export function Rings({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      {[70, 110, 150, 190].map((r) => <circle key={r} cx="200" cy="200" r={r} />)}
    </svg>
  );
}
