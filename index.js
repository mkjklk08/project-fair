const api = 'https://jsonfakery.com/movies/paginated?limit=10&page=';

async function getMovie() {
    const promise = await fetch(api);
    const process = await promise.json();
    const data = process.data
    console.log(process.data)
}