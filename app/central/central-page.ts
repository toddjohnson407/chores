import { SelectedIndexChangedEventData, BottomNavigation, TabContentItem } from "tns-core-modules/ui/bottom-navigation";
import * as Kinvey from 'kinvey-nativescript-sdk';

import { EventData, Page } from "tns-core-modules/ui/page/page";
import { getFrameById } from "tns-core-modules/ui/frame/frame";

export function onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
  console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
}

export function onLoaded() {
  console.log('loaded');
}

