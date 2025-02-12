import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

document.getElementById('medicamentoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const codInventario = document.getElementById('codInventario').value;
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;

    try {
        // Verificar si el código de inventario ya existe
        const medicamentosRef = collection(db, "medicamentos");
        const q = query(medicamentosRef, where("codInventario", "==", codInventario));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            alert("El código de inventario ya existe. Ingrese un código único.");
            return;
        }

        // Si no existe, agregar el nuevo medicamento
        await addDoc(medicamentosRef, {
            codInventario,
            nombre,
            precio
        });

        alert("Medicamento agregado exitosamente");
        document.getElementById('medicamentoForm').reset();
    } catch (error) {
        console.error("Error al agregar medicamento: ", error);
    }
});
