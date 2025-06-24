import { Button } from "./ui/button"

export const Banner = () => {
    return (
        <>
            <section id="land" className={`w-screen md:h-screen h-[80vh] relative`}>
                <img
                    className="w-screen md:h-screen h-[80vh] object-cover object-top"
                    src="https://images.unsplash.com/photo-1718829732697-740b87cf509b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/15" />

                <div className="absolute bottom-0 left-0">
                    <div className="m-5 md:m-10  max-w-4xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white md:leading-14">
                            Trusted Exporter of Premium Hass Avocado & Coffee Blossom Honey from Indonesia
                        </h1>
                        <h2 className="text-md leading-tight opacity-80 text-base">
                            Connecting Indonesia's agricultural potential with global market standards through premium quality products from Bali's highlands
                        </h2>
                        <div className="space-x-2 mt-3">
                            <Button
                            variant={"default"}>
                                Explore
                            </Button>
                            <Button
                            variant={"secondaryGlass"}
                            >
                                Get in touch!
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}