# hdjx-website - Agent Rules

引入新功能前参考 PROJECT_SPEC.md 了解项目现状。

## 变更流程

- 完成代码变更后运行 `npx tsc --noEmit` 确保类型正确。
- **新增功能**需更新 PROJECT_SPEC.md。
- **修改功能**若涉及架构/交互逻辑变更需更新 PROJECT_SPEC.md。
- Git commit message 格式：`<type>: <description>`，type 包括 `feat`/`fix`/`refactor`/`docs`/`style`/`test`/`chore`。

## 编码规范

- 类型定义用 `interface`（格式 `IXxx`），组件参数用 `props` 命名。
- 禁止过早优化：`useCallback`/`useMemo`/`memo` 仅在有明确性能问题时使用。
