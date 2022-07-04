import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("MedicOnTech.db");

export const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Doctors (Id_Person INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT,phone TEXT,email_address TEXT )"
    );
  });
};

export const setDataDoctors = async () => {
  try {
    await db.transaction(async (tx) => {
      await tx.executeSql(
        "INSERT INTO Doctors (Id_Person, first_name, last_name,phone,email_address) VALUES (?,?,?,?,?)",
        [2, "John", "Doe", "0123456789", "zdza"]
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataDoctors = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Doctors", [], (trans, result) => {
        console.log(result);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
