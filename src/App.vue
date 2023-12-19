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

const calendarApp = createCalendar({
  selectedDate: '2023-12-19',
  locale: 'de-DE',
  views: [viewDay, viewWeek, viewMonthGrid],
  plugins: [createEventModalPlugin(), createDragAndDropPlugin()],
  events: [
    {
      id: 1,
      title: 'Event 1',
      time: {
        start: '2023-12-19',
        end: '2023-12-19',
      },
    },
  ],
})
</script>

<template>
  <ScheduleXCalendar :calendar-app="calendarApp" />
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
