import { getFrameById } from "tns-core-modules/ui/frame/frame";
import { JoinGroupModel } from "./join-group-view-model";


export function pageLoaded(args: any) {
  let page = args.object;
  page.bindingContext = new JoinGroupModel();
}

export function onReturnPress() {
  const frame = getFrameById("main-frame");
}