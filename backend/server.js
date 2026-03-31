require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345', // Replace with your MySQL password
  database: process.env.DB_NAME || 'ibbi_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Successfully connected to MySQL Database!');
});

// API endpoint to fetch news items
app.get('/api/news', (req, res) => {
  const query = 'SELECT * FROM news_items ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
});

// API endpoint to search corporate debtors
app.get('/api/corporate_debtor', (req, res) => {
  const { name, cin, id } = req.query;

  let query = 'SELECT * FROM corporate_debtors WHERE 1=1';
  let queryParams = [];

  if (id) {
    query += ' AND id = ?';
    queryParams.push(id);
  }

  if (name) {
    query += ' AND name LIKE ?';
    queryParams.push(`%${name}%`);
  }

  if (cin) {
    query += ' AND cin = ?';
    queryParams.push(cin);
  }

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
});

// --- ADMIN FILE UPLOAD & POST LOGIC ---
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Ensure directories exist
const pdfsDir = path.join(__dirname, '../public/pdfs');
const companyDataDir = path.join(__dirname, '../public/company_data');
if (!fs.existsSync(pdfsDir)) fs.mkdirSync(pdfsDir, { recursive: true });
if (!fs.existsSync(companyDataDir)) fs.mkdirSync(companyDataDir, { recursive: true });

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (req.path.includes('/api/admin/news')) {
      cb(null, pdfsDir);
    } else if (req.path.includes('/api/admin/corporate_debtor')) {
      cb(null, companyDataDir);
    } else {
      cb(null, pdfsDir);
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'));
  }
});
const upload = multer({ storage });

// API endpoint to add new corporate debtor
app.post('/api/admin/corporate_debtor', upload.single('file'), (req, res) => {
  const { name, cin, process_initiated, applicant_name, sector } = req.body;
  const fileUrl = req.file ? `/company_data/${req.file.filename}` : null;
  
  const query = `INSERT INTO corporate_debtors (name, cin, process_initiated, applicant_name, sector, file_url) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, [name, cin, process_initiated, applicant_name, sector, fileUrl], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: 'Company data added successfully!', fileUrl });
  });
});

// API endpoint to add new news
app.post('/api/admin/news', upload.single('file'), (req, res) => {
  const { title, date, size } = req.body;
  const fileUrl = req.file ? `/pdfs/${req.file.filename}` : null;
  
  const query = `INSERT INTO news_items (title, date, size, file_url) VALUES (?, ?, ?, ?)`;
  db.query(query, [title, date, size, fileUrl], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: 'News added successfully!', fileUrl });
  });
});

// API endpoint to get all downloads
app.get('/api/downloads', (req, res) => {
  const query = 'SELECT * FROM downloads ORDER BY sr_no ASC';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
});

// API endpoint to add new download/form
app.post('/api/admin/downloads', upload.single('file'), (req, res) => {
  const { sr_no, subject, form_name, file_size } = req.body;
  const fileUrl = req.file ? `/pdfs/${req.file.filename}` : null;
  
  const query = `INSERT INTO downloads (sr_no, subject, form_name, file_size, file_url) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [sr_no, subject, form_name, file_size, fileUrl], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: 'Download form added successfully!', fileUrl });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
