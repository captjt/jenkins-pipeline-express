node('androidbuild') {
    stage('Checkout') {
        echo 'Getting source code...'
        checkout scm
    }

    stage('Build') {
        echo 'Building dependencies...'
        sh 'npm i'
    }

    stage('Test') {
        echo 'Testing...'
        sh 'npm test'
    }

    stage('Publish') {
        echo 'Publishing Test Coverage...'
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
//         echo 'Initializing...'
//         sh "node -v"
//         env.VARIABLE_1="10"
//         env.VARIABLE_2="7"
//     }

//     stage('Checkout') {
//         echo 'Getting source code...'
//         checkout scm
//     }

//     stage('PM2 Install') {
//         echo 'Installing PM2 to run application as daemon...'
//         sh "npm install pm2 -g"
//     }

//     stage('Build') {
//         echo 'Building dependencies...'
//         sh 'npm i'
//     }

//     stage('Test') {
//         echo 'Testing...'
//         sh 'npm test'
//     }

//     stage('Run Application') {
//         echo 'Stopping old process to run new process...'
//         sh '''
//         npm run pm2-stop
//         npm run pm2-start
//         '''
//     }
// }


