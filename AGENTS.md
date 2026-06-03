# AGENTS.md

## 项目概览

项目名称：ROOT 管理后台

项目架构：

- 前后端分离
- 单仓库管理

主要目录：

```text
backend/
frontend/
```

---

## 技术栈

### 后端

- Java 17
- Spring Boot
- Jimmer
- Flyway
- MySQL
- Redis
- Spring Security
- Quartz
- MapStruct
- Lombok

### 前端

- Vue 3
- TypeScript
- Vite
- Element Plus
- Pinia
- Vue Router
- Axios

---

## 项目结构

### 后端

启动模块：

```text
backend/xiyu-server
```

启动类：

```text
backend/xiyu-server/src/main/java/com/xiyu/server/ServerApplication.java
```

业务模块：

```text
backend/xiyu-service
```

主要目录：

```text
controller
service
repository
model
vo
convert
framework
```

Flyway：

```text
backend/xiyu-service/src/main/resources/db/migration
```

---

### 前端

主要目录：

```text
frontend/src/api
frontend/src/views
frontend/src/components
frontend/src/store
frontend/src/router
frontend/src/model
```

常用组件：

```text
ContentWrap
Table
```

---

## 本地开发

前端：

```text
/root-client/
```

后端：

```text
/root-server
```

默认开发端口：

```text
48080
```

---

## 换行规范

仓库统一使用 LF。

适用于：

```text
java
xml
yaml
yml
sql
sh
js
ts
vue
```

要求：

- 保持 LF
- 不转换为 CRLF
- 不因换行符产生无关修改
- 不做全量格式化

---

## 后端开发约定

### Controller

统一返回：

```java
CommonResult<T>
```

成功返回：

```java
success(...)
```

### 权限控制

使用：

```java
@PreAuthorize(...)
```

### 数据库变更

涉及数据库结构调整时：

- 优先使用 Flyway
- 保持现有目录结构
- 保持现有命名规则

---

## 前端开发约定

### 页面开发

优先保持现有项目风格。

常见页面结构：

```text
ContentWrap
Table
queryParams
useMessage
v-hasPermi
```

### API

统一放置：

```text
frontend/src/api
```

### UI

要求：

- 优先使用 Element Plus
- 优先复用现有组件
- 不引入新的 UI 框架

---

## 代码生成相关

项目包含代码生成功能。

修改生成代码时：

- 保持现有目录结构
- 保持现有命名风格
- 不做大范围重构

新增业务功能时通常需要同步检查：

```text
model
repository
service
controller
vo
api
view
flyway
```

---

## 验证要求

验证原则：

- 优先执行与本次改动直接相关的最小验证
- 修改后检查 `git diff`，确认没有无关变更
- 不默认执行全量验证、全量格式化或全量自动修复
- 如验证命令存在历史失败，需要说明是否与本次改动相关

### 前端验证

当前项目：

```bash
pnpm ts:check
```

已知无法通过，不作为默认交付验证条件，除非用户明确要求修复类型检查。

前端改动后优先对本次改动文件执行 ESLint：

```bash
pnpm exec eslint --ext .js,.ts,.vue <changed-files>
```

如需自动修复，仅对本次改动文件执行：

```bash
pnpm exec eslint --fix --ext .js,.ts,.vue <changed-files>
```

不要默认执行全量：

```bash
npm run lint:eslint
```

因为该命令会 `--fix ./src`，可能修改无关文件。

如涉及页面运行，可确认开发服务可启动：

```bash
npm run dev
```

浏览器验证默认不执行。仅当用户在当前这一次需求中明确要求浏览器验证、页面验证、截图确认、检查交互等操作时才执行；该要求不延续到后续任务。

### 后端验证

后端改动优先执行能覆盖改动范围的最小验证。

常用命令：

```bash
mvn test
```

如全量测试因环境依赖失败，说明原因，并判断是否与本次改动相关。

---

## 常用命令

后端：

```bash
mvn test
mvn package
mvn -pl xiyu-server -am spring-boot:run
```

前端：

```bash
npm run dev
```

---

## 工作原则

修改代码前：

- 先阅读附近代码
- 先理解现有实现

修改代码时：

- 修改范围严格贴近用户需求
- 优先复用现有实现
- 保持现有代码风格
- 不进行无关重构

禁止行为：

- 不修改无关文件
- 不覆盖用户已有改动
- 不执行 reset
- 不执行 checkout
- 不删除用户代码

## 搜索建议

优先使用：

```bash
rg
rg --files
```

避免无目的全仓库扫描。

## Codex 工作建议

复杂任务：

1. 先分析方案
2. 列出修改文件
3. 确认后再编码

普通任务：

- 直接修改
- 保持最小变更原则

输出代码时：

- 优先给出精确修改
- 避免重写整个文件
- 避免修改无关逻辑

```

```
