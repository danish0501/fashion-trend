"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, ShoppingBag, User, Menu, X, Search, CircleUserRound, ContactRound } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Men', href: '/men' },
        { name: 'Women', href: '/women' },
        { name: 'Kids', href: '/kids' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        const handleToggleSearch = () => {
            setIsSearchOpen(prev => !prev);
            setIsMobileMenuOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('toggle-search', handleToggleSearch);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('toggle-search', handleToggleSearch);
        };
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[100]"
        >
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full transition-all duration-500 ease-in-out border-b ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-sm border-zinc-200/50 py-2 px-6 max-[426px]:px-2 max-[426px]:py-0'
                    : 'bg-transparent border-transparent py-4 px-8 max-[769px]:px-4 max-[426px]:px-2 max-[426px]:py-0'
                    }`}
            >
                <div className="w-full flex justify-between items-center h-16">

                    {/* LEFT: Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group relative overflow-hidden flex items-center gap-1">
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.5 }}
                                className="w-8 h-8 rounded-lg bg-brand-button flex items-center justify-center text-white font-black text-xl"
                            >
                                F
                            </motion.div>
                            <span className="text-xl font-bold tracking-tight text-brand-heading uppercase ml-1">
                                Fashion<span className="text-brand-button">Trend</span>
                            </span>
                            <motion.div
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-button origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    {/* CENTER: NavLinks (Desktop) or Search Bar */}
                    <div className="hidden lg:flex items-center flex-1 justify-center px-8">
                        <AnimatePresence mode="wait">
                            {!isSearchOpen ? (
                                <motion.div
                                    key="nav-links"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center"
                                >
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className={`relative px-4 py-2 text-base font-medium transition-colors duration-200 ${isActive ? 'text-brand-button' : 'text-brand-paragraph hover:text-brand-button'
                                                    }`}
                                            >
                                                {link.name}
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="active-underline"
                                                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-button"
                                                        initial={false}
                                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                    />
                                                )}
                                            </Link>
                                        );
                                    })}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="search-bar"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full max-w-2xl relative flex items-center"
                                >
                                    <div className="relative w-full group">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-button group-focus-within:text-brand-button transition-colors" size={20} strokeWidth={2} />
                                        <input
                                            type="text"
                                            placeholder="Search products, brands and more..."
                                            className="w-full bg-zinc-100/80 border-2 border-transparent focus:border-brand-button focus:bg-white rounded-full py-2.5 pl-12 pr-12 text-brand-heading placeholder:text-brand-paragraph/60 outline-none transition-all shadow-inner"
                                            autoFocus
                                        />
                                        <button
                                            onClick={() => setIsSearchOpen(false)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-zinc-200 text-brand-button hover:text-brand-heading rounded-full transition-all active:scale-90 cursor-pointer"
                                            title="Close Search"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center space-x-2 md:space-x-3">
                        {/* Search - visible only on desktop and tablet (427px to 769px) */}
                        <button
                            onClick={() => {
                                setIsSearchOpen(!isSearchOpen);
                                setIsMobileMenuOpen(false);
                            }}
                            className={`flex max-[426px]:hidden items-center justify-center p-2 rounded-full transition-all cursor-pointer ${isSearchOpen ? 'bg-brand-button text-white shadow-lg shadow-brand-button/30' : 'text-brand-paragraph font-bold hover:text-brand-heading hover:bg-zinc-100'
                                }`}
                        >
                            <Search size={22} strokeWidth={2} />
                        </button>

                        {/* Wishlist */}
                        <button className="text-brand-paragraph hover:text-brand-heading p-2 rounded-full hover:bg-zinc-100 transition-all relative group cursor-pointer">
                            <Heart size={22} strokeWidth={2} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-0 -right-0 bg-brand-button text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {wishlistCount}
                                </span>
                            )}
                        </button>


                        {/* Cart - Hidden on mobile (<= 426px), replaced by User icon */}
                        <button className="max-[426px]:hidden text-brand-paragraph hover:text-brand-heading p-2 rounded-full hover:bg-zinc-100 transition-all relative cursor-pointer">
                            <ShoppingBag size={22} strokeWidth={2} />
                            {cartCount > 0 && (
                                <span className="absolute -top-0 -right-0 bg-brand-button text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Login/Signup Icon - Visible only on mobile (<= 426px) */}
                        <Link
                            href="/login"
                            className="hidden max-[426px]:flex text-brand-paragraph hover:text-brand-heading p-2 rounded-full hover:bg-zinc-100 transition-all relative cursor-pointer"
                        >
                            <CircleUserRound size={23} strokeWidth={2} />
                        </Link>

                        {/* Profile/Login */}
                        <Link
                            href="/login"
                            className="group hidden sm:flex items-center space-x-2 bg-brand-button text-white pl-1 pr-4 py-1 text-base font-medium hover:bg-brand-button-hover transition-all rounded-full border border-brand-button cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-brand-button transition-colors">
                                <User size={18} strokeWidth={2} />
                            </div>
                            <span>Sign In</span>
                        </Link>

                        {/* Contact Icon - Visible only on mobile (<= 426px) */}
                        <Link
                            href="/contact"
                            className="hidden max-[426px]:flex text-brand-paragraph hover:text-brand-heading p-2 rounded-full hover:bg-zinc-100 transition-all relative cursor-pointer"
                            title="Contact Us"
                        >
                            <ContactRound size={22} strokeWidth={2} />
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                                setIsSearchOpen(false);
                            }}
                            className="lg:hidden max-[426px]:hidden text-brand-heading hover:bg-zinc-100 rounded-full transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </motion.nav>

            {/* TABLET/MOBILE SEARCH BAR (Visible for < 1024px, specifically for 427px to 769px) */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-zinc-100 overflow-hidden"
                    >
                        <div className="px-6 py-4">
                            <div className="relative w-full group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-button group-focus-within:text-brand-button transition-colors" size={20} strokeWidth={2} />
                                <input
                                    type="text"
                                    placeholder="Search products, brands and more..."
                                    className="w-full bg-zinc-100/80 border-2 border-transparent focus:border-brand-button focus:bg-white rounded-full py-2.5 pl-12 pr-12 text-brand-heading placeholder:text-brand-paragraph/60 outline-none transition-all shadow-inner"
                                    autoFocus
                                />
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-zinc-200 text-brand-button hover:text-brand-heading rounded-full transition-all active:scale-90 cursor-pointer"
                                    title="Close Search"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-zinc-100 overflow-hidden absolute top-full left-0 right-0 shadow-xl"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-semibold text-brand-heading hover:text-brand-button flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            →
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-6 border-t border-zinc-100">
                                <button className="w-full bg-brand-button text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-brand-button/20 active:scale-[0.98] transition-transform">
                                    <User size={20} />
                                    <span>Account Login</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;