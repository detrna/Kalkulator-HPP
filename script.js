document.getElementById("tambah").onclick = tambahBahan;
const inputParent = document.querySelector(".variableInput");
let inputBahan, inputBerat, inputProduk, hasilBahan, x;
x = 0;
function tambahBahan() {
    x++;

    let row = document.createElement("div");
    row.className = "row";

    inputNama = document.createElement("input");
    inputNama.id = `nama${x}`;
    inputNama.placeholder = "Nama Bahan (opsional)";
    row.appendChild(inputNama);


    inputBahan = document.createElement("input");
    inputBahan.id = `bahan${x}`;
    inputBahan.placeholder = "Harga Bahan";
    row.appendChild(inputBahan);

    inputBerat = document.createElement("input");
    inputBerat.id = `berat${x}`;
    inputBerat.placeholder = "Berat Bahan (gram)";
    row.appendChild(inputBerat);

    inputDipakai = document.createElement("input");
    inputDipakai.id = `dipakai${x}`;
    inputDipakai.placeholder = "Berat Dipakai (gram)";
    row.appendChild(inputDipakai);

    hasilBahan = document.createElement("input");
    hasilBahan.id = `hasil${x}`;
    hasilBahan.className = "hasil";
    hasilBahan.readOnly = true;
    hasilBahan.textContent = "0"; // Default sebelum kalkulasi
    row.appendChild(hasilBahan);

    inputParent.appendChild(row);
}


document.getElementById("kalkulasi").onclick = kalkulasiSemua
function kalkulasiSemua(){
    for(i = 1; i <= x + 1; i++){
        kalk()
    }
}


let hasil;
function kalk(){
    hasil = document.getElementById(`bahan${i}`).value / document.getElementById(`berat${i}`).value * document.getElementById(`dipakai${i}`).value;
    document.getElementById(`hasil${i}`).value = hasil;
}

function kalkTotal() {
    hasilTotal = 0;
    for (let i = 1; i <= x; i++) {
        let hasilValue = parseFloat(document.getElementById(`hasil${i}`).value) || 0; // Convert to number
        hasilTotal += hasilValue; // Add properly
    }
    document.getElementById("total").textContent = `Rp ${hasilTotal}`;
}

document.getElementById("kalkulasiTotal").onclick = kalkTotal;

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Define table columns
    const columns = ["Nama", "Harga", "Berat (gram)", "Dipakai (gram)", "Hasil"];
    const rows = [];

    let hasilTotal = 0; // Initialize total calculation

    // Gather data for each row
    for (let i = 1; i <= x; i++) {
        let nama = document.getElementById(`nama${i}`).value || "-";
        let bahan = document.getElementById(`bahan${i}`).value || "0";
        let berat = document.getElementById(`berat${i}`).value || "0";
        let dipakai = document.getElementById(`dipakai${i}`).value || "0";
        let hasil = parseFloat(document.getElementById(`hasil${i}`).value) || 0; // Treat hasil as input

        rows.push([nama, bahan, berat, dipakai, hasil.toFixed(2)]);
        hasilTotal += hasil; // Sum up the total
    }

    // Generate table
    doc.autoTable({
        head: [columns],
        body: rows,
        startY: 20,
        styles: { fontSize: 10 }
    });

    // Add hasilTotal below the table
    let finalY = doc.lastAutoTable.finalY + 10; // Position after table
    doc.text(`Total: Rp ${hasilTotal.toFixed(2)}`, 10, finalY);

    // Save the PDF file
    doc.save("Bahan_Kalkulasi_Table.pdf");
}

// Assign the function to a button
document.getElementById("downloadPDF").onclick = generatePDF;


