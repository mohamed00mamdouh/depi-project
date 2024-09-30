## Overview
This pipeline automates the deployment of an AWS infrastructure using Terraform. The pipeline performs a series of tasks, including checking out a GitHub repository, modifying the necessary Terraform variables, initializing Terraform, generating a plan, and applying it to create AWS resources. The pipeline is designed to work in Jenkins using parameters that define specific configurations, such as the GitHub repository, branch, AMI ID, instance type, and other relevant details.

## Prerequisites
Before running this pipeline, ensure the following requirements are met:

* Jenkins is properly set up with the necessary  plugins, including:
   * Git Plugin
   * Terraform Plugin
* AWS credentials are configured in Jenkins (e.g., as environment variables or using a credentials manager).
* Terraform is installed and accessible from the Jenkins environment.
* A GitHub repository containing the Terraform configuration files is available.

## Pipeline Parameters
The pipeline accepts the following parameters, which can be configured to customize the deployment:

* GIT_REPO: The URL of the GitHub repository containing the Terraform configuration. Default: https://github.com/Youssef292/3-Tire-Architecture-Aws-Infrastructer.git
* BRANCH: The Git branch to build from. Default: main
* AMI_ID: The Amazon Machine Image (AMI) ID to be used for EC2 instances. Default: ami-0ebfd941bbafe70c6
* instance_type: The type of EC2 instance to create. Default: t2.micro
* jenkins_allowed_cidr_blocks: The CIDR blocks allowed for Jenkins access. Default: 0.0.0.0/0
* aws_region: The AWS region where the infrastructure will be deployed. Default: us-east-1

## Pipeline Structure

The pipeline is divided into the following stages:

1. Checkout
* Clones the specified GitHub repository into the Jenkins workspace.
2. Modify terraform.tfvars
* Modifies the terraform.tfvars file with values from the pipeline parameters. This includes setting the AMI ID, AWS region, instance type, and CIDR blocks for Jenkins access.
3. Terraform Init
* Initializes Terraform in the project directory, downloading necessary modules and providers.
4. Terraform Plan
* Executes the terraform plan command to generate an execution plan, allowing users to verify what actions Terraform will take.
5. Terraform Apply
* Applies the Terraform plan, deploying the infrastructure in the specified AWS region with the configurations provided in the terraform.tfvars file.

## Instructions for Use
### 1. Setup Jenkins Credentials:

Ensure that GitHub credentials are set up in Jenkins using the ID specified in the GIT_CREDENTIALS_ID variable (github_credential in the example). Replace this value with your actual credentials ID if different.
### 2. Configure AWS Access:

Make sure that Jenkins has access to the AWS account, either via environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY) or using the Jenkins Credentials store.
### 3. Run the Pipeline:

Trigger the pipeline from Jenkins, either manually or via a webhook.
Provide any custom parameter values if needed. Otherwise, the default values will be used.

## Notes
* The terraform.tfvars file is generated dynamically by the pipeline based on the input parameters. Ensure the correct values are set before applying changes.
* The pipeline will apply the Terraform plan automatically using the -auto-approve flag. If you wish to review the plan manually before applying, you can remove this flag.

## Troubleshooting
* Ensure that the Jenkins workspace path and Terraform configurations are correct.
* If there are issues with cloning the repository, *verify that the GitHub credentials and repository URL are correct.
* Verify that the Terraform binary is installed and properly configured in the Jenkins environment.






