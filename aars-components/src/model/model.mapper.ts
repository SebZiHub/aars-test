import { Location } from './location.js';
import { Event } from './event.js';
import { City } from './city.js';


export class ModelMapper {
    mapFromData(events: any[], cities: any[], locations: any[]) {

        // let's make sure we only work with a copy so we do not modify params via reference, leading to side effects
        const locationsCopy = this.makeDeepCopyOfArrayOrObject(locations);
        const citiesCopy = this.makeDeepCopyOfArrayOrObject(cities);
        const eventsCopy = this.makeDeepCopyOfArrayOrObject(events);

        const mappedEvents = eventsCopy.map(({start, end, location: locationId, eventStatus}: {start: any, end: any, location: any, eventStatus: any}) => {
            const mappedLocation = this.mapLocation(locationsCopy[locationId], citiesCopy);
            const startDate = new Date(start + "+02:00");
            const endDate = new Date(end + "+02:00");
            return new Event(startDate, endDate, mappedLocation, eventStatus);
        });

        const sortedEvents = this.sortEventsByStartDateAsc(mappedEvents);

        return sortedEvents.map((event: Event, index: number) => {
            if (index > 0) {
                event.previousEvent = sortedEvents[index - 1];
            }

            return event;
        });
    }

    sortEventsByStartDateAsc(events: Event[]) {
        return events.sort((a, b) => {
            //@ts-ignore
            return new Date(a.start) - new Date(b.start);
        });
    }

    mapLocation(location: any, cities: any[]): Location {
        const {id: cityId, name: cityName} = cities[location.city];
        const city = new City(cityId, cityName);
        return new Location(location.id, location.name, location.googleMapsLink, city);
    }

    makeDeepCopyOfArrayOrObject(arr: any[]) {
        return JSON.parse(JSON.stringify(arr));
    }
}
