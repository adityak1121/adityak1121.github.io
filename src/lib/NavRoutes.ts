import { base } from '$app/paths';

const routes = [
	{
		href: base,
		label: 'Home'
	},
	{
		href: base + '/projects',
		label: 'Projects'
	},
	{
		href: base + '/about',
		label: 'About'
	},
	{
		href: base + '/blog',
		label: 'Blog'
	}
];

export default routes;
