# Posts Content Generation Helper

- Status: draft
- Date: 07-04-2023 01:43:18
- Story: https://github.com/users/richardblondet/projects/3/views/1?pane=issue&itemId=23778620

## Decision Outcome

- **Chosen Option:** 
  - Custom Nx Plugin
- **Rules:** 
  - CLI tool library named: `post-generator`
  - Usage:

```sh
npx nx generate @richardblondet.com/content-generator:post-generator 'Testing cli' --persona=software-engineer
```

This command will:
- Create a mdx file using the 'Testing cli' to generate a fileName/slug friendly name
- Will populate the frontmatter title: 'Testing cli'
- Will use the required `--persona` flag to populate the frontmatter attribute
- Will populate dynamically the `createdAt` with an ISOString Date
- Passing the `--directory=string`, `--tags=string,string`, `--startDate=YYYY-MM-DD`, `--endDate=YYYY-MM-DD` will populate the posts frontmatter values respectively

### Consequences

- 07-04-2023 01:34:58 Creating posts is now more approachable now
- Thanks to the NX VSCode plugin we have an interface within the editor and don't have to run the command every time we want a new post

## Context, Problem Statement and Requirements

- We need a helper tool to make content creation pragmatic
- We need a helper tool that can add files to the `content` directory. To each folder depending on the type respectively
- This tool should be (preferable) able to integrate with the tools we are already using. Namely Nx, etc...
- We need a tool that can use our templates
- This tool should be able to add the newly files to a specified directory for organization
- We need a tool to add the `createdAt` date dynamically
- We need a tool to populate the slug dynamically
- We need a tool to populate the persona dynamically
- This tool should allow us to add a comma separated words to the tags attribute 

## Decision Drivers

- ✅ Nx built tooling to enhance workspaces
- ✅ Following the Nx philosophy
- ✅ Nx VSCode Plugin adds an interface to the cli tool


## Considered Options

- Custom NodeJS/Npm script tool

## Options Observations

### Custom NodeJS/Npm script tool

- ✅ Go to option for this task
- 🚫 No support with Nx VSCode plugin already installed and working for other purposes

## Links

- https://nx.dev/recipes/generators/creating-files
- https://nx.dev/recipes/generators/modifying-files#modifying-files-with-a-generator
- https://nx.dev/recipes/generators/generator-options#-%3E-
- https://nx.dev/packages/devkit/documents/nrwl_devkit