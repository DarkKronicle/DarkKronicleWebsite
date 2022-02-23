import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="flex items-center justify-start w-full h-12 bg-slate-900 text-white p-3">
            <HeaderIconButton icon={faDiscord} link="/wiki" />
            <HeaderIconButton icon={faGithub} link="/wiki" />
            <HeaderIconButton icon={faYoutube} link="/wiki" />
        </footer>
    );
}

export function HeaderIconButton({ icon, link }) {
    return (
        <Link href={link} passHref>
            <div className="block inline-block flex h-7 w-7 justify-center items-center text-slate-300 hover:text-purple-500 mr-1 rounded-md bg-gray-700 p-1 shadow-md">
                <FontAwesomeIcon icon={icon} />
            </div>
        </Link>
    );
}