export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-2 border-4 border-t-blue-500 border-r-cyan-500 border-b-purple-500 border-l-pink-500 rounded-full animate-spin"></div>
          
          {/* Inner Ring */}
          <div className="absolute inset-4 border-4 border-cyan-500/30 rounded-full animate-pulse"></div>
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <i className="ri-code-s-slash-line text-2xl text-white animate-pulse"></i>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
            Loading...
          </h2>
          <p className="text-slate-400 text-sm">
            Please wait while we prepare your content
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
