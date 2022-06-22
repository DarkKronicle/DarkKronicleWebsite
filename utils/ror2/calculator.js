import { ITEMS } from './items';

export function getItem(itemName) {
    for (const item of ITEMS) {
        if (item.name == itemName) {
            return item;
        }
    }
    return null;
}

export function calculateStat(type, starting, percent, amount, exponent) {
    if (type.toUpperCase() == 'LINEAR') {
        return amount * percent + starting;
    } else if (type.toUpperCase() == 'HYPERBOLIC') {
        if (starting == 0) {
            starting = 1;
        }
        if (!exponent) {
            exponent = 1;
        }
        return starting * (1 - 1 / Math.pow(1 + percent * amount, exponent));
    } else if (type.toUpperCase() == 'EXPONENTIAL') {
        return Math.pow(percent, amount) + starting;
    }
    return 'INVALID';
}


export function getItemStats(item, count) {
    count = parseInt(count)
    var stats = []
    if (item.name == "shipping_request_form") {
        const common = .79;
        const uncommon = .2 * count;
        const legendary = .01 * Math.pow(count, 2);
        const sum = common + uncommon + legendary;
        const commonCalc = common / sum;
        const uncommonCalc = uncommon / sum;
        const legendaryCalc = legendary / sum;
        stats.push({
            name: 'tier-probabilities',
            type: 'SPECIAL',
            amount: count,
            common: commonCalc,
            uncommon: uncommonCalc,
            legendary: legendaryCalc
        })
        return stats;
    }
    item.stats.forEach((stat) => {

        var initial = stat.initial
        if (initial == null) {
            initial = 0;
        }
        var calc = calculateStat(stat.type, initial, stat.number, count, stat.exponent);
        if (stat.multiply) {
            calc = calc * stat.multiply;
        }
        if (stat.hasOwnProperty("limit")) {
            const limit = stat['limit'];
            if (calc > limit) {
                calc = limit;
            }
        }
        stats.push({
            name: stat.name,
            type: stat.type,
            amount: count,
            stat: calc
        })
    });
    return stats;
}