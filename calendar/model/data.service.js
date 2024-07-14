export class DataService {
    findManyEvent() {
        return fetch("./data/event.json").then(data => data.json());
    }

    findManyCity() {
        return fetch("./data/city.json").then(data => data.json());
    }

    findManyLocation() {
        return fetch("./data/location.json").then(data => data.json());
    }
}