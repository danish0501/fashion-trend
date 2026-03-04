"use client";
import { useState, useEffect, useRef } from 'react';

export const useScrollVisibility = (delay = 2000) => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show immediately if at the very top
            if (currentScrollY <= 10) {
                setIsVisible(true);
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                lastScrollY.current = currentScrollY;
                return;
            }

            // Hide when scrolling down
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false);
            }

            // Always reset the timer on any scroll activity
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                setIsVisible(true);
            }, delay);

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [delay]);

    return isVisible;
};
