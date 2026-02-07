function uploadFile() {
  const fileInput = document.getElementById("uploadFile");
  const status = document.getElementById("uploadStatus");

  if (!fileInput.files.length) {
    status.innerText = "❌ Please select a file";
    status.style.color = "red";
    return;
  }

  status.style.color = "#22d3ee";
  status.innerText = "🔐 Encrypting & uploading file...";

  // Simulated backend process
  setTimeout(() => {
    status.style.color = "lightgreen";
    status.innerText = "✅ File encrypted & hash stored on blockchain";
  }, 2000);
}

function verifyFile() {
  const fileInput = document.getElementById("verifyFile");
  const status = document.getElementById("verifyStatus");

  if (!fileInput.files.length) {
    status.innerText = "❌ Please select a file";
    status.style.color = "red";
    return;
  }

  status.style.color = "#22d3ee";
  status.innerText = "🔍 Verifying file integrity...";

  // Simulated blockchain verification
  setTimeout(() => {
    const isValid = Math.random() > 0.3; // demo logic

    if (isValid) {
      status.style.color = "lightgreen";
      status.innerText = "✅ File integrity verified. No tampering detected.";
    } else {
      status.style.color = "red";
      status.innerText = "❌ File tampered! Integrity check failed.";
    }
  }, 2000);
}
