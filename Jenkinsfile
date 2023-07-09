pipeline {
    agent any
    stages {
        stage('Clone repository stage') {
            steps {
                git branch: 'ddphuoc', url: 'https://github.com/HoangSonDeveloper/E-Commerce-FE.git'
            }
        }
                stage('Deploy stage') {
            steps {
                withDockerRegistry(credentialsId: 'ddphuoc-dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t iphuoc0309/e-commerce-fe:dev .'
                    sh 'docker push iphuoc0309/e-commerce-fe:dev'
                }
            }
        }
        stage('SSH server stage') {
            steps {
                script {
                    sshagent(['ssh-ecommerce']) {
                        sh 'ssh -o StrictHostKeyChecking=no -l root 167.172.70.225'
                        sh 'docker pull iphuoc0309/e-commerce-fe:dev'
                        sh 'docker run -d -p 80:3000 iphuoc0309/e-commerce-fe:dev'
                    }
                }
            }
        }
    }
}
```