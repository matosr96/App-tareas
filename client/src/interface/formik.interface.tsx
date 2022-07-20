export interface MyFormValues {
  firstName: string;
}
export interface Task {
  id: number;
  title: string;
  description: string;
  done?:boolean;
}