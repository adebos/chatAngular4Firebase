// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyB2ufwshaVCtOYnSbGL7Yo9IEZBsKz5CRE",
    authDomain: "task-chat.firebaseapp.com",
    databaseURL: "https://task-chat.firebaseio.com",
    projectId: "task-chat",
    storageBucket: "task-chat.appspot.com",
    messagingSenderId: "626741745662"
  }
};
