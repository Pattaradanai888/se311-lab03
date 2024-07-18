<script setup lang="ts">
import type { Passenger } from '@/type'
import type { PropType } from 'vue'

defineProps({
  passenger: {
    type: Object as PropType<Passenger>,
    require: true
  }
})
</script>
<template>
  <div v-if="passenger">
    <p>Gender: {{ passenger.gender }}</p>
    <p>Email: {{ passenger.email }}</p>
    <p>Source: {{ passenger.Source }}</p>
    <p>Destination: {{ passenger.Destination }}</p>
    <p>{{ passenger.ip_address }}</p>
  </div>
</template>
