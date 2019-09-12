# Docker EC2

Simple Docker image for running Node and Express on an EC2 instance.

## Pre-requisites

* EC2 instance on AWS - see [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) - with security group with inbound rules for SSH, HTTP
* Docker on your machine - see [https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)
* CI/CD set up via Buddy, I've used SSH and Rsync - see [https://buddy.works/blog/introducing-rsync-deployments](https://buddy.works/blog/introducing-rsync-deployments)

## Instructions
* Connect to your EC2 instance following the instructions for SSH in EC2
* Install Docker on the EC2 instance:
  * `sudo yum update -y`
  * `sudo yum install -y docker`
