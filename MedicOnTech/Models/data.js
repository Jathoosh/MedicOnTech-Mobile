import Ordonnance from "./Odonnance";
import Medecin from "./Medecin";

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
  new Medecin(2, "Guillaume Jacquet", 2, "0620886188", "guillaume.jacquet@efrei.net"),
  new Medecin(3, "Sylvain MIGEON", 3, "0699053164", "sylvain.migeon@efrei.net"),
  new Medecin(3, "Jathoosh THAVARASA", 3, "0666066049", "jathoosh.thavarasa]efrei.net")
];
