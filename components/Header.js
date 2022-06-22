import Link from "next/link";
import { useState } from 'react';

export default function Header() {


    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    return (
        <>
        <header className="flex flex-wrap items-center justify-start w-full p-3 text-sm shadow-md h-15 bg-tdark" x-data="{ open: false }">
            <Link href="/">
                <div className="p-1 px-3 mr-1 bg-gray-700 rounded-md shadow-md text-slate-300 hover:text-black hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta">
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
                    <a className='items-center justify-center block w-full px-3 py-2 font-bold text-white rounded hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta'>
                        Home
                    </a>
                </Link>
                <Link href='/'>
                    <a className='items-center justify-center block w-full px-3 py-2 font-bold text-white rounded hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta'>
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
            <div className="inline-block p-1 px-3 mr-1 bg-gray-700 rounded-md shadow-md text-slate-300 hover:text-black hover:bg-gradient-to-tr hover:from-gray-700 hover:to-tlmagenta">
                {name}
            </div>
        </Link>
    );
}

