import * as boom from '@hapi/boom';
import * as joi from 'joi';

export function validate(data: object, schema: joi.SchemaMap): object {
  const { error } = joi.object(schema).validate(data);
  return error;
}

export function validationHandler(schema: joi.SchemaMap, check = 'body'): any {
  return function (req: any, res: any, next: any): void {
    const error: any = validate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}
