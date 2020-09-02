import * as boom from '@hapi/boom';
import { config } from '../../config/index';

function withErrorStack(error: object, stack: string): object {
  if (config.dev) {
    return { ...error, stack };
  }
  return error;
}

export function logErrors(error: any, req: any, res: any, next: any): void {
  next(error);
}

export function wrapErrors(err: any, req: any, res: any, next: any): void {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

export function errorHandler(err: any, req: any, res: any, next: any): void {
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}
