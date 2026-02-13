pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                checkout scm
            }
        }
        stage('install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy to NGINX') {
            steps {
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r build/* /var/www/html
                '''
            }
        }
    }
}