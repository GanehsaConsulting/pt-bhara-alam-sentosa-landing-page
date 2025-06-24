function urlFriendly(text) {
    return `${text.toLowerCase().replace(/\s+/g, '-')}`;
}

const items = ["Home", "About", "Why Us", "Products", "Services"]

export const NavigationBar = () => {
    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none linear-blur z-40" />

            <nav className={`fixed bottom-3 left-3 right-3 z-[70] duration-500 ease-in-out transition-all origin-bottom-right`}>
                <div className="flex items-center justify-center ">
                    <ul className="flex items-center justify-center  border border-other/50 rounded-full w-fit">
                        {items.map((item, id) => (
                            <li key={item}>
                                <a
                                    href={id === 0 ? "#land" : `#${urlFriendly(item)}`}
                                >
                                    <button
                                        variant={"ghost"}
                                        className={`bg-otherMuted/50  backdrop-blur-sm text-sm font-bold px-2.5 py-2 shadow-xs hover:bg-other text-textMuted/90 active:text-black truncate opacity-80
                                        ${id === 0 && "!rounded-l-full"}
                                        ${id === items.length - 1 && "!rounded-r-full"}
                                        `}
                                    >
                                        {item}
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}   