

export async function getDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    return response
}