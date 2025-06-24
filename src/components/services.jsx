import { services } from "@/app/system"

export const Services = () => {
    return (
        <>
            <section id="services" className="margin  py-5 md:py-24">
                <p className="text-4xl md:mb-3 text-main">
                    Our Services
                </p>
                <div className="hidden md:grid grid-cols-4 gap-3">
                    {services.map((el, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden rounded-main max-h-[70vh]">
                            <img
                                className="w-full h-full object-cover"
                                src={el.image}
                                alt={el.title}
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-50 z-40 pointer-events-none linear-blur" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/15" />
                            <div className="absolute bottom-0 left-0 right-0 z-50 m-5">
                                <h1 className="font-bold text-2xl mb-2 text-white">
                                    {el.title}
                                </h1>
                                <p className="text-sm opacity-80 text-surface">
                                    {el.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            <section className="md:hidden block">
                {/* Mobile */}
                <div className="carousel w-full gap-3">
                    {services.map((el, idx) => (
                        <div
                            key={idx}
                            className={`${idx === 0 && "ml-4"} ${idx === services.length - 1 && "mr-4"} min-w-[80vw] relative overflow-hidden rounded-main max-h-[70vh]`}>
                            <img
                                className="w-full h-full object-cover"
                                src={el.image}
                                alt={el.title}
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-50 z-40 pointer-events-none linear-blur" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/15" />
                            <div className="absolute bottom-0 left-0 right-0 z-50 m-5">
                                <h1 className="font-bold text-2xl mb-2 text-white">
                                    {el.title}
                                </h1>
                                <p className="text-sm opacity-80 text-surface">
                                    {el.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
                {/* Mobile */}
            </section>

        </>
    )
}