pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }
    tools {
        nodejs "NodeJS_14" // Use the NodeJS version you configured
    }

    stages {
        // Stage 1: Checkout code from Git
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sehar-Aejaz/Jenkins-HD'
            }
        }

        // Stage 2: Install dependencies
        stage('Install Dependencies') {
            steps {
                withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {
                    script {
                        // Use Node.js to install dependencies
                        def npmInstall = "npm install"
                        def proc = bat(script: npmInstall, returnStdout: true)
                        echo proc
                    }
                }
            }
        }

        // Stage 3: Run tests using Jest
        stage('Test') {
            steps {
                script {
                    // Ensure Jest is installed
                    bat 'npm install jest --save-dev'
                    
                    // Run tests
                    def testResult = bat(script: 'npm test', returnStdout: true)
                    echo testResult
                }
            }
        }

        // Stage 4: Deploy to a test environment
        stage('Deploy to Test Environment') {
            steps {
                script {
                    // Example of Docker-based deployment
                    bat '''
                        docker build -t Jenkins-HD:test .
                        docker run -d -p 3000:3000 Jenkins-HD:test
                    '''
                    // If not using Docker, deploy the app to a staging server or environment here.
                }
            }
        }

        // Stage 5: Release to production (Optional)
        stage('Release to Production') {
            steps {
                script {
                    // Release to production environment
                    bat '''
                        docker tag Jenkins-HD:test Jenkins-HD:latest
                        docker push Jenkins-HD:latest
                    '''
                    // Alternatively, deploy the app to a live production server.
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}

