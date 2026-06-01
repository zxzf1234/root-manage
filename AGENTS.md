# AGENTS.md

这份文件是给后续 AI 编码助手看的项目交接说明，目标是让新的对话能快速接上上下文。

## 项目概览

- 仓库根目录：`D:\code\xiangmu\root\dev`
- 项目类型：Xiyu/ROOT 管理后台，前后端分离，带代码生成功能。
- 总体结构：一个 Git 仓库内包含独立的 `backend` 和 `frontend`。

## 顶层目录

- `backend/`：Java 后端，Maven 多模块项目。
- `frontend/`：Vue 3 管理后台，Vite + pnpm。
- `nginx.conf`、`deploy.sh`、`Jenkinsfile`：部署和 CI 相关文件。
- `README.devops.md`、`README.pack.md`：启动、运维、打包部署说明。

## 后端

### 技术栈

- Java 17
- Maven
- Spring Boot 3.4.1
- Jimmer 0.9.9，用于 ORM/代码生成相关能力
- Flyway 11.1.0，用于数据库迁移
- MySQL 8+
- Redis
- Spring Security
- Springdoc OpenAPI
- Quartz
- Lombok、MapStruct

### 后端文件格式

- 后端主体文件保持 CRLF：`.java`、`.xml`、`.yaml`、`.yml`、`.http`、`.sql`。
- shell 脚本保持 LF：`.sh`。
- 部分既有 SQL 文件没有末尾换行。编辑这类文件时只改必要内容，不要顺手做全量格式化。
- 使用补丁工具编辑后端主体文件后，要确认没有混合换行；如果出现格式校验问题，按原文件风格统一回 CRLF。

### 模块结构

- `backend/pom.xml`：父 POM，版本属性 `revision=0.0.7`。
- `backend/xiyu-server`：可执行 Spring Boot jar 模块。
  - 启动类：`backend/xiyu-server/src/main/java/com/xiyu/server/ServerApplication.java`
  - 使用 `@SpringBootApplication(scanBasePackages = {"com.xiyu.server","com.xiyu.service"})` 扫描 server 和 service。
- `backend/xiyu-service`：主要业务、领域和框架模块。
  - 控制器：`backend/xiyu-service/src/main/java/com/xiyu/service/controller`
  - 服务层：`backend/xiyu-service/src/main/java/com/xiyu/service/service`
  - 仓储层：`backend/xiyu-service/src/main/java/com/xiyu/service/repository`
  - 模型/实体：`backend/xiyu-service/src/main/java/com/xiyu/service/model`
  - VO/请求/响应对象：`backend/xiyu-service/src/main/java/com/xiyu/service/vo`
  - 转换器：`backend/xiyu-service/src/main/java/com/xiyu/service/convert`
  - 框架工具和配置：`backend/xiyu-service/src/main/java/com/xiyu/service/framework`
  - Flyway SQL：`backend/xiyu-service/src/main/resources/db/migration/YYYY/MM/VYYYYMMDD_1_XXX.sql`

### 后端配置

- 基础配置：`backend/xiyu-server/src/main/resources/application.yaml`
- 默认激活 profile：`local`
- 本地配置：`backend/xiyu-server/src/main/resources/application-local.yaml`
  - 服务上下文：`/${spring.application.number}-server`。当前 `spring.application.number=root`，所以接口基础路径通常是 `/root-server`。
  - 服务端口通常是 `48080`。
  - MySQL 数据库名：`root_manage`。
  - Redis 默认：`127.0.0.1:6379`，database `0`。
  - 允许后续 Agent 按此文件中的配置访问本地 MySQL 和 Redis，用于调试、验证接口、排查数据问题和运行后端服务。
- dev 配置：`backend/xiyu-server/src/main/resources/application-dev.yaml`
  - 端口 `48080`，上下文 `/root-server`。
  - MySQL 数据库名 `root_manage`。
  - Redis database `1`。

### 后端常用命令

在 `backend/` 目录下运行：

```powershell
mvn test
mvn package
mvn -pl xiyu-server -am spring-boot:run
```

更聚焦的模块检查：

```powershell
mvn -pl xiyu-service test
mvn -pl xiyu-server -am test
```

启动后端需要本地 MySQL 和 Redis 与当前 Spring profile 配置匹配。

### 后端代码约定

- Controller 通常返回 `CommonResult<T>`，并用静态方法 `success(...)` 包装结果。
- 管理端接口位于 `controller/admin/...`，常见分组是 `infra` 和 `system`。
- 权限控制使用 `@PreAuthorize("@ss.hasPermission('...')")`。
- API 路径偏显式 CRUD 风格，例如 `/create`、`/update`、`/deleted`、`/page`、`/get`、`/exported`。
- 请求/响应 DTO 放在现有 `vo/...` 包层级内，尽量贴合附近命名。
- 新增模型或表结构时，保持 Jimmer/Flyway 的现有模式。迁移文件按现有日期目录和 `VYYYYMMDD_1_XXX.sql` 命名。

## 前端

### 技术栈

- Node >= 16
- pnpm，锁文件为 `frontend/pnpm-lock.yaml`
- Vue 3.3.x
- Vite 4.2.x
- TypeScript 5.0.x
- Element Plus 2.9.x
- Pinia
- Vue Router
- Windi CSS
- Axios 封装位于 `src/config/axios`

