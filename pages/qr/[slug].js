import { getQRCodes } from "../../utils/strapi";
import Link from 'next/link';
import redirect from 'nextjs-redirect';
import Head from "next/head";


export default function RedirectPage({link}) {

    const Redirect = redirect(link)

    const text = "Redirecting to ";



    return (<>
    <Head>
        <title>"Magic Website"</title>
    </Head>
    <Redirect>
        <div className="flex items-center justify-center w-screen h-screen space-x-4 group bg-tdark">
            <div className="block p-5 text-lg text-slate-500">
                {text}
                <Link href={link}>
                    <button>
                        {link}
                    </button>
                </Link>
            </div>
        </div>
    </Redirect>
    </>
    );
}


export async function getServerSideProps(context) {
    var qrCode = await getQRCodes()
    qrCode = qrCode.data

    var i;
    
    var weights = [];
    var filtered = [];

    for (i = 0; i < qrCode.length; i++) {
        if (qrCode[i].attributes.slugregex == null || new RegExp(qrCode[i].attributes.slugregex).test(identification)) {
            filtered.push(qrCode[i])
        }
    }
    
    for (i = 0; i < filtered.length; i++) {
        const code = filtered[i].attributes
        var weight = 1;
        if (code.weight !== null) {
            weight = code.weight
        }
        weights[i] = weight + (weights[i - 1] || 0);
    }
    
    var random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    const url = filtered[i].attributes.url;

    return {
        props: {
            link: url
        }
    }

}