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
                ssh ubuntu@54.82.202.142 "sudo rm -rf /var/www/html/*"
                scp -r dist/* ubuntu@54.82.202.142:/var/www/html/
                ssh ubuntu@54.82.202.142 "sudo systemctl restart nginx"
                '''
            }
        }
    }
}