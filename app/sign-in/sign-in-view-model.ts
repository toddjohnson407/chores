import { Observable } from "tns-core-modules/data/observable";
import * as Kinvey from 'kinvey-nativescript-sdk';
import { getFrameById } from "tns-core-modules/ui/frame/frame";
import { ExistingUser } from './existing-user';

export class LoginModel extends Observable {

  /** User information required to sign in */
  existingUser: ExistingUser;
  
	constructor() {
    super();
    this.existingUser = {
      username: null,
      password: null
    };
	}

  /** If form is valid, send api request to sign in User */
	loginUser(args: any) {
    if (this.isValid()) {
      const loginPromise = Kinvey.User.signup({
        username: this.existingUser.username,
        password: this.existingUser.password
      })
        .then((user: Kinvey.User) => {
          console.log(user);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }
  
  /** Validates form for user registration */
  isValid(): boolean {
    let valid = true;
    Object.entries(this.existingUser).forEach(([key, value]) => (!value) && (valid = false));
    return valid;
  }

}
