# :sparkles: App-todo-legacy 
> a legacy app to keep track of projects

[![Vue.js](https://img.shields.io/badge/Vue-3.0.0-green.svg?style=for-the-badge&logo=vuedotjs)](https://cli.vuejs.org/)
[![json-server](https://img.shields.io/badge/json--server-0.16.3-orange.svg?style=for-the-badge&logo=json)](https://www.npmjs.com/package/json-server)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=license)](https://opensource.org/licenses/MIT)

A relatively small apps to practice old concepts of vue and check out the integrity

![todo_demo](./todo_app_demo.png)

# Table of Content <!-- omit in toc -->
- [:sparkles: App-todo-legacy](#sparkles-app-todo-legacy)
  - [:floppy_disk: Prerequisite](#floppy_disk-prerequisite)
  - [:computer: Usage](#computer-usage)
- [:checkered_flag: Objective cleared](#checkered_flag-objective-cleared)

---
## :floppy_disk: Prerequisite
- [json-server](https://github.com/typicode/json-server)
## :computer: Usage
clone the app directly from the branch.

```bash
$ git clone git@github.com:ArtificialNeuralIntelligence/col-of-vue-apps.git --branch app-todo-legacy --single-branch
$ cd <cloned_dir>
$ npm install
$ json-server --watch data/db.json
$ npm run serve
```

:mega: Tips: If needed reset the branch name to main and add new remote repo ssh

```
git branch -m app-todo-legacy main
git remote rm origin
git remote add origin <new_git_repo_ssh_url>
```

---
# :checkered_flag: Objective cleared


| Target           | Understanding | Used in this app   |
| ---------------- | ------------- | ------------------ |
| events           | 4/5           | :white_check_mark: |
| components       | 5/5           | :white_check_mark: |
| routes           | 3/5           | :white_check_mark: |
| vuex             | 1/5           | :x:                |
| methods          | 4/5           | :white_check_mark: |
| computed         | 4/5           | :white_check_mark: |
| life cycle hooks | 4/5           | :white_check_mark: |
| Reactivity       | 2/5           | :white_check_mark: |
