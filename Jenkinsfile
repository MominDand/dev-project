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
        
        stage('Deploy to Inst1') {
            steps {
                sh '''
                ssh ubuntu@52.90.254.178 "sudo rm -rf /var/www/html/*"
                scp -r dist/* ubuntu@52.90.254.178:/var/www/html/
                ssh ubuntu@52.90.254.178 "sudo systemctl restart nginx"
                '''
            }
        }
    }
}