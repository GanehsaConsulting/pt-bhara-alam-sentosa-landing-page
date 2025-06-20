import { LuCircleDot } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { SiPolkadot } from "react-icons/si";
export const AboutUs = () => {
    return (
        <section className="h-[70vh]">

            <div
                className="col-span-5 bg-otherMuted/50 flex md:flex-row flex-col justify-center px-10 py-16"
            >
                <div className="min-w-100 text-main font-medium md:mb-0 mb-5">
                    <p className="flex items-center md:justify-center gap-2">
                        <SiPolkadot />
                        About Us
                    </p>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-justify">
                    PT. Bharata Alam Sentosa is an export trading company focused on Indonesia's superior agricultural commodities. We specifically produce and export Hass avocado and coffee blossom honey—two natural products that grow in high-altitude and environmentally friendly ecosystems.
                </p>

            </div>

            <div
                className="col-span-5"
            >
                <img
                    className="w-full max-h-[65vh] object-cover"
                    src="https://images.unsplash.com/photo-1626402679707-b248aa61e5ff?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>
        </section>
    )
}