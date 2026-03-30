/**
 * GridDivider — A 1px line bleeding to the viewport edges.
 * Reinforces the "infinite grid" feel.
 */
export default function GridDivider({ orientation = 'horizontal', className = '' }) {
  if (orientation === 'vertical') {
    return (
      <div
        className={`w-px bg-primary self-stretch ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`h-px bg-primary w-screen -ml-[5.5rem] ${className}`}
      aria-hidden="true"
    />
  );
}
