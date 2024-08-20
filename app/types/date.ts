import { repeatInterval } from "../enums/repeatInterval";

export type Date = {
  start_date: string;
  end_date: string;
  title: string;
  body: string;
  repeat_interval: repeatInterval;
}