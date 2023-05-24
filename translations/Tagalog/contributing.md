# Sundan ang mga hakbang na ito upang mag-ambag

**Maunawaan ang Proyekto:**

Pag-aralan ang mga layunin, arkitektura, at umiiral na codebase ng proyekto. Ito ay makatutulong upang mag-ambag nang may kaalaman at ayon sa mga layunin ng proyekto.

**Pumili ng Isyu/Gumawa ng isyu:**

Gumawa ng isyu o magtrabaho sa umiiral na isyu kung ikaw ay itinalaga. Bukod doon, kung ikaw ay nasa GSSOC'23, mangyaring magdagdag ng "Ako ay kasali sa GSSOC'23" upang maihalo natin ang label na GSSOC'23 sa partikular na isyu/PR.

**Itakda ang Numero ng Isyu:**

Itakda ang `#ISSUE_NUMBER` sa deskripsyon ng hiling na PR.

**Unahing Gawin ang Itinalagang Isyu:**

Mahinahon naming pinapakiusap na bigyang-prioridad ang pagtatrabaho sa itinalagang isyu sa ngayon. Matatandaan na ang pinakamahusay na paraan ay magsimula sa paggawa ng isyu bago magpatuloy sa paggawa ng pull request. Sa pamamagitan nito, maaari mong ipahayag ang problema o gawain na kailangan at magpapabilis ito ng takbo ng trabaho. Kapag nabuo na ang isyu, mangyaring magpatuloy sa pagsasagawa ng kinakailangang mga pagbabago, pag-address sa anumang mga bug, o pagdaragdag ng mga bagong tampok upang epektibong malutas ang napiling isyu/gawain.

**I-commit ang Iyong Mga Pagbabago:**

Kapag nakapaglakbay ka na nang malayo o tapos na ang iyong ambag, i-commit ang iyong mga pagbabago kasama ang isang maikling deskriptibong mensahe sa commit. Mabuting gawin ito nang madalas at sa mga maliliit na hakbang upang mapadali ang proseso ng pagsusuri. Mangyaring tingnan ang [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## HUWAG MAG-SPAM !!! ⚠

Kapag natagpuan ng tagapamahala o may-ari ang anumang walang laman na isyu o anumang uri ng di-moral na pag-uugali mula sa tiyak na indibidwal, ito ay itatakda bilang `SPAM` at ipagbabawal sa anumang uri ng ambag o pakikilahok sa hinaharap sa proyektong ito.

# 😎 Paano magdagdag ng iyong mga proyekto sa ProjectsHut

1. Fork ang repository na ito

![ i-Fork ang repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. I-click ang `Go to file`

![Punta sa file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Magdagdag ng sumusunod na code sa dulo ng `src/DB/projects.json`

```json
{
  "github_username": "YOUR_GITHUB_USERNAME",
  "Social_media": {
    "gitHub": "YOUR_GITHUB_ACCOUNT_LINK",
    "LinkedIn": "YOUR_LINKEDIN_ACCOUNT_LINK",
    "Instagram": "YOUR_INSTAGRAM_ACCOUNT_LINK",
    "YouTube": "YOUR_YOUTUBE_ACCOUNT_LINK",
    "Twitter": "YOUR_TWITTER_ACCOUNT_LINK"
  },
  "Projects": [
    {
      "link": "PROJECT_LINK",
      "title": "PROJECT_NAME",
      "description": "PROJECT_DESCRIPTION",
      "tech": "[tech1,tech2]"
    }
  ]
}
```

4. I-commit ang lahat ng mga pagbabago.

- magdagdag ng commit tulad nito para lamang sa pagdagdag ng proyekto `data: project addition by [your-githubuser-name] #issue_number`

> ### O, kung nais mong patakbuhin ito nang lokal, sundin ang mga ito

1.  I-clone ito sa iyong kompyuter

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

2.  Lumipat sa folder ng proyekto

```
cd ProjectsHut
```

3. Palitan ang pangalang `.env.example` ng `.env` at magdagdag ng iyong `GitHub Personal Access Token` sa file na `.env`

4. I-install ang mga kinakailangang dependensiya

```
pnpm i
```

5.  Lumikha ng bagong branch gamit ang iyong `GitHub Username`

```diff
git checkout -b [name_of_your_new_branch]
```

6.  I-patupad nang lokal

```
pnpm dev
```

7. Tiyaking pumasa ang lahat ng mga test case

```
pnpm test
```

8. Idagdag ang iyong mga pagbabago.

```diff
git add .
```

9. Mag-commit ng iyong mga pagbabago

```diff
git commit -m "Mga pagbabago"
```

> Kung ikaw ay nagka-error tulad nito habang nagko-commit
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> gamitin ang sumusunod na commando
>
> ```diff
> pnpm format
> ```

10. Itakda ang commando ng upstream

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

11. I-push ang iyong mga commit

```diff
git push -u origin [Your-branch-name]
```

12. Lumikha ng PR

> ### Ngayon Maghintay para sa pag-merge
