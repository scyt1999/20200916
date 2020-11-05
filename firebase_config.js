
import firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyCzjT0bsPROAveZESPd4ICMlLR07jTYJjE",
    authDomain: "project-6913601006011585115.firebaseapp.com",
    databaseURL: "https://project-6913601006011585115.firebaseio.com",
    projectId: "project-6913601006011585115",
    storageBucket: "project-6913601006011585115.appspot.com",
    messagingSenderId: "435814823056",
  };

  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
