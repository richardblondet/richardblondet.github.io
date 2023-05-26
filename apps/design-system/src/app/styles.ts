const proseDefaultClasses = [
	'prose',
];
const proseH1Classes = [
	'text-2xl',
	'sm:text-3xl',
	'font-extrabold',
	'text-slate-900',
	'tracking-tight',
	'dark:text-slate-200'
];
const proseCodeClasses = [
	'bg-red-100',
	'font-bold'
];
export const proseContentClases = [
	...(proseDefaultClasses),
	...(proseH1Classes.map(cls => `prose-h1:${cls}`)),
	...(proseCodeClasses.map(cls => `prose-code:${cls}`)) // doesn't appear to be working
];