<script setup lang="ts">
// @ts-nocheck
import { ref } from "vue";
import toast from "../dist/vitoast.es";
import { GUI } from "dat.gui";
const duration = ref(3000);
const position = ref("top-left");
const type = ref("info");
const title = ref("Charger reserved");
const message = ref("Opera Passage station reserved successfully.");
const gui = new GUI();
const toastDuration = gui.addFolder("Toast Duration");
toastDuration
  .add(duration, "value", 0, 10000, 100)
  .name("Duration")
  .onChange((value: any) => {
    duration.value = value;
  });

const toastPosition = gui.addFolder("Toast Position");
toastPosition
  .add(position, "value", [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ])
  .name("Position")
  .onChange((value: any) => {
    position.value = value;
  });

const toastTitle = gui.addFolder("Toast Title");
toastTitle
  .add(title, "value")
  .name("Title")
  .onChange((value: any) => {
    title.value = value;
  });
const toastType = gui.addFolder("Toast Type");

toastType
  .add(type, "value", ["info", "success", "warning", "error"])
  .name("Type")
  .onChange((value: any) => {
    type.value = value;
  });

const toastMessage = gui.addFolder("Toast Message");
toastMessage
  .add(message, "value")
  .name("Message")
  .onChange((value: any) => {
    message.value = value;
  });
const show = () => {
  toast({
    position: position.value,
    duration: duration.value,
    type: type.value,
    title: title.value,
    message: message.value,
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
