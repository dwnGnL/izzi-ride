import { useState, useEffect, useCallback } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

type SectionPosition = {
	[key: string]: { top: number; bottom: number }
}

function useSectionProperties() {
	const [curSectionName, setCurSectionName] = useState<string>('')
	const [sectionPositions, setSectionPositions] = useState<SectionPosition>({})

	const { scrollY } = useScroll()

	const checkMenu = useCallback(
		(curPosition: number) => {
			for (let section in sectionPositions) {
				if (
					curPosition + window.innerHeight / 2 < sectionPositions[section].top ||
					curPosition + window.innerHeight / 2 > sectionPositions[section].bottom
				) {
					continue
				}

				setCurSectionName(section)
			}
		},
		[sectionPositions],
	)

	useMotionValueEvent(scrollY, 'change', curPosition => {
		checkMenu(curPosition)
	})

	useEffect(() => {
		if (Object.keys(sectionPositions).length === 0) {
			const sections = document.querySelectorAll('section[data-title]')
			const sectionPositions: SectionPosition = {}

			sections.forEach(section => {
				const sectionName = section.getAttribute('data-title')?.toLocaleLowerCase()
				const sectionTop = Math.round(section.getBoundingClientRect().top + window.scrollY)
				const sectionBottom = Math.round(
					section.getBoundingClientRect().bottom + window.scrollY,
				)

				if (!sectionName) return

				sectionPositions[sectionName] = {
					top: sectionTop,
					bottom: sectionBottom,
				}
			})

			setSectionPositions(sectionPositions)
		}
		checkMenu(window.scrollY)
	}, [checkMenu, sectionPositions])

	return { curSectionName, sectionPositions }
}

export default useSectionProperties
