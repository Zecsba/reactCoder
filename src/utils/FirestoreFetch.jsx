import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (idcategory) => {
    let q;
    if (idcategory) {
        const categoryDocRef = doc(db, "categories", idcategory);
        q = query( collection(db, "products"), where("idcategory", "==", categoryDocRef) );
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      let result = {
        id: idItem,
        ...docSnap.data()
      }
    //   console.log(result);
      return result;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}