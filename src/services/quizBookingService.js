import firebase from "../firebase";

// const db = firebase.ref("/players");
const db = firebase.ref("/ask8_quizBooking");

class StDataService {
  getAll() {
    return db;
  }

  

  create(od) {
    return db.push(od);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }


  getRef() {
    return db.no('value',(snapshot) => {

console.log(snapshot.val());

      });
  }
}

export default new StDataService();
