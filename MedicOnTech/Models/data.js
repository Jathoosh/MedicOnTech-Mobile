import Ordonnance from "./Odonnance";
import Medecin from "./Medecin";
import Ordonnance_service from "./ordonnance_service";
import Ordonnance_medicament from "./ordonnance_medicament";
import Service from "./service";
import Medicament from "./medicament";
import { Appearance } from "react-native";
import { useState } from "react";

export const URL = "http://10.23.201.19:3030";
export const ID = 12;

export const DATA = [
  new Ordonnance(1, "Maxence ROBICHON", 1, "2022-03-05", "Dr.Larouch"),
  new Ordonnance(2, "Guillaume Jacquet", 2, "2022-03-06", "Dr.Latouch"),
  new Ordonnance(3, "Maxence ROBICHON", 1, "2022-05-06", "Dr.Larouch"),
  new Ordonnance(4, "Maxence ROBICHON", 1, "2022-05-06", "Dr.Larouch"),
  new Ordonnance(5, "Maxence ROBICHON", 1, "2022-05-06", "Dr.Larouch"),
  new Ordonnance(6, "Maxence ROBICHON", 1, "2022-05-06", "Dr.Larouch"),
  new Ordonnance(7, "Maxence ROBICHON", 1, "2022-05-06", "Dr.Larouch"),
  new Ordonnance(8, "Maxence ROBICHON", 1, "2022-05-06", "Dr.Larouch"),
];

export const DOCTOR = [
  new Medecin(1, "Maxence ROBICHON", 1, "", "maxence.robichon@efrei.net"),
  new Medecin(
    2,
    "Guillaume Jacquet",
    2,
    "0620886188",
    "guillaume.jacquet@efrei.net"
  ),
  new Medecin(3, "Sylvain MIGEON", 3, "0699053164", "sylvain.migeon@efrei.net"),
  new Medecin(
    4,
    "Jathoosh THAVARASA",
    4,
    "0666066049",
    "jathoosh.thavarasa@efrei.net"
  ),
];

export const ORDONNANCE_MEDICAMENT = [
  new Ordonnance_medicament(1, 1, 1),
  new Ordonnance_medicament(1, 2, 3),
  new Ordonnance_medicament(1, 3, 2),
  new Ordonnance_medicament(2, 1, 1),
  new Ordonnance_medicament(3, 4, 3),
  new Ordonnance_medicament(4, 5, 2),
  new Ordonnance_medicament(5, 6, 1),
];

export const ORDONNANCE_SERVICE = [
  new Ordonnance_service(3, 1, 1),
  new Ordonnance_service(6, 2, 1),
  new Ordonnance_service(7, 3, 1),
  new Ordonnance_service(8, 4, 1),
];

export const SERVICE = [
  new Service(1, "Consultation"),
  new Service(2, "Ergothérapie"),
  new Service(3, "Kinésithérapie"),
  new Service(4, "Ostéopathie"),
];

export const MEDICAMENT = [
  new Medicament(1, "Paracetamol", 10),
  new Medicament(2, "Aspirine", 20),
  new Medicament(3, "Ibuprofène", 30),
  new Medicament(4, "Doliprane", 40),
  new Medicament(5, "Xanax", 10),
  new Medicament(6, "Toplexil", 10),
  new Medicament(7, "Diclofenac", 10),
];

export const dark_theme = {
  background: "#2C2F34",
  headerBackground: "#1A1C1F",
  text: "#ffffff",
  button: "#006D57",
  subButton: "#565656",
};

export const light_theme = {
  background: "#ffffff",
  headerBackground: "#d9d9d9",
  text: "#000000",
  button: "#2FB55E",
  subButton: "#d9d9d9",
};

export var theme;
const colorScheme = Appearance.getColorScheme();
if (colorScheme === "dark") {
  theme = dark_theme;
} else {
  theme = light_theme;
}
