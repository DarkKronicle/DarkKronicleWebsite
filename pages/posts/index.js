import Post from "../../components/Post";
import { getPosts } from "../../utils/strapi";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Posts({ posts }) {
    const jsxNews = posts.data.map((post) => {
        const update = post.attributes
        const intro = update.body.substring(0, Math.min(update.body.length, 150)).replace("\n", "") + "..."
        return <>
            <Link href={`/posts/${update.category.data.attributes.slug}/${update.slug}`}>
                <a className="group p-6 w-full bg-slate-800 rounded-xl shadow-lg flex items-center space-x-4 hover:bg-slate-700">
                    <div>
                        <div className="text-xl font-medium text-white">
                            {update.title}
                        </div>
                        <h4 className="text-slate-500">{new Date(update.publishedAt).toDateString()}</h4>
                        <div className="text-slate-400 group-hover:text-slate-200">
                            {update.description}
                        </div>
                        <div className="text-slate-300 group-hover:text-slate-200">
                            {intro}
                        </div>
                    </div>
                </a>
            </Link>
        </>
    });

    return (
        <>
            <Header/>
            <main className="flex w-full bg-tdark justify-center min-h-screen">
                <div className="flex flex-col px-4 lg:px-24 py-10 lg:mb-24 w-full">
                    <div className="items-center">
                        <div className="w-full">
                            {jsxNews}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}


export async function getStaticProps({ params }) {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}