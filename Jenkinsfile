pipeline {
    agent any
    tools {nodejs "node12.22.1"}
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
        stage('deploy') {
            steps {
                sh 'cp -r /dist /data/cv/'
                sh 'pm2 restart ssr-cv'
            }
        }
    }
}
