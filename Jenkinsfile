pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Roshandubey9/playwright.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                npm install
                npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat '''
                npx playwright test
                '''
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Automation Report'
            ])
        }
    }
}
