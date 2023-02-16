export default [
  { text: "Foundations", header: true },
  { text: "Overview", link: "/foundations/overview" },
  { text: "Universal", link: "/foundations/universal" },
  { text: "Persona", link: "/foundations/persona" },

  { text: "Components", header: true },
  { text: "Typography", link: "/components/typography" },
  { text: "Avatar", link: "/components/avatar" },
  { text: "Buttons", link: "/components/buttons" },
  { text: "Cards", link: "/components/cards" },
  { text: "Images", link: "/components/images" },
  { text: "Dividers", link: "/components/dividers" },
  { text: "Code", link: "/components/code" },
  { text: "Navigation", link: "/components/navigation" },
  { text: "Input", link: "/components/inputs" },
  { text: "Table", link: "/components/table" },
  { text: "Persona", link: "/components/persona" },

  { text: "Guidelines", header: true },
  { text: "Patterns", link: "/guidelines/patterns" },
  { text: "Writing", link: "/guidelines/writing" },
  { text: "Legal", link: "/guidelines/legal" },
];

export type Item = { text: string; header?: boolean; link?: string };
export interface NavLinks {
  [i: number]: Item
}