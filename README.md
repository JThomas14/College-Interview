
# College Interview 

This is the github repo for my college interview website. It contains all the files and resources for the website. It uses a **nodejs/expressjs** setup using **pugjs** for the client. 

# The Website
· [website](https://collegeinterview.onrender.com)

# How to use the Website

Firstly, you must sign-up, and create a username and passcode, then it will tell you, you have successfully signed up! Then, click login and enter your newly created details. It will then tell you that your login was successful, and now have access to the main website. 


# How the Login system works

```mermaid
graph LR
A[Login, generating a cookie Session ID] --> B(Load a new page)
B --> C(System checks to see that the Session ID provided by the client matches)
C --> D(Client Session ID matches, granting access)
C --> E(Client Session ID doesn't match, redirecting to login page)

```