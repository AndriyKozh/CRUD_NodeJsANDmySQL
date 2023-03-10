const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { db } = require("./model/dbConnection");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// read all
app.get("/api/readData", (req, res) => {
  const sqlQuery = "SELECT * FROM testing";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// read video ID

app.get("/api/readVideo/:watch_history_id", (req, res) => {
  const videoLink = req.params.watch_history_id;

  const sqlQuery = "SELECT * FROM watch_history WHERE watch_history_id=?";

  db.query(sqlQuery, videoLink, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);

      res.send(result);
    }
  });
});

// POST

app.post("/api/createHistory", (req, res) => {
  const watch_history_id = req.body.watch_history_id;
  const title = req.body.title;
  const titleURL = req.body.titleURL;
  const timeDate = req.body.timeDate;
  const list = req.body.list;

  const sqlQuery =
    "INSERT INTO watch_history (watch_history_id,title,titleURL,timeDate,list) VALUE (?,?,?,?,?)";

  db.query(
    sqlQuery,
    [watch_history_id, title, titleURL, timeDate, list],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);

        res.send(result);
      }
    }
  );
});

//  PUT

app.put("/api/updateHistory", (req, res) => {
  const watch_history_id = req.body.watch_history_id;
  const title = req.body.title;
  const titleURL = req.body.titleURL;
  const timeDate = req.body.timeDate;
  const list = req.body.list;

  const sqlQuery =
    "UPDATE testing SET watch_history_id=watch_history_id, title=?,titleURL=?,timeDate=?,list=?";
  db.query(
    sqlQuery,
    [watch_history_id, title, titleURL, timeDate, list],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server berhasil berjalan pada port 3001!");
});
