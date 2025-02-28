document.getElementById("tambah").onclick = tambahBahan;
const inputParent = document.querySelector(".variableInput");
let inputBahan, inputBerat, inputProduk, hasilBahan, x;
function tambahBahan() {
  x++;
  inputBahan = document.createElement("input");
  inputBahan.id = `bahan${x}`;
  inputBahan.placeholder = "Bahan";
  inputParent.appendChild(inputBahan);

  inputBerat = document.createElement("input");
  inputBerat.id = `berat${x}`;
  inputBerat.placeholder = "Berat";
  inputParent.appendChild(inputBerat);

  inputProduk = document.createElement("input");
  inputProduk.id = `produk${x}`;
  inputProduk.placeholder = "Berat yang dipakai";
  inputParent.appendChild(inputProduk);

  hasilBahan = document.createElement("div");
  hasilBahan.id = `hasil${x}`;
  hasilBahan.textContent = "Hasil Kalkulasi";
}
