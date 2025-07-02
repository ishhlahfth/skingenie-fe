export interface ApiResponse<T> {
  data: T | T[];
  status: number;
  message: string;
}
