import { Observable } from "tns-core-modules/data/observable";
import * as Kinvey from 'kinvey-nativescript-sdk';
import { getFrameById, NavigationEntry } from "tns-core-modules/ui/frame/frame";
import { ExistingUser } from './existing-user';
import { KinveyHttpRequest } from "kinvey-js-sdk/lib/http";

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

  public loginUser(): Promise<any> {
    if (this.isValid()) {
      console.log(this.existingUser);
      let _user: Kinvey.User = Kinvey.User.getActiveUser();
      console.log(_user);
      if (_user) return _user.logout().then(() => this.performLogin());
      else return this.performLogin();
    }
  }

  private performLogin() {
    return Kinvey.User.login(this.existingUser.username, this.existingUser.password).then((_user: any) => {
      if (Kinvey.User.getActiveUser()) {
        const frame = getFrameById('main-frame');
        const navigationEntry: NavigationEntry = {
          moduleName: 'central/central-page',
          clearHistory: true
        };
        frame.navigate(navigationEntry);
      }
    });
  }
  
  /** If form is valid, send api request to sign in User */
	// loginUser(args: any) {
  //   // if (this.isValid()) {

  //     const frame = getFrameById('main-frame');
  //     const navigationEntry: NavigationEntry = {
  //       moduleName: 'central/central-page',
  //       clearHistory: true
  //     };

  //     // let promises: Array<any> = [ Kinvey.ping(), Kinvey.User.logout() ]


  //     Kinvey.ping().then((status: any) => {
  //       console.log('Ping Status')
  //       console.log(status);
  //       console.log('Active User', Kinvey.User.getActiveUser())
  //       let user = new Kinvey.User();
  //       // return Kinvey.User.login({ username: this.existingUser.username, password: this.existingUser.password })
  //       return user.login({ username: 'toddjohnson407', password: 'pizza200' })
  //     })
  //     .then((user: any) => {
  //       console.log('here', user);
  //     })
  //     .catch((error: any) => console.log('Promise Resolving Error', error.message, error.name))

      // Kinvey.ping()
      // .then(test => {
      //   console.log('Valid', test);
      // })
      // .catch(error => {
      //   console.log('ping failed', error);
      // })
      // Kinvey.User.login(this.existingUser.username, this.existingUser.password)
      //   .then(user => {
      //     console.log('okay');
      //     console.log(user);
      //   })
      //   .catch(error => {
      //     console.log('ERROR');
      //     console.log(error);
      //   })

      // let user = new Kinvey.User();
      // let userPromise = user.login({
      //   username: this.existingUser.username,
      //   password: this.existingUser.password
      // })
      // // if (Kinvey.User.getActiveUser()) frame.navigate(navigationEntry);
      // if (Kinvey.User.getActiveUser() !== null) {
      //   console.log('user exists');
      //   userPromise = activeUser.me();
      // }
      // userPromise.then((user: Kinvey.User) => {
      //   console.log('resolving promise', user);
      //   if (!user) user =  new Kinvey.User;
      //   user.login({
      //     username: this.existingUser.username,
      //     password: this.existingUser.password
      //   })
      //     .then((user: Kinvey.User) => {
      //       console.log('Yay');
      //       console.log(user);
      //       const frame = getFrameById('main-frame');
      //       frame.navigate(navigationEntry);
      //     })
      //     .catch((error: any) => {
      //       console.log(error.message);
      //       console.log(error.name);
      //       console.log(error.debug);
      //       console.log(error);
      //     });
      // })
    // }
  // }
  
  /** Validates form for user registration */
  isValid(): boolean {
    let valid = true;
    Object.entries(this.existingUser).forEach(([key, value]) => (!value) && (valid = false));
    return valid;
  }

}
