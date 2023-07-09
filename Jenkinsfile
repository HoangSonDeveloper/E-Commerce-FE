pipeline {
    agent any {
        stages {
            stage('Clone repository stage') {
                steps {
                    git branch: 'ddphuoc', url: 'https://github.com/HoangSonDeveloper/E-Commerce-FE.git'
                }
            }
            stage('SSH server stage') {
                steps {
                    sshagent(['ssh-remote']) {
                        sh 'ssh -o StrictHostKeyChecking=no -l root 167.172.70.225 uname -a'
                    }
                }
            }
        }
    }
}