
# Arrosage Intelligent (Angular, Spring Framework, Jhipster)


## Exécuter et tester le backend localement

Pour Exécuter le backend localement:

```bash
  ./mvnw
```
Pour Exécuter le frontend localement:

```bash
  ng serve
```


## Explication
 Un espace vert est divisé en des zones chaque zone contient un boitier qui se compose d'un ensemble des capteurs qui servent à donner des mesures(température,humidité...) sur lesquelles on va baser notre arosage pour but d'optimiser l'eau utilisé
 
 ## Web Applications

### L'interface d'authentification :

![image](https://user-images.githubusercontent.com/84585704/198390482-7ee137ee-1c90-46ef-8496-4986ff17d26e.png)


### Liste des espaces vert  :
-Chaque utilisateur à ses espaces il ne peut pas accéder aux autres espaces


![image](https://user-images.githubusercontent.com/84585704/198391097-29056b0b-fac0-4e7f-ac9f-f576b120f130.png)

### Détails d'un espace vert  :
-Chaque espace vert est divisé à des zones dans lesquelles on va positionner des boitiers pour optimiser le nombre des boitiers 

![image](https://user-images.githubusercontent.com/84585704/198391572-4080fbb0-2a37-4700-a770-f25b904e1660.png)

### Détails d'une zone  :
-Chaque zone à son boitier type de sol et plantes

![image](https://user-images.githubusercontent.com/84585704/198392187-3611c797-e1a6-4361-9973-eb84c30154a9.png)

### Détails d'un boitier:
-Chaque boitier possède un ensemble de capteurs (humidité, température, ...)

![image](https://user-images.githubusercontent.com/84585704/198392500-a5a07cf9-12da-4880-8677-b3e25f493f3c.png)

### Interface de connexion entre capteurs et boitiers:
-La connexion capteurs, boitier se fait via un lien et ce lien c'est la connexion c'est une classe d'association

![image](https://user-images.githubusercontent.com/84585704/198392806-aab231d5-8ec9-48d3-81e2-345dba536d52.png)


### Interface d'installation d'un boitier dans une zone:
-Au moment d'ajout d'une connexion une ligne va s'ajouter dans le tableau installation en marquant la date de cette connexion et en vérifiant la disponibilité des boitiers on ne peut pas ajouter un boitier sans date fin cela veut dire que le boitier n'est pas disponible pour le moment et au moment de désaffectation du boitier une date fin va s'insérer et le boitier sera libéré pour la nouvelle connexion


![image](https://user-images.githubusercontent.com/84585704/198393231-82211444-1806-47d7-887d-f9e346650740.png)


### Statistques:
-Indiquant le nombre de zone dans un espace vert


![image](https://user-images.githubusercontent.com/84585704/198394459-5817f3fe-b922-4fcd-8086-818a66851c50.png)

### Interface d'enregistrement:
-Interface permet au client de s'enregistrer et avoir un compte


![image](https://user-images.githubusercontent.com/84585704/198394636-ff25c333-8319-44fd-af0b-6adcc87b5756.png)



![image](https://user-images.githubusercontent.com/84585704/198394919-c23d4d4e-e166-4c35-9c97-d3641792ebfe.png)

![image](https://user-images.githubusercontent.com/84585704/198395019-222bacfe-b945-43c7-a8f5-874fca3103d4.png)


### Interface de création d'une zone dans un espace vert :
-Possibilité d'ajouter une zone d'après le composant espace vert

![image](https://user-images.githubusercontent.com/84585704/198395111-82b8895b-8907-4516-8014-eed5391168de.png)




### Interface de création d'une plantation dans une zone:
-Possibilité d'ajouter une plantation d'après le composant zone


![image](https://user-images.githubusercontent.com/84585704/198395631-2c4e05f1-896e-4226-8783-0af92ea3f220.png)


 

