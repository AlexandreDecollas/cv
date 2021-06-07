pipeline {
    agent any
    tools {nodejs "node16.2"}
    stages {
        stage('build') {
            steps {
                sh 'npm --version '
                sh 'yarn -v '
            }
        }
    }
}
