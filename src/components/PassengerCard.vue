<script setup lang="ts">
import { defineProps } from 'vue'
import type { Passenger } from '@/type'
defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <div class="event-class">
    <div class="event-type">
      <h2>{{ passenger.first_name }} {{ passenger.last_name }}</h2>
      <span>{{ passenger.id }}</span>
    </div>
  </div>
</template>

<style scoped>
.event-type {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}
.event-type:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
