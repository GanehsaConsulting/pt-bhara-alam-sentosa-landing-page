import { products } from "@/app/system"

export const Products = () => {
    return (
        <section id="products" className="margin py-16 md:py-24">
            <p className="text-4xl mb-3 text-main">
                Our Products
            </p>
            <div className="hidden md:flex flex-wrap gap-3">
                {products.map((el, idx) => (
                    <div
                        key={idx}
                        className={`${idx === 0 && "min-w-[80vh]"} ${idx === 1 && "min-w-[80vh]"} relative space-y-3 min-h-[50vh] max-h-[50vh] w-[25vh] grow hover:w-[40vh] duration-300 ease-in-out min-w-0`}>
                        <img
                            src={el.image}
                            alt={el.title}
                            className="w-full h-full object-cover rounded-main"
                        />
                        <div className={`${idx === 0 && "min-w-[50vh]"} ${idx === 1 && "min-w-[50vh]"}  max-w-sm absolute left-3 bottom-3 right-3 border border-base/10 rounded-main px-4 py-2 space-y-2 bg-black/20 backdrop-blur-sm text-white`}>
                            <h1 className="font-semibold text-lg">
                                {el.title}
                            </h1>
                            <p className="text-sm text-surface">
                                {el.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden grid grid-flow-row gap-3">
                {products.map((el, idx) => (
                    <div
                        key={idx}
                        className={`relative max-h-[40vh] w-full`}>
                        <img
                            src={el.image}
                            alt={el.title}
                            className="w-full h-full object-cover rounded-main"
                        />
                        <div className={`absolute left-2 bottom-2 right-2 border border-base/10 rounded-main px-4 py-2 space-y-2 bg-black/20 backdrop-blur-sm text-white`}>
                            <h1 className="font-semibold text-lg">
                                {el.title}
                            </h1>
                            <p className="text-sm text-surface">
                                {el.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Mobile */}
        </section>
    )
}