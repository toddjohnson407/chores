import { RegisterModel } from "./sign-up-view-model";

import { TextField } from "tns-core-modules/ui/text-field";
import { Page, Observable, PropertyChangeData } from "tns-core-modules/ui/page/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { getFrameById } from "tns-core-modules/ui/frame/frame";

export function pageLoaded(args: any) {
  let page = args.object;
  page.bindingContext = new RegisterModel();
}

export function onReturnPress() {
  const frame = getFrameById("main-frame");
}

