# 撚手食堂 l GUANGDONG - Site Web Officiel

[![Déployé sur Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-f38020?logo=cloudflare)](https://guangdong-restaurant.pages.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Site vitrine moderne et responsive pour le restaurant 撚手食堂 GUANGDONG à Paris, spécialisé en cuisine cantonaise authentique.

## 🌟 Fonctionnalités

### 🌍 **Multilingue**
- **Français** (langue par défaut)
- **English**
- **中文 (繁體)** - Chinois traditionnel

### 📱 **Design Responsive**
- Interface optimisée pour mobile, tablette et desktop
- Navigation mobile avec menu hamburger
- Images adaptatives et optimisées
- Performance optimisée pour tous les appareils

### 🎨 **Sections**
1. **Hero** - Logo central, titre et boutons d'action avec background d'image
2. **Menu** - Carrousel interactif avec 8 pages de menu
3. **Galerie** - Grille responsive de 16 photos de plats (15 sur desktop)
4. **Commande** - Liens directs vers Uber Eats et Deliveroo
5. **Contact** - Informations complètes avec carte Google Maps intégrée
6. **À propos** - Histoire du restaurant, images et caractéristiques
7. **Footer** - Informations légales et services

### ⚡ **Fonctionnalités Avancées**
- **Carrousel automatique** avec navigation tactile et clavier
- **Galerie lightbox** pour visualiser les photos en grand
- **Scroll fluide** entre les sections avec ancres
- **Animations** au scroll pour une expérience immersive
- **Lazy loading** des images pour des performances optimales
- **Support clavier** complet pour l'accessibilité

## 🏗️ Architecture Technique

### **Technologies Utilisées**
- **HTML5** sémantique avec structure accessible
- **CSS3** moderne avec Flexbox/Grid
- **JavaScript Vanilla** (ES6+) - Aucune dépendance externe
- **Google Fonts** (Inter) pour la typographie
- **Google Maps** intégré pour la localisation

### **Structure des Fichiers**
```
/
├── index.html           # Page principale
├── styles.css          # Feuilles de style
├── script.js           # Logique JavaScript
├── public/
│   └── images/
│       ├── logo.JPG     # Logo du restaurant
│       ├── hero.JPG     # Photo intérieur
│       ├── deco2.jpg    # Photo décoration (background)
│       ├── pic.png      # Image hero background
│       ├── menu/        # Photos du menu (8 pages)
│       └── pics/        # Photos des plats (16 images)
├── .gitignore
└── README.md
```

### **Performance & SEO**
- **Images optimisées** avec lazy loading
- **Meta tags** complets pour le SEO
- **Favicon** personnalisé
- **Structure sémantique** pour l'accessibilité
- **Chargement différé** des ressources non critiques

## 🍜 Informations Restaurant

**Nom :** 撚手食堂 l GUANGDONG
**Adresse :** 6 Rue Pétion, 75011 Paris
**Téléphone :** [09 56 18 78 85](tel:0956187885)
**Spécialité :** Cuisine traditionnelle du Guangdong (粤菜 / 粵菜)

### 📱 **Commandes en Ligne**
- [Uber Eats](https://www.ubereats.com/fr-en/store/撚手食堂-guangdong-restaurant/-nbyMTUaQZC-HkDnNx8_dw)
- [Deliveroo](https://deliveroo.fr/fr/menu/paris/11eme-oberkampf/special-restaurant-6-rue-petion)

### 🌐 **Réseaux Sociaux**
- [Instagram](https://www.instagram.com/sunnyhu355)

### ✨ **Services**
- Plats végétaliens disponibles
- Animaux de compagnie bienvenus
- Modes de paiement : Ticket Restaurant, Chèque Déjeuner, CB, Espèces

## 🚀 Déploiement

### **Déploiement Local**
```bash
# Cloner le repository
git clone https://github.com/[username]/guangdong-restaurant.git
cd guangdong-restaurant

# Lancer un serveur local
python3 -m http.server 8000
# ou
npx serve .

# Ouvrir dans le navigateur
open http://localhost:8000
```

### **Déploiement sur Cloudflare Pages**

1. **Via le Dashboard Cloudflare :**
   - Connecter votre repository GitHub
   - Configurer : Build command vide, Output directory : `/`
   - Déploiement automatique à chaque push

2. **Via CLI Wrangler :**
   ```bash
   npm install -g wrangler
   wrangler pages project create guangdong-restaurant
   wrangler pages publish . --project-name=guangdong-restaurant
   ```

### **Variables d'Environnement**
Aucune variable d'environnement requise - site statique pur.

## 🌏 Support Navigateurs

- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+
- **iOS Safari** 13+
- **Android Chrome** 80+

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajouter une fonctionnalité'`)
4. Push sur la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📞 Contact

Pour toute question concernant le site web :
- Email : [contact@guangdong-restaurant.fr](mailto:contact@guangdong-restaurant.fr)
- Issues GitHub : [Créer un ticket](https://github.com/[username]/guangdong-restaurant/issues)

---

**Développé avec ❤️ pour la communauté cantonaise de Paris**

*撚手食堂 - Saveurs authentiques du Guangdong au cœur de Paris depuis [année]*