export class Location {
    id;
    name;
    googleMapsLink;
    city;

    constructor(id, name, googleMapsLink, city) {
        this.id = id;
        this.name = name;
        this.googleMapsLink = googleMapsLink;
        this.city = city;
    }
}