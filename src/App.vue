<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
// import CustomTimeGridEvent from "./components/CustomTimeGridEvent.vue";
// import {useEventsStore} from "./store/events-store.ts";
// import CustomEventModal from "./components/CustomEventModal.vue";
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";
import {createScrollControllerPlugin} from "@schedule-x/scroll-controller";
import getAll from './mock-api/get-all.json'
import {onMounted} from "vue";
import {createEventRecurrencePlugin, createEventsServicePlugin} from "@schedule-x/event-recurrence";
import { CalendarEvent } from '@schedule-x/calendar'

const eventsService = createEventsServicePlugin();

const calendarApp = createCalendar({
  selectedDate: '2024-05-13',
  locale: 'en-UK',
  views: [viewMonthAgenda, viewMonthGrid, viewWeek],
  defaultView: viewMonthAgenda.name,
  plugins: [
    createEventModalPlugin(),
    createDragAndDropPlugin(),
    createScrollControllerPlugin(),
    createEventRecurrencePlugin(),
    eventsService
  ],
  events: [],
  monthGridOptions: {
    nEventsPerDay: 3,
  }
})

const customComponents = {
  // timeGridEvent: CustomTimeGridEvent,
  // dateGridEvent: CustomDateGridEvent,
  // eventModal: CustomEventModal,
}

// const eventsStore = useEventsStore()
console.log(eventsService)

const fetchEventsFromMockAPI = async () => {
  const events: CalendarEvent[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(getAll)
    }, 500)
  })

  eventsService.set(events)
}

onMounted(async () => {
  await fetchEventsFromMockAPI()
})

</script>

<template>
  <div>
    <ScheduleXCalendar
        :calendar-app="calendarApp"
        :custom-components="customComponents"
    >
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
