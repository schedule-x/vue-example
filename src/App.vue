<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  viewDay,
  viewWeek,
  viewMonthGrid,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import CustomTimeGridEvent from "./components/CustomTimeGridEvent.vue";
import {useEventsStore} from "./store/events-store.ts";

const calendarApp = createCalendar({
  selectedDate: '2024-04-01',
  locale: 'en-UK',
  views: [viewDay, viewWeek, viewMonthGrid],
  defaultView: viewWeek.name,
  firstDayOfWeek: 0,
  plugins: [],
  events: [
    {
      id: 1,
      start: '2024-04-01 10:00',
      end: '2024-04-01 12:00',
      title: 'Event 1',
    },
    {
      id: 2,
      start: '2024-04-01 14:00',
      end: '2024-04-01 16:00',
      title: 'Event 2',
    }
  ],
})

const customComponents = {
  timeGridEvent: CustomTimeGridEvent,
  // dateGridEvent: CustomDateGridEvent,
}

const eventsStore = useEventsStore()

const setEvents = () => {
  calendarApp.events.set([
    {
      id: 1,
      start: '2024-04-01 10:00',
      end: '2024-04-01 12:00',
    }
  ])
}

</script>

<template>
  <div>
    Selected events: {{ eventsStore.chosenEvents.map(e => e.id) }}

    <ScheduleXCalendar
        :calendar-app="calendarApp"
        :custom-components="customComponents"
    >
    </ScheduleXCalendar>

    <button @click="setEvents">Set new events</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
