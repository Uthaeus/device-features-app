export class Place {
    constructor(title, imageUri, location, id) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = location.address;
        this.location = { lat: location.lat, lng: location.lng } // { lat: 0.234423, lng: 123.3123}
        this.id = id;
    }
}