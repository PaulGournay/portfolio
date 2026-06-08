# 👨‍💻 Paul Gournay - Portfolio Interactif

Bienvenue sur le code source de mon portfolio ! 
Ce projet a pour but de présenter mes deux grands univers : l'**Ingénierie & Code** et l'**Atelier Couture**, de manière originale et interactive.

## ✨ Fonctionnalités

- **Double Univers** : Une page d'accueil divisée en deux sections distinctes qui réagissent au survol, offrant une transition fluide entre la rigueur du code et la créativité du design textile.
- **Interactions 3D** : Intégration de modèles 3D manipulables directement dans le navigateur (ex: les ciseaux pour accéder à la partie Couture).
- **Design Réactif** : Une interface moderne et adaptée à tous les écrans, avec des animations soignées (Framer Motion).
- **Projets Détaillés** : Présentation complète de mes projets techniques (FPGA, IoT, IA, etc.) et artistiques (Upcycling, confection).

## 🛠️ Technologies Utilisées

Ce projet a été développé avec des technologies web modernes pour garantir performance et fluidité :

- **[React 19](https://react.dev/)** : Bibliothèque principale pour construire l'interface.
- **[Vite](https://vitejs.dev/)** : Outil de build ultra-rapide.
- **[Tailwind CSS v4](https://tailwindcss.com/)** : Framework CSS utilitaire pour un design sur-mesure et réactif.
- **[Framer Motion](https://www.framer.com/motion/)** : Bibliothèque d'animation pour des transitions fluides et dynamiques.
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) / [Drei](https://github.com/pmndrs/drei)** : Pour le rendu et la manipulation des objets 3D (basé sur Three.js).
- **[Lucide React](https://lucide.dev/)** : Bibliothèque d'icônes légères et élégantes.

## 🚀 Installation & Lancement Local

Si vous souhaitez exécuter ce projet sur votre propre machine :

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/PaulGournay/portfolio.git
   cd portfolio/react
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   Le projet sera accessible sur `http://localhost:5173`.

4. **Compiler pour la production**
   ```bash
   npm run build
   ```

## 🌐 Déploiement

Le site est hébergé via GitHub Pages et possède son propre nom de domaine personnalisé. 
Le déploiement est automatisé grâce au script défini dans le `package.json`.

Pour publier une nouvelle version :
```bash
npm run deploy
```

---
*Fait avec ♥ par Paul Gournay*