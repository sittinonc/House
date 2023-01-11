const crypto = require('crypto');
const mongoose = require('mongoose');
const path = require('path');
const { GridFsStorage } = require('multer-gridfs-storage');
const { conn } = require('../../database');
const { Readable } = require('stream'); // from nodejs
const sharp = require('sharp');
const uri = require('../../database/config');
let gfs;

conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads',
  });
});
const storage = new GridFsStorage({
  url: uri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});

// const upload = multer({ storage });

const UploadSingle = (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(500).json({ state: 'no file found' });
  } else {
    const buffer = file.buffer;
    // chain sharp methods
    sharp(buffer)
      .resize({ height: 500 })
      .jpeg({ quality: 50 })
      .toBuffer((err, data, info) => {
        // data here directly contains the buffer object.
        const fileStream = Readable.from(data);

        // write the resized stream to the database.
        storage.fromStream(fileStream, req, file).then(() => {
          res.json({ state: 'ok' });
        });
      });
  }
};

const View = (req, res) => {
  gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    if (!files[0] || files.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No files available',
      });
    }

    if (
      files[0].contentType === 'image/jpeg' ||
      files[0].contentType === 'image/png' ||
      files[0].contentType === 'image/svg+xml'
    ) {
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image',
      });
    }
  });
};
const List = (req, res) => {
  gfs.find().toArray((err, files) => {
    if (err) {
      console.log(err);
    }
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist',
      });
    }

    // Files exist
    return res.json(files);
  });
};

const Delete = (req, res) => {
  gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    if (err) {
      console.log(err);
    }
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist',
      });
    }

    // Files exist
    conn.collection('uploads.files').deleteMany({ _id: files[0]._id });
    conn.collection('uploads.chunks').deleteMany({ files_id: files[0]._id });
    conn
      .collection('houses')
      .find({ filenames: { $all: [`${req.params.filename}`] } })
      .toArray((err, res) => {
        if (err) {
          console.log(err);
          res.status(500).end();
        }
        res.forEach((item, index) => {
          let doc = {};
          let text = JSON.stringify(item);
          let newVal = JSON.parse(text);
          let fileNameIndex = newVal.filenames.indexOf(req.params.filename);
          if (fileNameIndex !== -1) {
            newVal.filenames.splice(fileNameIndex, 1);
            let filenames = newVal.filenames;
            doc.filenames = filenames;
            let _id = item._id;
            let objId = { _id };
            let newValue = { $set: doc };
            conn
              .collection('houses')
              .findOneAndUpdate(objId, newValue, (err, doc) => {
                if (err) {
                  console.log(err);
                }
              });
          }
        });
      });
    return res.status(200).json(files);
  });
};

module.exports = {
  View,
  UploadSingle,
  List,
  Delete,
};
