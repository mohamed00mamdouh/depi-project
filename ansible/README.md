# Ansible Playbook for MongoDB, Frontend, and Backend Setup

This Ansible playbook automates the process of setting up a MongoDB database on a server and installing both frontend and backend environments on a second server.

## Playbook Overview
The playbook is divided into two main sections:

1-MongoDB Setup: Installs and configures MongoDB on a designated database server.

2-Web Servers Setup: Installs Node.js, Git, and clones a wep app repository on the web servers (which includes both frontend and backend components).

## Prerequisites
* Ansible must be installed on the control machine.

* The target servers should have SSH access enabled, and the ubuntu user should have sudo privileges.

* The playbook is written for Ubuntu-based systems.

## Playbook Structure

This playbook is designed to handle three server roles: DB server and web servers.

### 1. MongoDB Setup (Hosts: DB)

Tasks for MongoDB setup include:

* Adding MongoDB GPG Key: Ensures that the MongoDB package can be installed securely.
* Adding MongoDB Repository: Adds the MongoDB repository  to the APT sources list.
* Updating APT Cache: Updates the package lists from the repositories.
* Installing MongoDB: Installs the mongodb-org package from the repository.
* Enabling and Starting MongoDB: Ensures that the MongoDB service (mongod) is enabled to start at boot and is started immediately.

### 2. Web Servers Setup (Hosts: web)

Tasks for setting up the frontend and backend environments on the web servers include:

* Installing Required Dependencies: Ensures curl and bash are present for subsequent tasks.
* Installing NVM: Downloads and installs Node Version Manager (NVM) to manage Node.js versions.
* Installing Node.js via NVM: Installs Node.js using NVM and verifies the installation.
* Installing Git: Ensures Git is installed if it's not already available.
* Cloning Backend Repository: Clones the backend repository from GitHub into the specified directory.

The web server is assumed to host both frontend and backend services, which will be handled by the repository being cloned.

## Running the Playbook

1-Make sure your inventory file includes the correct DB and web server IPs or hostnames.

2-Run the playbook with:
 ```bash
$ ansible-playbook -i inventory playbook.yml
 ```

 ## Variables Used

* ansible_distribution_release: Automatically set by Ansible to detect the Ubuntu version for adding the correct MongoDB repository.
* MongoDB version is set to 6.0 in the playbook. If you need a different version, modify the repository URL in the playbook.

## Cloning the Backend Repository

The playbook clones the backend repository from:

```bash
https://github.com/mohamed00mamdouh/depiProject.git
```
* NVM and Node.js: If Node.js isn't available after running the playbook, ensure that NVM is properly installed and the ~/.bashrc file is sourced.