import { unified } from 'unified';

import remarkParse from 'remark-parse';
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import remarkGfm from 'remark-gfm';

import remarkRehype from 'remark-rehype';
import rehypeMathjax from 'rehype-mathjax';
import rehypeStringify from 'rehype-stringify'


export default async function markdownToHtml(markdown) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkToc)
        .use(remarkRehype)
        .use(rehypeMathjax)
        .use(rehypeStringify)
        .process(markdown);
    return String(result);
}