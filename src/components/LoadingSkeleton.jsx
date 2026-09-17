function SkeletonBlock({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded bg-[#2d3a5c] ${className}`}
    />
  );
}

export function ResultsSkeleton({ count = 6 }) {
  return (
    <div
      aria-label="Loading search results"
      aria-live="polite"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      role="status"
    >
      <span className="sr-only">Searching GitHub...</span>
      {Array.from({ length: count }, (_, index) => (
        <div
          className="rounded-2xl border border-[#2d3a5c] bg-[#161d33] p-5"
          key={index}
        >
          <div className="flex items-center gap-4">
            <SkeletonBlock className="h-14 w-14 rounded-full" />
            <div className="flex-1 space-y-2">
              <SkeletonBlock className="h-4 w-2/3" />
              <SkeletonBlock className="h-3 w-1/2" />
            </div>
          </div>
          <SkeletonBlock className="mt-6 h-3 w-24" />
        </div>
      ))}
    </div>
  );
}

export function RepositoriesSkeleton({ count = 4 }) {
  return (
    <div
      aria-label="Loading repositories"
      aria-live="polite"
      className="mt-4 grid gap-4 sm:grid-cols-2"
      role="status"
    >
      <span className="sr-only">Loading repositories...</span>
      {Array.from({ length: count }, (_, index) => (
        <div
          className="rounded-2xl border border-[#2d3a5c] bg-[#161d33] p-5"
          key={index}
        >
          <SkeletonBlock className="h-3 w-1/3" />
          <SkeletonBlock className="mt-3 h-5 w-2/3" />
          <SkeletonBlock className="mt-4 h-10 w-full" />
          <SkeletonBlock className="mt-5 h-3 w-1/2" />
        </div>
      ))}
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div
      aria-label="Loading profile"
      aria-live="polite"
      className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[#2d3a5c] bg-[#161d33] p-6 sm:p-8"
      role="status"
    >
      <span className="sr-only">Loading profile...</span>
      <div className="flex items-center gap-5">
        <SkeletonBlock className="h-24 w-24 rounded-2xl" />
        <div className="flex-1 space-y-3">
          <SkeletonBlock className="h-7 w-1/2" />
          <SkeletonBlock className="h-4 w-1/3" />
          <SkeletonBlock className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}
