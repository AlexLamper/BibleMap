"use client"; // This directive indicates a client component

import React from 'react';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

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
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link href="/">BibleMap</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    {pages.map((page) => (
                        <Link key={page.path} href={page.path} className={`text-white ${pathname === page.path ? 'underline' : ''}`}>
                            {page.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="">
                                <FaBars size={24} />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuList className="flex flex-col text-left -mr-6">
                                    {pages.map((page) => (
                                        <NavigationMenuItem key={page.path}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={page.path}
                                                    className={`font-semibold text-left`}
                                                >
                                                    {page.name}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
