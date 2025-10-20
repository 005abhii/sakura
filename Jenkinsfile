pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/AdminVelesium/TMS.git'
        BRANCH = 'main'
        BUILD_DIR = 'dist'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh 'sudo ./deploy.sh'
            }
        }
    }
}
