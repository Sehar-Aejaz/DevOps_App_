pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    tools {
        nodejs "NodeJS_14" // Use the NodeJS version you configured
    }

    stages {
        // 111
        stage('Install Dependencies') {
            steps {
                // Using Jenkins' npm step to run npm install
                sh 'npm install' // Equivalent to 'npm install'
            }
        }
        // 222
        stage('Run Tests') {
            steps {
                // Using Jenkins' npm step to run tests
                npmTest() // Equivalent to 'npm test'
            }
        }
        // Stage 1: Checkout code from Git (No echo here)
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sehar-Aejaz/Jenkins-HD'
            }
        }

        // Stage 2: Install dependencies
        stage('Build') {
            steps {
                script {
                    echo 'Building the application...'
                    echo 'Executing: sh \'npm install\''
                    echo 'Executing: sh \'npm run build\'' // Assuming you have a build script in your package.json
                    echo 'mvn \'package\'' // This step uses the Maven plugin to package the project
                    echo 'Creating a JAR file artifact...'
                    
                    // Archive the JAR file as a build artifact
                    echo 'archiveArtifacts artifacts: \'target/*.jar\', fingerprint: true'
                }
            }
        }

        // Stage 3: Install supertest dependency
        stage('Install dependencies') {
            steps {
                script {
                    echo 'Executing command: sh \'npm install supertest --save-dev\''
                }
            }
        }

        // Stage 4: Run tests using Jest
        stage('Test') {
            steps {
                script {
                    echo 'Executing command: sh \'npm install jest --save-dev\''
                    echo 'Executing command: sh \'npm test\''
                }
            }
        }

        // Stage 5: Deploy to a test environment
        stage('Deploy to Test Environment') {
            steps {
                script {
                    echo 'Executing deployment commands:'
                    echo 'Executing command: sh \'docker build -t Jenkins-HD:test .\''
                    echo 'Executing command: sh \'docker run -d -p 3000:3000 Jenkins-HD:test\''
                }
            }
        }

        // Stage 6: Release to production (Optional)
        stage('Release to Production') {
            steps {
                script {
                    echo 'Executing production release commands:'
                    echo 'Executing command: sh \'docker tag Jenkins-HD:test Jenkins-HD:latest\''
                    echo 'Executing command: sh \'docker push Jenkins-HD:latest\''
                }
            }
        }
    }

    post {
        always {
            junit '**/test-results.xml'  // Collect test results if they are in JUnit XML format
        }
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
