# 😎 Contribuye con tu código a ProjectsHut

## 🧐 Siga estos pasos para contribuir

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. Bifurcar este repositorio

![ Fork this repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. Haga clic en `Go to file`

![Go to file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Agregar código siguiente al final de `src/DB/projects.json`

```json
{
  "gh-username": "YOUR-GITHUB-USERNAME",
  "link": "LINK-TO-GITHUB-OR-DEMO",
  "title": "PROJECT-TITLE",
  "description": "PROJECT-DESCRIPTION",
  "tech": ["some tech 1", "some tech 2", "etc"]
}
```

> ### Si desea ejecutarlo localmente, siga estos

4.  Clonarlo en tu computadora

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

5.  Vaya a la carpeta del proyecto

```
cd ProjectsHut
```

6.  Instalar dependencias

```
yarn
```

7.  Ejecutar en local

```
yarn run dev
```

8.  Cree una nueva sucursal utilizando su `GitHub Username`

```diff
git checkout -b [name_of_your_new_branch]
```

9. Agregue los cambios.

```diff
git add .
```

10. Añade tus confirmaciones.

```diff
git commit -m "Your Changes"
```

11. Configurar comando ascendente

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

12. Impulsa tus confirmaciones

```diff
git push -u origin [Your-branch-name]
```

13. Crear un PR

14. Esperar a la combinación
