import Session from "./Session";

export default interface Schedule {
  data: {
    [key: string]: Session[];
  };
}
