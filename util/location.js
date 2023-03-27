
const GOOGLE_API_KEY = 'your api key';

export function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://google.something/maps/center=${lat},${lng}someotherstuff${lat},${lng}somemorestuff&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
    const url = `https://googleapis.com/maps/morestuff/geocode/latlng=${lat},${lng}&morestuff&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch address');
    }

    const data = response.json();
    const address = data.results[0].formatted_address;
    return address;
}