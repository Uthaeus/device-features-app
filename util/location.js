
const GOOGLE_API_KEY = 'your api key';

export function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://google.something/maps/center=${lat},${lng}someotherstuff${lat},${lng}somemorestuff&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}