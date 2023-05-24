# 😎 Contribua com seu código para ProjectsHut

## 🧐 Siga estas etapas para contribuir

- sempre que você criar um PR/problema, adicione um bom título e descrição
- adicionar boas mensagens de commit
- adicione capturas de tela, se necessário

[![Abrir no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. Fork este repositório

![ Fork this repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. Clique em `Ir para o arquivo`

![Ir para o arquivo](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Adicione o seguinte código ao final de `src/DB/projects.json`

```json
{
   "gh-username": "SEU-GITHUB-USERNAME",
   "link": "LINK-TO-GITHUB-OR-DEMO",
   "título": "TÍTULO DO PROJETO",
   "descrição": "DESCRIÇÃO DO PROJETO",
   "tecnologia": ["alguma tecnologia 1", "alguma tecnologia 2", "etc"]
}
```

> ### Se você quiser executá-lo localmente, siga estas

4. Clone-o no seu computador

```
  git clone https://github.com/[seu-nome de usuário]/ProjectsHut.git
```

5. Navegue até a pasta do projeto

```
cd ProjectsHut
```

6. Renomeie `.env.example` para `.env` e adicione seu `GitHub Personal Access Token` no arquivo `.env`

7. instalar dependências

```
pnpm eu
```

8. execute no local

```
pnpm dev
```

9. Crie uma nova ramificação usando seu `GitHub Username`

```diferença
git checkout -b [name_of_your_new_branch]
```

10. Certifique-se de que todos os casos de teste sejam aprovados

```
teste pnpm
```

11. Adicione suas alterações.

```diferença
adicionar git.
```

12. Adicione seus commits

```diferença
git commit -m "Suas alterações"
```

> Se você encontrar este erro durante o commit
>
> ```diferença
> husky - gancho pré-commit encerrado com o código 1 (erro)
> ```
>
> use este comando
>
> ```diferença
> formato pnpm
> ```

13. Configure o comando upstream

```diferença
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

14. Envie seus commits

```diferença
git push -u origin [Nome da sua filial]
```

15. Crie um PR

16. Aguarde a mesclagem