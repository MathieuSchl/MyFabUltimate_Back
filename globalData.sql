INSERT INTO `gd_roles` (`v_name`, `v_description`, `v_color`, `b_isProtected`, `b_viewUsers`, `b_manageUser`, `b_changeUserRole`, `b_changeUserProtectedRole`, `b_myFabAgent`) VALUES ('Administrateur', "Ce rôle donne accès à tous les outils d'administration et de gestion du site", 'db1010', '1', '1', '1', '1', '1', '1'), ('Modérateur', "Ce rôle donne accès aux outils pour gérer le contenu et les utilisateurs du site", 'eb9413', '1', '1', '1', '1', '0', '1'), ('Agent MyFab', "Ce rôle donne accès aux outils de MyFab pour gérer les demandes du site", 'e0dd22', '0', '1', '0', '0', '0', '1')
INSERT INTO `gd_ticketpriority` (`v_name`, `v_color`) VALUES ('Normal', '2274e0'), ('A traiter', 'e9d41d'), ('Urgent', 'f30b0b')
INSERT INTO `gd_ticketprojecttype` (`v_name`) VALUES ('PIX'), ('PIX2'), ('PING'), ('PI²'), ('Associatif'), ('Autre')
INSERT INTO `gd_status` (`v_name`, `v_color`) VALUES ('Ouvert','2ca1bb'), ('En attente de réponse','f49a2c'), ('Fermé','18c100'), ('Refusé','ff1e1e'), ('Impression commencée','1E90FF')