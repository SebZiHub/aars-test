export class Event {
    start;
    end;
    location;
    eventStatus;
    previousEvent = null;

    constructor(start, end, location, eventStatus) {
        this.start = start;
        this.end = end;
        this.location = location;  
        this.eventStatus = eventStatus;
    }

    getMonthAbbreviation() {
        const abbreviationMap = {
            1: "Jan",
            2: "Feb",
            3: "Mär",
            4: "Apr",
            5: "Mai",
            6: "Jun",
            7: "Jul",
            8: "Aug",
            9: "Sep",
            10: "Okt",
            11: "Nov",
            12: "Dez",
        };

        return abbreviationMap[this.start.getMonth() + 1];
    }

    getDay() {
        return this.start.getDate();
    }

    getDateInSwissFormat() {
        return this.start.toLocaleDateString("de-CH");
    }

    getStartTime() {
        return this.start.toLocaleTimeString("de-CH", {hour: '2-digit', minute:'2-digit'});
    }

    getEndTime() {
        return this.end.toLocaleTimeString("de-CH", {hour: '2-digit', minute:'2-digit'});
    }

    isFutureEvent() {
        return new Date() <= this.start;
    }

    isNextEventComingUp() {
        const now = new Date();
        const noPreviousEventOrInThePast = (this.previousEvent === null || this.previousEvent.start < now);
        const isEventInFuture = this.start >= now;

        return noPreviousEventOrInThePast && isEventInFuture;
    }

    getEventStatusDisplayText() {
        if (this.eventStatus === "in-planning") {
          return "In Planung";
        }   
        if (this.eventStatus === "cancelled") {
          return "Abgesagt";
        }   
        return "";
    }

    isInPlanningOrCancelled() {
        return this.eventStatus === "in-planning" || this.eventStatus === "cancelled";
    }

    isCancelled() {
        return this.eventStatus === "cancelled";
    }
}
