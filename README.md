# Demo Next
App Web sur les pays avec un livre d'or

## Routing
```
/               → Page d'accueil
/about          → Page « A propos »
/country        → Liste des pays
/country/[id]   → Detail d'un pays (+ commentaire)
/guestbook      → Affichage des messages
/guestbook/add  → Formulaire d'ajout de message
/api/example    → Exemple de endpoint API
```

## Structure des dossiers dans `/src`
```
- app           → Les pages de l'app (Routing)
- components    → Les composants réutilisables
- ui            → Les composants static (Exemple : Header)
- services      → Acces au resources externe (Db, Web API, ...)
- actions       → Les actions
- helpers       → Les fonctions utilitaires
```