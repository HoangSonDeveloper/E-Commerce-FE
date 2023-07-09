pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-credentials')
    }
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'ddphuoc', url: 'https://github.com/HoangSonDeveloper/E-Commerce-FE.git'
            }
        }
        stage('Build Docker image') {
            steps {
                sh 'docker build -t iphuoc0309/e-commerce-fe:dev .'
            }
        }
        stage('Login to Dockerhub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push Docker image') {
            steps {
                sh 'docker push iphuoc0309/e-commerce-fe:dev'
            }
        }
        stage('Pull Docker image') {
            steps {
            script {
                sshagent(['ssh-remote']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 167.172.70.225 docker pull iphuoc0309/e-commerce-fe:dev'
                    }
                }
            }
        }
        stage('Stop and remove existing Docker container') {
            steps {
                script {
                    sshagent(['ssh-remote']) {
                        sh "ssh -o StrictHostKeyChecking=no -l root 167.172.70.225 'docker stop e-commerce-fe'"
                        sh "ssh -o StrictHostKeyChecking=no -l root 167.172.70.225 'docker rm e-commerce-fe'"
                    }
                }
            }
        }
        stage('Run Docker container') {
            steps {
                script {
                    sshagent(['ssh-remote']) {
                        sh "ssh -o StrictHostKeyChecking=no -l root 167.172.70.225 'docker run -d --restart=on-failure -p 80:3000 --name e-commerce-fe iphuoc0309/e-commerce-fe:dev'"
                    }
                }
            }
        }
    }
}







