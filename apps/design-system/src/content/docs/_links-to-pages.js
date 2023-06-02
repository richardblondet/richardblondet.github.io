const fs = require('fs');
const slugify = require('slugify');

const sidebarLinks = [{
  section: "Overview",
  pages: [{
    title: "Introduction",
    status: "wip",
    href: "/documentation/introduction",
    active: true,
  },{
    title: "Philosophy",
    status: "planned",
    href: "/documentation/philosophy"
  },{
    title: "Requirements",
    status: "planned",
    href: "/documentation/requirements"
  },{
    title: "Architecture",
    status: "planned",
    href: "/documentation/architecture"
  }]
},{
  section: "Journey",
  pages: [{
    title: "The Environment",
    status: "wip",
    href: "/journey/the-journal"
  },{
    title: "The Journal",
    status: "wip",
    href: "/journey/the-journal"
  },{
    title: "The Hero",
    status: "planned",
    href: "/journey/the-hero"
  },{
    title: "The Alt Source",
    status: "planned",
    href: "/journey/the-alt-source"
  },{
    title: "The Multidimensional",
    status: "planned",
    href: "/journey/the-multidimensional"
  },{
    title: "The Messenger",
    status: "planned",
    href: "/journey/the-messenger"
  }]
},{
  section: "Design System",
  pages: [{
    title: "Foundations",
    status: "wip",
    href: "/design-system/introduction"
  },{
    title: "Components",
    status: "planned",
    href: "/design-system/components"
  },{
    title: "Guidelines",
    status: "planned",
    href: "/design-system/guidelines"
  }]
}];

// Function to generate the frontmatter string
const generateFrontmatter = (page) => {
  const { title, status, section } = page;
  return `---
title: "${title}"
progress: "${status}"
section: "${slugify(section.toLowerCase())}"
---`;
};

// Function to create the MDX file
const createMDXFile = (page) => {
  const frontmatter = generateFrontmatter(page);
  const content = `${frontmatter}
# ${page.title}

body here
    
`;

  const fileName = `${slugify(page.title.toLowerCase())}.mdx`;
  const filePath = `./${fileName}`;

  fs.writeFileSync(filePath, content);

  console.log(`Created ${filePath}`);
};

// Iterate over the sidebar links and create MDX files for each page
sidebarLinks.forEach((link) => {
  link.pages.forEach((page) => {
    createMDXFile({ ...page, section: link.section });
  });
});