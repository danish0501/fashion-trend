"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, UserRound, Baby, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';

const CategoryNavbar = () => {
    const pathname = usePathname();
    const isVisible = useScrollVisibility(2000);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const categories = [
        { icon: User, label: 'Men', href: '/men' },
        { icon: UserRound, label: 'Women', href: '/women' },
        { icon: Baby, label: 'Kids', href: '/kids' },
    ];

    useEffect(() => {
        if (isSearchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isSearchOpen]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-16 left-0 right-0 z-[90] min-[427px]:hidden bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm"
        >
            <div className="flex items-center justify-between h-14 relative">
                <AnimatePresence mode="wait">
                    {!isSearchOpen ? (
                        <motion.div
                            key="nav-items"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center w-full"
                        >
                            {categories.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`relative flex flex-1 flex-col items-center justify-center py-2 transition-all duration-300`}
                                    >
                                        {/* Active Top Bar */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="category-top-bar"
                                                className="absolute top-0 left-0 right-0 h-[3px] bg-brand-button z-20"
                                                initial={false}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        {/* Active Gradient Background */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="absolute inset-0 bg-gradient-to-b from-brand-button/[0.12] via-brand-button/[0.06] to-transparent z-0"
                                                />
                                            )}
                                        </AnimatePresence>

                                        <div className="relative z-10 flex flex-col items-center gap-0.5 transition-all duration-300">
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

                            {/* Search Trigger Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
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
                        </motion.div>
                    ) : (
                        <motion.div
                            key="search-bar"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center w-full px-2"
                        >
                            <div className="relative flex-1 flex items-center bg-white border-[2px] border-[#4e1f00] rounded-full px-4 h-10 shadow-sm">
                                <Search className="text-[#4e1f00]/70 mr-2" size={20} strokeWidth={3} />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search products, brands and more..."
                                    className="w-full bg-transparent border-none text-brand-heading text-[15px] placeholder:text-brand-paragraph outline-none h-full"
                                />
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="p-1 text-[#3C2711]/60 hover:text-[#3C2711] transition-colors"
                                >
                                    <X size={18} strokeWidth={3} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default CategoryNavbar;
