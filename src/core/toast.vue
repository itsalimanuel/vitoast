<template>
  <transition>
    <div
      v-if="visible"
      :class="[horizontalClass, verticalProperty, withIcon, setType]"
      :style="[positionStyle, mainStyle]"
      class="absolute text-white px-4 py-3 rounded-md min-w-[300px] overflow-hidden max-w-[350px]"
    >
      <template v-if="props.type">
        <div class="relative flex items-center">
          <template
            v-if="props.type == 'success'"
            class="relative flex items-center"
          >
            <svg
              width="24"
              height="24"
              class="z-20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check_circle">
                <mask
                  id="mask0_102_121"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect
                    id="Bounding box"
                    width="24"
                    height="24"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_102_121)">
                  <path
                    id="check_circle_2"
                    d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z"
                    fill="#00DF80"
                  />
                </g>
              </g>
            </svg>
            <div class="absolute -top-10 -left-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="212"
                height="212"
                viewBox="0 0 212 212"
                fill="none"
              >
                <circle
                  cx="106"
                  cy="106"
                  r="106"
                  fill="url(#paint0_radial_102_119)"
                  fill-opacity="0.12"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_102_119"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(106 106) rotate(90) scale(106)"
                  >
                    <stop stop-color="#00ED51" />
                    <stop offset="1" stop-color="#00ED7B" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </template>
          <template
            v-else-if="props.type == 'warning'"
            class="relative flex items-center"
          >
            <svg
              width="24"
              height="24"
              class="z-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Info" clip-path="url(#clip0_102_12)">
                <path
                  id="Vector"
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="#FFD21E"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_12">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div class="absolute -top-10 -left-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="212"
                height="212"
                viewBox="0 0 138 82"
                fill="none"
              >
                <circle
                  cx="32"
                  cy="41"
                  r="106"
                  fill="url(#paint0_radial_102_19)"
                  fill-opacity="0.11"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_102_19"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(32 41) rotate(90) scale(106)"
                  >
                    <stop stop-color="#FFD426" />
                    <stop offset="1" stop-color="#FFD426" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </template>
          <template
            v-else-if="props.type == 'warning'"
            class="relative flex items-center"
          >
            <svg
              width="24"
              height="24"
              class="z-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="cancel">
                <mask
                  id="mask0_102_21"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect
                    id="Bounding box"
                    width="24"
                    height="24"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_102_21)">
                  <path
                    id="cancel_2"
                    d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z"
                    fill="#F04248"
                  />
                </g>
              </g>
            </svg>

            <div class="absolute -top-10 -left-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="212"
                height="212"
                viewBox="0 0 152 64"
                fill="none"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="120"
                  fill="url(#paint0_radial_102_28)"
                  fill-opacity="0.13"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_102_28"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(32 32) rotate(90) scale(120)"
                  >
                    <stop stop-color="#F04248" />
                    <stop offset="1" stop-color="#F04248" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </template>
          <template v-else class="relative flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#303746" />
              <g clip-path="url(#clip0_102_11)">
                <path
                  d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM17 21H15V19H17V21ZM17 17H15V11H17V17Z"
                  fill="#D9D9D9"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_11">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div class="absolute -top-10 -left-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="212"
                height="212"
                viewBox="0 0 212 212"
                fill="none"
              >
                <circle
                  cx="106"
                  cy="106"
                  r="106"
                  fill="url(#paint0_radial_102_119)"
                  fill-opacity="0.12"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_102_119"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(106 106) rotate(90) scale(106)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </template>
        </div>
      </template>
      <div class="flex flex-col gap-0.5">
        <span
          v-if="props.title"
          class="text-base font-medium text-white leading-5 tracking-[-0.408px]"
        >
          {{ props.title }}
        </span>
        <span
          v-if="props.message"
          class="text-[#C8C5C5] text-sm font-light leading-5"
        >
          {{ props.message }}
        </span>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
// @ts-nocheck
import { computed, onMounted, ref } from "vue";
import { useEventListener, useTimeoutFn } from "@vueuse/core";
import {
  CloseComponents,
  EVENT_CODE,
  TypeComponentsMap,
} from "../utils/runtime";
import { toastEmits, toastProps } from "./toast";

import type { CSSProperties } from "vue";

defineOptions({
  name: "Toast",
});

const props = defineProps(toastProps);
defineEmits(toastEmits);

const visible = ref(false);
let timer: (() => void) | null = null;

const horizontalClass = computed(() =>
  props.position.endsWith("right") ? "right-10" : "left-10"
);
const verticalProperty = computed(() =>
  props.position.startsWith("top") ? "top-10" : "bottom-10"
);
const withIcon = computed(() =>
  props.type ? "grid grid-cols-[0.3fr_1.5fr]" : "flex flex-col"
);
const mainStyle = computed<CSSProperties>(() => {
  return {
    borderRadius: "8px",
    backgroundColor: "#242C32",
    boxShadow:
      "0px 8px 10px 0px rgba(0, 0, 0, 0.20), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)",
  };
});

const setType = computed(() => {
  return TypeComponentsMap[props.type] ?? TypeComponentsMap.info;
});

function startTimer() {
  if (props.duration > 0) {
    ({ stop: timer } = useTimeoutFn(() => {
      if (visible.value) close();
    }, props.duration));
  }
}

function clearTimer() {
  timer?.();
}

function close() {
  visible.value = false;
}

function onKeydown({ code }: KeyboardEvent) {
  if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
    clearTimer(); // press delete/backspace clear timer
  } else if (code === EVENT_CODE.esc) {
    // press esc to close the notification
    if (visible.value) {
      close();
    }
  } else {
    startTimer(); // resume timer
  }
}

onMounted(() => {
  startTimer();
  visible.value = true;
});

useEventListener(document, "keydown", onKeydown);

defineExpose({
  visible,
  /** @description close notification */
  close,
});
</script>

<style scoped></style>
