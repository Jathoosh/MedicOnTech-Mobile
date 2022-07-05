import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("MedicOnTech.db");

export const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Doctors (Id_Person INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT,phone TEXT,email_address TEXT )"
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Ordonnances (Id_Prescription  INTEGER PRIMARY KEY, patient_firstname TEXT, patient_lastname TEXT,doctor_firstname TEXT,doctor_lastname TEXT, creation_date TEXT )"
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

export async function setDataOrdonnance(data) {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Ordonnances (Id_Prescription, patient_firstname, patient_lastname,doctor_firstname,doctor_lastname,creation_date) VALUES (?,?,?,?,?,?)",
        [
          data.Id_Prescription,
          data.patient_firstname,
          data.patient_lastname,
          data.doctor_firstname,
          data.doctor_lastname,
          data.creation_date,
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

export async function updateDataOrdonnace(data) {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE Ordonnances SET patient_firstname = ?, patient_lastname = ?,doctor_firstname = ?,doctor_lastname = ?,creation_date = ? WHERE Id_Prescription = ?",
        [
          data.patient_firstname,
          data.patient_lastname,
          data.doctor_firstname,
          data.doctor_lastname,
          data.creation_date,
          data.Id_Prescription,
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

export async function deleteDataOrdonnance(data) {
  try {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM Ordonnances WHERE Id_Prescription = ?", [
        data.Id_Prescription,
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

export async function getDataOrdonnance() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM Ordonnances",
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
