"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, UserRound, Baby, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CategoryNavbar = () => {
    const pathname = usePathname();

    const categories = [
        { icon: User, label: 'Men', href: '/men' },
        { icon: UserRound, label: 'Women', href: '/women' },
        { icon: Baby, label: 'Kids', href: '/kids' },
    ];

    return (
        <div className="fixed top-16 left-0 right-0 z-[90] min-[427px]:hidden bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm">
            <div className="flex items-center justify-around h-14 relative">
                {categories.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`relative flex flex-1 flex-col items-center justify-center py-2 transition-all duration-300`}
                        >
                            {/* Active Top Bar - Full Width */}
                            {isActive && (
                                <motion.div
                                    layoutId="category-top-bar"
                                    className="absolute top-0 left-0 right-0 h-[3px] bg-brand-button"
                                    initial={false}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            {/* Active Gradient Background matching BottomNavbar */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 bg-gradient-to-b from-brand-button/[0.08] via-brand-button/[0.04] to-transparent -z-10"
                                    />
                                )}
                            </AnimatePresence>

                            <div className="relative flex flex-col items-center gap-0.5 transition-all duration-300">
                                <Icon
                                    size={22}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    className={`${isActive
                                        ? 'text-brand-button'
                                        : 'text-[#282C3F]/80'
                                        } transition-colors duration-300`}
                                />
                                <span className={`text-[11px] font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-brand-button' : 'text-[#282C3F]/70'
                                    }`}>
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    );
                })}

                {/* Search Button */}
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-search'))}
                    className="relative flex flex-1 flex-col items-center justify-center py-2 transition-all duration-300"
                >
                    <div className="relative flex flex-col items-center gap-1 transition-all duration-300">
                        <Search
                            size={22}
                            strokeWidth={2}
                            className="text-[#282C3F]/80 transition-colors duration-300"
                        />
                        <span className="text-[11px] font-bold tracking-wide text-[#282C3F]/70">
                            Search
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default CategoryNavbar;
