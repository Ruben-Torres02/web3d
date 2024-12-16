import { addDoc, collection, getDocs, orderBy, limit, query, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";

class QuizDAO {
    constructor() {
        this.collectionRef = collection(db, "quiz");
    }

    // Método para crear un nuevo registro de usuario con nombre y puntos
    async createQuizRecord(quizData) {
        await addDoc(this.collectionRef, quizData)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.log("Error adding document: ", error);
            });
    }

    // Método para obtener los 3 mayores puntajes
        async getTopScores() {
            const q = query(this.collectionRef, orderBy("time", "asc"), limit(3));
            const querySnapshot = await getDocs(q);
            let topScores = [];
            querySnapshot.forEach((doc) => {
                topScores.push(doc.data());
            });
            return topScores;
        }
        async deleteAllRecords() {
            try {
                const querySnapshot = await getDocs(this.collectionRef);
                const deletePromises = querySnapshot.docs.map((docSnapshot) =>
                    deleteDoc(doc(this.collectionRef, docSnapshot.id))
                );
                await Promise.all(deletePromises);
                console.log("All records deleted successfully.");
            } catch (error) {
                console.error("Error deleting records: ", error);
            }
        }
    }

export default new QuizDAO();