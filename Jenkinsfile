pipeline {
    agent any
    stages {
        stage('pull from repo'){
            steps{
                sh 'git clone https://github.com/derrick29/dcbakes.git'
            }
        }
        stage('Upload to S3'){
            
            steps{
                withAWS(region:'us-east-1',credentials:'deploytos3') {
                    s3Upload(bucket: 'dcbakes-store', workingDir:'dcbakes', includePathPattern:'**/*');
                }
            }
            
        }
    }
}