# 😎 あなたのコードを ProjectsHut に投稿してください。

## 🧐 以下のステップを踏んで投稿してください。

> ⚠️ 追加することを忘れないでください [グッドコミット](https://twitter.com/Priyankarpal/status/1638403157863673859)

[![Gitpodで開く](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. このリポジトリをフォークする

![ このリポジトリをフォークする](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. をクリックします `Go to file`

![Go to file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. `src/DB/projects.json` の末尾に次のコードを追加します

```json
{
  "gh-username": "あなたのgithub-username",
  "link": "Github またはデモへのリンク",
  "title": "プロジェクトタイトル",
  "description": "プロジェクト記述",
  "tech": ["いくつかの技術 1", "いくつかの技術 2", "その他"]
}
```

> ### ローカルで実行する場合は、次のようにします。

4.  コンピュータにクローンする

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

5.  プロジェクトフォルダーに移動する

```
cd ProjectsHut
```

6.  依存関係をインストールする

```
pnpm i
```

7.  ジーユー

```
pnpm dev
```

8.  GitHub のユーザー名`を使用して新しいブランチを作成します。

```diff
git checkout -b [name_of_your_new_branch]
```

9. すべてのテストケースがパスすることを確認する

```
pnpm test
```

10. 変更点を追加します。

```diff
git add .
```

11. コミットを追加する

```diff
git commit -m "Your Changes"
```

> コミット中にこのエラーが発生した場合
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> このコマンドを使う
>
> ```diff
> pnpm format
> ```

12. アップストリームコマンドを設定する

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

13. コミットをプッシュする

```diff
git push -u origin [Your-branch-name]
```

14. PR を作成する

15. マージ待ち
