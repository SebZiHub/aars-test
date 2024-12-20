import { Location } from './location';

export class Event {
    start: Date;
    end: Date;
    location: Location;
    eventStatus: string;
    previousEvent: Event | null = null;

    constructor(start: Date, end: Date, location: Location, eventStatus: string) {
        this.start = start;
        this.end = end;
        this.location = location;  
        this.eventStatus = eventStatus;
    }

    getMonthAbbreviation(): string {
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

        // @ts-ignore
        return abbreviationMap[this.start.getMonth() + 1];
    }

    getDay(): number {
        return this.start.getDate();
    }

    getDateInSwissFormat(): string {
        return this.start.toLocaleDateString("de-CH");
    }

    getStartTime(): string {
        return this.start.toLocaleTimeString("de-CH", {hour: '2-digit', minute:'2-digit'});
    }

    getEndTime(): string {
        return this.end.toLocaleTimeString("de-CH", {hour: '2-digit', minute:'2-digit'});
    }

    isFutureEvent(): boolean {
        return new Date() <= this.start;
    }

    isNextEventComingUp(): boolean {
        const now = new Date();
        const noPreviousEventOrInThePast = (this.previousEvent === null || this.previousEvent.start < now);
        const isEventInFuture = this.start >= now;

        return noPreviousEventOrInThePast && isEventInFuture;
    }

    getEventStatusDisplayText(): string {
        if (this.eventStatus === "in-planning") {
          return "Noch nicht bestätigt";
        }   
        if (this.eventStatus === "cancelled") {
          return "Abgesagt";
        }   
        return "";
    }

    isInPlanningOrCancelled(): boolean {
        return this.eventStatus === "in-planning" || this.eventStatus === "cancelled";
    }

    isCancelled(): boolean {
        return this.eventStatus === "cancelled";
    }
}
