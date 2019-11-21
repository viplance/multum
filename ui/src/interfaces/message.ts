export interface Message {
  from: string;
  id?: string;
  temporaryId?: string;
  text: string;
  to: string;
  date: string;
}
