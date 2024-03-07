import { useState, useEffect, useCallback } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

type SectionPosition = {
    [key: string]: { top: number; bottom: number }
}

function useFocusedSection(): [string, SectionPosition] {
    const [curSectionName, setCurSectionName] = useState<string>('')
    const [positions, setPositions] = useState<SectionPosition>({})

    const { scrollY } = useScroll()

    const checkMenu = useCallback((curPosition: number) => {
        for (let section in positions) {if (
                curPosition + window.innerHeight / 2 < positions[section].top ||
                curPosition + window.innerHeight / 2 > positions[section].bottom
            ) {
                continue
            }
            
            setCurSectionName(section)
        }
    }, [positions] )

    useMotionValueEvent(scrollY, 'change', curPosition => {
        checkMenu(curPosition)
    })

    useEffect(() => {
        if (Object.keys(positions).length === 0) {
            const sections = document.querySelectorAll('section[data-title]')
            const sectionPositions: SectionPosition = {}

            sections.forEach(section => {
                const sectionName = section.getAttribute('data-title')?.toLocaleLowerCase()
                const sectionTop = Math.round(section.getBoundingClientRect().top + window.scrollY)
                const sectionBottom = Math.round(section.getBoundingClientRect().bottom + window.scrollY)

                if (!sectionName) return

                sectionPositions[sectionName] = {
                    top: sectionTop,
                    bottom: sectionBottom,
                }
            })

            setPositions(sectionPositions)
        }
        checkMenu(window.scrollY)
    }, [checkMenu, positions])

    return [curSectionName, positions]
}

export default useFocusedSection
