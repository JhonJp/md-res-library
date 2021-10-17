
import moment from 'moment'

/**
 *  filter object array with multiple values on sigle key
 *  @source https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72:w
 *  @sample 
 *   let data = [
 *       {country: 'usa', pop: 100000},
 *       {country: 'ph', pop: 800},
 *       {country: 'jpn', pop: 899},
 *       {country: 'mxc', pop: 2999},
 *       {country: 'au', pop: 100005},
 *       {country: 'sam', pop: 2}
 *   ]
 *   let filter = {country: ['ph', 'jpn']}
 *   let filtered = multiFilter(data, filter)
 *   RESULT: [ { country: 'ph', pop: 800 }, { country: 'jpn', pop: 899 } ]
 * */
export const filterArray = (array, filters) => {
    if (filterArray == null || undefined) return array
    const filterKeys = Object.keys(filters)
    return array.filter(item => {
        // validates all filter criteria
        return filterKeys.every(key => {
            // ignores non-function predicates
            if (typeof filters[key] !== 'function') return true
            return filters[key](item[key])
        })
    })
}

const formatDate = date => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export const newMultipleFilter = (data, filters) => {
    if (filters == null || undefined) return data
    return data.filter(o => Object.keys(filters).every(k => filters[k].some(f => o[k] === f)))
}

//data = original data, filters = { transactionDate: { startDate: "", endDate: "" }}
export const dateRangeFilter = (data, filters) => {
    if (filters == null || undefined) return data
    var startDate = new Date(moment(filters.transactionDate.startDate).format('YYYY-MM-DD 00:00:00'))
    var endDate = new Date(moment(filters.transactionDate.endDate).format('YYYY-MM-DD 23:59:00'))
    if (endDate <= startDate) return data

    var resultProductData = data.filter((a) => {
        var date = new Date(a.transactionDate);
        return (date >= startDate && date <= endDate);
    })
    return resultProductData
}

//data = original data, filters = { fraudScore: { start: "", end: "" }}
export const fraudScoreRange = (data, filters) => {
    if (filters == null || undefined) return data
    return data.filter((x) => { return x.fraudScore >= filters.fraudScore.start && x.fraudScore <= filters.fraudScore.end })
}

// get unique items on an array
export const filterUnique = (data, filter: string) => {
    let entries = data.map((entry) => entry[filter])
    let uniqueKeys = []
    entries.forEach((entry) => {
        if (!uniqueKeys.includes(entry)) {
            uniqueKeys.push(entry.toUpperCase())
        }
    })
    return uniqueKeys;
}
