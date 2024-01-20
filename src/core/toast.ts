import { ExtractPropTypes, VNode } from "vue";
import { buildProps } from "./defineBuild";

export const toastTyps = [
  "suceess",
  "info",
  "warning",
  "error",
  "default",
] as const;

export const toastProps = buildProps({
  customClass: {
    type: String,
    default: "",
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 4500,
  },
  icon: {
    type: String,
  },
  id: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  offset: {
    type: Number,
    default: 0,
  },
  onClick: {
    type: Function,
    default: () => undefined,
  },
  onClose: {
    type: Function,
    required: true,
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right",
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    values: [...toastTyps, ""],
    default: "",
  },
} as const);

export type ToastProps = ExtractPropTypes<typeof toastProps>;

export const toastEmits = {
  destroy: () => true,
};

export type ToastEmits = typeof toastEmits;
export type ToastInstance = InstanceType<typeof Notification>;

export type ToastOptions = Omit<ToastProps, "id"> & {
  appendTo?: HTMLElement | string;
};

export type ToastQueueTyped = Omit<ToastOptions, "type">;

export interface ToastQueue {
  close: () => void;
}
export type ToastParams = Partial<ToastOptions> | string | VNode;
export type ToastParamsTyped = Partial<ToastQueueTyped> | string | VNode;

export type ToastFunction = ((options?: ToastParams) => ToastQueue) & {
  closeAll: () => void;
};
export type ToastFunctionTyped = (options?: ToastParamsTyped) => ToastQueue;

export interface Toast extends ToastFunction {
  sucess: ToastFunctionTyped;
  info: ToastFunctionTyped;
  warning: ToastFunctionTyped;
  error: ToastFunctionTyped;
  default: ToastFunctionTyped;
}

export interface ToastQueueItem {
  vm: VNode;
}

export type ToastQueueList = ToastQueueItem[];
