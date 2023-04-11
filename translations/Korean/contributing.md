# 😎 ProjectsHut에 기여하기

## 🧐 다음 순서대로 따라해 기여할 수 있습니다.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. 이 레포지토리를 포크 합니다.

![ Fork this repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. `Go to file`을 클릭합니다.

![Go to file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. `src/DB/projects.json` 파일 끝에 다음 코드를 추가합니다.

```json
{
  "gh-username": "당신의 깃허브 사용자 이름",
  "link": "킷허브나 시범(Demo) 링크",
  "title": "프로젝트 제목",
  "description": "프로젝트 설명",
  "tech": ["기술 1", "기술 2", "기타"]
}
```

> ### 로컬에서 실행하려면 다음의 순서대로 진행합니다.
>
> 4.  당신의 컴퓨터에 클론 합니다.

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

5.  프로젝트 폴더로 이동합니다.

```
cd ProjectsHut
```

6.  종속 항목(Dependency)을 설치합니다.

```
yarn
```

7.  로컬에서 실행합니다.

```
yarn run dev
```

8.  당신의 `GitHub Username`으로 새로운 브랜치를 만듭니다.

```diff
git checkout -b [name_of_your_new_branch]
```

9. 변경 사항을 추가합니다.

```diff
git add .
```

10. 커밋을 추가합니다.

```diff
git commit -m "Your Changes"
```

11. 업스트림 명령어를 설정합니다.

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

12. 커밋을 푸시합니다.

```diff
git push -u origin [Your-branch-name]
```

13. 풀 리퀘스트(PR) 만들기

14. 병합(Merge) 기다리기
