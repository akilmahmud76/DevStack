export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Your Stack</h3>
      <p className="mt-0.5 text-xs text-slate-500">
        {stack.length} Technology Selected
      </p>

      <div className="mt-4 flex flex-col gap-2">
        {stack.length === 0 ? (
          <p className="rounded-lg bg-slate-50 px-3 py-6 text-center text-sm text-slate-400">
            No technologies selected yet. Add one from the grid to start building
            your stack.
          </p>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-slate-50">
                <img src={tech.icon} alt="" className="h-5 w-5 object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-800">{tech.name}</p>
                <p className="truncate text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech)}
                aria-label={`Remove ${tech.name} from stack`}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
