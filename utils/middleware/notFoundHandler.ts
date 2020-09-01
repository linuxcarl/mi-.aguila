import * as boom from '@hapi/boom';

export function notFoundHandler(req: any, res: any): void {
  const {
    output: { statusCode, payload },
  } = boom.notFound();
  res.status(statusCode).json(payload);
}
