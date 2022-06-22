import qs from "qs";
import getQuery from './../../../utils/api_utils';
import { ITEMS } from './../../../utils/ror2/items';

export function handler(req, res) {
    const options = getQuery(req);
    const names = []
    
    if (options.hasOwnProperty("name")) {
        names.push(options.name)
    }
    if (options.hasOwnProperty("names")) {
        options.items.forEach((item) => {
            names.push(
                item
            )
        })
    }
    const items = []
    ITEMS.forEach((item) => {
        if (names.length > 0 && item.name in names) {
            items.push(item)
        }
    })
    res.json({
        data: [
            ITEMS
        ]
    })
}

export default handler