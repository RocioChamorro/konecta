// eslint-disable-next-line max-len
const loginEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// eslint-disable-next-line max-len
const loginRegister = (dni, password) => firebase.auth().createUserWithEmailAndPassword(dni, password);

const loginOut = () => firebase.auth().signOut();

const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
const editColaboradorFirebase = (talentkEmail) => firebase.firestore().collection('colaboradores').doc('gpjqhChyi7N3rREpa6QK').update({
  Email_Personal: talentkEmail
});

const currentUser = () => firebase.auth().currentUser;

const findDni = (dni) => firebase.firestore().collection('colaboradores').where('Dni', '==', dni)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        doc.id, ' => ', doc.data();
        console.log(doc.id, ' => ', doc.data());
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});


export {
  loginEmail,
  findDni,
  loginRegister,
  loginOut,
  loginGoogle,
  loginFacebook,
  currentUser,
  editColaboradorFirebase, 
};
