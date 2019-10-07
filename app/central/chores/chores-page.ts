import { EventData, Page } from "tns-core-modules/ui/page/page";
import * as Kinvey from 'kinvey-nativescript-sdk';
import { getFrameById, NavigationEntry } from "tns-core-modules/ui/frame/frame";

export function onLoaded() {
  console.log('CHORES loaded');
}

export function logout() {
  Kinvey.User.getActiveUser().logout().then(data => {
    console.log(data);
    const frame = getFrameById("main-frame");
    const navigationEntry: NavigationEntry = {
      moduleName: 'login-page',
      clearHistory: true
    };
    frame.navigate(navigationEntry);
  })
}