### 关键文件

- `frontend/package.json`：脚本和依赖。
- `frontend/vite.config.ts`：Vite 配置。
  - 别名：`@/` 指向 `frontend/src/`。
  - 开发服务 host 为 `0.0.0.0`，端口来自环境变量 `VITE_PORT`。
  - base 路径来自 `VITE_BASE_PATH`。
- `frontend/.env.base`：`pnpm dev` 使用的本地模式配置。
  - `VITE_BASE_PATH=/root-client/`
  - `VITE_SERVER_IP='localhost'`
  - `VITE_SERVER_PORT='48080'`
  - 默认登录：`admin` / `admin123`
- `frontend/.env.dev`、`.env.front`、`.env.pro`、`.env.stage`、`.env.test`、`.env.static`：不同构建目标的环境配置。
- `frontend/src/main.ts`：应用入口。
- `frontend/src/router/index.ts`：路由初始化，history base 来自 `VITE_BASE_PATH`。
- `frontend/src/store`：Pinia store。
- `frontend/src/api`：按业务域分组的接口封装。
- `frontend/src/views`：页面组件。
- `frontend/src/components`：通用组件，包括自定义 `Table`。
- `frontend/src/model`：前端 TypeScript 模型定义。

### 前端常用命令

在 `frontend/` 目录下运行：

```powershell
pnpm install
pnpm dev
pnpm ts:check
pnpm lint:eslint
pnpm lint:format
pnpm lint:style
pnpm build:base
pnpm build:dev
pnpm build:front
pnpm build:pro
```

优先使用 `pnpm`，因为仓库已有 `pnpm-lock.yaml`。

### 前端代码约定

- Vue SFC 通常使用 `<script setup lang="ts">`。
- 接口封装一般是 `src/api/**` 下的普通函数，调用 `request.get/post/put/delete/download/upload`。
- `@/config/axios/config.ts` 通过 `@/utils/auth` 里的 `getServerHttpUrl()` 生成接口基础地址。
- 列表页面常见组合：
  - `ContentWrap`
  - 自定义 `Table`
  - 带 `pageNo`、`pageSize` 的 `queryParams`
  - `useMessage()` 做确认框和提示
  - `v-hasPermi` 做前端权限控制
- 生成式管理页面通常是一个列表页加同目录的 `*Form.vue` 编辑弹窗。
- 继续沿用当前 Element Plus + 项目自定义组件体系，不要随意引入新的 UI 库。

### 格式化和 lint

- `.editorconfig`：
  - UTF-8
  - JS/TS/Vue 使用 LF
  - 2 空格缩进
  - 文件末尾保留换行
- Prettier：
  - 不加分号
  - 单引号
  - 行宽 100
  - 不使用尾随逗号
  - 当前 Windows 开发环境下，部分既有文件会按 CRLF 校验。编辑已有文件时要保留原文件换行风格；如果 Vite/ESLint 报 `Insert ␍`，先将目标文件统一回 CRLF，再重新验证。
- ESLint：
  - Vue 3 recommended
  - TypeScript recommended
  - 未使用变量是 error

## 代码生成相关约定

这个项目内置代码生成功能，很多 controller/service/VO/API/view 文件都明显带有生成代码模式。修改这类文件时：

- 严格匹配附近文件的命名、目录和结构。
- 除非用户明确要求，不做大范围重构。
- 如果修改接口路径，需要同步更新后端 Controller 和前端 `src/api/**`。
- 如果新增数据库功能，通常需要检查并补齐 model、repository、service、controller、VO、前端 API、页面和 Flyway migration。

## 本地开发提示

- 前端本地 base path：`/root-client/`
- 后端 context path：`/root-server`
- 后端端口通常是：`48080`
- 前端通过环境变量和 `getServerHttpUrl()` 指向后端 host/port。
- 后端本地启动依赖 MySQL 和 Redis。允许使用 `application-local.yaml` 中配置的连接信息访问这些本地服务。

## Git / 工作区状态提醒

- 仓库可能已经有用户改动。不要 reset、checkout 或覆盖与任务无关的文件。
- 创建本文件时，`frontend/src/components/Table/src/Table.vue` 已经处于 modified 状态。除非明确确认，否则视为用户已有改动。

## 给后续 Agent 的工作建议

- 搜索优先使用 `rg` / `rg --files`。
- 修改代码前先确认 PowerShell 使用 UTF-8，避免中文显示或保存被错误编码误导。建议执行：
  `chcp 65001; [Console]::InputEncoding = [System.Text.Encoding]::UTF8; [Console]::OutputEncoding = [System.Text.Encoding]::UTF8; $OutputEncoding = [System.Text.Encoding]::UTF8`。
- 编辑前先读附近文件，这个仓库的生成代码和本地约定比较强。
- 修改范围尽量贴近用户请求。
- 前端改动涉及 TypeScript 或 Vue 逻辑时，至少运行 `pnpm ts:check`；较大改动再运行 lint/build。
- 后端改动优先运行最小相关 Maven 测试。没有聚焦测试时，运行能覆盖改动的最小 Maven 命令，并说明任何环境阻塞。
