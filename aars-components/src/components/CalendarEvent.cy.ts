import CalendarEvent from './CalendarEvent.vue';

import { Event } from '../model/event';
import { Location } from '../model/location';
import { City } from '../model/city';

describe('<CalendarEvent />', () => {
  it('renders an upcoming event', () => {
    const city = new City('4', 'Zürich');
    const location = new Location('5', 'Bellevue', '', city);
    const now = new Date(2024, 11, 17);
    now.setHours(11);

    const tomorrow = new Date(now.getTime());
    tomorrow.setDate(now.getDate() + 1);

    const tomorrow2HoursLater = new Date(tomorrow.getTime());
    tomorrow2HoursLater.setTime(tomorrow2HoursLater.getTime() + (2*60*60*1000));
    const event = new Event(tomorrow, tomorrow2HoursLater, location, 'confirmed');
    event.getNow = () => now;

    cy.mount(CalendarEvent, { props: { event }} );
    cy.screenshot();
  });

  it('renders a cancelled event', () => {
    const city = new City('4', 'Zürich');
    const location = new Location('5', 'Bellevue', '', city);
    const now = new Date(2024, 11, 17, 14, 0, 0, 0);
    const tomorrow = new Date(now.getTime());
    tomorrow.setDate(now.getDate() + 1);
    const tomorrow2HoursLater = new Date(tomorrow.getTime());
    tomorrow2HoursLater.setTime(tomorrow2HoursLater.getTime() + (2*60*60*1000));
    const event = new Event(tomorrow, tomorrow2HoursLater, location, 'cancelled');
    event.getNow = () => now;

    cy.mount(CalendarEvent, { props: { event }} );
    cy.screenshot();
  });

  it('renders an event in planning', () => {
    const city = new City('4', 'Zürich');
    const location = new Location('5', 'Bellevue', '', city);
    const now = new Date(2024, 11, 17, 14, 0, 0, 0);
    const tomorrow = new Date(now.getTime());
    tomorrow.setDate(now.getDate() + 1);
    const tomorrow2HoursLater = new Date(tomorrow.getTime());
    tomorrow2HoursLater.setTime(tomorrow2HoursLater.getTime() + (2*60*60*1000));
    const event = new Event(tomorrow, tomorrow2HoursLater, location, 'in-planning');
    event.getNow = () => now;

    cy.mount(CalendarEvent, { props: { event }} );
    cy.screenshot();
  });
});