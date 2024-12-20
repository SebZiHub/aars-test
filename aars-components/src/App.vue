<script lang="ts">
import CalendarEvent from './components/CalendarEvent.vue';
import { DataService } from './model/data.service';
import { ModelMapper } from './model/model.mapper';
import { Event } from './model/event';

export default {
  components: {
    CalendarEvent
  },
  data(): { events: Event[] } {
    return {
      events: []
    };
  },
  methods: {
    count: (arr: any[]) => arr.length,
    loadData: async () => {
      const dataService = new DataService();
      const modelMapper = new ModelMapper();

      const eventData = await dataService.findManyEvent();
      const locationData = await dataService.findManyLocation();
      const cityData = await dataService.findManyCity();

      return modelMapper.mapFromData(eventData, cityData, locationData);
    }
  },
  async mounted() {
    this.events = await this.loadData();
  }
}
</script>

<template>
  <div class="container">
    <div v-for="event in events">
        <h2 v-if="event.isNextEventComingUp()"><strong>Nächster Event</strong></h2>
      
        <CalendarEvent v-bind:event="event"></CalendarEvent>

        <br v-if="event.isNextEventComingUp()" />
        <h2 v-if="event.isNextEventComingUp()"><strong>Weitere Events</strong></h2>
    </div>

    <div class="bottom-container">
        <div class="push"></div>
        <button><a class="button btn btn-primary" target="_blank" href="https://calendar.google.com/calendar/embed?src=ac777afc379bf8bb3957cda6dbcd8240e31e90023c3593823e23b2018c059d7c%40group.calendar.google.com&ctz=Europe%2FParis" role="button">Als Google Kalender anzeigen</a></button>
    </div>
  </div>
</template>

<style>
/* App styles are decoupled so that we can reuse them in cypress component tests */
</style>
