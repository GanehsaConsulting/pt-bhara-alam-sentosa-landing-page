import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Contact = () => {
    return (
        <section id="contact" className="margin space-y-3 py-24">
            <p className="text-4xl mb-3 text-main">
            </p>
            <div className="relative rounded-main overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1729041221905-0519efecaa92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-[120vh] md:h-[80vh] object-cover rounded-main"
                />
                <div className="absolute bottom-0 bg-gradient-to-t  h-[80vh]  from-black/40 via-black/20 to-black/15" />
                <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none linear-blur" />

                <div className="absolute bottom-2 md:bottom-5 w-full px-2 md:px-5 md:h-[40vh] h-[60vh] space-y-3 flex flex-col">
                    <p className="w-fit text-3xl font-semibold leading-5 border border-base/10 rounded-main px-6 py-4 drop-shadow-xl space-y-2 bg-white/10 backdrop-blur-sm text-white">
                        Let's get in touch
                    </p>
                    <div className="h-full grid md:grid-cols-10 gap-3">
                        <div className="col-span-5 grid grid-cols-2 space-x-3">
                            <div className=" flex flex-col justify-between shadow-custom bg-main/30 border border-base/10 backdrop-blur-sm p-3 md:p-5 rounded-main">
                                <FaInstagram className="text-2xl md:text-5xl text-white drop-shadow" />
                                <div className="text-white">
                                    <p className="uppercase mb-3 text-xs font-bold">
                                        Instagram
                                    </p>
                                    <h1 className="text-wrap text-sm md:text-xl font-medium">
                                        @bharatafresh.bali
                                    </h1>
                                </div>
                            </div>

                            <div className=" flex flex-col justify-between shadow-custom bg-main/30 border border-base/10 backdrop-blur-sm p-3 md:p-5 rounded-main">
                                <FaWhatsapp className="text-2xl md:text-5xl text-white drop-shadow" />
                                <div className="text-white">
                                    <p className="uppercase mb-3 text-xs font-bold">
                                        Whatsapp
                                    </p>
                                    <h1 className="text-wrap text-sm md:text-xl font-medium">
                                        +62 851 4313 6590
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <iframe
                                className="w-full h-full shadow-custom rounded-main"
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126905.92495660148!2d106.76783528258977!3d-6.288666645245213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3007a6e8e39%3A0xf83b477d03a6931f!2sGANESHA%20CONSULTING!5e0!3m2!1sid!2sid!4v1745989232101!5m2!1sid!2sid"}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}