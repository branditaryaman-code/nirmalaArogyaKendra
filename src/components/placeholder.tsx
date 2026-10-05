export function Placeholder({
  label,
  ratio = "4 / 3",
  tone = "blue",
}: {
  label: string;
  ratio?: string;
  tone?: "blue" | "gold";
}) {
  return (
    <div className={`placeholder placeholder--${tone}`} style={{ aspectRatio: ratio }} role="img" aria-label={`Image placeholder: ${label}`}>
      <span>Image placeholder · {label}</span>
    </div>
  );
}
