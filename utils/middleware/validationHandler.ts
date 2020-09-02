import boom from '@hapi/boom';
import Joi from '@hapi/joi';

function validate(data: object, schema: Joi.SchemaMap): any {
  const { error } = Joi.object(schema).validate(data);
  return error;
}

export function validationHandler(
  schema: Joi.SchemaMap,
  check: string = 'body'
): any {
  return function (req: any, res: any, next: any): void {
    const error: any = validate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}
