# Contributing to Time-Forge

Welcome to the team! To ensure a smooth development process and maintain code quality, please follow these guidelines when contributing to the repository.

## 1. Branching Strategy

We use a feature-branching workflow. **Never commit directly to the `main` or `dev` branches.** All new work must be done in a dedicated branch created from `dev`. 

### Branch Naming Conventions
Please use the following prefixes for your branch names:
* **Features:** `feature/short-description` (e.g., `feature/user-login`)
* **Bug Fixes:** `bugfix/short-description` (e.g., `bugfix/header-alignment`)
* **Hotfixes (Urgent production fixes):** `hotfix/short-description`
* **Chores/Maintenance:** `chore/update-dependencies`

## 2. Pull Request (PR) Process

1.  Push your branch to the remote repository.
2.  Open a Pull Request targeting the **`dev`** branch (not `main`).
3.  Provide a clear description of what the PR accomplishes and link any relevant task tickets.
4.  At least **1 code review approval** is required before the PR can be merged.
5.  Once approved and all checks pass, Squash and Merge your PR.

## 3. Local Environment Setup
*(Note: Please refer to the environment setup documentation or scripts provided in the repository root for instructions on configuring your local development environment.)*
