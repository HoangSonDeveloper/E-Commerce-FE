pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-credentials')
        REMOTE_HOST = '167.172.70.225'
        DOCKER_IMAGE_TAG = 'dev'
        DOCKER_IMAGE_NAME = 'e-commerce-fe'
        DOCKER_REPOSITORY = 'iphuoc0309'
        CONTAINER_NAME = 'e-commerce-fe'
        CONTAINER_PORT = 8000
        HOST_PORT = 3000
    }
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'ddphuoc', url: 'https://github.com/HoangSonDeveloper/E-Commerce-FE.git'
            }
        }
        stage('Build and push Docker image') {
            steps {
                sh 'docker build -t $DOCKER_REPOSITORY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .'
                sh 'docker login -u $DOCKERHUB_CREDENTIALS_USR -p $DOCKERHUB_CREDENTIALS_PSW'
                sh 'docker push $DOCKER_REPOSITORY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG'
            }
        }
        stage('Deploy to remote server') {
            steps {
                script {
                    sshagent(['ssh-remote']) {
                        sh "ssh -o StrictHostKeyChecking=no -l root $REMOTE_HOST 'docker pull $DOCKER_REPOSITORY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG'"
                        sh "ssh -o StrictHostKeyChecking=no -l root $REMOTE_HOST 'docker stop $CONTAINER_NAME || true'"
                        sh "ssh -o StrictHostKeyChecking=no -l root $REMOTE_HOST 'docker rm $CONTAINER_NAME || true'"
                        sh "ssh -o StrictHostKeyChecking=no -l root $REMOTE_HOST 'docker run -d --restart always -p $CONTAINER_PORT:$HOST_PORT --name $CONTAINER_NAME $DOCKER_REPOSITORY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG'"
                    }
                }
            }
        }
    }
}