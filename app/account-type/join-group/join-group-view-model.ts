import { Observable } from "tns-core-modules/data/observable";
import * as Kinvey from 'kinvey-nativescript-sdk';
import { NavigationEntry, getFrameById } from "tns-core-modules/ui/frame/frame";
const dataStore = Kinvey.DataStore.collection('groups');

export class JoinGroupModel extends Observable {

  /** Exsisting Group information for creating in db */
  groupCode: any;
  /** The user which the group will be created under */
  user: any;
  
	constructor() {
    super();
    this.groupCode = null;
	}

  /** Validates form for joining a group */
  isValid(): boolean { return (this.groupCode) ? (true) : (false) }

  /** If form is valid, send api request to create Exsisting group */
	joinGroup(args: any) {
    if (this.isValid()) {
      this.user = Kinvey.User.getActiveUser();
      const query = new Kinvey.Query();
      query.equalTo('code', this.groupCode);
      dataStore.find(query).subscribe((groups: any) => {
        if (groups && groups.length) {
          let groupId = groups[0]._id;
          Promise.resolve(Kinvey.User.getActiveUser())
            .then((user: Kinvey.User) => {
              if (user) user.update({ group_id: groupId, is_manager: false });
              const frame = getFrameById('main-frame');
              const navigationEntry: NavigationEntry = {
                moduleName: 'central/central-page',
                clearHistory: true
              };
              frame.navigate(navigationEntry);
              return user;
            });
        }
      });
    } else console.log("NOT VALID");
  }

}