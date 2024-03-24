export default function scrollTo(to: number) {
	const headerHeight = document.querySelector('header')?.clientHeight || 0
	const main = document.querySelector('main')
    const gap = main ? parseInt(window.getComputedStyle(main).gap) : 0

	window.scrollTo({ top: to - headerHeight - gap, behavior: 'smooth' })
}
