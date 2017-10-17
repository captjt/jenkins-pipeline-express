node('androidbuild') {
    stage('Checkout') {
        echo 'Getting source code'
        checkout scm
    }

    stage('Build') {
        echo 'Building dependencies'
        sh 'npm i'
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

node('androidbuildnext') {
    stage('Initialize'){
        echo 'Initializing'
        sh "node -v"
        env.VARIABLE_1="10"
        env.VARIABLE_2="7"
    }

    stage('Checkout') {
        echo 'Getting source code'
        checkout scm
    }

    stage('Build') {
        echo 'Building dependencies'
        sh 'npm i'
    }

    stage('Test') {
        echo 'Testing'
        sh 'npm test'
    }

    stage('Pack Application') {
        echo 'Packing application'
        sh 'npm pack'
    }

    stage('Run web api playbook') {
        echo 'web apis playbook'
        // sh 'ansible-playbook webapi-playbook.yml'
    }
}
