import Head from 'next/head';

import { getCategories, getPost, getCategorySlugs } from '../../../utils/strapi';
import markdownToHtml from '../../../utils/markdown';
import styles from '../../../styles/Post.module.css';
import parse from 'html-react-parser';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';


export default function UpdatePage({ post, rendered }) {
    return (
        <div className="flex flex-col items-center min-h-screen min-w-screen bg-tdark">
            <Head>
                <title>{post.attributes.title}</title>
                <meta name="description" content={post.attributes.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="items-center justify-center min-w-full bg-gradient-to-l from-fuchsia-800 to-violet-900">
                <h1 className="mt-10 mb-10 text-4xl font-bold text-center text-white md:text-6xl">{post.attributes.title}</h1>
                <h3 className="mt-10 mb-10 text-center text-1xl md:text-2xl text-slate-300">{post.attributes.description}</h3>
            </div>
            <main className="flex flex-col items-center flex-1 max-w-5xl py-10 m-auto mx-5 md:px-20">
                <article className="prose-sm prose prose-invert md:prose-base lg:prose-lg max-w-none">
                    <div className={styles.post}>
                        <div className="overflow-hidden text-slate-300">
                            {parse(rendered.body)}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
    const categories = await getCategories();
    const paths = [];
    for (const c of categories.data) {
        const p = await getCategorySlugs(c.attributes.slug);
        for (const path of p) {
            paths.push('/posts/' + c.attributes.slug + '/' + path.params.slug);
        }
    }
    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: 'blocking',
    };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
    const post = await getPost(params.category, params.slug);
    const body = await markdownToHtml(post.attributes.body);

    return {
        props: {
            post,
            rendered: {
                body: body
            }
        },
        revalidate: 10, // In seconds
    };
}