<script setup lang="ts">
import type { Passenger } from '@/type'
defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <RouterLink
    class="passenger-link"
    :to="{ name: 'passenger-detail', params: { id: passenger?.id } }"
  >
    <div class="event-class">
      <div class="event-type">
        <h2>{{ passenger?.first_name }} {{ passenger?.last_name }}</h2>
        <span>{{ passenger?.id }}</span>
      </div>
    </div>
  </RouterLink>
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
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
