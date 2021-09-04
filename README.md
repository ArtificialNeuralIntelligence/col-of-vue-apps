# Collection of vue frontend apps <!-- omit in toc -->
> A collection of vue frontend apps during client work and for my practice

- [:mega: General guides](#mega-general-guides)
- [:computer: Usage](#computer-usage)
  - [Starting new](#starting-new)
  - [App-< NAME >](#app--name-)
- [:briefcase: Available Apps](#briefcase-available-apps)
  - [app-todo-legacy](#app-todo-legacy)
  - [app-composition-blog](#app-composition-blog)


## :mega: General guides
The entire collection is composed by many different branches. Each
branch contains seperate apps following the rules of git-flow or long running branch
- Branch `main` contains ready to use vue starter content fixed with eslint and prettier confliction
- Branch `dev` are used for current development
- After completeion of development a new branch `release` is being introduced to cater test cases and see if everything is working 
- Upon completion of test cases entire release branch is merged into `app-<name>` branch
- Branch `release` is closed and branch `dev` is reset to `main` commit for using again from scratch
  
## :computer: Usage

### Starting new
For staring a new development clone `main` branch

```bash
$ git clone <git_ssh_repo_url>
$ cd <cloned_dir>
$ rm --rf .git
$ npm install
$ git init --inital-branch=main
$ git remote add origin <new_ssh_repo_url>
$ git push -u origin main
$ npm run serve
```
For windows bash run `rd /s /q .git` to remove git 

---
### App-< NAME >

For getting previously did project directly clone the branch
```bash
$ git clone <git_ssh_repo_url> --branch <branch_name> --single-branch
$ cd <cloned_dir>
$ npm install
$ npm run serve
```

---
## :briefcase: Available Apps
### app-todo-legacy
**Branch name:** `app-todo-legacy`

### app-composition-blog
**Branch name:** `app-composition-blog`

**Desciption:** A project listing todo app where you can create new project and track it until completion. For more see the branch `reamdme`
