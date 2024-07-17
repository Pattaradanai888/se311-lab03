<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/types'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const passengers = ref<Passenger[]>(null)
onMounted(() => {
  axios
    .get('https://my-json-server.typicode.com/se331-2022/passengerdb/passenger?_page=1&_limit=5')
    .then((response) => {
      passengers.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
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
