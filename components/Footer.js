import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="flex items-center justify-start w-full h-12 p-3 text-white bg-slate-900">
            <HeaderIconButton icon={faDiscord} link="/link/discord" />
            <HeaderIconButton icon={faGithub} link="https://github.com/DarkKronicle" />
            <HeaderIconButton icon={faYoutube} link="https://www.youtube.com/channel/UCyt1MmOMb5RvZc08qDXKnEg" />
        </footer>
    );
}

export function HeaderIconButton({ icon, link }) {
    return (
        <Link href={link} passHref>
            <div className="items-center justify-center inline-block p-1 mr-1 bg-gray-700 rounded-md shadow-md h-7 w-7 text-slate-300 hover:text-purple-500">
                <FontAwesomeIcon icon={icon} />
            </div>
        </Link>
    );
}