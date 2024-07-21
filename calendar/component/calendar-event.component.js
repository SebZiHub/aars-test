import { ref } from 'vue'
export default {
  methods: {
    getClassForDayBadge: (event) => {
      if (event.isNextEventComingUp()) {
        return "badge badge-big badge-primary";
      } else {
        return "badge badge-big badge-secondary";
      }
    }
  },

  mounted() {
  },
  props: ['event'],
  template: `
  <i data-feather="circle"></i>
  <div class="event-container" v-if="event.isFutureEvent()">
    <div class="date-container">
      <span :class="getClassForDayBadge(this.event)"><span>{{ event.getDay() }}</span></span>
      <span class="month-abbr">{{ event.getMonthAbbreviation() }}</span>
    </div>
    <div class="main-container">
      <div class="title-container">
        <span><strong>Cube in {{ event.location.city.name }}</strong></span>
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
