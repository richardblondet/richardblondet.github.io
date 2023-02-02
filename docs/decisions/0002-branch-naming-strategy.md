# Branch Naming Strategy

- Status: accepted
- Date: 02-02-2023 12:16:56
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/8

## Decision Outcome

- **Chosen Option:** GitHub Flow
- **Rules:** 
  - every branch is either: a feature, bug, adr or chore
  - branch should have the name of the working task prepended with the tag name feature/feature-name-here
  - when ready open PR to master
  - working branches are deleted when approved to master
  - working branches on remote should only remain if they are wip
  - commits should contain the changes to the code in its most simple way


- We think this flow is by far the easieast and most straight forward. [Found here](https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf) 

### Consequences

- Very easy and streamlined work process. 

## Context, Problem Statement and Requirements

- Because we are working alone, we want to keep our branches clean and small on remote, while its okay on our local
- We want to push to master directly
- We want to start working from master always
- We want to adhere as much as possible to the issue naming and tagging
- We want to push a branch to remote only if we are not done at the end of the day. And prepend "wip/" to the name. Eg: "feature/navbar-component" on local. Still working on that? push to remote "wip/feature/navbar-component"
- We need simplicity
- No need to worry for versioning and staging/production code
- We only wany branches related to any operation on remote.
- If in the future we have collaborators, it would still work by creating PRs

## Decision Drivers

- ✅ We don't need to worry about versions 
- ✅ Simpler CI setups. We can merge to master and handle any CI operations before deploying to gh-pages or any other branch that we would consider production



## Considered Options

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)
- [GitLab Flow](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/)

### Options Observations

### [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)

- ✅ Detailed 
- ✅ Descriptive
- ✅ Has tools
- 🚫 Too much branching for use case

### [GitHub Flow](https://guides.github.com/introduction/flow/)

- ✅ Anything in the master branch is deployable
- ✅ To work on something new, create a branch off frommaster and given -a descriptively name(ie: new-oauth2-scopes)
- ✅ Commit to that branch locally and regularly push your work to the -same named branch on the server
- ✅ When you need feedback or help, or you think the branch is ready -for merging, open a pull request
- ✅ After someone else has reviewed and signed off on the feature, you -can merge it into master
- ✅ Once it is merged and pushed to master, you can and should deploy -immediately
- 🚫 Not adequate when it needs the release plans
- 🚫 Doesn t resolve anything about deploy environments releases and issues

### [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)

- ✅ has a clean git history (with squash-and-merge)
- ✅ has good parts from GitHub Flow (simple history with one branch + feature branches)
- 🚫 has parts of Git Flow (releases and hot fixes)

### [GitLab Flow](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/)

- ✅ decreases the overhead of releasing, tagging, and merging, which is a common challenge encountered with other types of Git workflows
- ✅ create an easier way to deploy code
- 🚫 has parts of Git Flow (develop, main, v1, v2, ...)
- 🚫 good for versioning but our use case doesn't need it

--- 
## Links

- https://softwareengineering.stackexchange.com/questions/263164/why-squash-git-commits-for-pull-requests
- https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf
- https://martinfowler.com/articles/branching-patterns.html
- https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/
- https://github.com/island-is/island.is/blob/main/handbook/technical-overview/adr/0004-branching-and-release-strategy.md