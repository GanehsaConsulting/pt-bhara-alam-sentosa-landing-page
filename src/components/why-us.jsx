import { whyUs } from "@/app/system"

export const WhyUs = () => {
    return (
        <section className="margin py-24">
            <div>
                <div className="relative overflow-hidden rounded-main h-[80vh]">
                    <img
                        className="rounded-main w-full h-[80vh]"
                        src="https://images.unsplash.com/photo-1621928372414-30e144d51d49?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />

                    <div className="absolute left-0 right-0 bottom-0 space-y-3">
                        <div className="mx-5 md:mx-3">
                            <h1 className="w-fit text-3xl font-bold  border border-base/10 rounded-main px-4 py-2 space-y-2 bg-white/10 backdrop-blur-sm text-white">
                                Why Choose Us?
                            </h1>
                        </div>
                        <div className="hidden md:grid grid-cols-5 gap-3 m-3">
                            {whyUs.map((el, idx) => (
                                <div
                                    key={idx}
                                    className="min-h-[30vh] border border-base/10 rounded-main p-3 space-y-2 bg-white/10 backdrop-blur-sm text-white"
                                >
                                    <div className="border border-surface/5 text-3xl bg-radial from-transparent to-white/30 w-fit p-3 rounded-full mb-12">
                                        {el.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-semibold text-xl leading-5">
                                            {el.title}
                                        </h1>
                                        <p className="text-sm opacity-80">
                                            {el.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile */}
                        <div className="carousel w-full md:hidden gap-3 mb-3">
                            {whyUs.map((el, idx) => (
                                <div
                                    key={idx}
                                    className={`${idx === 0 && "ml-5"} ${idx === whyUs.length - 1 && "mr-5"}
                                         min-h-[30vh] min-w-[50vw] border border-base/10 rounded-main p-3 space-y-2 bg-white/10 backdrop-blur-sm text-white`}
                                >
                                    <div className="border border-surface/5 text-3xl bg-radial from-transparent to-white/30 w-fit p-3 rounded-full mb-12">
                                        {el.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-semibold text-xl leading-5">
                                            {el.title}
                                        </h1>
                                        <p className="text-sm opacity-80">
                                            {el.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Mobile */}
                    </div>
                </div>
            </div>
        </section>
    )
}