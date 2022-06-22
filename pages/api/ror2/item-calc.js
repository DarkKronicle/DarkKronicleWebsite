import { getItem, getItemStats } from '../../../utils/ror2/calculator';
import getQuery from './../../../utils/api_utils';

export function handler(req, res) {
    const options = getQuery(req);
    const item = options.item;

    const count = options.count;
    const itemVal = getItem(item);
    const stats = getItemStats(itemVal, count);
    res.json({
        item: item,
        stats: stats 
    })
}

export default handler