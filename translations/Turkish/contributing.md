# Katkıda Bulunmak İçin İzlenecek Adımlar

**Projeyi Anlayın:**

Projenin hedeflerini, mimarisini ve mevcut kod tabanını anlamaya çalışın. Bu, projenin hedefleriyle uyumlu katkılar yapmanıza olanak sağlayacaktır.

**Sorun Seçin/Bir Sorun Oluşturun:**

Mevcut bir sorun üzerinde çalışın veya yeni bir sorun oluşturun (eğer size atanmışsa).

**Bir Sorun Numarası Atayın:**

PR isteğinin açıklamasında `#SORUN_NUMARASI`'nı atayın.

**Atanmış Sorun üzerinde Çalışın:**

Bu süreçte atanmış sorun üzerinde çalışmanızı önceliklendirmenizi rica ederiz. Bir pull request oluşturmadan önce bir sorun oluşturmanız önerilir. Böylelikle, karşılaşılan sorun veya görevi belirleyebilir ve daha verimli bir iş akışı sağlayabilirsiniz. Sorun oluşturulduktan sonra gerekli değişiklikleri uygulayın, hataları düzeltin veya yeni özellikler ekleyerek seçilen sorunu/görevi etkin bir şekilde çözün.

**Değişikliklerinizi Kaydedin:**

Önemli ilerleme kaydettiyseniz veya katkınızı tamamladıysanız, değişikliklerinizi açıklayıcı bir şekilde kaydedin. İnceleme sürecini daha yönetilebilir hale getirmek için sık ve küçük "commit"ler yapmanız tavsiye edilir. Lütfen [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) kontrol edin.

## SPAM YAPMAYIN!!! ⚠

Eğer proje sahibi veya yönetici boş bir sorun veya herhangi bir etik olmayan davranış tespit ederse, ilgili kişi "SPAM" olarak etiketlenecek ve bu projede gelecekte herhangi bir katkıda bulunma veya katılımdan men edilecektir.

# 😎 Projelerinizi ProjectsHut'a Nasıl Eklersiniz

1. Bu depoyu "fork" edin

![Bu depoyu "fork" edin](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. `Dosyaya git` üzerine tıklayın

![Dosyaya git](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Aşağıdaki kodu `src/DB/projects.json` dosyasının sonuna ekleyin

```json
{
  "github_username": "KULLANICI_GITHUB_KULLANICIADI",
  "Sosyal_medya": {
    "gitHub": "SIZIN_GITHUB_HESAP_BAGLANTINIZ",
    "LinkedIn": "SIZIN_LINKEDIN_HESAP_BAGLANTINIZ",
    "Instagram": "SIZIN_INSTAGRAM_HESAP_BAGLANTINIZ",
    "YouTube": "SIZIN_YOUTUBE_HESAP_BAGLANTINIZ",
    "Twitter": "SIZIN_TWITTER_HESAP_BAGLANTINIZ"
  },
  "Projeler": [
    {
      "link": "PROJE_BAGLANTISI",
      "title": "PROJE_ADI",
      "description": "PROJE_ACIKLAMASI",
      "tech": "[teknoloji1,teknoloji2]"
    }
  ]
}
```

4. Tüm değişiklikleri "commit"leyin.

- Yalnızca projelerin eklenmesi için şu şekilde bir "commit" ekleyin `data: [sizin-github-kullanıcı-adınız] tarafından proje ekleme #sorun_numarası`

> ### YA DA, Yerel olarak çalıştırmak isterseniz, aşağıdaki adımları izleyin

1. Bilgisayarınıza klonlayın

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

2. Proje klasörüne gidin

```
cd ProjectsHut
```

3. `.env.example` dosyasının adını `.env` olarak değiştirin ve `.env` dosyasına `GitHub Kişisel Erişim Anahtarınızı` ekleyin

4. Bağımlılıkları yükleyin

```
pnpm i
```

5. `GitHub Kullanıcı Adınız` kullanarak yeni bir dal oluşturun

```diff
git checkout -b [name_of_your_new_branch]
```

6. Yerelde çalıştırın

```
pnpm dev
```

7. Tüm test durumlarının geçtiğinden emin olun

```
pnpm test
```

8. Değişikliklerinizi ekleyin.

```diff
git add .
```

9. Değişikliklerinizi "commit"leyin

```diff
git commit -m "Değişiklikleriniz"
```

> Eğer "commit"ler sırasında bu hatayla karşılaşırsanız
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> şu komutu kullanın
>
> ```diff
> pnpm format
> ```

10. İleri akış komutunu ayarlayın

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

11. Commit'lerinizi gönderin

```diff
git push -u origin [Dallanızın-adı]
```

12. Bir PR (Pull Request) oluşturun

> ### Şimdi birleşme işlemi için bekleyin
