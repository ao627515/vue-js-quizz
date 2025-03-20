# Quiz App Vue.js

## À propos du projet

Quiz App est une application interactive développée avec Vue.js qui permet aux utilisateurs de participer à différents quiz. Avec une interface utilisateur épurée et intuitive, cette application vise à offrir une expérience d'apprentissage ludique et accessible.

## Fonctionnalités actuelles

- Interface utilisateur intuitive et responsive
- Affichage progressif des questions
- Suivi visuel de la progression (barre de progression)
- Navigation entre les questions (précédent/suivant)
- Résumé des réponses avant validation
- Affichage du score final
- Possibilité de recommencer le quiz

## Structure du projet

Le projet est composé de plusieurs composants Vue.js :

- `Quiz.vue` : Composant principal qui gère l'affichage et la logique du quiz
- `ProgressBar.vue` : Barre de progression affichant l'avancement
- `Question.vue` : Affichage des questions
- `ResponseRadioList.vue` : Liste des réponses possibles
- `ResponseRadio.vue` : Option de réponse individuelle
- `QuizSummary.vue` : Résumé des réponses données

## Technologies utilisées

- Vue.js 3 avec Composition API
- Tailwind CSS pour le design
- JavaScript ES6+

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/ao627515/quiz-app-vue.git

# Accéder au dossier du projet
cd quiz-app-vue

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm run dev
```

## Possibilités d'amélioration

Le projet a été conçu avec une vision d'évolutivité. Voici quelques améliorations envisagées :

1. **Système de gestion de quiz**

   - Interface d'administration pour créer/éditer des quiz
   - Système de catégorisation des quiz (thèmes, difficulté)
   - Import/export de quiz au format JSON/CSV

2. **Fonctionnalités utilisateur**

   - Système d'authentification
   - Profils utilisateurs avec historique des quiz complétés
   - Tableaux de classement entre utilisateurs

3. **Améliorations de l'interface**

   - Mode sombre
   - Options d'accessibilité (contraste, taille de texte)
   - Animations et transitions
   - Support multilingue

4. **Fonctionnalités avancées**

   - Questions à choix multiples
   - Questions avec images ou médias
   - Minuteur pour les quiz chronométrés
   - Mode hors ligne avec stockage local

5. **Interface de liste de quiz**
   - Page d'accueil présentant tous les quiz disponibles
   - Filtres et recherche par catégorie, difficulté, popularité
   - Aperçu des quiz avec description et statistiques

## Contribution

Ce projet a été créé avec la volonté de le rendre accessible à tous. Toute personne souhaitant contribuer est la bienvenue. Voici comment vous pouvez participer :

1. Forker le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committer vos changements (`git commit -m 'Add some amazing feature'`)
4. Pousser sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

### Idées de contribution

- Ajouter de nouveaux quiz sur différents sujets
- Améliorer l'interface utilisateur
- Corriger des bugs
- Ajouter de nouvelles fonctionnalités
- Améliorer l'accessibilité
- Documenter le code

## Auteur

- **ao627515** - _Développeur initial_ - [GitHub](https://github.com/ao627515)

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.
