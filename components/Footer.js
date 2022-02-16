import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center justify-start w-full h-12 bg-slate-900 text-white p-3">
            <HeaderIconButton icon="fab fa-discord" link="/wiki" />
            <HeaderIconButton icon="fab fa-github" link="/wiki" />
            <HeaderIconButton icon="fab fa-youtube" link="/wiki" />
        </footer>
    );
}

export function HeaderIconButton({ icon, link }) {
    return (
        <Link href={link} passHref>
            <div className="block inline-block flex h-7 w-7 justify-center items-center text-slate-300 hover:text-purple-500 mr-1 rounded-md bg-gray-700 p-1 shadow-md">
                <i className={icon} />
            </div>
        </Link>
    );
}