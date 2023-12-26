<template>
  <div
    class="custom-date-grid-event"
    :style="{
      width: '100%',
      height: '100%',
      border: '2px solid black',
      borderRadius: '4px',
    }"
  >
    <div class="left-arrow">&larr;</div>

    <span>
      <input v-model="isChecked" type="checkbox">
      {{ calendarEvent.title }}
    </span>

    <div class="right-arrow">&rarr;</div>
  </div>
</template>

<script lang="ts" setup>
import {PropType, ref, watch} from 'vue'
import {useEventsStore} from "../store/events-store.ts";

const  props = defineProps({
  calendarEvent: {
    type: Object as PropType<{ title: string; id: number | string }>,
    required: true,
  },
})

const isChecked = ref(false)

watch(isChecked, () => {
  eventsStore.toggleEvent(props.calendarEvent!.id)
})

const eventsStore = useEventsStore()

</script>

<style lang="scss">
.custom-date-grid-event {
  position: relative;
  overflow: hidden;
  padding: 0 4px;
  font-size: 14px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  border: 2px solid black;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #eee;
  }

  .sx__date-grid-event--overflow-left & {
    padding-left: 24px;
  }
}

.left-arrow {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: none;

  .sx__date-grid-event--overflow-left & {
    display: block;
  }
}

.right-arrow {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: none;

  .sx__date-grid-event--overflow-right & {
    display: block;
  }
}
</style>
