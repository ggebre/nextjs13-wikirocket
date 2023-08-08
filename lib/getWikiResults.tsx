export default async function getWikiResults(searchTerm: string) {
    const searchParams = new URLSearchParams ({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm, 
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*'

    })
    // the above object is required to access wikipedia api
    const res = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)
    return res.json()
}