# 😎 Trage deinen Code zu ProjectsHut bei

## 🧐 Folge diesen Schritten, um beizutragen

> ⚠️ Denken Sie daran, hinzuzufügen[gutes Commit](https://twitter.com/Priyankarpal/status/1638403157863673859)

[![In Gitpod öffnen](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. Verzweigen Sie dieses Repository

![ Verzweigen Sie dieses Repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. Klicken Sie auf „Gehe zu Datei“.

![Gehe zur Datei](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Add following code to end of `src/DB/projects.json`

```json
{
  "gh-username": "DEIN-GITHUB-BENUTZERNAME",
  "link": "LINK-ZU-GITHUB-ODER-DEMO",
  "title": "PROJEKT-TITEL",
  "description": "PROJEKT-BESCHREIBUNG",
  "tech": ["einige Technologie 1", "einige Technologie 2", "etc"]
}
```

4. Klonen Sie es auf Ihren Computer

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

5. Navigieren Sie zum Projektordner

```
cd ProjectsHut
```

6. Abhängigkeiten installieren

```
pnpm i
```

7. lokal ausführen

```
pnpm dev
```

8. Erstellen Sie einen neuen Zweig mit Ihrem `GitHub-Benutzernamen`.

```diff
git checkout -b [name_of_your_new_branch]
```

9. Fügen Sie Ihre Änderungen hinzu.

```diff
git add .
```

10. Fügen Sie Ihre Commits hinzu

```diff
git commit -m "Your Changes"
```

> Wenn dieser Fehler beim Commit auftritt
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> Verwenden Sie diesen Befehl
>
> ```diff
> pnpm format
> ```

11. Upstream-Befehl einstellen

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

12. Pushen Sie Ihre Commits

```diff
git push -u origin [Your-branch-name]
```

13. Erstellen Sie einen PR

14. Warten Sie auf die Zusammenführung
