export default function Laurel({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      className="co-accolade__laurel"
      viewBox="0 0 28 44"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      style={flipped ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d="M14 4 C 6 8, 4 18, 6 28 C 7 34, 10 38, 14 42" />
      <path d="M9 12 C 6 13, 4 14, 3 16" />
      <path d="M7 18 C 4 19, 2 20, 1 23" />
      <path d="M6 25 C 3 25, 2 27, 1 30" />
      <path d="M7 32 C 4 33, 4 35, 4 38" />
    </svg>
  );
}
