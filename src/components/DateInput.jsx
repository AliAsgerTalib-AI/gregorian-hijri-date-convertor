/**
 * DateInput — A single input cell in the Swiss Grid.
 * Occupies a full grid cell, defined by 1px black borders.
 */
export default function DateInput({ label, value, onChange, options, id }) {
  return (
    <div className="border border-primary flex flex-col">
      {/* Label — uppercase, tiny, technical annotation */}
      <label
        htmlFor={id}
        className="px-[0.4rem] pt-[0.4rem] pb-[0.2rem] text-[0.75rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant select-none"
      >
        {label}
      </label>

      {/* Select — headline scale for numeric entry */}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full bg-surface text-on-surface
          text-[1.5rem] font-semibold
          px-[0.4rem] pb-[0.4rem] pt-[0.2rem]
          border-0 appearance-none cursor-pointer
          transition-colors duration-100 ease-linear
          hover:bg-surface-mid
          focus:bg-surface-mid focus:outline-none
        "
      >
        <option value="">—</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
