import Link from "next/link";

export default function Post({ update }) {

    return (
        <Link href={`/posts/${update.category.data.attributes.slug}/${update.slug}`}>
            <a className="flex items-center p-6 space-x-4 shadow-lg group lg:max-w-sm max-h-48 bg-tdark rounded-xl hover:bg-gradient-to-tr hover:from-tdark hover:to-tlmagenta">
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