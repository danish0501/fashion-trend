"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube, } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Shop",
            links: [
                { name: "Men", href: "#" },
                { name: "Women", href: "#" },
                { name: "Kids", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "Home", href: "#" },
                { name: "About", href: "#" },
                { name: "Blogs", href: "#" },
                { name: "Contact", href: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "Shipping & Returns", href: "#" },
                { name: "Order Tracking", href: "#" },
                { name: "FAQ", href: "#" },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <footer className="relative bg-brand-button text-white py-12 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-button/50 to-transparent" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-button/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
                >

                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                        <Link href="/" className="group flex items-center gap-1">
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.5 }}
                                className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-brand-button/20"
                            >
                                F
                            </motion.div>
                            <span className="text-2xl font-bold tracking-tight text-white uppercase ml-1">
                                Fashion<span className="text-brand-white">Trend</span>
                            </span>
                        </Link>

                        <p className="text-gray-400 max-w-sm leading-relaxed text-base">
                            Crafting stories through fabric since 2010. We believe in fashion that speaks for itself—minimal, sustainable, and undeniably bold.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "#", color: "hover:text-[#E4405F] hover:border-[#E4405F]" },
                                { Icon: Facebook, href: "#", color: "hover:text-[#1877F2] hover:border-[#1877F2]" },
                                { Icon: Youtube, href: "#", color: "hover:text-[#FF0000] hover:border-[#FF0000]" }
                            ].map(({ Icon, href, color }, idx) => (
                                <motion.a
                                    key={idx}
                                    href={href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors backdrop-blur-sm ${color}`}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    {footerSections.map((section, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="space-y-7">
                            <h4 className="text-base font-bold uppercase tracking-widest !text-brand-white">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-[15px]"
                                        >
                                            <span className="w-0 h-[1.5px] bg-brand-button group-hover:w-4 transition-all duration-300" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Information Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 pt-10 border-t border-white/10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                            { icon: Mail, label: "Email Us", value: "hello@fashiontrend.com", href: "mailto:hello@fashiontrend.com" },
                            { icon: MapPin, label: "Visit Us", value: "123 Fashion St, NY 10001", href: "#" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="group relative p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 flex items-center gap-5"
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-button group-hover:border-white/20 transition-all duration-300">
                                    <item.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 block">{item.label}</span>
                                    <span className="text-[14px] font-medium text-gray-300 group-hover:text-white transition-colors block">{item.value}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Copyright Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-gray-500 font-medium"
                >
                    <div className="flex items-center text-brand-white gap-2">
                        <span>© {currentYear} FashionTrend. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-white transition-colors relative group">
                            Terms & Conditions
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-button group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors relative group">
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-button group-hover:w-full transition-all duration-300" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
