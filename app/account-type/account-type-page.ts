import { EventData } from "tns-core-modules/ui/page/page";
import { NavigationEntry, getFrameById } from "tns-core-modules/ui/frame/frame";
import * as Kinvey from 'kinvey-nativescript-sdk';


export function navigatingTo(args: EventData) {

}

export function joinGroup(args: EventData) {
  const frame = getFrameById("main-frame");
  const navigationEntry: NavigationEntry = {
    moduleName: 'account-type/join-group/join-group-page',
    clearHistory: true
  };
  if (frame) frame.navigate(navigationEntry);
}

export function createGroup(args: EventData) {
  const frame = getFrameById("main-frame");
  const navigationEntry: NavigationEntry = {
    moduleName: 'account-type/create-group/create-group-page',
  };
  if (frame) frame.navigate(navigationEntry);
}
export function pageLoaded() {
  const frame = getFrameById("main-frame");
  let user = Kinvey.User.getActiveUser();
  const navigationEntry: NavigationEntry = {
    moduleName: 'central/central-page',
    clearHistory: true
  };
  if (user.data['group_id']) frame.navigate(navigationEntry);
}
