pipeline {
    agent any
    
    environment {
        // 打包完成后上传到服务器的路径
        UPLOAD_PATH = '/work/version/root/'
        // git的url 用于创建标签
        SSH_NAME = 'aliyun'
    }

    stages {
        // 根据版本号新增git的Tag
        stage('Get Version and Git Tag') {
            steps {
                script {
                    // 1. 进入 frontend 目录读取版本号
                    dir('frontend') {
                        echo '🔍 Getting version from package.json...'
                        def rawOutput = bat(script: 'npm pkg get version', returnStdout: true).trim()
                        def matcher = rawOutput =~ /"(.+?)"/
                        if (matcher.find()) {
                            env.PROJECT_VERSION = matcher.group(1)
                            echo "📌 Final version: ${env.PROJECT_VERSION}"
                        } else {
                            error "❌ Failed to extract version from output: ${rawOutput}"
                        }
                    }

                    // 2. 构造标签名
                    def tagName = "v.root.${env.PROJECT_VERSION}"
                    echo "🏷️ 准备创建 Git 标签：${tagName}"

                    // 3. 拉取远程标签列表，防止冲突
                    bat """
                        git fetch --tags
                    """

                    // 4. 检查标签是否存在
                    def tagExists = bat(script: "git tag --list ${tagName}", returnStdout: true).trim()

                    if (tagExists) {
                        echo "⚠️ 标签 '${tagName}' 已存在，准备删除并重新创建..."
                        bat """
                            git tag -d ${tagName}
                            git push origin :refs/tags/${tagName}
                        """
                    }

                    // 5. 创建新标签并推送
                    echo "✅ 创建并推送标签：${tagName}"
                    bat """
                        
                        git tag -a ${tagName} -m "Auto-tagged ${tagName} from dev branch"
                        git push origin ${tagName}
                    """
                }
                
            }
        }

        // 前端打包
        stage('Frontend Build dev') {
            steps {
                dir('frontend') {
                    echo 'Installing frontend dependencies...'
                    bat 'npm install -g pnpm' // 确保 pnpm 可用
                    bat 'pnpm install --no-frozen-lockfile'

                    echo 'Building frontend...'
                    bat 'npm run build:dev'
                }
            }
        }

        // 后端打包
        stage('Backend Build') {
            steps {
                dir('backend') {
    
                    // Run Maven on a Unix agent.
                    // sh "mvn -Dmaven.test.failure.ignore=true clean package"

                    // To run Maven on a Windows agent, use
                    bat "mvn clean package -T 1C -Dmaven.test.skip=true -Dmaven.compile.fork-true"
                }
            }
        }

        // 获取版本号 
        stage('Get Version Number') {
            steps {
                dir('frontend') {
                    script {
                        echo '🔍 Getting version from package.json...'
                        def rawOutput = bat(script: 'npm pkg get version', returnStdout: true).trim()
                        def matcher = rawOutput =~ /"(.+?)"/
                        if (matcher.find()) {
                            env.PROJECT_VERSION = matcher.group(1)
                            echo "📌 Final version: ${env.PROJECT_VERSION}"
                        } else {
                            error "❌ Failed to extract version from output: ${rawOutput}"
                        }
                    }
                }
            }
        }

        // 上传到服务器
        stage('Upload to Remote via SSH') {
            steps {
                script {
           
                    def remotePath = "${env.UPLOAD_PATH}${env.PROJECT_VERSION}"

                    echo "📤 Uploading frontend & backend to ${remotePath} on server ${env.SSH_NAME}..."

                    // 上传 frontend/dist-dev 目录，并重命名为 root-client
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "${env.SSH_NAME}",
                                transfers: [
                                    // ✅ 创建远程目录（root-client）
                                    sshTransfer(
                                        sourceFiles: '',
                                        execCommand: "mkdir -p ${remotePath} && mkdir -p ${remotePath}/front && mkdir -p ${remotePath}/dev",
                                        execTimeout: 120000
                                    ),
                                    // ✅ 传 frontend 的 dist-dev 目录，重命名为 root-client
                                    sshTransfer(
                                        sourceFiles: 'frontend/dist-dev/',
                                        removePrefix: 'frontend/dist-dev',
                                        remoteDirectory: "${remotePath}/dev/root-tmp-client/",
                                        execCommand: "cd ${remotePath}/dev && rm -rf root-client && mv root-tmp-client root-client",
                                        execTimeout: 120000
                                    ),

                                    // ✅ 上传 WAR 包并重命名
                                    sshTransfer(
                                        sourceFiles: 'backend/yudao-server/target/*.war',
                                        removePrefix: 'backend/yudao-server/target/',
                                        remoteDirectory: "${remotePath}",
                                        execCommand: "cd ${remotePath} && rm -f root-server.war && mv yudao-server.war root-server.war",
                                        execTimeout: 120000
                                    )
                                ],
                                usePromotionTimestamp: false,
                                useWorkspaceInPromotion: false,
                                verbose: true
                            )
                        ]
                    )
                }
            }
        }
    }
}