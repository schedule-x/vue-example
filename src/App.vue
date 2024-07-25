<script setup lang="ts">
import { ScheduleXCalendar, SxDatePicker } from '@schedule-x/vue'
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
// import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";
import {createScrollControllerPlugin} from "@schedule-x/scroll-controller";
import {createEventRecurrencePlugin, createEventsServicePlugin} from "@schedule-x/event-recurrence";

import {calendars} from "./calendars.ts";
import {ref, shallowRef} from "vue";
import {createCalendarControlsPlugin} from "@schedule-x/calendar-controls";

const eventsService = createEventsServicePlugin();
const calendarControls = createCalendarControlsPlugin();

const calendarApp = shallowRef(createCalendar({
  selectedDate: '2024-05-13',
  locale: 'en-UK',
  views: [viewMonthAgenda, viewMonthGrid, viewWeek],
  defaultView: viewWeek.name,
  calendars: calendars,
  plugins: [
    createDragAndDropPlugin(),
    createScrollControllerPlugin({
      initialScroll: '08:00'
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
    }
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

const datePickerModel = ref('2024-05-13')

const customComponents = {
  // timeGridEvent: CustomTimeGridEvent,
  // dateGridEvent: CustomDateGridEvent,
  // eventModal: CustomEventModal,
}

</script>

<template>
  <div>
    <ScheduleXCalendar
        :calendar-app="calendarApp"
        :custom-components="customComponents"
    >
<!--      <template #dateGridEvent>-->
<!--        hello-->
<!--      </template>-->
    </ScheduleXCalendar>

    <button @click="calendarControls.setDate('2024-12-01')">
      set date
    </button>
  </div>

  {{ datePickerModel }}

  <SxDatePicker v-model="datePickerModel" />
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
