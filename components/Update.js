import Link from "next/link";

export default function Post({ update }) {

    return (
        <Link href={`/posts/${update.category.data.attributes.slug}/${update.slug}`}>
            <a className="group p-6 lg:max-w-sm max-h-48 bg-tdark rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gradient-to-tr hover:from-tdark hover:to-tlmagenta">
                <div>
                    <div className="text-xl font-medium text-white">
                        {update.title}
                    </div>
                    <h4 className="text-slate-500">{new Date(update.publishedAt).toDateString()}</h4>
                    <div className="text-slate-400 group-hover:text-slate-200">
                        {update.description}
                    </div>
                </div>
            </a>
        </Link>
    );

}