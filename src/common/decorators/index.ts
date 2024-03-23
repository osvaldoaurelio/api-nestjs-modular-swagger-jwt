/*
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { validate } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'isCPF', async: false })
export class IsCPFConstraint implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    return validate(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'CPF inválido';
  }
}

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'isCPF',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCPFConstraint,
    });
  };
}
*/

/*
import { IsCPF } from './is-cpf.decorator';

export class UserDto {
  @IsString()
  name: string;

  @IsCPF()
  cpf: string;
}
*/
