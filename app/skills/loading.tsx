export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-ping"></div>
          <div className="absolute inset-2 border-4 border-t-purple-500 border-r-pink-500 border-b-blue-500 border-l-cyan-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <i className="ri-code-s-slash-line text-2xl text-white animate-pulse"></i>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
          Loading Skills...
        </h2>
      </div>
    </div>
  );
}
