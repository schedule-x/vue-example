<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";
import {createScrollControllerPlugin} from "@schedule-x/scroll-controller";
import {createEventRecurrencePlugin, createEventsServicePlugin} from "@schedule-x/event-recurrence";
import {createEventModalPlugin} from "@schedule-x/event-modal";

import {calendars} from "./calendars.ts";
import {ref, shallowRef} from "vue";
import {createCalendarControlsPlugin} from "@schedule-x/calendar-controls";

const eventsService = createEventsServicePlugin();
const calendarControls = createCalendarControlsPlugin();
const eventModal = createEventModalPlugin();

const calendarApp = shallowRef(createCalendar({
  selectedDate: '2024-06-28',
  locale: 'en-UK',
  views: [viewMonthAgenda, viewMonthGrid, viewWeek],
  defaultView: viewWeek.name,
  calendars: calendars,
  plugins: [
    eventModal,
    createDragAndDropPlugin(),
    createScrollControllerPlugin({
      initialScroll: '07:00'
    }),
    createEventRecurrencePlugin(),
    eventsService,
    calendarControls
  ],
  events: [
    {
      id: 1,
      start: '2024-06-28',
      end: '2024-06-28',
      title: 'hi',
      calendarId: 'work',
    },
    {
      id: 2,
      start: '2024-06-28 08:00',
      end: '2024-06-28 10:00',
      title: 'hi again',
      calendarId: 'work',
    },
  ],
  monthGridOptions: {
    nEventsPerDay: 3,
  },
  callbacks: {
    onClickDate(date) {
      calendarControls.setView(viewWeek.name);
      calendarControls.setDate(date);
    }
  }
}))

const closeModal = () => {
  eventModal.close();
}

const eventStyles = {
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  border: '2px solid black',
  borderRadius: '4px',
  padding: '0 4px',
}

const eventModalStyles = {
  boxShadow: '0 0 2em #123',
  backgroundColor: 'white',
  backgroundColor: 'white',
  border: '2px solid black',
  borderRadius: '4px',
  padding: '0 4px',
}

</script>

<template>
  <div>
    <ScheduleXCalendar
        :calendar-app="calendarApp"
    >
      <template #dateGridEvent="{ calendarEvent }">
        <div :style="eventStyles">
          {{ calendarEvent.title }}
        </div>
      </template>

      <template #timeGridEvent="{ calendarEvent }">
        <div :style="eventStyles">
          {{ calendarEvent.title }}
        </div>
      </template>

      <template #monthGridEvent="{ calendarEvent }">
        <div :style="eventStyles">
          {{ calendarEvent.title }}
        </div>
      </template>

      <template #eventModal="{ calendarEvent }">
        <div :style="eventModalStyles">
          {{ calendarEvent.title }}

          <button @click="closeModal"></button>
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
