import { EventData } from "tns-core-modules/ui/page/page";
import { NavigationEntry, getFrameById } from "tns-core-modules/ui/frame/frame";


export function navigatingTo(args: EventData) {
  // console.log(args);
}

export function openLogin(args: EventData) {
  const frame = getFrameById("main-frame");
  const navigationEntry: NavigationEntry = {
    moduleName: 'sign-in/sign-in-page',
    // clearHistory: true
  };
  if (frame) {
    frame.navigate(navigationEntry);
  }
}

export function openRegister(args: EventData) {

  const frame = getFrameById("main-frame");
  const navigationEntry: NavigationEntry = {
    moduleName: 'sign-up/sign-up-page',
    // clearHistory: true
  };
  if (frame) {
    frame.navigate(navigationEntry);
  }
}
