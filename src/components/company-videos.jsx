import React, { useState, useEffect } from 'react';
import AnimateOnScroll from '@/components/animate-on-scroll';

const videos = [
    {
        src: "/vid1.webm",
        title: "Coffee Bean Harvesting",
        desc: "Hand-picking premium coffee cherries at peak ripeness for optimal flavor"
    },
    {
        src: "/vid2.webm",
        title: "Selective Coffee Picking",
        desc: "Our skilled farmers carefully selecting only the finest coffee cherries"
    },
    {
        src: "/vid3.webm",
        title: "Traditional Drying Process",
        desc: "Natural sun-drying of coffee beans to preserve their unique flavor profile"
    }
];

export const CompanyVideos = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            // Store original overflow
            const originalOverflow = document.body.style.overflow;
            // Disable scroll
            document.body.style.overflow = 'hidden';

            // Cleanup: restore scroll when modal closes
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isModalOpen]);

    const openModal = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Delay clearing selectedVideo to allow exit animation
        setTimeout(() => {
            setSelectedVideo(null);
        }, 300);
    };

    return (
        <>
            <section id="videos" className="margin py-5 md:py-24">
                <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
                    <p className="text-4xl md:mb-3 text-main">
                        Our Story in Motion
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll once={false} animation="blurInUp" duration={0.8} delay={0}>
                    <div className="hidden md:grid grid-cols-3 gap-3">
                        {videos.map((video, idx) => (
                            <div
                                key={idx}
                                className="relative overflow-hidden rounded-main  max-h-[70vh] cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openModal(video)}>
                                <video
                                    className="w-full h-full object-cover"
                                    src={video.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-50 z-40 pointer-events-none linear-blur" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/15" />
                                <div className="absolute bottom-0 left-0 right-0 z-50 m-5">
                                    <h1 className="font-bold text-2xl mb-2 text-white">
                                        {video.title}
                                    </h1>
                                    <p className="text-sm opacity-80 text-white">
                                        {video.desc}
                                    </p>
                                </div>

                                {/* Click indicator */}
                                <div className="absolute top-4 right-4 z-50">
                                    <div className="bg-black/50 rounded-full p-2">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </section>

            <AnimateOnScroll once={false} animation="blurInUp" duration={0.3} delay={0}>
                <section className="md:hidden block">
                    {/* Mobile */}
                    <div className="carousel w-full gap-3">
                        {videos.map((video, idx) => (
                            <div
                                key={idx}
                                className={`${idx === 0 && "ml-4"} ${idx === videos.length - 1 && "mr-4"} min-w-[80vw] relative overflow-hidden rounded-main  max-h-[70vh] cursor-pointer hover:scale-105 transition-transform duration-300`}
                                onClick={() => openModal(video)}>
                                <video
                                    className="w-full h-full object-cover"
                                    src={video.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-50 z-40 pointer-events-none linear-blur" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/15" />
                                <div className="absolute bottom-0 left-0 right-0 z-50 m-5">
                                    <h1 className="font-bold text-2xl mb-2 text-white">
                                        {video.title}
                                    </h1>
                                    <p className="text-sm opacity-80 text-white">
                                        {video.desc}
                                    </p>
                                </div>

                                {/* Click indicator */}
                                <div className="absolute top-4 right-4 z-50">
                                    <div className="bg-black/50 rounded-full p-2">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Mobile */}
                </section>
            </AnimateOnScroll>

            {/* Modal for focused video view */}
            {isModalOpen && selectedVideo && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm"
                    style={{
                        animation: isModalOpen ? 'modalFadeIn 0.3s ease-out' : 'modalFadeOut 0.3s ease-out'
                    }}
                >
                    <div
                        className="relative max-w-lg w-full mx-4"
                        style={{
                            animation: isModalOpen ? 'modalSlideIn 0.4s ease-out 0.1s both' : 'modalSlideOut 0.3s ease-out both'
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
                            aria-label="Close video modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video container */}
                        <div className="relative overflow-hidden rounded-main bg-black shadow-2xl">
                            <video
                                className="w-full h-[85vh] object-cover"
                                src={selectedVideo.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                            />
                        </div>
                    </div>

                    {/* Click outside to close */}
                    <div
                        className="absolute inset-0 -z-10"
                        onClick={closeModal}
                    />
                </div>
            )}

            {/* CSS Animations for Modal */}
            <style jsx>{`
                @keyframes modalFadeIn {
                    from { 
                        opacity: 0; 
                        backdrop-filter: blur(0px);
                    }
                    to { 
                        opacity: 1; 
                        backdrop-filter: blur(4px);
                    }
                }
                
                @keyframes modalFadeOut {
                    from { 
                        opacity: 1; 
                        backdrop-filter: blur(4px);
                    }
                    to { 
                        opacity: 0; 
                        backdrop-filter: blur(0px);
                    }
                }
                
                @keyframes modalSlideIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1) translateY(0px);
                    }
                }
                
                @keyframes modalSlideOut {
                    from { 
                        opacity: 1;
                        transform: scale(1) translateY(0px);
                    }
                    to { 
                        opacity: 0;
                        transform: scale(0.95) translateY(10px);
                    }
                }
            `}</style>
        </>
    );
};