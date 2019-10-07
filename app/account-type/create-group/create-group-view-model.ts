import { Observable } from "tns-core-modules/data/observable";
import * as Kinvey from 'kinvey-nativescript-sdk';
import { NewGroup } from './new-group';
import { NavigationEntry, getFrameById } from "tns-core-modules/ui/frame/frame";
const dataStore = Kinvey.DataStore.collection('groups');

export class NewGroupModel extends Observable {

  /** New Group information for creating in db */
  newGroup: NewGroup;
  /** The user which the group will be created under */
  user: any;
  
	constructor() {
    super();
    this.newGroup = {
      name: null,
      code: null,
    };
	}

  /** Validates form for group registration */
  isValid(): boolean {
    let valid = true;
    Object.entries(this.newGroup).forEach(([key, value]) => (!value) && (valid = false));
    return valid;
  }

  /** If form is valid, send api request to create new group */
	registerGroup(args: any) {
    if (this.isValid()) {
      this.user = Kinvey.User.getActiveUser();
      dataStore.save({
        name: this.newGroup.name,
        max_users: 10,
        code: this.newGroup.code,
        manager_id: this.user._id
      })
      .then(group => {
        // Update the active users’ group_id.
        Promise.resolve(Kinvey.User.getActiveUser())
          .then((user: Kinvey.User) => {
            if (user) return user.update({ group_id: group._id });
            const frame = getFrameById('main-frame');
            frame.navigate('central/central-page');
            return user;
          })
      });
    } else console.log("NOT VALID");
  }

}
