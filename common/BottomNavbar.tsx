"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, BookOpen, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const BottomNavbar = () => {
    const pathname = usePathname();
    const [cartCount, setCartCount] = useState(0);

    const navItems = [
        { icon: Home, label: 'Home', href: '/' },
        { icon: Info, label: 'About', href: '/about' },
        { icon: BookOpen, label: 'Blogs', href: '/blogs' },
        { icon: ShoppingBag, label: 'Bag', href: '/cart' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] min-[427px]:hidden">
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-full bg-white border-t border-zinc-100 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]"
            >
                <div className="flex items-center justify-around relative">
                    {/* Active Top Indicator */}
                    <div className="absolute top-0 left-0 right-0 h-[3px]">
                        <div className="w-full h-full flex relative px-0">
                            {navItems.map((item) => (
                                <div key={item.label} className="flex-1 h-full relative">
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="active-nav-bar"
                                            className="absolute inset-0 bg-brand-button"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`relative flex flex-1 flex-col items-center justify-center py-3 transition-all duration-300`}
                            >
                                {/* Active Gradient Background */}
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

                                <div className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'translate-y-[-1px]' : ''
                                    }`}>
                                    <div className="relative">
                                        <Icon
                                            size={22}
                                            strokeWidth={isActive ? 2.5 : 2}
                                            className={`${isActive
                                                ? 'text-brand-button'
                                                : 'text-[#282C3F]/80'
                                                } transition-colors duration-300`}
                                        />
                                        {item.label === 'Bag' && cartCount > 0 && (
                                            <span className="absolute -top-1.5 -right-1.5 bg-brand-button text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                                {cartCount}
                                            </span>
                                        )}
                                    </div>
                                    <span className={`text-[11px] font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-brand-button' : 'text-[#282C3F]/70'
                                        }`}>
                                        {item.label}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </motion.nav>
        </div>
    );
};

export default BottomNavbar;
