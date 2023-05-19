# 😎 Kodunuzu ProjectsHut'a Katkıda Bulunun

## 🧐 Katkıda Bulunmak İçin İzlenecek Adımlar

- Herhangi bir PR/issue oluşturduğunuzda iyi bir başlık ve açıklama ekleyin.
- İyi commit mesajları ekleyin.
- İhtiyaç durumunda ekran görüntüleri ekleyin.

[![Gitpod'da Aç](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. Bu deposu üzerinden fork yapın

![Bu deposu üzerinden fork yapın](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. `Go to file` üzerine tıklayın

![Dosyaya git](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Aşağıdaki kodu `src/DB/projects.json` dosyasının sonuna ekleyin

```json
{
  "gh-kullaniciadi": "KENDİ-GİTHUB-KULLANICIADINIZ",
  "link": "GİTHUB-YA-DA-DEMO-LİNKİ",
  "başlık": "PROJE-BAŞLIĞI",
  "açıklama": "PROJE-AÇIKLAMASI",
  "teknoloji": ["bazı teknoloji 1", "bazı teknoloji 2", "vs."]
}
```

> ### Yerel olarak çalıştırmak için aşağıdaki adımları izleyin

4.  Bilgisayarınıza kopyalayın (clone)

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

5.  Proje klasörüne gidin

```
cd ProjectsHut
```

6. `.env.example` dosyasının adını `.env` olarak değiştirin ve `.env` dosyasına `GitHub Kişisel Erişim Belirtecini` ekleyin

7. Bağımlılıkları yükleyin

```
pnpm i
```

8.  Yerelde çalıştırın

```
pnpm dev
```

9.  Yeni bir dal oluşturmak için `GitHub Kullanıcı Adınızı` kullanın

```diff
git checkout -b [yeni_dal_adınız]
```

10. Tüm test vakalarının geçtiğinden emin olun

```
pnpm test
```

11. Değişikliklerinizi ekleyin.

```diff
git add .
```

12. Commitlerinizi ekleyin

```diff
git commit -m "Değişiklikleriniz"
```

> Eğer commitler sırasında aşağıdaki hatayla karşılaşırsanız
>
> ```diff
> husky - pre-commit kancası 1 hatasıyla sonlandı (error)
> ```
>
> aşağıdaki komutu kullanın
>
> ```diff
> pnpm format
> ```

13. Upstream komutunu ayarlayın

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

14. Commitlerinizi gönderin

```diff
git push -u origin [Kendi-dal-adınız]
```

15. Bir PR (Pull Request) oluşturun

16. Birleştirilmesini bekleyin
