<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  viewDay,
  viewWeek,
  viewMonthGrid,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import CustomTimeGridEvent from "./components/CustomTimeGridEvent.vue";
import {useEventsStore} from "./store/events-store.ts";

const calendarApp = createCalendar({
  selectedDate: '2023-12-19',
  locale: 'en-UK',
  views: [viewDay, viewWeek, viewMonthGrid],
  defaultView: viewWeek.name,
  firstDayOfWeek: 0,
  plugins: [createEventModalPlugin(), createDragAndDropPlugin()],
  events: [
    {
      id: 1,
      title: 'Event 1',
      start: '2023-12-19',
      end: '2023-12-19',
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2023-12-20 12:00',
      end: '2023-12-20 13:00',
    },
    {
      id: 3,
      title: 'Event 3',
      start: '2023-12-20 04:00',
      end: '2023-12-20 08:10',
    },
  ],
})

const customComponents = {
  timeGridEvent: CustomTimeGridEvent,
  // dateGridEvent: CustomDateGridEvent,
}

const eventsStore = useEventsStore()

</script>

<template>
  <div>
    Selected events: {{ eventsStore.chosenEvents.map(e => e.id) }}

    <ScheduleXCalendar
        :calendar-app="calendarApp"
        :custom-components="customComponents"
    >
      <template #dateGridEvent="{ calendarEvent }">
        <div :style="{ backgroundColor: 'green', color: 'white', width: '100%', height: '100%' }">
          {{ calendarEvent.title }}
          <input type="checkbox" @change="eventsStore.toggleEvent(calendarEvent.id)">
        </div>
      </template>
    </ScheduleXCalendar>
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
