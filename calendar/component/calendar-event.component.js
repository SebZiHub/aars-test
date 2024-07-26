import { ref } from 'vue'
export default {
  methods: {
    getClassForDayBadge: (event) => {
      if (event.isNextEventComingUp()) {
        return "badge badge-big badge-primary";
      } else {
        return "badge badge-big badge-secondary";
      }
    },

    getClassForStatusBadge: (event) => {
      if (event.eventStatus === "cancelled") {
          return "badge badge-small badge-error";
      } else if (event.eventStatus === "in-planning") {
        return "badge badge-small badge-warn";
      } else {
        return "";
      }
    }
  },
  mounted() {},
  props: ['event'],
  template: `
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
        <div><i class="fa-solid fa-calendar" aria-hidden="true"></i><span>{{ event.getDateInSwissFormat() }}</span></div>
        <div><i class="fa-solid fa-clock" aria-hidden="true"></i><span>{{ event.getStartTime() }} - {{ event.getEndTime() }}</span></div>
        <div><i class='fa-solid fa-location-dot' aria-hidden='true'></i><span><a target='_blank' :href="event.location.googleMapsLink">{{ event.location.name }}</a></span></div>
      </div>
    </div>
  </div>
  `
} 
