import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "Users");
class UserData {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };
  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "Users", id);
    return updateDoc(userDoc, updateDoc);
  };
  deleteUser = (id) => {
    const userDoc = doc(db, "Users", id);
    return this.deleteUser(userDoc);
  };
  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };
  getUser = (id) => {
    const userDoc = doc(db, "Users", id);
    return getDoc(userDoc);
  };
}
export default new UserData();
