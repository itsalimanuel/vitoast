<script setup lang="ts">
import toast from "./core";

const show = () => {
  toast({
    position: "bottom-left",
    duration: 30000,
    type: "info",
    title: "Charger reserved",
    message: "Opera Passage station reserved successfully.",
  });
};
</script>

<template>
  <!-- <viToaster position="top-center" reverseOrder="{false}" /> -->
  <div class="flex items-center justify-center">
    <button @click="show">Show Toast</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
