import Head from 'next/head'
import Post from '../components/Post'
import Header from '../components/Header'

import { getRecentPosts } from '../utils/strapi';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home({ recent }) {

    const data = recent.data;


    const jsxNews = data.map((page) => {
        return <Post key={page.id} update={page.attributes} />
    });

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Head>
                <title>DarkKronicle</title>
                <meta name="description" content="Cool stuff" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="flex justify-center w-full h-fit bg-gradient-to-b from-fuchsia-800 to-violet-900">
                <div className="flex flex-col px-4 py-10 lg:px-24 lg:mb-24">
                    <h1 className="mt-5 mb-5 text-4xl font-bold text-white">
                        DarkKronicle
                    </h1>
                    <p className="mb-10 text-xl text-slate-300">A website dedicated to all things DarkKronicle</p>
                    <div className="items-center">
                        <div className="relative flex items-center w-full py-5">
                            <div className="flex-grow border-t border-slate-400"></div>
                            <span className="flex-shrink mx-4 text-xl text-slate-50">Recent Posts</span>
                            <div className="flex-grow border-t border-slate-400"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {jsxNews}
                            <Link href="/posts">
                                <a className="flex items-center p-6 space-x-4 shadow-lg group lg:max-w-sm max-h-48 bg-tdark rounded-xl hover:bg-gradient-to-tr hover:from-tdark hover:to-tlmagenta">
                                    <div>
                                        <div className="text-xl font-medium text-white">
                                            See more...
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <main className="w-full min-h-screen md:p-8 bg-tdark text-slate-200">
                <div className="grid flex-auto grid-cols-1 gap-20 mx-5 md:grid-cols-2 justify-items-center lg:mx-20">
                    <div className="flex-1">
                        <p className="max-w-xl py-5 prose lg:ml-24 prose-invert md:px-5">
                            <h1>About me</h1>
                            <p>
                                Hey! I'm DarkKronicle! I'm a Java and Python developer (now with some small JS!). I really enjoy programming
                                and messing around with random projects.
                            </p>
                            <h2>Interests</h2>
                            <p>
                                I've become fastinated with creating complex and customizable systems. I want to provide as
                                many possibilities into my projects as possible.
                            </p>
                            <p>
                                As well as programming, I am very interested in math and the ability to simplify problems.
                                I'm not too great at complex math, but it is still interesting to try to wrap my brain around
                                (even if I spend hours head scratching).
                            </p>
                        </p>
                    </div>
                    <div className="flex-1 max-w-xl p-5 shadow-lg lg:mr-24 bg-slate-800 rounded-xl">
                        Woah cool stuff here! Heck yeah it is. Just going to type random stuff.
                        Hmm that is some randomness.
                    </div>
                    <div className="flex-1 max-w-xl p-5 shadow-lg lg:ml-24 bg-slate-800 rounded-xl">
                        Woah cool stuff here! Heck yeah it is. Just going to type random stuff.
                        Hmm that is some randomness.
                    </div>
                    <div className="flex-1">
                        <p className="max-w-xl py-5 prose lg:mr-24 prose-invert md:px-5">
                            <h1>Projects</h1>
                            <p>
                                I have vastly improved my Java skills with some Minecraft mods. They started out rough, but after a lot
                                of trial and error they are now becoming more and more refined. Here are some of my favorites.
                            </p>
                            <h2>AdvancedChat</h2>
                            <p>
                                What I would like to call my magnus opus of Minecraft modding. I took
                                my desire to write a chat mod into something massive.
                                One project quickly turned into multiple and each continue to grow.
                            </p>
                            <p>
                                This project provided an interesting challenge in making something
                                that I deemed powerful, but also easy for new users to pick up.
                            </p>
                            <Link href="https://github.com/DarkKronicle/AdvancedChatCore">Check it out</Link>
                            <h2>Synth</h2>
                            <p>
                                Synth is a Discord bot that allows for numerous statistics to be gathered.
                                This bot taught me a lot about API's, asyncronous Python, databases, and graphs! (All great things)
                            </p>
                            <Link href="https://github.com/DarkKronicle/Synth">Check it out</Link>

                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export async function getStaticProps({ params }) {
    const recent = await getRecentPosts(5);

    return {
        props: {
            recent,
        },
        revalidate: 10,
    };
}