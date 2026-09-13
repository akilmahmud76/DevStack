export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-slate-50">
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="h-6 w-6 object-contain"
            loading="lazy"
          />
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? "mt-4 w-full cursor-not-allowed rounded-lg bg-slate-100 py-2.5 text-sm font-semibold text-slate-400"
            : "mt-4 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
