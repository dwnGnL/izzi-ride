'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type SectionPosition = {
    [key: string]: { top: number; bottom: number }
}

export default function useSectionsPosition() {
    const [sectionPositions, setSectionPositions] = useState<SectionPosition>({})
    const pathname = usePathname()

    useEffect(() => {
        const sections = document.querySelectorAll('section[data-title]')
        const data: SectionPosition = {}

        sections.forEach(section => {
            const sectionName = section.getAttribute('data-title')

            if (!sectionName) return

            data[sectionName] = {
                top: Math.round(section.getBoundingClientRect().top + window.scrollY),
                bottom: Math.round(section.getBoundingClientRect().bottom + window.scrollY),
            }
        })

        setSectionPositions(data)
    }, [pathname])

    return sectionPositions
}
