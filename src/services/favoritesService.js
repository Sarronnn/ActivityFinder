import { db } from "../firebaseConfig"
import { collection, query, getDocs, addDoc, orderBy } from "firebase/firestore"

export async function writeFavoriteToDatabase({ name }) {
    alert(`Saving Activity`)
    const activityInfo = { name }
    const docRef = await addDoc(collection(db, "favorites"), activityInfo)
    return { id: docRef.id, ...activityInfo}
}

export async function fetchActivities() {
    const snapshot = await getDocs(
        query(collection(db, "favorites"), orderBy("name", "desc"))
    )
console.log(snapshot)
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}