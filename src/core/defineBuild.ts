// @ts-nocheck
type EpPropKey = "value" | "modelValue";
type NativePropType = string | number | boolean;

type EpPropInput<T, P, M, R, E> = {
  epPropKey: EpPropKey;
  type: T;
  required?: R;
  default?: P | (() => P);
  validator?: (value: any) => boolean;
  model?: M;
  event?: E;
};

type IfEpProp<T, P, Q> = T extends { [key: string]: { epPropKey: any } }
  ? Q
  : P;

type IfNativePropType<T, P, Q> = T extends NativePropType ? P : Q;

type EpPropConvert<T> = T extends EpPropInput<
  infer Type,
  infer Prop,
  infer Model,
  infer Required,
  infer Event
>
  ? {
      type: Type;
      required: Required;
      default: Prop | (() => Prop);
      validator: (value: any) => boolean;
      model: Model;
      event: Event;
    }
  : never;

type KeyValuePair<T> = [string, T];

const fromPairs = <T>(pairs: KeyValuePair<T>[]): Record<string, T> => {
  return pairs.reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, T>
  );
};

export const buildProps = <
  Props extends Record<
    string,
    | { [epPropKey]: true }
    | NativePropType
    | EpPropInput<any, any, any, any, any>
  >,
>(
  props: Props
): {
  [K in keyof Props]: IfEpProp<
    Props[K],
    Props[K],
    IfNativePropType<Props[K], Props[K], EpPropConvert<Props[K]>>
  >;
} => {
  const result: KeyValuePair<any>[] = Object.entries(props).map(
    ([key, option]) => [key, buildProp(option as any, key)]
  );

  return fromPairs(result) as any;
};

const buildProp = (option: any, key: string) => {
  return option;
};
