import app from "./firebaseconfig"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { getDatabase, ref, set, onValue, child, push, update } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
  let { userName, contact, email, password } = obj;

  // === this promise will return on Signup page. ===
  return new Promise((resolve, reject) => {
    // === this "then" will give the status of Authentication. ===
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // user successfully registerd in authentication
        const user = userCredential.user;
        const reference = ref(database, `users/${user.uid}`);
        obj.id = user.uid;
        set(reference, obj)
          // === this "then" will give the status of database function
          .then(() => {
            // this "resolve" is our custom message which will show in signup page "then"
            // resolve("User Created Successfully and sent to database");
            resolve(obj);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

let loginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in Successfully
        const user = userCredential.user;
        const reference = ref(database, `users/${user.uid}`);
        onValue(reference, (e) => {
          let status = e.exists();
          if (status) {
            resolve(e.val());
          } else {
            reject("Data Not Found");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorMessage);
      });
  });
};

let userSignOut = () => {
  return new Promise((resolve, reject) => {
    signOut(auth).then(() => { resolve() }).catch((error) => { reject(error.message) })
  })
}

let checkUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        resolve(uid)
      } else {
        reject() // User is signed out
      }
    })
  })
};

let sendData = (nodeNames, obj, id) => {
  return new Promise((resolve, reject) => {
    let postListRef;
    if (!id) {
      // In Case of adding
      obj.id = push(ref(database, nodeNames)).key;
      postListRef = ref(database, `${nodeNames}/${obj.id}`)
    } else {
      // In Case of editing
      const postListRef = ref(database, `${nodeNames}/${id}`);
    }
    set(postListRef, obj).then(() => {
      resolve(`Data sent successfully on node: ${nodeNames}/${obj.id}`);
    }).catch((err) => {
      reject(err);
    })
  });
};


let getData = (node, userId) => {
  let dbReference = ref(database, `${node}/${userId ? userId : ""}`);
  return new Promise((resolve, reject) => {
    onValue(
      dbReference,
      (data) => {
        if (data.exists()) {
          let userData = data.val();
          if (userId) {
            resolve(userData);
          } else {
            let dataArr = Object.values(userData);
            resolve(dataArr);
          }
        } else {
          reject("Data not found");
        }
      },
      {
        onlyOnce: false,
      }
    );
  });
};

let deleteData = (node, listId) => {
  if (!listId) {
    let dbReference = ref(database, `${node}`);
    return new Promise((resolve, reject) => {
      set(dbReference, null)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  } else {
    let dbReference = ref(database, `${node}/${listId}`);
    return new Promise((resolve, reject) => {
      set(dbReference, null)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};


export { signUpUser, loginUser, userSignOut, checkUser, sendData, getData , deleteData };