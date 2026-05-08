
export default function LiveScorePage() {
    return (
        <div className="min-h-screen w-full">
            <div className='min-h-screen   to-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8'>
                {/* Main Content Container */}
                <div className='w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-12'>

                    {/* Tournament Title */}
                    <div className='space-y-2 sm:space-y-4'>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-400 tracking-wider uppercase'>
                            Where Coders Meet Cricket
                        </p>
                        <h1 className='text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight'>
                            CST <span className='text-yellow-400'>TECH TITANS TROPHY</span>
                        </h1>
                        <p className='text-sm sm:text-base text-gray-400 max-w-2xl mx-auto uppercase font-semi'>
                            Organized By <span className='text-yellow-700 font-bold'>CST</span> Department Of Rajshahi Polytechnic Institute
                        </p>
                    </div>

                    {/* Live Score CTA - Main Focus */}
                    <div className='space-y-4 sm:space-y-6'>
                        <div className='relative inline-block'>
                            {/* Glow Effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur-xl opacity-50 animate-pulse'></div>

                            {/* Main Button */}
                            <a
                                href="https://cst3-live-score.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='relative flex items-center justify-center gap-3 sm:gap-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg sm:text-xl lg:text-2xl font-bold px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transform hover:scale-105 transition-all duration-300 group'
                            >
                                {/* Live Indicator */}
                                <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full animate-pulse'></div>
                                    <span className='text-xs sm:text-sm font-semibold uppercase tracking-wider'>LIVE</span>
                                </div>

                                {/* Button Text */}
                                <span className='flex items-center gap-2'>
                                    <svg className='w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                                    </svg>
                                    Watch Live Score
                                </span>

                                {/* Arrow */}
                                <svg className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </a>
                        </div>

                        {/* Subtitle */}
                        <p className='text-sm sm:text-base text-gray-400 max-w-xl mx-auto'>
                            Real-time match updates, scores, statistics and live commentary
                        </p>
                    </div>



                    {/* Footer Text */}
                    <div className='space-y-2'>
                        <p className='text-xs sm:text-sm text-yellow-400/80 font-medium'>
                            Code the Game • Rule the Pitch
                        </p>
                        <p className='text-xs text-gray-500'>
                            Powered by ABSYD.XYZ
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}
