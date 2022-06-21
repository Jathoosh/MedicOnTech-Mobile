/*FAITES ATTENTIONS A BIEN RECOMMENTER CE CODE. IL SERT POUR L'INITIALISATION UNIQUEMENT*/

drop database if exists db_medicontech;
CREATE DATABASE db_medicontech;
use db_medicontech;
#Create Tables

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
   Id_Drug INT NOT NULL,
   drug_name VARCHAR(300),
   drug_format VARCHAR(100),
   drug_application VARCHAR(150),
   autorisation_status VARCHAR(50),
   comercialised VARCHAR(50),
   comercialised_on DATE,
   warning_stock BOOLEAN,
   comercialised_by VARCHAR(100),
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
   phone VARCHAR(50),
   Id_Postal_address INT NOT NULL,
   PRIMARY KEY(Id_Person),
   FOREIGN KEY(Id_Postal_address) REFERENCES Postal_address(Id_Postal_address)
);

CREATE TABLE Professional(
   Id_Person INT,
   password VARCHAR(100),
   workplace_name VARCHAR(50),
   PRIMARY KEY(Id_Person),
   FOREIGN KEY(Id_Person) REFERENCES Person(Id_Person)
);

CREATE TABLE Pharmacist(
   Id_Pharmacist INT NOT NULL AUTO_INCREMENT,
   Id_Person INT NOT NULL,
   PRIMARY KEY(Id_Pharmacist),
   FOREIGN KEY(Id_Person) REFERENCES Professional(Id_Person)
);

