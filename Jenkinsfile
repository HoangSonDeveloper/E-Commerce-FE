pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-credentials')
    }
    stages {
        stage('Clone Github repository') {
            steps {
                git branch: 'ddphuoc', url: 'https://github.com/HoangSonDeveloper/E-Commerce-FE.git'
            }
        }
        stage('Build Docker image') {
            steps {
                sh 'docker build -t iphuoc0309/e-commerce-fe:dev .'
            }
        }
        stage('Login to Docker') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push Docker image') {
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