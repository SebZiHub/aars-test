import { ref } from 'vue'
export default {
  methods: {
    getClassForDayBadge: (event) => {
      if (event.isNextEventComingUp()) {
        return "badge badge-primary";
      } else {
        return "badge badge-secondary";
      }
    }
  },

  mounted() {
    // console.log(this.event);
  },
  props: ['event'],
  template: `
  <div class="row" v-if="event.isFutureEvent()">
    <div class="col-2">
      <h1><span :class="getClassForDayBadge(this.event)"><span>{{ event.getDay() }}</span></span></h1>
      <p><span>{{ event.getMonthAbbreviation() }}</span></p>
    </div>
    <div class="col-10">
      <h3><strong>Cube in {{ event.location.city.name }}</strong></h3>
      <ul class="list-inline">
            <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i>{{ event.getDateInSwissFormat() }}</li>
        <li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i>{{ event.getStartTime() }} - {{ event.getEndTime() }}</li>
        <span>
          <li class='list-inline-item'><i class='fa fa-location-arrow' aria-hidden='true'></i><a target='_blank' :href="event.location.googleMapsLink">{{ event.location.name }}</a></li>
        </span>
      </ul>
    </div>
  </div>
  `
} 