# common-utils

## 脚本介绍

### `pnpm build`

构建产物 es、lib、types

### `pnpm lint`

格式化代码，建议开启 vscode 的保存 lint 检查

### `pnpm prepare`

安装 husky 脚本，开启提交时代码检查.

## 发布流程

- 代码提交、合并
- 构建产物 `pnpm build`
- 更新版本 `npm version [major | minor | patch]`, [Semantic Version](https://semver.org/)
- 发布至 npm source `npm publish`
