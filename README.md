# About Version Control and Git

Version control systems (VCS) track the history of changes in collaborative projects. They allow you to:

* **Track Changes:** See who made what changes, when, and why.
* **Unified View:** Provide a consistent view of the project for all team members.
* **Transparent History:** Help teams stay aligned by visualizing past changes.

**Distributed Version Control Systems (DVCS)**, like Git, offer additional benefits:

* **Offline Collaboration:** Work independently without a constant internet connection.
* **Branching:** Safely experiment with new features or bug fixes.
* **Self-Contained Units:** Each developer has a complete copy of the project and its history.

**Git** is the most popular DVCS, used widely in both open-source and commercial software development. It provides a comprehensive view of the project's timeline, empowering developers to understand the context and contribute effectively.

## About Repositories

A **repository** (or Git project) stores all project files and folders, along with their revision history. These snapshots in time are called **commits**, organized into **branches** representing different development lines.

**Key Features of Git Repositories:**

* **Self-Contained Units:** Anyone with a copy can access the entire codebase and its history.
* **Functionality:** Interact with history, clone repositories, create branches, commit, merge, compare versions, and more.
* **Platforms:** Platforms like GitHub extend Git's capabilities for collaboration and transparency.

## How GitHub Works

**GitHub** hosts Git repositories and offers developers various tools for improved code management:

* **Command-line features**
* **Issue tracking (threaded discussions)**
* **Pull requests (code review and merging)**
* **Marketplace apps**
* **Community of developers**
* **Integration with other tools**

**Collaboration with GitHub Flow:**

1. **Organize work in repositories**.
2. **Create a branch for changes**.
3. **Commit changes to save them**.
4. **Open a pull request to propose and discuss changes**.
5. **Merge pull requests once everyone agrees**.

## Basic Git Commands

Here are some essential Git commands:

* **git init:** Initializes a new Git repository.
* **git clone:** Creates a local copy of an existing remote repository.
* **git add:** Stages changes for inclusion in the project history.
* **git commit:** Saves a snapshot of the staged changes.
* **git status:** Shows the status of changes (untracked, modified, staged).
* **git branch:** Shows the branches being worked on locally.
* **git merge:** Merges lines of development together.
* **git pull:** Updates the local repository with changes from its remote counterpart.
* **git push:** Updates the remote repository with commits made locally.

**For a complete reference, see the Git command full reference guide.**

## Contributing to an Existing Repository

**Example: Downloading and Contributing**

```
# Clone the repository
git clone [https://github.com/owner/repo.git](https://github.com/owner/repo.git)

# Change directory
cd repo

# Create a new branch
git branch my-branch

# Switch to the branch
git checkout my-branch

# Edit files (e.g., file1.md, file2.md)

# Stage the changes
git add file1.md file2.md

# Commit the changes with a message
git commit -m "my snapshot"

# Push changes to GitHub
git push --set-upstream origin my-branch
```

## Starting a New Repository and Publishing it to GitHub
**Prerequisite: Create a new repository on GitHub (see "Hello World" guide).**

```
# Create a new directory and initialize it with Git
git init my-repo

# Change directory
cd my-repo

# Create the first file (e.g., README.md)
touch README.md

# Stage the file
git add README.md

# Commit the changes
git commit -m "add README to initial commit"

# Add the remote repository URL
git remote add origin [https://github.com/YOUR_USERNAME/YOUR-REPOSITORY-NAME.git](https://github.com/YOUR_USERNAME/YOUR-REPOSITORY-NAME.git)

# Push changes to GitHub
git push --set-upstream origin main
Use code with caution.
```

## Contributing to an Existing Branch on GitHub

**Assuming you have an existing project and a new branch on GitHub:**

```
# Change directory
cd repo

# Update local branches
git pull

# Switch to the existing branch (e.g., feature-a)
git checkout feature-a

# Edit files (e.g., file1.md)

# Stage the changes
git add file1.md

# Commit the changes
git commit -m "edit file1"
```

## Models for Collaborative Development

There are two primary ways people collaborate on GitHub:

### Shared Repository
Individuals and teams are explicitly designated as contributors with read, write, or administrator access. This simple permission structure, combined with features like protected branches, helps teams progress quickly when they adopt GitHub.

### Fork and Pull
This model is ideal for open-source projects or projects where anyone can contribute. Here's how it works:
1. **Forking:** A developer creates a copy (fork) of the project under their personal account on GitHub.
2. **Making Changes:** The developer has full control over their fork and can freely implement fixes or new features.
3. **Pull Requests:** Once changes are complete, the developer submits a pull request, proposing their changes to be merged back into the original project. Maintainers can then review and decide whether to integrate the changes.

**For more information, see "Contributing to a project."**


## Git Cheatsheet
**Looking for a quick Git reference guide?**

***Download the Git Cheatsheet from GitHub Education:***

[https://docs.github.com/en/get-started/getting-started-with-git/git-cheatsheet](https://docs.github.com/en/get-started/getting-started-with-git/git-cheatsheet)
