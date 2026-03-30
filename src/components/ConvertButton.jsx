/**
 * ConvertButton — "The Block Button"
 * Solid primary fill, inverts on hover.
 * No shadows, no radius, uppercase label.
 */
export default function ConvertButton({ onClick, disabled }) {
  return (
    <button
      id="convert-btn"
      onClick={onClick}
      disabled={disabled}
      className={`
        border border-primary
        px-8 py-4 w-full
        text-[0.75rem] font-medium uppercase tracking-[0.05rem]
        transition-colors duration-100 ease-linear
        cursor-pointer select-none
        ${
          disabled
            ? 'bg-surface-dim text-outline border-outline cursor-not-allowed'
            : 'bg-primary text-on-primary hover:bg-on-primary hover:text-primary active:bg-primary-container active:text-on-primary-container'
        }
      `}
    >
      Convert →
    </button>
  );
}
