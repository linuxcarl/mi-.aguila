type TypesBodyMessagees = string | object | Array<any>;
interface formatResponse {
  error: boolean;
  status: number;
  body: TypesBodyMessagees;
}
export const success = (
  req: string,
  res: any,
  message: TypesBodyMessagees,
  status: number
): void => {
  let statusCode = status || 200;
  const reponse: formatResponse = {
    error: false,
    status: statusCode,
    body: message || '',
  };
  res.status(statusCode).send(reponse);
};
