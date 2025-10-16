export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button Skeleton */}
        <div className="mb-8">
          <div className="w-40 h-10 bg-slate-700/50 rounded-lg animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-12">
          <div className="h-12 bg-slate-700/50 rounded-lg w-3/4 mb-4 animate-pulse"></div>
          <div className="h-6 bg-slate-700/50 rounded-lg w-full animate-pulse"></div>
        </div>

        {/* Image Gallery Skeleton */}
        <div className="mb-12">
          <div className="aspect-video bg-slate-700/50 rounded-3xl animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-700/30 rounded-2xl p-8 animate-pulse">
              <div className="h-8 bg-slate-700/50 rounded w-1/3 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                <div className="h-4 bg-slate-700/50 rounded w-4/6"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700/30 rounded-2xl p-6 animate-pulse">
              <div className="h-6 bg-slate-700/50 rounded w-2/3 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                <div className="h-4 bg-slate-700/50 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
