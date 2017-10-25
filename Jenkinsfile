node('master') {
    stage('Checkout') {
        echo 'Getting source code'
        checkout scm
    }

    stage('Build') {
        echo 'Building dependencies...'
        sh 'npm i'
        sh "echo start"        
        sh "echo git branch"        
        sh "echo ${env.GIT_BRANCH}"
        sh "echo pull description"
        sh "echo ${env.ghprbPullDescription}"
        sh "echo pull id"
        sh "echo ${env.ghprbPullId}"
        sh "echo pull link"
        sh "echo ${env.ghprbPullLink}"
        sh "echo pull title"
        sh "echo ${env.ghprbPullTitle}"
        sh "echo src branch"
        sh "echo ${env.ghprbSourceBranch}"
        sh "echo target branch"
        sh "echo ${env.ghprbTargetBranch}"
        sh "echo comment body"
        sh "echo ${env.ghprbCommentBody}"
        sh "echo end"
        sh "echo payload"
        sh "echo ${payload}"
        sh "echo hello"
    }

    stage('Test') {
        echo 'Testing'
        sh 'npm test'
    }

    stage('Publish') {
        echo 'Publishing Test Coverage'
		publishHTML (target: [
			allowMissing: false,
			alwaysLinkToLastBuild: false,
			keepAll: true,
			reportDir: 'coverage/lcov-report',
			reportFiles: 'index.html',
			reportName: "Application Test Coverage"
		])
    }
}

// node('androidbuildnext') {
//     stage('Initialize'){
//         echo 'Initializing'
//         sh "node -v"
//         env.VARIABLE_1="10"
//         env.VARIABLE_2="7"
//     }

//     stage('Checkout') {
//         echo 'Getting source code'
//         checkout scm
//     }

//     stage('Build') {
//         echo 'Building dependencies'
//         sh 'npm i'
//     }

//     stage('Test') {
//         echo 'Testing'
//         sh 'npm test'
//     }

//     stage('Pack Application') {
//         echo 'Packing application'
//         sh 'npm pack'
//     }

//     stage('Run web api playbook') {
//         echo 'web apis playbook'
//         sh 'pwd'
//         // sh 'ansible-playbook webapi-playbook.yml'
//     }
// }
