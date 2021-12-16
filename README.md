# Prérequis
- Angular CLI : version 13.0.3
- Node : version 16.13.0
- Un navigateur qui accepte angular et les accès 443

# Besoin du client
Le but du projet est de connaître les prix d’une voile en fonction du modèle de bateau entré précédemment par l’utilisateur et qui est présent dans la base de données.

# Utilisation du projet
Il est possible au client de pouvoir entrer un nom de bateau et d’avoir une liste précise de tous les bateaux portant le même nom.
Une fois le bateau selectionné, sa longueur s'affiche et les différentes longueur de voiles de ce bateau s'affiche également.
Il est quand même possible au client de modifier les valeurs si ce dernier a effectué des changements sur son bateau.
Les valeurs entrées sont ensuite vérifier pour être conforme :
- 3 chiffres maximum avant la virgule 
- 2 chiffres après la virgule 
- ne pas contenir de lettre
- les deux chiffres séparés d'un point

# Tâche non réalisées
Il n'est pas possible d'avoir une liste des composants disponible en fonction des longueurs des voiles du bateau que l'utilisateur a entré.

# Difficultés rencontrées
Etant mon premier projet Angular, j’ai eu plus de mal à comprendre comment fonctionner ce langage. 
La première difficulté rencontrée a été pour le champ input où le client entre le nom du bateau qu’il possède. Pour que la liste des bateaux s’affiche je devais obligatoirement supprimer une lettre. Pour que cette erreur soit corrigée j'ai utilisé un select dans le input html plutôt qu'un datalist dans le fichier html.
La deuxième difficulté rencontrée a été de transférer les données des tailles des voiles du premier au deuxième component. Pour régler ce problème j'ai dû demander de l'aide à mes collègues pour pouvoir avancer.
