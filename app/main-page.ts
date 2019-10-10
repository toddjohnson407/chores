/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { getFrameById, NavigationEntry } from 'tns-core-modules/ui/frame';
import * as Kinvey from 'kinvey-nativescript-sdk';



// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
		page.bindingContext = new HelloWorldModel();
}

export async function entryLoad() {
  const frame = getFrameById("main-frame");
  if (Kinvey.User.getActiveUser() && Kinvey.User.getActiveUser().data['group_id']) {
    const navigationEntry: NavigationEntry = {
      moduleName: 'central/central-page',
      clearHistory: true
    };
    frame.navigate(navigationEntry);
  } else {
    const navigationEntry: NavigationEntry = {
      moduleName: (Kinvey.User.getActiveUser()) ? 'account-type/account-type-page' : 'login-page',
      clearHistory: true
    };
    frame.navigate(navigationEntry);
  }
}
