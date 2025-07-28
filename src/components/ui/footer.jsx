import Link from "next/link";
import { FiInstagram, FiPhone, FiMapPin } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="relative z-10 mt-24">
            <div className="margin mb-10">
                <div className="rounded-main bg-main/15 shadow-custom/5 p-6 md:p-8 border border-otherMuted/10">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        {/* Logo + Tagline */}
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-green-700">
                                PT. Bharata Alam Sentosa
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-sm">
                                Indonesia's Natural Taste, World-Class Quality. Based in Bali,
                                connecting premium agricultural products to the global market.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="text-sm space-y-3">
                            <div className="flex items-start gap-2">
                                <FiMapPin className="mt-1 text-green-700" />
                                <p>
                                    Jl. Sapuh Jagat Br Pegambangan Batubulan,
                                    <br />
                                    Sukawati, Gianyar Regency, Bali
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiPhone className="text-green-700" />
                                <a href="https://wa.me/62113705565" target="_blank" rel="noopener noreferrer">
                                    +62 113705565
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiInstagram className="text-green-700" />
                                <Link
                                    href="https://www.instagram.com/bharatafresh.bali?igsh=cHhzdDdrbjBvYjhk&utm_source=qr"
                                    target="_blank"
                                >
                                    @bharatafresh.bali
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Divider + Bottom */}
                    <div className="border-t border-gray-200 dark:border-white/10 mt-6 pt-4 text-sm text-gray-500 text-center">
                        &copy; {new Date().getFullYear()} PT. Bharata Alam Sentosa. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

