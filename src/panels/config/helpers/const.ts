import type { Counter } from "../../../data/counter";
import type { InputBoolean } from "../../../data/input_boolean";
import type { InputButton } from "../../../data/input_button";
import type { InputDateTime } from "../../../data/input_datetime";
import type { InputNumber } from "../../../data/input_number";
import type { InputSelect } from "../../../data/input_select";
import type { InputSelectRad } from "../../../data/input_select_rad";
import type { InputText } from "../../../data/input_text";
import type { Schedule } from "../../../data/schedule";
import type { Timer } from "../../../data/timer";

export const HELPER_DOMAINS = [
  "input_boolean",
  "input_button",
  "input_text",
  "input_number",
  "input_datetime",
  "input_select",
  "input_select_rad",
  "counter",
  "timer",
  "schedule",
];

export type Helper =
  | InputBoolean
  | InputButton
  | InputText
  | InputNumber
  | InputSelect
  | InputSelectRad
  | InputDateTime
  | Counter
  | Timer
  | Schedule;
