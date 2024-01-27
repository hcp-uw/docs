# Using Git in a Team Project

## Introduction

Git is a version control system that allows you to track changes to your code over time. It is a powerful tool that allows you to collaborate with others on a project, and is a standard tool in the software development industry.

This is not a comprehensive guide to Git, but rather a quick introduction to the most common commands you will use when working on a team project. 

Feel free to use this as a reference, but you will likely need to do additional research to learn more about Git.

## Git Basics

The basic workflow of Git can be summed up in the following graphic:

![Git Workflow](./assets/git-diagram.jpeg)


## Git Commands

| Command | Description |
| --- | --- |
| `git init` | Initializes a new Git repository in the current directory. You shouldn't need to do this for HCP |
| `git clone <url>` | Clones a remote Git repository to your local machine. You will use this to create a local copy of your repo |
| `git add <file>` | Adds a file to the staging area. You will use this to add files before you commit them |
| `git commit -m <message>` | Commits the staged files to the local repository. You will use this to save your changes to your local repo |
| `git push` | Pushes your local commits to the remote repository. You will use this to share your changes with your team |
| `git pull` | Pulls the latest changes from the remote repository. You will use this to get the latest changes from your team |
| `git status` | Shows the current status of your local repository. You will use this to see which files have been changed, added, or deleted |
| `git log` | Shows the commit history of your local repository. You will use this to see the commit messages and commit hashes of your commits |
| `git branch` | Shows the current branch you are on. You will use this to see which branch you are working on |
| `git switch <branch>` | Switches to the specified branch. You will use this to switch between branches |
| `git switch -c <branch>` | Creates a new branch and switches to it. You will use this to create a new branch |
| `git reset --hard <commit>` | Resets the repository to the specified commit. You will use this to undo changes to your local repository |
| `git reset --hard origin/<branch>` | Resets the repository to the latest commit on the specified branch. You will use this to undo changes to your local repository |
| `git reset --hard HEAD~<number>` | Resets the repository to the specified number of commits ago. You will use this to undo changes to your local repository |
| `git reset --hard` | Resets the repository to the last commit. You will use this to undo changes to your local repository |
| `git reset --hard origin/master` | Resets the repository to the latest commit on the master branch. You will use this to undo changes to your local repository |

