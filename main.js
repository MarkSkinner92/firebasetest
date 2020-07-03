var firebaseConfig = {
    apiKey: "AIzaSyDiAYT9C0F1FYKXFEQwoEazdGr8JSDORmE",
    authDomain: "test-e5be4.firebaseapp.com",
    databaseURL: "https://test-e5be4.firebaseio.com",
    projectId: "test-e5be4",
    storageBucket: "test-e5be4.appspot.com",
    messagingSenderId: "1095017409740",
    appId: "1:1095017409740:web:0d9444b9138b3d4a03a669",
    measurementId: "G-J8GYLQCEHJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var firestore = firebase.firestore();
const docRef = firestore.doc('users/QooKSlDvZRZ1a4PyMuHn');
var push = document.querySelector('#push');
var input = document.querySelector('#field');
var pull = document.querySelector('#pull');
var message = document.querySelector('#message')

push.addEventListener("click", function(){
    const data = field.value;
    console.log("saving " + data +" to firebase");
    docRef.set({
        name:data
    }).then(function(){
    console.log('Status saved!');
}).catch(function (error){
    console.log("got an error: ", error);
});
});

pull.addEventListener("click", function(){
    docRef.get().then(function (doc) {
        if(doc && doc.exists){
            message.innerText = doc.data().name;
        }
    }).catch(function (error){
    console.log("got an error: ", error);
});
});