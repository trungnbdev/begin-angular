export interface HttpResponse<Type> {
  data: Type;
  code?: number;
}
