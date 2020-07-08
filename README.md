## react-template

### Overview(概要)

This project is a template of React Development.(extends create-react-app)  
このプロジェクトはReact開発用のテンプレートプロジェクトです。(create-react-appで作成されたものを拡張)

### Features(機能)
- React(create-react-app)
- TypeScript
- ESLint
- Prettier
- React Router

### How To Setup(セットアップ方法)

※In the case of vscode(VSCodeの場合)

#### 1.Clone into your local folder(ローカルフォルダにクローンする)

```
git clone https://github.com/freelance-jak/react-template.git
```

and in the project

```
yarn install
```

#### 2.Install an extension(拡張機能をインストールする)

- Install ESLint
  - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

#### 3.Edit setting.json(setting.jsonの編集)

※It is recommended that you create a workspace of VSCode  
(VSCodeでワークスペースを作成し、そのsetting.jsonを編集することをオススメ)

Add the following to the setting(settingに下記を追記)

```
  "settings": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
```

**＼That's all! Enjoy your development of React!／**

- Formatted automatically when you save  
(保存時に自動でフォーマットされます)
- Simple routing with React Router  
(React Routerでの簡単な画面遷移が行えます)
