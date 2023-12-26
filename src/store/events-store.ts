import { defineStore } from 'pinia'
import {ref} from "vue";

export const useEventsStore = defineStore('events', () =>{
  const chosenEvents = ref<{ id: string | number, [key: string]: unknown }[]>([])

  const toggleEvent = (eventId: string | number) => {
    console.log('toggleEvent', eventId)
    const index = chosenEvents.value.findIndex(event => event.id === eventId)
    if (index === -1) {
      chosenEvents.value.push({ id: eventId })
    } else {
      chosenEvents.value.splice(index, 1)
    }

    console.log('chosenEvents', chosenEvents.value)
  }

  return {
    chosenEvents,
    toggleEvent
  }
})