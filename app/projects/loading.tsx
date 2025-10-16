export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping"></div>
          <div className="absolute inset-2 border-4 border-t-blue-500 border-r-cyan-500 border-b-purple-500 border-l-pink-500 rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-cyan-500/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <i className="ri-folder-line text-2xl text-white animate-pulse"></i>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
          Loading Projects...
        </h2>
        <p className="text-slate-400 text-sm mt-2">Please wait</p>
      </div>
    </div>
  );
}
