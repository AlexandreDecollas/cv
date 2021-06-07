pipeline {
    agent any
    tools {nodejs "node16.2"}
    stages {
        stage('install dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('build') {
            steps {
                sh 'yarn build:ssr:prod'
            }
        }
    }
}
