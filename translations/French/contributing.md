# 😎 Contribuez votre code à ProjectsHut

## 🧐 Suivez ces étapes pour contribuer

> ⚠️ N'oubliez pas d'ajouter un [bon commit](https://twitter.com/Priyankarpal/status/1638403157863673859)

[![Ouvrir sur Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. Fork ce dépôt

![ Fork ](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png) 2. Cliquez sur `Go to file`

![Go to file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png) 3. Ajouter le code suivant à la fin de `src/DB/projects.json`

```json
{
  "gh-username": "NOM-D'UTILISATEUR-GITHUB",
  "link": "LIEN-DE-VOTRE-PROJET",
  "title": "TITRE-DU-PROJET",
  "description": "DESCRIPTION-DU-PROJET",
  "tech": ["technologie-1", "technologie-2", "etc"]
}
```

> ### Si vous voulez lancer localement, suivez ces étapes

4. Clonez le depôt

```
 git clone https://github.com/[votre-nom-d'utilisateur]/ProjectsHut.git
```

5. Naviguez vers le dossier

```
cd ProjectsHut
```

6. installer les dépendances

```
pnpm i
```

7. lancer en local.

```
 pnpm dev
```

8. Créer une nouvelle branche utilisant votre `Nom-d'utilisateur-github`

```diff
git checkout -b [nom_d_utilisateur_github]
```

9. Lancer les tests

```
pnpm test
```

10. Faites vos changements

```diff
git add .
```

11. Commit vos changements

```diff
git commit -m "Vos messages de commit"

```

> Si vous obtenez une erreur comme celle-ci
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> utilisez cette commande
>
> ```diff
> pnpm format
> ```

12. Ajouter le dépôt d'origine

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

13. Push vers votre branche

```diff
git push -u origin [votre-branche]
```

14. Créer une pull request

15. Attendez que votre pull request soit acceptée
