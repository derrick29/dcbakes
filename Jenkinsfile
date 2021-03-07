pipeline {
    agent any
    stages {
        stage('pull from repo'){
            steps{
                sh 'rm -rf dcbakes'
                sh 'echo Cloning repository...'
                sh 'git clone https://github.com/derrick29/dcbakes.git'
            }
        }
        stage('Upload to S3'){
            
            steps{
                sh 'echo Uploading files to S3 bucket...'
                withAWS(region:'us-east-1',credentials:'deploytos3') {
                    s3Upload(bucket: 'dcbakes-store', workingDir:'dcbakes', includePathPattern:'**/*');
                }
            }
            
        }
        stage('Create invalidation'){
            steps{
                sh 'echo Creating Invalidations...'
                withAWS(region:'us-east-1',credentials:'deploytos3') {
                    cfInvalidate(distribution:'E2J7BOLGCUH7U9', paths:['/*'], waitForCompletion: true)
                }
            }
        }
        stage('Deployed'){
            steps{
                sh 'echo Done!'
            }
        }
    }
}