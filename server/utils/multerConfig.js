const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadsDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const newName = file.originalname.split(".")[0] + "-" + Date.now();
    const filename = newName + path.extname(file.originalname);
    cb(null, filename);
  },
});

const uploadOptions = multer({ storage });
module.exports = uploadOptions;
