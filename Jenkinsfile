pipeline {
    agent any {
        stages {
            // stage('Clone repository stage') {
            //     steps {
            //         git 
            //     }
            // }
            stage('SSH server') {
                steps {
                    sshagent(['ssh-remote']) {
                        sh 'ssh -o StrictHostKeyChecking=no -l root 167.172.70.225 uname -a'
                    }
                }
            }
        }
    }
}