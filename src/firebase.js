import * as firebase from "firebase";
import "firebase/database"; 

let config = {  

  apiKey: "AIzaSyDnVquQGd724SE39PdkZ1vs49Tki2Joums",
  authDomain: "a8ask-4c2de.firebaseapp.com",
  databaseURL: "https://a8ask-4c2de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "a8ask-4c2de",
  storageBucket: "a8ask-4c2de.appspot.com",
  messagingSenderId: "424321311432",
  appId: "1:424321311432:web:e1137966ad5bb04f853bfd",
  measurementId: "G-25W3XV40CH"

  // apiKey: "AIzaSyAjHvffERZZKMGs7VagBDiMp1FzbW0Pf88",
  // authDomain: "ask8v0609.firebaseapp.com",
  // databaseURL: "https://ask8v0609-default-rtdb.firebaseio.com",
  // projectId: "ask8v0609",
  // storageBucket: "ask8v0609.appspot.com",
  // messagingSenderId: "288413752805",
  // appId: "1:288413752805:web:22de4ef43280c62804630c"
}; 

firebase.initializeApp(config);

export default firebase.database();
