<template>
  <button @click="increment">pinia ++</button>
  <h1>{{ store.count }}</h1>
  <button @click="decrement">pinia --</button>
</template>

<script setup lang="ts">
import { useCounterStore } from "src/store/pinia";
const store = useCounterStore();

const increment = () => store.increment();
const decrement = () => store.decrement();
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
