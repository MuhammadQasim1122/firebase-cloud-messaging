import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDCeyXF3SFr2Yw0aBZGXhH3-7DSc5LBQUI",
    authDomain: "stencil-auth-firebase.firebaseapp.com",
    projectId: "stencil-auth-firebase",
    storageBucket: "stencil-auth-firebase.appspot.com",
    messagingSenderId: "902268549496",
    appId: "1:902268549496:web:a57e65a6d6d2744db4708d",
    measurementId: "G-3GRZ1KRXL4"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BCqH1glcNEw1sLiym67m7Ulj9wtLo4p8jSZdkG0wz25EJmMTUOJHo3HcNv_kQn0z1uEm_GQmxpXgQJCtR8iOLoo",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();

// put the commented code in firebase-messaging-sw.js and put the file in public folder in case of stenciljs that would be www.
// importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// const firebaseConfig = {
//     apiKey: "AIzaSyDCeyXF3SFr2Yw0aBZGXhH3-7DSc5LBQUI",
//     authDomain: "stencil-auth-firebase.firebaseapp.com",
//     projectId: "stencil-auth-firebase",
//     storageBucket: "stencil-auth-firebase.appspot.com",
//     messagingSenderId: "902268549496",
//     appId: "1:902268549496:web:a57e65a6d6d2744db4708d",
//     measurementId: "G-3GRZ1KRXL4"
//   }
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload){
//   const notif = JSON.parse(payload.data.notification);
//   return self.registration.showNotification(notif.title, {...notif});
// });