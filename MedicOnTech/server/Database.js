import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("MedicOnTech.db");

export const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Doctors (Id_Person INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT,phone TEXT,email_address TEXT )"
    );
  });
};

export async function setDataDoctors(data) {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Doctors (Id_Person, first_name, last_name,phone,email_address) VALUES (?,?,?,?,?)",
        [
          data.Id_Person,
          data.first_name,
          data.last_name,
          data.phone,
          data.email_address,
        ]
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateDataDoctors(data) {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE Doctors SET first_name = ?, last_name = ?,phone = ?,email_address = ? WHERE Id_Person = ?",
        [
          data.first_name,
          data.last_name,
          data.phone,
          data.email_address,
          data.Id_Person,
        ]
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDataDoctors(data) {
  try {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM Doctors WHERE Id_Person = ?", [
        data.Id_Person,
      ]);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getDataDoctors() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM Doctors",
          [],
          (tx, results) => {
            var data = results.rows._array;
            resolve(data);
          },
          function (error) {
            reject(false);
            throw new Error("Error: " + error);
          }
        );
      },
      function (error) {
        reject(undefined);
        throw new Error("error: " + error.message);
      }
    );
  });
}
