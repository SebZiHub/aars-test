<script lang="ts">
import { Event } from '../model/event';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClock, faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCalendar);
library.add(faLocationDot);
library.add(faClock);


export default {
    components: { FontAwesomeIcon },
    methods: {
        getClassForDayBadge: (event: Event) => {
            if (event.isNextEventComingUp()) {
                return "badge badge-big badge-primary";
            } else {
                return "badge badge-big badge-secondary";
            }
        },

        getClassForStatusBadge: (event: Event) => {
            if (event.eventStatus === "cancelled") {
                return "badge badge-small badge-error";
            } else if (event.eventStatus === "in-planning") {
                return "badge badge-small badge-warn";
            } else {
                return "";
            }
        }
    },
    props: {
        event: Event
    }
}
</script>

<template>
  <div class="event-container" v-if="event.isFutureEvent()">
    <div class="date-container">
      <span :class="getClassForDayBadge(this.event)"><span><strong>{{ event.getDay() }}</strong></span></span>
      <span class="month-abbr">{{ event.getMonthAbbreviation() }}</span>
    </div>
    <div class="main-container">
      <div class="title-container">
        <span :style="[event.isCancelled() ? 'text-decoration: line-through' : '']"><strong>Cube in {{ event.location.city.name }}</strong></span>
      </div>
      <div class="status-container" v-if="event.isInPlanningOrCancelled()">
        <div :class="getClassForStatusBadge(this.event)"><span><strong>{{ event.getEventStatusDisplayText() }}</strong></span></div>
      </div>
      <div class="info-container">
        <div><FontAwesomeIcon :icon="'fa-calendar'"></FontAwesomeIcon><span>{{ event.getDateInSwissFormat() }}</span></div>
        <div><FontAwesomeIcon :icon="'fa-clock'"></FontAwesomeIcon><span>{{ event.getStartTime() }} - {{ event.getEndTime() }}</span></div>
        <div><FontAwesomeIcon :icon="'fa-location-dot'"></FontAwesomeIcon><span><a target='_blank' :href="event.location.googleMapsLink">{{ event.location.name }}</a></span></div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../stylesheets/button.css";
@import "../stylesheets/badge.css";
@import "../stylesheets/variables.css";

.event-container {
    display: flex;
    margin-bottom: 36px;
    padding: 16px;
    border-radius: var(--edge-radius);
    background-color: var(--background-lighter-1);
    max-width: 460px;
}

.event-container > .main-container > .title-container {
    font-size: 30px;
    padding: 12px;
    padding-left: 32px;
}

.event-container > .main-container > .status-container {
    font-size: 16px;
    padding-left: 32px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.event-container > .main-container > .info-container {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding-left: 32px;
    padding-top: 13px;
    padding-bottom: 9px;
}

.event-container > .main-container > .info-container i {
    font-size: 18px;
}

.event-container > .main-container > .info-container > div {
    margin-right: 8px;
    margin-bottom: 14px;
}

.event-container > .main-container > .info-container > div > i.fa-calendar {
    margin-right: 13px;
}

.event-container > .main-container > .info-container > div > i.fa-clock {
    margin-right: 11px;
}

.event-container > .main-container > .info-container > div > i.fa-location-dot {
    margin-right: 14px;
    padding-left: 2px;
}

.list-inline {
    display: inline;
}

.date-container {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-start;
}

.date-container > .month-abbr {
    padding-top: 8px;
    padding-bottom: 8px;

    text-align: center;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
}
</style>
