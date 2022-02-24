import Link from "next/link";
import { useState } from 'react';

export default function Header() {


    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    return (
        <>
        <header className="flex w-full h-15 bg-tdark flex-wrap shadow-md justify-start items-center p-3 text-sm" x-data="{ open: false }">
            <Link href="/">
                <div className="text-slate-300 hover:text-black mr-1 rounded-md bg-gray-700 p-1 px-3 shadow-md hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta">
                    DarkKronicle
                </div>
            </Link>
            <div className="hidden lg:inline-block">
                <HeaderButton name="Posts" link="/posts" />
                <HeaderButton name="Wiki" link="/wiki" />
            </div>
            <div className="flex-1"/>
            <button className="lg:hidden" onClick={handleClick}>
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="white" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

        </header>
        <div
                className={`${
                active ? '' : 'hidden'
                }   w-screen lg:hidden bg-slate-800 p-3`}
            >
                <Link href='/'>
                    <a className='block w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta'>
                        Home
                    </a>
                </Link>
                <Link href='/'>
                    <a className='block w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta'>
                        Wiki
                    </a>
                </Link>
            </div>
        </>
    );
}

export function HeaderButton({ name, link }) {
    return (
        <Link href={link}>
            <div className="block inline-block text-slate-300 hover:text-black mr-1 rounded-md bg-gray-700 p-1 px-3 shadow-md hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta">
                {name}
            </div>
        </Link>
    );
}

