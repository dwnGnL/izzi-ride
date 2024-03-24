'use client'
import { useEffect, useRef } from 'react'

type SectionPosition = {
    [key: string]: { top: number; bottom: number }
}

function useSectionsPosition() {
    const sectionPositions = useRef<SectionPosition>({})

    useEffect(() => {
        if (Object.keys(sectionPositions.current).length === 0) {
            const sections = document.querySelectorAll('section[data-title]')

            sections.forEach(section => {
                const sectionName = section.getAttribute('data-title')?.toLowerCase()

                if (!sectionName) return

                sectionPositions.current[sectionName] = {
                    top: Math.round(section.getBoundingClientRect().top + window.scrollY),
                    bottom: Math.round(section.getBoundingClientRect().bottom + window.scrollY),
                }
            })
        }
    }, [])

    return sectionPositions.current
}

export default useSectionsPosition
