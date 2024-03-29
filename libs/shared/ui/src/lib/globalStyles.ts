export default {
  "*,\n::before,\n::after": {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid",
    borderColor: "#e5e7eb"
  },
  "::before,\n::after": { "--tw-content": "''" },
  html: {
    lineHeight: 1.5,
    WebkitTextSizeAdjust: "100%",
    MozTabSize: "4",
    tabSize: 4,
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontFeatureSettings: "normal"
  },
  body: { 
    margin: "0", 
    lineHeight: "inherit", 
    backgroundColor: 'var(--bodyBackgroundColor, #fff)',
    transition: 'background-color 1000ms linear',
  },
  hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
  "abbr:where([title])": {
    WebkitTextDecoration: "underline dotted",
    textDecoration: "underline dotted"
  },
  "h1,\nh2,\nh3,\nh4,\nh5,\nh6": { fontSize: "inherit", fontWeight: "inherit" },
  a: { color: "inherit", textDecoration: "inherit" },
  "b,\nstrong": { fontWeight: "bolder" },
  "code,\nkbd,\nsamp,\npre": {
    fontFamily:
      'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: "1em"
  },
  small: { fontSize: "80%" },
  "sub,\nsup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sub: { bottom: "-0.25em" },
  sup: { top: "-0.5em" },
  table: {
    textIndent: "0",
    borderColor: "inherit",
    borderCollapse: "collapse"
  },
  "button,\ninput,\noptgroup,\nselect,\ntextarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    fontWeight: "inherit",
    lineHeight: "inherit",
    color: "inherit",
    margin: "0",
    padding: "0"
  },
  "button,\nselect": { textTransform: "none" },
  "button,\n[type='button'],\n[type='reset'],\n[type='submit']": {
    WebkitAppearance: "button",
    backgroundColor: "transparent",
    backgroundImage: "none"
  },
  ":-moz-focusring": { outline: "auto" },
  ":-moz-ui-invalid": { boxShadow: "none" },
  progress: { verticalAlign: "baseline" },
  "::-webkit-inner-spin-button,\n::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" },
  "::-webkit-search-decoration": { WebkitAppearance: "none" },
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit"
  },
  summary: { display: "list-item" },
  "blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre": {
    margin: "0"
  },
  fieldset: { margin: "0", padding: "0" },
  legend: { padding: "0" },
  "ol,\nul,\nmenu": { listStyle: "none", margin: "0", padding: "0" },
  textarea: { resize: "vertical" },
  "input::placeholder,\ntextarea::placeholder": {
    opacity: 1,
    color: "#9ca3af"
  },
  'button,\n[role="button"]': { cursor: "pointer" },
  ":disabled": { cursor: "default" },
  "img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject": {
    display: "block",
    verticalAlign: "middle"
  },
  "img,\nvideo": { maxWidth: "100%", height: "auto" },
  "[hidden]": { display: "none" }
};