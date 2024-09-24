pipeline {
    agent any // Use any available agent

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from Git
                git 'https://github.com/Sehar-Aejaz/Jenkins-HD.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Run a shell command to install dependencies
                sh 'npm install' // or any other command for dependency installation
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests using a shell command
                sh 'npm test' // Replace with your test command
            }
        }

        stage('Build') {
            steps {
                // Build the project using a shell command
                sh 'npm run build' // Replace with your build command
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}

