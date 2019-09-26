/**
 * This type contains the information contained
 * in a form to create a new User.
 */
export class NewUserConstructor {
  constructor(
    public first_name: string = null,
    public last_name: string = null,
    public username: string = null,
    public email: string = null,
    public password: string = null,
    public confirm_password: string = null
  ) { }
}

export class NewUser {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}