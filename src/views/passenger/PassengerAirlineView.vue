<script setup lang="ts">
import { ref } from 'vue'
import PassengerService from '@/services/PassengerService'
import type { Airline } from '@/type'
const passenger = ref<Airline | null>(null)

const props = defineProps({
  id: String
})

PassengerService.getAirlineById(Number(props.id))
  .then((response) => {
    passenger.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>
<template>
  <div v-if="passenger">
    <p>Airline: {{ passenger.AirlineName }}</p>
    <p>Emil: {{ passenger.email }}</p>
    <p>Address: {{ passenger.address }}</p>
  </div>
</template>
