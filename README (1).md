
# 🔐 Blockchain-Based Secure File Sharing System

## 📌 Overview

The **Blockchain-Based Secure File Sharing System** is a security-focused project that enables users to securely upload, store, and share files using cryptographic techniques and blockchain technology.  
It ensures data integrity, confidentiality, and tamper-proof access control by combining encryption with smart contracts.

---

## 🎯 Project Goals

- Secure file storage and sharing using blockchain
- Prevent unauthorized access and data tampering
- Ensure file integrity using cryptographic hashing
- Provide transparent and verifiable file access records

---

## 📂 Project Structure

| File / Folder | Description |
|---------------|------------|
| `contracts/` | Smart contracts written in Solidity for file metadata and access control |
| `contracts/FileStorage.sol` | Main smart contract handling file hash storage and permissions |
| `upload.py` | Encrypts files and uploads metadata to the blockchain |
| `download.py` | Verifies ownership, decrypts, and retrieves files |
| `encrypt.py` | AES-based file encryption logic |
| `decrypt.py` | AES-based file decryption logic |
| `requirements.txt` | Python dependencies |
| `README.md` | Project documentation |

---

## ⚙️ How to Run

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/blockchain-secure-file-sharing.git
cd blockchain-secure-file-sharing
```

### 2️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Deploy Smart Contract
- Open **Remix IDE**
- Deploy `FileStorage.sol` using a local blockchain (**Ganache**) or testnet
- Copy the deployed contract address

### 4️⃣ Upload a File
```bash
python upload.py
```

### 5️⃣ Download a File
```bash
python download.py
```

📌 Ensure your blockchain node (Ganache / testnet) is running before execution.

---

## 🧪 Methodology

- **File Encryption** – Files are encrypted using AES before storage
- **Hash Generation** – SHA-256 hash ensures file integrity
- **Blockchain Storage** – File hashes and metadata stored on blockchain
- **Access Control** – Smart contract manages ownership and permissions
- **Verification** – Hash comparison ensures files are not tampered with

---

## 🛠 Tech Stack

- **Blockchain** – Ethereum  
- **Smart Contracts** – Solidity  
- **Backend** – Python  
- **Cryptography** – AES, SHA-256  
- **Tools** – Remix IDE, Ganache  
- **Libraries** – Web3.py, PyCryptodome  

---

## 📈 Applications

- Secure Document Sharing – Legal, medical, academic records
- Cloud Security – Tamper-proof decentralized file storage
- Enterprise Systems – Controlled internal file access
- Data Integrity Systems – Verify authenticity of shared files

---

## 🔐 Security Features

- End-to-end file encryption
- Immutable blockchain storage
- Hash-based file integrity verification
- Owner-based access control
- Tamper-resistant audit trail

---

## 👤 Author


**Akash**  
🔗 [GitHub](https://github.com/akash007-eng)  
🔗 [LinkedIn](https://www.linkedin.com/in/akash-koka-007k/)
