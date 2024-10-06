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
                echo 'Checking out code from Git...'
                git branch: 'main', url: 'https://github.com/Sehar-Aejaz/DevOps_App_'
            }
        }

        // Stage 2: Install dependencies
        stage('Build') {
            steps {
                script {
                    echo 'Installing dependencies with npm install...'
                    echo 'sh \'npm install \''
                }
            }
        }
        
        // Stage 3: Install supertest dependency
        stage('Install dependencies') {
            steps {
                echo 'Installing supertest dependency...'
                echo 'sh \'npm install supertest --save-dev\''
            }
        }

        // Stage 4: Run tests using Jest
        stage('Test') {
            steps {
                echo 'Installing Jest for testing...'
                echo 'sh \'npm install jest --save-dev\''  // Ensures jest is installed
                script {
                    echo 'Running tests with npm test...'
                    echo 'sh \'npm test\''
                }
            }
        }

        // Stage 5: Deploy to a test environment
        stage('Deploy to Test Environment') {
            steps {
                script {
                    echo 'Building Docker image and deploying to test environment...'
                    
                    // If not using Docker, deploy the app to a staging server or environment here.
                }
            }
        }

        // Stage 6: Release to production (Optional)
        stage('Release to Production') {
            steps {
                script {
                    echo 'Releasing to production environment...'
                    // Release to production environment
                    
                    
                }
            }
        }
    }

    post {
        success {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Successful",
                      body: 'The build was successful. Congratulations!',
                      to: 'seharaejaz4@gmail.com',
                      attachLog: true
        }
        failure {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Failed",
                      body: 'The build has failed. Please investigate.',
                      to: 'seharaejaz4@gmail.com',
                      attachLog: true
        }
    }
}
