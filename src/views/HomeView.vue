<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService'
import type { Passenger } from '@/types'
import { ref } from 'vue'

const passengers = ref<Passenger[]>(null)

PassengerService.getPassenger()
  .then((response) => {
    passengers.value = response.data
  })
  .catch((error) => {
    console.error('There was an error!', error)
  })
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="container">
    <div>
      <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
