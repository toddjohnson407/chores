/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
import { displayedEvent, exitEvent, launchEvent, lowMemoryEvent, 
  orientationChangedEvent, resumeEvent, suspendEvent, uncaughtErrorEvent, 
  ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData,
  on as applicationOn, run as applicationRun } from "tns-core-modules/application";
import * as application from "tns-core-modules/application";
import * as Kinvey from 'kinvey-nativescript-sdk';

Kinvey.init({
    appKey: 'kid_HyRMZYYDB',
    appSecret: '4cc99e6e6e4b413da8273176833819e0'
});

Kinvey.ping()
    .then((response) => {
        console.log(`Kinvey Ping Success. Kinvey Service is alive, version: ${response.version}, response: ${response.kinvey}`);
    })
    .catch((error) => {
        console.log(error);
        console.log(`Kinvey Ping Failed. Response: ${error.description}`);
    });

applicationOn(launchEvent, (args: LaunchEventData) => {
  if (args.android) {
      // For Android applications, args.android is an android.content.Intent class.
      console.log("Launched Android application with the following intent: " + args.android + ".");
  } else if (args.ios !== undefined) {
      // For iOS applications, args.ios is NSDictionary (launchOptions).
      console.log("Launched iOS application with options: " + args.ios);
  }
});

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
