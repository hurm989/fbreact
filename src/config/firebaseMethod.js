import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, ref, set, onValue } from "firebase/database";

const database = getDatabase(app);
const auth = getAuth(app);

let signUpUser = function (obj) {
  return createUserWithEmailAndPassword(auth, obj.email, obj.password)
}

let logInUser = function (obj) {
  return signInWithEmailAndPassword(auth, obj.email, obj.password)

}

let logOutUser = function () {
  return  signOut(auth)

}
// let checkAuthUser = function () {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           const uid = user.uid;
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });

// }

let sendData = (obj, nodeName, id) => {
  let reference = ref(database, `${nodeName}/${id ? id : ""}`)
  return set(reference, obj)
}
let getData = (nodeName) => {
  const dbRef = ref(database, nodeName);
  onValue(dbRef, (snapshot) => {
    let arr = []
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      arr = [...arr, childData.users.email]
      console.log("Log in user is "+ arr)
      return arr
    });

  }, {
    onlyOnce: false
  });
}
export { signUpUser, logInUser, sendData, getData ,logOutUser} 