<script setup lang="ts">
import { ref } from 'vue'
import type { Passenger } from '@/type'
import PassengerService from '@/services/PassengerService'
const passenger = ref<Passenger | null>(null)

const props = defineProps({
  id: String
})

PassengerService.getDetailById(Number(props.id))
  .then((response) => {
    passenger.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>
<template>
  <div v-if="passenger">
    <h1>{{ passenger.first_name }} {{ passenger.last_name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'passenger-detail', params: { id } }"> Details </router-link> |
      <router-link :to="{ name: 'passenger-airline', params: { id } }"> Airline </router-link>
    </div>
    <RouterView :passenger="passenger"></RouterView>
  </div>
</template>
