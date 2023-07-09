pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'ddphuoc', url: 'https://github.com/HoangSonDeveloper/E-Commerce-FE.git'
            }
        }
        stage('Build image') {
            steps {
                sh 'docker build -t iphuoc0309/e-commerce-fe:dev .'
            }
        }
        stage('Push image') {
            steps {
                withDockerRegistry(credentialsId: 'ddphuoc-dockerhub', url: "") {
                    sh 'docker push iphuoc0309/e-commerce-fe:dev'
                }
            }
        }
        stage('SSH server') {
            steps {
                script {
                    sshagent(['ssh-ecommerce']) {
                        sh 'ssh -o StrictHostKeyChecking=no -l root 167.172.70.225 "docker pull iphuoc0309/e-commerce-fe:dev && docker run -d -p 80:3000 iphuoc0309/e-commerce-fe:dev"'
                    }
                }
            }
        }
    }
}