"use client"
import { GiWheat } from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { FaGlobeAsia } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { PiBooksDuotone } from "react-icons/pi";

export const VisionMission = () => {
    const missions = [
        {
            icon: <GiWheat />,
            title: "Empowering Indonesian Agriculture",
            desc: "Produce and export Indonesia's superior agricultural products with international quality standards",
        },
        {
            icon: <RiLeafLine />,
            title: "Sustainable Farming Ecosystem",
            desc: "Build a sustainable supply chain that benefits local farmers and preserves environmental sustainability",
        },
        {
            icon: <FaGlobeAsia />,
            title: "Expanding Global Market Reach",
            desc: "Strategically develop export markets, particularly in Asia and premium buyer countries",
        },
        {
            icon: <MdVerified />,
            title: "Excellence in Product Quality",
            desc: "Maintain product quality consistency through professional production, packaging, and logistics processes",
        },
        {
            icon: <PiBooksDuotone />,
            title: "Raising Awareness of Local Superfoods",
            desc: "Educate the market about the benefits of Hass avocado and coffee blossom honey as natural superfoods from Indonesia",
        },
    ];

    return (
        <>
            <section className="margin my-16 md:my-24">
                <div className="hidden md:grid grid-cols-2 gap-3 h-[80vh]">
                    <div className="relative overflow-hidden rounded-main">
                        <img
                            className="w-full h-full rounded-main object-cover"
                            src="https://www.monrovia.com/media/catalog/product/cache/282200fa9b94c6b3bb6408314c6a2aa7/r/e/rest_1_7_17018.webp"
                            alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-50 z-40 pointer-events-none linear-blur" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/15" />

                        <div className="absolute bottom-5 left-5 right-5 text-white z-50">
                            <div>
                                <h1 className="text-3xl font-bold mb-3">
                                    Vision
                                </h1>
                                <p className="text-otherMuted opacity-80 font-medium text-lg">
                                    To become a trusted Indonesian exporter company recognized globally for the excellence of Hass avocado and coffee blossom honey, as well as commitment to quality, sustainability, and local partnerships
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-main group">
                        {/* Background image */}
                        <img
                            className="w-full h-full rounded-main object-cover transition duration-500 ease-in-out group-[.card-hover]:blur-sm"
                            src="https://images.unsplash.com/photo-1655205786979-2b087729e3f8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />

                        {/* Optional gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-black/2 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-5 left-5 right-5 text-white z-50">
                            <h1 className="text-3xl font-bold mb-3">Mission</h1>
                            <div className="flex flex-wrap gap-2">
                                {missions.map((el, idx) => (
                                    <div
                                        key={idx}
                                        // 👇 add a custom class to inform the parent "we're being hovered"
                                        onMouseEnter={() =>
                                            document
                                                .querySelector(".group")
                                                ?.classList.add("card-hover")
                                        }
                                        onMouseLeave={() =>
                                            document
                                                .querySelector(".group")
                                                ?.classList.remove("card-hover")
                                        }
                                        className="rounded-secondary backdrop-blur-xs bg-main/40 hover:bg-main p-3 h-fit border border-base/10 shadow-mainShadow cursor-pointer transition"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="text-xl">{el.icon}</div>
                                            <h1 className="max-w-md self-end font-bold">{el.title}</h1>
                                        </div>
                                        <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 max-w-0 group-hover:max-w-fit opacity-0 group-hover:max-h-40 group-hover:opacity-100 mt-1">
                                            <p className="text-otherMuted font-medium text-sm">{el.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile */}
                 <div className="md:hidden block space-y-5">
                    <div className="relative overflow-hidden rounded-main">
                        <img
                            className="w-full h-[80vh] rounded-main object-cover"
                            src="https://www.monrovia.com/media/catalog/product/cache/282200fa9b94c6b3bb6408314c6a2aa7/r/e/rest_1_7_17018.webp"
                            alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-80 z-40 pointer-events-none linear-blur" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/15" />

                        <div className="absolute bottom-5 left-5 right-5 text-white z-50">
                            <div>
                                <h1 className="text-3xl font-bold mb-3">
                                    Vision
                                </h1>
                                <p className="text-otherMuted opacity-80 font-medium text-lg">
                                    To become a trusted Indonesian exporter company recognized globally for the excellence of Hass avocado and coffee blossom honey, as well as commitment to quality, sustainability, and local partnerships
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-main group">
                        {/* Background image */}
                        <img
                            className="w-full h-full rounded-main object-cover transition duration-500 ease-in-out group-[.card-hover]:blur-sm"
                            src="https://images.unsplash.com/photo-1655205786979-2b087729e3f8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-black/2 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-2 left-2 right-2 text-white z-50">
                            <h1 className="text-3xl font-bold mb-3">Mission</h1>
                            <div className="flex flex-wrap gap-2">
                                {missions.map((el, idx) => (
                                    <div
                                        key={idx}
                                        // 👇 add a custom class to inform the parent "we're being hovered"
                                        onMouseEnter={() =>
                                            document
                                                .querySelector(".group")
                                                ?.classList.add("card-hover")
                                        }
                                        onMouseLeave={() =>
                                            document
                                                .querySelector(".group")
                                                ?.classList.remove("card-hover")
                                        }
                                        className="grow rounded-secondary backdrop-blur-xs bg-main/40 hover:bg-main p-3 h-fit border border-base/10 shadow-mainShadow cursor-pointer transition"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="text-xl">{el.icon}</div>
                                            <h1 className="max-w-md self-end font-bold">{el.title}</h1>
                                        </div>
                                        <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 max-w-0 group-hover:max-w-fit opacity-0 group-hover:max-h-40 group-hover:opacity-100 mt-1">
                                            <p className="text-otherMuted font-medium text-sm">{el.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                {/* Mobile */}
            </section>
        </>
    )
}