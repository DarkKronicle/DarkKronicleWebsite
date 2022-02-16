import Link from "next/link";

export default function Header() {
    return (
        <header className="flex w-full h-15 bg-tdark flex-wrap shadow-md justify-start items-center p-3 text-sm">
            <HeaderButton name="DarkKronicle" link="/" />
            <HeaderButton name="Blog" link="/blog" />
            <HeaderButton name="Wiki" link="/wiki" />
            <div className="flex-1"></div>

        </header>
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

