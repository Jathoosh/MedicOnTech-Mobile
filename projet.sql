drop database if exists db_medicontech;
CREATE DATABASE db_medicontech;
use db_medicontech;

/*Create Tables*/

CREATE TABLE Postal_address(
   Id_Postal_address INT NOT NULL AUTO_INCREMENT,
   door_number VARCHAR(50),
   number VARCHAR(50),
   road VARCHAR(100),
   zip_code VARCHAR(50),
   town VARCHAR(50),
   country VARCHAR(50),
   PRIMARY KEY(Id_Postal_address)
);

CREATE TABLE Drug(
   Id_Drug INT NOT NULL AUTO_INCREMENT,
   drug_name VARCHAR(50),
   drug_price DECIMAL(15,2),
   reimbursement_rate DECIMAL(15,2),
   PRIMARY KEY(Id_Drug)
);

CREATE TABLE Service(
   Id_Service INT NOT NULL AUTO_INCREMENT,
   service_name VARCHAR(50),
   PRIMARY KEY(Id_Service)
);

CREATE TABLE Mutual_insurance(
   Id_Mutual_insurance INT NOT NULL AUTO_INCREMENT,
   mutual_name VARCHAR(50),
   PRIMARY KEY(Id_Mutual_insurance)
);

CREATE TABLE Speciality(
   Id_Speciality INT NOT NULL AUTO_INCREMENT,
   speciality_name VARCHAR(50),
   PRIMARY KEY(Id_Speciality)
);

CREATE TABLE Person(
   Id_Person INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   birth_date DATE NOT NULL,
   email_address VARCHAR(50),
   password TEXT,
   Id_Postal_address INT NOT NULL,
   PRIMARY KEY(Id_Person),
   FOREIGN KEY(Id_Postal_address) REFERENCES Postal_address(Id_Postal_address)
);

CREATE TABLE Pharmacist(
   Id_Pharmacist INT NOT NULL AUTO_INCREMENT,
   Id_Person INT NOT NULL,
   PRIMARY KEY(Id_Pharmacist),
   FOREIGN KEY(Id_Person) REFERENCES Person(Id_Person)
);

CREATE TABLE Doctor(
   Id_Doctor INT NOT NULL AUTO_INCREMENT,
   Id_Person INT NOT NULL,
   PRIMARY KEY(Id_Doctor),
   FOREIGN KEY(Id_Person) REFERENCES Person(Id_Person)
);

CREATE TABLE Patient(
   Id_Patient INT NOT NULL AUTO_INCREMENT,
   Id_tutor INT,
   social_security_number VARCHAR(50),
   Id_Mutual_insurance INT,
   Id_Person INT NOT NULL,
   PRIMARY KEY(Id_Patient),
   FOREIGN KEY(Id_Mutual_insurance) REFERENCES Mutual_insurance(Id_Mutual_insurance),
   FOREIGN KEY(Id_Person) REFERENCES Person(Id_Person)
);

CREATE TABLE Prescription(
   Id_Prescription INT NOT NULL AUTO_INCREMENT,
   creation_date DATE,
   expiration_date DATE,
   date_of_use DATE,
   frequency_of_reuse INT,
   number_of_reuses INT,
   used BOOLEAN,
   validity BOOLEAN,
   note TEXT,
   reported BOOLEAN,
   report_note TEXT,
   Id_Doctor INT NOT NULL,
   Id_Patient INT NOT NULL,
   PRIMARY KEY(Id_Prescription),
   FOREIGN KEY(Id_Doctor) REFERENCES Doctor(Id_Doctor),
   FOREIGN KEY(Id_Patient) REFERENCES Patient(Id_Patient)
);

CREATE TABLE assigned_doctor(
   Id_Doctor INT,
   Id_Patient INT,
   PRIMARY KEY(Id_Doctor, Id_Patient),
   FOREIGN KEY(Id_Doctor) REFERENCES Doctor(Id_Doctor),
   FOREIGN KEY(Id_Patient) REFERENCES Patient(Id_Patient)
);

CREATE TABLE Pharmacy_item(
   Id_Pharmacist INT,
   Id_Drug INT,
   quantity INT,
   PRIMARY KEY(Id_Pharmacist, Id_Drug),
   FOREIGN KEY(Id_Pharmacist) REFERENCES Pharmacist(Id_Pharmacist),
   FOREIGN KEY(Id_Drug) REFERENCES Drug(Id_Drug)
);

CREATE TABLE Prescription_drug(
   Id_Prescription INT,
   Id_Drug INT,
   quantity VARCHAR(50),
   PRIMARY KEY(Id_Prescription, Id_Drug),
   FOREIGN KEY(Id_Prescription) REFERENCES Prescription(Id_Prescription),
   FOREIGN KEY(Id_Drug) REFERENCES Drug(Id_Drug)
);

CREATE TABLE Doctor_service(
   Id_Doctor INT,
   Id_Service INT,
   service_price DECIMAL(15,2),
   PRIMARY KEY(Id_Doctor, Id_Service),
   FOREIGN KEY(Id_Doctor) REFERENCES Doctor(Id_Doctor),
   FOREIGN KEY(Id_Service) REFERENCES Service(Id_Service)
);

CREATE TABLE Doctor_speciality(
   Id_Doctor INT,
   Id_Speciality INT,
   PRIMARY KEY(Id_Doctor, Id_Speciality),
   FOREIGN KEY(Id_Doctor) REFERENCES Doctor(Id_Doctor),
   FOREIGN KEY(Id_Speciality) REFERENCES Speciality(Id_Speciality)
);

CREATE TABLE Prescription_service(
   Id_Prescription INT,
   Id_Service INT,
   quantity VARCHAR(50),
   PRIMARY KEY(Id_Prescription, Id_Service),
   FOREIGN KEY(Id_Prescription) REFERENCES Prescription(Id_Prescription),
   FOREIGN KEY(Id_Service) REFERENCES Service(Id_Service)
);

/*Insert Fictive Values For Testing TODO*/

/*Select Tables for Visualisation*/
