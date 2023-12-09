export interface Task {
  id: number;
  userId: number;
  title: string;
  description: string;
  statusId: number;
  dueDate: string; // ISO 8601形式の日付文字列として扱います
}
