// @ts-nocheck
import { createVNode, render } from "vue";

import ToastCore from "./toast.vue";
import type { AppContext, Ref, VNode } from "vue";
import {
  ToastOptions,
  ToastProps,
  ToastQueueList,
  Toast,
  ToastFunction,
  toastTyps,
} from "./toast";

const toasts: Record<ToastOptions["position"], ToastQueueList> = {
  "top-right": [],
  "top-left": [],
  "bottom-right": [],
  "bottom-left": [],
};

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === "undefined") return false;
  return e instanceof Element;
};

const GAP_SIZE = 16;
let seed = 1;

const toast: ToastFunction & Partial<Toast> & { _context: AppContext | null } =
  function (options = {}, context: AppContext | null = null) {
    if (true) {
      toast.closeAll = () => undefined;
    }
    if (typeof options === "string" || options.type === undefined) {
      options = {
        message: options,
      };
    }
    const position = options.position || "top-right";

    let verticalOffset = options.offset || 0;
    toasts[position].forEach((item) => {
      verticalOffset += (item.el?.offsetHeight || 0) + GAP_SIZE;
    });
    verticalOffset += GAP_SIZE;

    const id = `toast-${seed++}`;
    const userOnClose = options.onClose;
    const props: Partial<ToastProps> = {
      ...options,
      offset: verticalOffset,
      id,
      onClose: () => {
        close(id, position, userOnClose);
      },
    };
    let appendTo: HTMLElement | null = document.body;
    if (isElement(options.appendTo)) {
      appendTo = options.appendTo;
    } else if (typeof options.appendTo === "string") {
      appendTo = document.querySelector(options.appendTo);
    }

    if (!isElement(appendTo)) {
      appendTo = document.body;
    }

    const container = document.createElement("div");

    const vm = createVNode(ToastCore, props);
    render(vm, container);
    toasts[position].push({
      id,
      vm,
      el: container.firstChild as HTMLElement,
    });
    appendTo.appendChild(container.firstChild as HTMLElement);
    return {
      close: () => {
        props.onClose?.();
      },
    };
  };

toastTyps.forEach((type) => {
  toast[type] = (options = {}) => {
    if (typeof options === "string") {
      options = {
        message: options,
      };
    }
    return toast({
      ...options,
      type,
    });
  };
});

export function close(
  id: string,
  position: ToastOptions["position"],
  userOnClose?: (vm: VNode) => void
): void {
  const orientedNotifications = toasts[position];
  const idx = orientedNotifications.findIndex(
    ({ vm }) => vm.component?.props.id === id
  );
  if (idx === -1) return;
  const { vm } = orientedNotifications[idx];
  if (!vm) return;

  userOnClose?.(vm);

  const removedHeight = vm.el?.offsetHeight || 0;
  const verticalPos = position.split("-")[0];
  orientedNotifications.splice(idx, 1);
  const len = orientedNotifications.length;
  if (len < 1) return;

  for (let i = idx; i < len; i++) {
    const el = orientedNotifications[i].vm.el;
    if (el) {
      const pos =
        Number.parseInt(el.style[verticalPos], 10) - removedHeight - GAP_SIZE;
      orientedNotifications[i].vm.component!.props.offset = pos;
    }
  }
}

export function closeAll(): void {
  for (const orientedNotifications of Object.values(toasts)) {
    orientedNotifications.forEach(({ vm }) => {
      (vm.component!.exposed as { visible: Ref<boolean> }).visible.value =
        false;
    });
  }
}

toast.closeAll = closeAll;
toast._context = null;

export default toast as Toast;
