# 😎 Contribuisci al codice di ProjectsHut

## 🧐 Segui questi passaggi per contribuire

> ⚠️ "Ricorda di aggiungere un" ["Commit buono"](https://twitter.com/Priyankarpal/status/1638403157863673859)

[![Apri in GitPod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. "Forka questo repository"

![ "Forka questo repository"](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. "Clicca su `Vai al file`"

![ Vai al file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Aggiungi il seguente codice alla fine di `src/DB/projects.json`

```json
{
  "gh-username": "IL TUO USERNAME GITHUB",
  "link": "LINK AL PROGETTO SU GITHUB O DEMO",
  "title": "TITOLO DEL PROGETTO",
  "description": "DESCRIZIONE DEL PROGETTO",
  "tech": ["tecnologia 1", "tecnologia 2", "ecc."]
}
```

> ### Se vuoi eseguirlo in locale, segui questi passaggi

4.  Clonalo sul tuo computer" in Italian

```
 git clone https://github.com/[il tuo nome utente]/ProjectsHut.git
```

5.  Passare alla cartella del progetto

```
cd ProjectsHut
```

6.  installare le dipendenze

```
pnpm i
```

7.  correre in locale

```
pnpm dev
```

8.  Crea un nuovo ramo usando il tuo `Nome utente GitHub`

```diff
git checkout -b [name_of_your_new_branch]
```

9. Aggiungi le tue modifiche.

```diff
git add .
```

10. Aggiungi i tuoi commit

```diff
git commit -m "Your Changes"
```

> Se riscontri questo errore durante il commit
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> usa questo comando
>
> ```diff
> pnpm format
> ```

11. Imposta il comando a monte

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

12. Spingi i tuoi commit

```diff
git push -u origin [Your-branch-name]
```

13. Crea un PR

14. Attendi l'unione