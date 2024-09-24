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
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install supertest --save-dev'
            }
        }

        // Stage 3: Run tests using Jest
        stage('Test') {
            steps {
                sh 'npm install jest --save-dev'  // Ensures jest is installed
                script {
                    sh 'npm test'
                }
            }
        }

        // Stage 4: Deploy to a test environment
        stage('Deploy to Test Environment') {
            steps {
                script {
                    // Example of Docker-based deployment
                    sh '''
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
                    sh '''
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
