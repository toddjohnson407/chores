/**
 * This type contains the information contained
 * in a form to log and existing User in
 */
export class ExistingUserConstructor {
  constructor(
    public username: string = null,
    public password: string = null
  ) { }
}

export class ExistingUser {
  username: string;
  password: string;
}