import { getLink, getLinks } from "../../utils/strapi";
import Link from 'next/link';
import redirect from 'nextjs-redirect';
import Head from "next/head";


export default function RedirectPage({link}) {

    const Redirect = redirect(link.attributes.link)

    const text = "Redirecting to ";

    return (<>
    <Head>
        <title>link.attributes.name</title>
        <meta name="description" content={link.attributes.description} />
    </Head>
    <Redirect>
        <div className="group flex w-screen h-screen justify-center items-center bg-tdark space-x-4">
            <div className="block text-slate-500 p-5 text-lg">
                {text}
                <Link href={link.attributes.link}>
                    <button>
                        {link.attributes.link}
                    </button>
                </Link>
            </div>
        </div>
    </Redirect>
    </>
    );
}

export async function getStaticPaths() {
    const links = await getLinks();
    const paths = [];
    for (const c of links.data) {
        paths.push('/link/' + c.attributes.slug);
    }
    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const link = await getLink(params.slug);
    return {
        props: {
            link: link
        },
        revalidate: 10,
    };
}