const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
    <div className="mb-3 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-muted" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/3 rounded bg-muted" />
        <div className="h-3 w-1/3 rounded bg-muted" />
      </div>
    </div>
    <div className="mb-3 space-y-2">
      <div className="h-3 w-full rounded bg-muted" />
      <div className="h-3 w-4/5 rounded bg-muted" />
    </div>
    <div className="h-10 rounded-xl bg-muted" />
  </div>
);

const LoadingSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default LoadingSkeleton;
