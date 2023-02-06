# Using Custom GitHub Actions to Deploy Static Website

- Status: pending
- Date: 
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/20

## Decision Outcome

- **Chosen Option:** Custom Github Action
- **Rules:**
  - File name: `deploy-static-astro.yml`
  - Workflow:
    - On branch `gh-pages` push event
    - Build site
    - Add CNAME file with default domain to built artifact directory
    - Upload built artifact to gh-pages
    - Deploy uploaded artifact to github pages
    - Update `public_html` with built artifact
    - Push `public_html` to master. Commit message: `CI: Updated public_html automatically`

### Consequences

- Instroducing possible complex workflow to maintain
- Possibility to use `public_html` on master as represantation of production

## Context, Problem Statement and Requirements

- Decided to use Nx as code management [0004](0004-nx.md)
- Decided to use Astro as web framework [0005](0005-using-astro-as-web-framework.md)
- We want to maintain default astro development workflow, which outputs to directory: `./dist/{project_path}`
- We want to maintain `public_html` as default output directory 
- We want to maintain `gh-pages` branch as default publishing branch on push/pr-merge
- `public_html` should include a CNAME file with the default domain as content. Not the astro output built

## Decision Drivers

- ✅ Using custom development workflow with both nx and astro
- ✅ Maintain `public_html` as house for public website
- ✅ Maintain `dist/web/app` as house for built artifact
- ✅ Ability to serve `public_html` locally as production site
- ✅ Customizable


## Considered Options

- [Official Astro Github Pages Action](https://github.com/withastro/action)
- [Custom Github Action](0006-using-custom-github-actions-to-deploy-static-website.md#decision-drivers)

### Options Observations

### [Official Astro Github Pages Action](https://github.com/withastro/action)

- ✅ Maintained by the Astro team
- 🚫 Output directory is inside project directory: `${{ inputs.path }}dist/` see [this line](https://github.com/withastro/action/blob/dc081df9eacdb11181ea51e5d05853faa5aee891/action.yml#L73)

### [Custom Github Action](0006-using-custom-github-actions-to-deploy-static-website.md#decision-drivers)

- ✅ All decision drivers

## Links

- https://github.com/actions/checkout
- https://github.com/actions/setup-node
- https://github.com/actions/upload-artifact
- https://github.com/withastro/action
- https://dev.to/github/whats-the-difference-between-a-github-action-and-a-workflow-2gba
- https://github.com/actions/upload-pages-artifact
- https://github.com/actions/deploy-pages
- https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-publish-GitHub-Actions-artifacts-example
- https://stackoverflow.com/questions/59241249/how-to-run-github-actions-workflows-locally
- https://joht.github.io/johtizen/build/2022/01/20/github-actions-push-into-repository.html