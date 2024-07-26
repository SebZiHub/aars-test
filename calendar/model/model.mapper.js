import { Location } from './location.js';
import { Event } from './event.js';
import { City } from './city.js';


export class ModelMapper {
    mapFromData(events, cities, locations) {

        // let's make sure we only work with a copy so we do not modify params via reference, leading to side effects
        const locationsCopy = this.makeDeepCopyOfArrayOrObject(locations);
        const citiesCopy = this.makeDeepCopyOfArrayOrObject(cities);
        const eventsCopy = this.makeDeepCopyOfArrayOrObject(events);

        const mappedEvents = eventsCopy.map(({start, end, location: locationId, eventStatus}) => {
            const mappedLocation = this.mapLocation(locationsCopy[locationId], citiesCopy);
            const startDate = new Date(start + "+02:00");
            const endDate = new Date(end + "+02:00");
            return new Event(startDate, endDate, mappedLocation, eventStatus);
        });

        const sortedEvents = this.sortEventsByStartDateAsc(mappedEvents);

        return sortedEvents.map((event, index) => {
            if (index > 0) {
                event.previousEvent = sortedEvents[index - 1];
            }

            return event;
        });
    }

    sortEventsByStartDateAsc(events) {
        return events.sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
        });
    }

    mapLocation(location, cities) {
        const {id: cityId, name: cityName} = cities[location.city];
        const city = new City(cityId, cityName);
        return new Location(location.id, location.name, location.googleMapsLink, city);
    }

    makeDeepCopyOfArrayOrObject(arr) {
        return JSON.parse(JSON.stringify(arr));
    }
}
