import { LuMapPin } from "react-icons/lu";
export const AboutUs = () => {
    return (
        <section className="">

            <div
                className="col-span-5 bg-otherMuted/0 flex md:flex-row flex-col justify-center md:px-10 px-4 py-10 md:py-16"
            >
                <div className="md:min-w-100 text-main font-medium md:mb-0 mb-5">
                    <p className="flex items-center text-4xl">
                        About Us
                    </p>
                </div>
                <p className="text-lg md:text-xl font-semibold text-justify">
                    PT. Bharata Alam Sentosa is an export trading company focused on Indonesia's superior agricultural commodities. We specifically produce and export Hass avocado and coffee blossom honey—two natural products that grow in high-altitude and environmentally friendly ecosystems.
                </p>

            </div>

            <div
                className="md:block hidden col-span-5 relative margin rounded-main overflow-hidden"
            >
                <img
                    className="w-full h-[50vh] md:h-[] md:max-h-[65vh] object-cover"
                    src="https://images.unsplash.com/photo-1626402679707-b248aa61e5ff?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="max-w-sm absolute right-3 bottom-3 border border-base/10 rounded-main px-4 py-2 space-y-2 bg-white/10 backdrop-blur-sm text-white">
                    <p className="flex items-center gap-2 text-shadow-otherMuted text-[18px] font-semibold">
                        <LuMapPin />
                        Based in Bali
                    </p>
                    <p className="text-[16px] opacity-80 leading-5">
                        Managing production directly from partnership farms and partner farmers in the highlands
                    </p>
                </div>
                <div className="max-w-sm absolute left-3 top-3 border border-base/10 rounded-main px-4 py-2 space-y-2 bg-white/10 backdrop-blur-sm text-white">
                    <p className="text-[16px] opacity-80 leading-5">
                        Ensuring premium quality, product traceability, and sustainability of processes from upstream to downstream
                    </p>
                </div>
            </div>

            {/* Mobile */}
            <div
                className="md:hidden block col-span-5 relative margin rounded-main overflow-hidden"
            >
                <img
                    className="w-full h-[80vh] md:max-h-[65vh] object-cover"
                    src="https://images.unsplash.com/photo-1626402679707-b248aa61e5ff?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="max-w-sm absolute right-2 left-2 top-2 border border-base/10 rounded-main px-4 py-2 space-y-2 bg-white/10 backdrop-blur-sm text-white">
                    <p className="flex items-center gap-2 text-shadow-otherMuted text-[15px] font-semibold">
                        <LuMapPin />
                        Based in Bali
                    </p>
                    <p className="text-[16px] opacity-80 leading-5">
                        Managing production directly from partnership farms and partner farmers in the highlands
                    </p>
                </div>
                <div className="max-w-sm absolute left-2 right-2 bottom-2 border border-base/10 rounded-main px-4 py-2 space-y-2 bg-white/10 backdrop-blur-sm text-white">
                    <p className="text-[16px] opacity-80 leading-5">
                        Ensuring premium quality, product traceability, and sustainability of processes from upstream to downstream
                    </p>
                </div>
            </div>
            {/* Mobile */}
        </section>
    )
}