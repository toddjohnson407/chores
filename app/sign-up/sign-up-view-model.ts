import { Observable } from "tns-core-modules/data/observable";
import * as Kinvey from 'kinvey-nativescript-sdk';
import { NewUser } from './new-user';
import { NavigationEntry, getFrameById } from "tns-core-modules/ui/frame/frame";

export class RegisterModel extends Observable {

  /** New User information for creating in db */
  newUser: NewUser;
  
	constructor() {
    super();
    this.newUser = {
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      password: null,
      confirm_password: null
    };
	}

  /** If form is valid, send api request to create new user */
	registerUser(args: any) {
    if (this.isValid()) {

      const registerPromise = Kinvey.User.signup({
        username: this.newUser.username,
        password: this.newUser.password,
        email: this.newUser.email,
        first_name: this.newUser.first_name,
        last_name: this.newUser.last_name
      })
        .then((user: Kinvey.User) => {
          const frame = getFrameById('main-frame');
          frame.navigate('account-type/account-type-page');
          console.log(user);
        })
        .catch((error: any) => {
          console.log(error);
        });
      console.log("VALID");

    } else console.log("NOT VALID");
  }
  
  /** Validates form for user registration */
  isValid(): boolean {
    let valid = true;
    Object.entries(this.newUser).forEach(([key, value]) => (!value) && (valid = false));
    if (this.newUser.password !== this.newUser.confirm_password) valid = false;
    return valid;
  }

}