CREATE TABLE Doctor(
   Id_Doctor INT NOT NULL AUTO_INCREMENT,
   Id_Person INT NOT NULL,
   PRIMARY KEY(Id_Doctor),
   FOREIGN KEY(Id_Person) REFERENCES Professional(Id_Person)
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

#Insert Fictive Values For Testing TODO
INSERT INTO Postal_address(number, road, zip_code, town, country) VALUES
(15,"Chemin de la Vallée",27500,"Saint-Symphorien","France"),
(35,"Route de Rouen",27140,"Gisors","France"),
(23,"Rue du Prieurs",27110,"Le Neubourg","France"),
(6,"Route de Balines",27130,"Piseux","France"),
(8,"Lotissement les Longues Pieces",27810,"Marcilly-sur-Eure","France"),
(29,"Impasse des Frêines",27500,"Pont-Audemer","France"),
(437,"Le Mont Crocq",27500,"Triqueville","France"),
(4,"Ruelle aux Loups",27700,"Frenelles-en-Vexin","France"),
(9,"Lotissement La Torse Rue",27260,"Cormeilles","France"),
(8,"Rue des Marronniers",27000,"Evreux","France"),
(38,"Rue du Commandant Le Foll",27210,"Beuzeville","France"),
(1,"Place des Tilleuls",27320,"La Madeleine-de-Nonancourt","France"),
(32,"Route de la Vallee",27390,"Saint-Pierre-de-Cerniéres","France"),
(1,"Rue de la Troesne",27140,"Gisors","France"),
(9,"Impasse de la Forêt",27430,"Saint-Etienne-du-Vauvray","France"),
(116,"Rue de la Briqueterie Duval",27210,"Beuzeville","France"),
(34,"Le Village",27800,"La Haye-de-Calleville","France"),
(3,"Chemin du Roi",27590,"Pîtres","France"),
(17,"Rue Rembrandt",27950,"Saint-Marcel","France"),
(12,"Rue des Bruyéres",27780,"Garennes-sur-Eure","France"),
(36,"Chemin des Bouchers",51000,"Reims","France"),
(37,"Boulevard John Fitzgerald Kennedy",51000,"Châlons-en-Champagne","France"),
(19,"Rue Pierre Curie",51480,"Damery","France"),
(2,"Rue du Général de Mitry",51700,"Igny-Comblizy","France"),
(7,"Rue Saint-Julien",51530,"Pierry","France"),
(32,"Boulevard des Fossés de Ronde",51150,"Ambonnay","France"),
(16,"Rue d'écueil",51500,"Villers-aux-Noeuds","France"),
(8,"Rue de la Mairie",51500,"Sacy","France"),
(25,"Rue Belin",51000,"Reims","France"),
(23,"Rue Alfred Nobel",51200,"Epernay","France"),
(3,"Rue Alexandre Dumas",51110,"Bazancourt","France"),
(11,"Rue de l'église",51290,"Outines","France"),
(62,"Rue de Châlons",51260,"Anglure","France"),
(11,"Rue de la Halle",51150,"Tours-sur-Marne","France"),
(54,"Rue Gabriel Lippmann",51430,"Bezannes","France"),
(35,"Rue Thiers",51000,"Reims","France"),
(13,"Rue de Châtillon",51290,"Giffaumont-Champaubert","France"),
(13,"Rue de la Grangette",51800,"Sainte-Menehould","France"),
(7,"Impasse de la Croix Saint-Jean",51480,"Boursault","France"),
(20,"Impasse des Sorbiers",51510,"Saint-Gibrien","France");

INSERT INTO Postal_address(door_number, number, road, zip_code, town, country) VALUES
(12,106,"Avenue Philippe Auguste",75011,"Paris","France"),
(15,12,"Rue d'Aligre",75012,"Paris","France"),
(8,96,"Rue de Reuilly",75012,"Paris","France"),
(6,99,"Rue de Reuilly",75012,"Paris","France"),
(4,54,"Rue Lemercier",75017,"Paris","France"),
(13,193,"Rue de Belleville",75019,"Paris","France"),
(26,116,"Rue de Lourmel",75015,"Paris","France"),
(51,27,"Rue de Terre-Neuve",75020,"Paris","France"),
(10,32,"Rue Viala",75015,"Paris","France"),
(13,27,"Rue Fortuny",75017,"Paris","France"),
(22,57,"Rue Docteur Blanche",75016,"Paris","France"),
(41,8,"Rue des Nanettes",75011,"Paris","France"),
(1,14,"Boulevard Lefebvre",75015,"Paris","France"),
(1,5,"Rue Bellini",75016,"Paris","France"),
(1,1,"Avenue de Taillebourg",75011,"Paris","France"),
(23,38,"Rue Vieille du Temple",75004,"Paris","France"),
(7,84,"Rue du Château",75014,"Paris","France"),
(8,3,"Rue Edouard VII",75009,"Paris","France"),
(9,59,"Avenue de la Motte-Picquet",75015,"Paris","France"),
(4,45,"Boulevard Saint-Michel",75005,"Paris","France");

INSERT INTO Speciality(speciality_name) VALUES 
("Cardiologue"),
("Généraliste"),
("Gynécologue"),
("Ophtalmologue"),
("Ostéopathe"),
("Pédiatre"),
("Pneumologue"),
("Psychiatre"),
("Radiologue"),
("Rhumatologue"),
("Urologue");

INSERT INTO Person(first_name,last_name,birth_date,email_address,phone,Id_Postal_address) VALUES
("Drew","Kane","1987-03-06","donec.consectetuer@yahoo.ca","08 74 23 64 61",1),
("Luke","Holden","1994-08-22","pellentesque@outlook.org","01 72 13 33 72",2),
("Sonia","Murray","2010-12-05","iaculis@yahoo.com","07 66 43 15 36",3),
("Kermit","Whitney","2020-05-02","viverra.maecenas@yahoo.edu","07 27 06 54 28",4),
("Brody","Mcbride","1977-03-23","nulla.facilisis@yahoo.net","09 58 11 17 60",5),
("Amery","Murray","1982-11-21","auctor.velit@google.ca","05 97 40 42 59",6),
("Ross","O'brien","1968-09-15","sapien.cursus@protonmail.couk","05 17 92 73 83",7),
("Griffin","Skinner","2001-05-21","dis@yahoo.org","05 38 64 41 58",8),
("Ulric","Murray","2017-12-29","metus@protonmail.couk","01 68 25 26 32",9),
("Keaton","Smith","1979-07-14","rhoncus@google.edu","06 19 22 35 88",10),
("Arsenio","Marsh","1962-08-30","interdum.libero.dui@aol.com","03 24 88 71 83",11),
("Melvin","Ayala","1985-02-20","dui.augue@hotmail.edu","07 48 88 48 39",12),
("Tyrone","Potter","1969-09-06","vel.faucibus@protonmail.net","04 43 88 62 62",13),
("Farrah","Jacobson","2002-02-12","erat.eget@yahoo.couk","01 27 24 98 67",14),
("Hammett","Whitney","1991-12-23","arcu.imperdiet@protonmail.edu","07 94 50 71 87",15),
("Tobias","Sweet","1967-05-10","consectetuer@google.couk","06 51 11 74 44",16),
("Jesse","Key","1978-11-06","auctor.quis@aol.net","08 64 61 83 19",17),
("Holmes","Beach","1962-10-11","dolor.dolor.tempus@google.org","04 61 75 86 16",18),
("Alec","Andrews","1983-12-15","aliquet@aol.net","02 71 82 83 75",19),
("Boris","Whitney","2007-01-31","vel.vulputate.eu@yahoo.net","03 46 21 56 32",20),
("Branden","O'brien","2020-01-19","ornare.fusce@protonmail.edu","01 29 14 84 36",21),
("Murphy","Chang","1990-06-12","elit.aliquam@protonmail.net","05 32 95 48 44",22),
("Callie","Leon","2004-08-12","magna.ut.tincidunt@google.edu","09 76 17 54 54",23),
("Keefe","Padilla","1961-12-10","dictum@aol.couk","02 17 38 22 58",24),
("Ignacia","Key","2018-08-17","bibendum.ullamcorper@yahoo.edu","08 12 43 11 27",25),
("Aspen","Ware","1998-02-22","odio.auctor.vitae@protonmail.net","05 24 98 61 75",26),
("Imelda","Middleton","1963-01-23","egestas.a.dui@yahoo.edu","04 84 98 62 58",27),
("Silas","Jacobson","2016-09-16","nonummy@outlook.ca","04 28 93 63 54",28),
("Gannon","Holland","1996-10-09","ultrices.duis@hotmail.net","07 12 92 61 61",29),
("Emerald","O'brien","2013-05-15","et@hotmail.com","02 70 17 66 51",30);

INSERT INTO Person(last_name,first_name,birth_date,email_address,phone,Id_Postal_address) VALUES
-- Liste des médecins
("Moreau","Camille","1976-10-27","moreau.camille@medecin.fr","01 84 88 37 10",31),
("Dufour","Louis","1981-7-8","dufour.louis@medecin.fr","01 19 67 25 64",32),
("Louis","Nathan","1985-9-10","louis.nathan@medecin.fr","01 48 88 83 32",33),
("Lefebvre","Axel","1994-6-10","lefebvre.axel@medecin.fr","01 22 85 29 25",34),
("Brebion","Tristan","1967-9-20","brebion.tristan@medecin.fr","01 31 65 15 72",35),
("Rey","Garance","1964-7-30","rey.garance@medecin.fr","01 58 78 40 57",36),
("da Silva","Félix","1984-9-29","da silva.félix@medecin.fr","01 29 95 22 48",37),
("Durand","Daniel","1982-3-12","durand.daniel@medecin.fr","01 82 50 28 34",38),
("Brunet","William","1982-12-27","brunet.william@medecin.fr","01 11 50 62 32",39),
("Dupont","Lise","1992-6-9","dupont.lise@medecin.fr","01 89 87 59 80",40),
-- Liste des pharmaciens
("Laurent","Simon","1988-8-1","laurent.simon@pharmacien.fr","01 83 67 93 20",41),
("Pollet","Mélina","1981-5-3","pollet.mélina@pharmacien.fr","01 99 15 38 99",42),
("Blanc","Alexandre","1976-6-12","blanc.alexandre@pharmacien.fr","01 77 86 16 32",43),
("Roger","Laure","1993-3-25","roger.laure@pharmacien.fr","01 39 74 43 54",44),
("Deparrois","Garance","1994-4-10","deparrois.garance@pharmacien.fr","01 52 86 23 34",45),
("Dubois","Florian","1998-8-14","dubois.florian@pharmacien.fr","01 96 93 69 55",46),
("Laurent","Sara","1960-3-28","laurent.sara@pharmacien.fr","01 71 68 85 56",47),
("Lemaire","Paul","1972-7-15","lemaire.paul@pharmacien.fr","01 90 73 41 64",48),
("Dupont","Antoine","1977-3-27","dupont.antoine@pharmacien.fr","01 96 30 25 46",49),
("Hadock","Jenkins","1971-11-29","hadock.jenkins@pharmacien.fr","01 77 58 32 86",50);

INSERT INTO Professional VALUES
(31,"123","CLINIQUE DU TERTRE ROUGE"),
(32,"123","HOPITAL ROBERT SCHUMAN DE VANTOUX -HPM"),
(33,"123","POLYCLINIQUE MUTUALISTE MALARTIC"),
(34,"123","CLINIQUE CONTI"),
(35,"123","CLINIQUE EMAILLEURS-COLOMBIER LIMOGES"),
(36,"123","POLYCLINIQUE MUTUALISTE MALARTIC"),
(37,"123","CLINIQUE CHIRURGICALE DE MARTIGUES"),
(38,"123","POLYCLINIQUE DE COURLANCY"),
(39,"123","CLINIQUE MUTUALISTE DU MEDOC"),
(40,"123","HOPITAL BELLE-ISLE DE METZ - HPM"),
(41,"123","PHARMACIE DE LONGCHAMP"),
(42,"123","PHARMACIE CENTRALE SOL"),
(43,"123","PHARMACIE DES BRUYERES"),
(44,"123","SELARL PHARMACIE GUYOMARC'H"),
(45,"123","PHARMACIE BARAKROK"),
(46,"123","SELARL PHARMACIE DU VAL DE SARTHE"),
(47,"123","PHARMACIE SUBRA"),
(48,"123","PHARMACIE JANDEAUX"),
(49,"123","PHARMACIE DE LA POSTE"),
(50,"123","PHARMACIE DE LA CROIX ROUSSE");

INSERT INTO Pharmacist (Id_Person) VALUES
(41),
(42),
(43),
(44),
(45),
(46),
(47),
(48),
(49),
(50);

INSERT INTO Doctor (Id_Person) VALUES
(31),
(32),
(33),
(34),
(35),
(36),
(37),
(38),
(39),
(40);

INSERT INTO Mutual_insurance(mutual_name) VALUES
("APREVA"),
("ASPBTP"),
("CCMO"),
("Mut'Est"),
("ADREA Mutuelle"),
("Avenir Santé Mutuelle"),
("Eovi Mcd mutuelle"),
("France Mutuelle"),
("GFP"),
("Miltis"),
("MUTAMI"),
("Mutuelle Bleue"),
("Mutuelle Verte"),
("Mutuelle La Dijonnaise"),
("Mutuelle 403 Angoulème"),
("Mutuelle Europe"),
("Mutuelle familiale Corse"),
("Mutuelle du Champagne"),
("Mutuelle Épargne Retraite"),
("Mutuelle de France Bretagne Centre Océan"),
("Mutuelle des accidentés et travailleurs handicapés"),
("Mutuelle de France 04-05"),
("Mutuelle des Maliens de l'extérieur (MME)"),
("Mutuelle médico-chirurgicale"),
("Mutuelle Novamut"),
("Mutuelle du Var"),
("Mutuelle Prévifrance"),
("MGEN Filia"),
("Harmonie Mutuelle"),
("Mutuelle Saint-Germain"),
("Mutuelle de la Somme"),
("Mutuelles du Soleil"),
("Mutuelle complémentaire d'Alsace"),
("Mutuelle Drôme ARPICA"),
("Languedoc Mutualité"),
("Mutuelles Présence"),
("Myriade"),
("Roanne Mutuelle"),
("La MIF"),
("Novalia Mutuelle"),
("OCIANE Mutuelle"),
("Pavillon Prévoyance"),
("Precocia"),
("Refuge Mutualiste Aveyronnais"),
("SOLIMUT Mutuelle de France"),
("SORUAL"),
("Union fraternelle des Régions"),
("UMC Mutuelle"),
("Avenir Mutuelle"),
("Miel Mutuelle"),
("Klesia Mutuelle"),
("Henner Mutuelle"),
("Mutuelle Générale des Cheminots (MGC)"),
("uMEn");

INSERT INTO Patient(social_security_number,Id_Mutual_insurance,Id_Person) VALUES
("1 87 03 65 101 161 22",51,1),
("1 94 08 17 455 328 79",16,2),
("1 77 03 78 517 172 55",51,5),
("2 82 11 90 385 744 65",43,6),
("1 68 09 40 705 468 94",13,7),
("1 01 05 75 434 321 25",13,8),
("1 79 07 12 654 247 27",32,10),
("1 62 08 52 207 850 23",51,11),
("1 85 02 31 339 211 30",13,12),
("1 69 09 54 257 237 90",32,13),
("2 02 02 49 846 738 57",43,14),
("2 91 12 43 502 990 47",16,15),
("1 67 05 89 973 354 23",32,16),
("2 78 11 19 881 169 80",51,17),
("1 62 10 62 967 860 51",16,18),
("1 83 12 14 358 899 35",43,19),
("1 90 06 23 542 630 41",16,22),
("2 04 08 69 975 601 51",51,23),
("2 61 12 13 879 173 42",43,24),
("2 98 02 94 421 442 23",16,26),
("2 63 01 53 372 682 64",27,27),
("1 96 10 43 211 297 82",16,29);

INSERT INTO Patient(Id_tutor,social_security_number,Id_Mutual_insurance,Id_Person) VALUES
(6,"2 10 12 63 645 283 63",43,3),
(15,"1 20 05 13 805 702 13",16,4),
(6,"1 17 12 91 347 608 16",43,9),
(15,"1 07 01 32 221 224 94",16,20),
(7,"1 20 01 21 944 198 98",13,21),
(17,"2 18 08 37 598 601 46",51,25),
(14,"1 16 09 79 334 424 40",43,28),
(7,"1 13 05 73 453 460 51",13,30);

INSERT INTO assigned_doctor VALUES
(4,1),
(12,2),
(3,3),
(14,4),
(4,5),
(1,6),
(11,7),
(7,8),
(3,9),
(9,10),
(3,11),
(3,12),
(10,13),
(11,14),
(10,15),
(14,16),
(3,17),
(1,18),
(8,19),
(2,20),
(10,21),
(13,22),
(15,23),
(14,24),
(3,25),
(2,26),
(1,27),
(5,28),
(7,29),
(8,30);

