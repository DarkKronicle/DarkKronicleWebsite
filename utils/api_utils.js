import qs from 'qs';

export default function getQuery(req) {
    const url = new URL('https://darkkronicle.com/api/' + req.url);
    return qs.parse(url.search, { ignoreQueryPrefix: true });
}