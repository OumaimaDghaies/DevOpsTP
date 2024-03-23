# Utilisez une image de base contenant Node.js
FROM node:16

# Définissez le répertoire de travail dans le conteneur
WORKDIR /home/vagrant/api/backend

# Copiez les fichiers du backend dans le conteneur
COPY . .

# Installez les dépendances
RUN npm install

# Exposez le port sur lequel le serveur backend s'exécute
EXPOSE 3001

# Commande pour démarrer le serveur backend
CMD ["npm", "start"]

