import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDRWMo22XnnK1TVgIkFlcH8mGZNxmkFVYc",
  authDomain: "idchulatms-9d858.firebaseapp.com",
  databaseURL: "https://idchulatms-9d858.firebaseio.com",
  projectId: "idchulatms-9d858",
  storageBucket: "idchulatms-9d858.appspot.com",
  messagingSenderId: "416470362782"
}

// const ref = firebase.database().ref()
const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider()

function init () {
  return firebase.initializeApp(config)
}

async function login () {
  const result = await auth().signInWithPopup(provider)
  return result
}

async function logout () {
  const result = await auth().signOut()
  return result
}

export {
  init,
  login,
  logout
}

