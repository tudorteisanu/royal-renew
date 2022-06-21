export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegisterInterface extends LoginInterface{
  name: string;
  age: number;
  birthdate: Date|string|number;
}
