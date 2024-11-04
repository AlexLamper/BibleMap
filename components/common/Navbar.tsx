"use client"; // This directive indicates a client component

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from '@clerk/nextjs';
import GrayButton from '@/components/buttons/GrayButton';
import { FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const pages = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Chapters', path: '/chapters' },
        { name: 'Places', path: '/places' },
        { name: 'Characters', path: '/characters' },
        { name: 'Events', path: '/events' },
        { name: 'Themes', path: '/themes' },
        { name: 'Teachings', path: '/teachings' },
        { name: 'Notes', path: '/notes' },
        { name: 'Leaderboard', path: '/leaderboard' },
    ];

    return (
        <>
            <div className="w-full h-20 bg-black bg-opacity-40 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <button
                            type="button"
                            className="inline-flex items-center md:hidden"
                            onClick={toggle}
                        >
                            <FaBars size={24} color="#fff" />
                        </button>
                        <ul className="hidden md:flex gap-x-6 text-white">
                            {pages.map((page) => (
                                <li key={page.path}>
                                    <Link href={page.path} className={`text-white ${pathname === page.path ? 'underline' : ''}`}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Auth Section for Larger Screens */}
                        <div className="hidden md:flex items-center space-x-4">
                            <ClerkLoading>
                                <div className="h-5 w-5 text-muted-foreground animate-spin" />
                            </ClerkLoading>
                            <ClerkLoaded>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <GrayButton title="Login" height="h-[2.8rem] p-4" fontSize="text-[1rem]" />
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <GrayButton title="SignUp" height="h-[2.8rem] p-4" fontSize="text-[1rem]" />
                                    </SignUpButton>
                                </SignedOut>
                            </ClerkLoaded>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 right-0 top-20 z-10 bg-gray-800">
                    <ul className="flex flex-col items-center text-white gap-y-4 py-4">
                        {pages.map((page) => (
                            <li key={page.path}>
                                <Link href={page.path} className={`text-white ${pathname === page.path ? 'underline' : ''}`}>
                                    {page.name}
                                </Link>
                            </li>
                        ))}
                        <ClerkLoading>
                            <div className="h-5 w-5 text-muted-foreground animate-spin" />
                        </ClerkLoading>
                        <ClerkLoaded>
                            <div className="flex flex-col items-center">
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                                <SignedOut>
                                    <div className="flex flex-col gap-y-2">
                                        <SignInButton mode="modal">
                                            <GrayButton title="Login" height="h-[2.8rem] p-4" fontSize="text-[1rem]" />
                                        </SignInButton>
                                        <SignUpButton mode="modal">
                                            <GrayButton title="SignUp" height="h-[2.8rem] p-4" fontSize="text-[1rem]" />
                                        </SignUpButton>
                                    </div>
                                </SignedOut>
                            </div>
                        </ClerkLoaded>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
