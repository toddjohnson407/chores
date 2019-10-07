import { RegisterModel } from "./sign-up-view-model";
import { getFrameById } from "tns-core-modules/ui/frame/frame";

export function pageLoaded(args: any) {
  let page = args.object;
  page.bindingContext = new RegisterModel();
}

export function onReturnPress() {
  const frame = getFrameById("main-frame");
}

