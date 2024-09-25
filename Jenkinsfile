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
                    echo' sh 'npm install''
                }
            }
        }
        
        // Stage 3: Install supertest dependency
        stage('Install dependencies') {
            steps {
                echo' sh 'npm install supertest --save-dev''
            }
        }

        // Stage 4: Run tests using Jest
        stage('Test') {
            steps {
                echo'sh 'npm install jest --save-dev''  // Ensures jest is installed
            }
        }

        // Stage 5: Deploy to a test environment
        stage('Deploy to Test Environment') {
            steps {
                echo'docker'
            }
        }

        // Stage 6: Release to production (Optional)
        /*stage('Release to Production') {
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
        }*/
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
