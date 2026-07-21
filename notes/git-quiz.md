# Git Quiz

## 1. Merge vs Rebase

### Merge
Merge combines two branches and keeps the complete history of both branches. It creates a merge commit.

**When to use**
- Team projects
- Shared branches
- When you want to preserve history

### Rebase
Rebase moves your commits on top of another branch, creating a cleaner and linear history.

**When to use**
- Before opening a Pull Request
- Cleaning commit history
- Personal feature branches

---

## 2. What does a Pull Request review add?

A Pull Request review helps improve code quality by allowing team members to review the changes before they are merged. It helps catch bugs, maintain coding standards, and encourages collaboration.

---

## 3. Two-branch model (staging/main)

**Staging Branch**
- Used for testing new features.
- Developers merge their work here first.

**Main Branch**
- Contains stable, production-ready code.
- Only tested code is merged into this branch.

---

## 4. Why interns never push directly to main?

Interns should not push directly to the main branch because:
- It can introduce bugs.
- It may break the application.
- Code should always be reviewed before merging.
- Feature branches and Pull Requests provide a safe review process.

---

## 5. What is a Conventional Commit?

A Conventional Commit follows a standard format that clearly describes the type of change.

Examples:

```
feat: add login page
fix: resolve navbar bug
docs: update README
style: improve formatting
refactor: simplify code
test: add unit tests
```