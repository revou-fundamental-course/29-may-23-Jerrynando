const name = "Jerry"; // Example name

const nameElement = document.getElementById("name");
nameElement.textContent = name;

const welcomeHeading = document.getElementById("welcome-heading");
welcomeHeading.textContent = `Hi ${name}, Welcome To Website`;

function submitForm(event) {
  event.preventDefault();
  var form = document.getElementById("message-form");
  var resultDiv = document.getElementById("result");

  // Mengambil nilai dari form
  var nama = form.elements["nama"].value;
  var tanggalLahir = form.elements["tanggal-lahir"].value;
  var jenisKelamin = form.elements["jenis-kelamin"].value;
  var pesan = form.elements["pesan"].value;

  // Menampilkan nilai form di div hasil
  resultDiv.innerHTML = `
<h3>Current Time:</h3>
<p>${new Date().toLocaleTimeString()}</p>
<h3>Form Values:</h3>
<p><strong>Nama:</strong> ${nama}</p>
<p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
<p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
<p><strong>Pesan:</strong> ${pesan}</p>
`;
}
