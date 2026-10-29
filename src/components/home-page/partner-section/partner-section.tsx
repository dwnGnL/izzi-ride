'use client';
import { useEffect, useRef, type PointerEvent } from 'react';
import AnimBlock from '@hoc/animated-block/animated-block';

import { partners } from '@constants/partner';
import { PARTNERS } from '@constants/section';
import styles from './partner.module.css';
import Link from 'next/link';

const PartnerSection = () => {
    const partnerListRef = useRef<HTMLDivElement>(null);
    const pointerStartRef = useRef<{ pointerId: number; x: number; scrollLeft: number } | null>(null);
    const activePointerIdRef = useRef<number | null>(null);
    const autoScrollTimeoutRef = useRef<number | null>(null);
    const dragAnimationFrameRef = useRef<number | null>(null);
    const dragTargetScrollLeftRef = useRef(0);
    const scheduleAutoScrollRef = useRef<() => void>(() => {});
    const isDraggingRef = useRef(false);
    const wasDraggedRef = useRef(false);
    const isPausedRef = useRef(false);

    const resetAutoScrollTimer = () => {
        if (autoScrollTimeoutRef.current !== null) {
            window.clearTimeout(autoScrollTimeoutRef.current);
            autoScrollTimeoutRef.current = null;
        }
        scheduleAutoScrollRef.current();
    };

    useEffect(() => {
        const partnerList = partnerListRef.current;
        if (!partnerList || partners.length < 2) return;

        const scheduleAutoScroll = () => {
            if (isPausedRef.current) return;

            autoScrollTimeoutRef.current = window.setTimeout(() => {
                if (partnerList.scrollWidth > partnerList.clientWidth) {
                    const firstPartner = partnerList.querySelector('a');
                    if (firstPartner) {
                        const gap = Number.parseFloat(window.getComputedStyle(partnerList).columnGap) || 0;
                        const step = firstPartner.getBoundingClientRect().width + gap;
                        const maxScrollLeft = partnerList.scrollWidth - partnerList.clientWidth;
                        const nextScrollLeft = partnerList.scrollLeft >= maxScrollLeft - 1
                            ? 0
                            : Math.min(partnerList.scrollLeft + step, maxScrollLeft);

                        partnerList.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
                    }
                }

                scheduleAutoScroll();
            }, 3500);
        };

        scheduleAutoScrollRef.current = scheduleAutoScroll;
        scheduleAutoScroll();

        return () => {
            if (autoScrollTimeoutRef.current !== null) {
                window.clearTimeout(autoScrollTimeoutRef.current);
            }
            if (dragAnimationFrameRef.current !== null) {
                window.cancelAnimationFrame(dragAnimationFrameRef.current);
            }
            scheduleAutoScrollRef.current = () => {};
        };
    }, []);

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;

        activePointerIdRef.current = event.pointerId;
        isPausedRef.current = true;
        resetAutoScrollTimer();

        if (event.pointerType === 'mouse') {
            event.currentTarget.scrollTo({
                left: event.currentTarget.scrollLeft,
                behavior: 'instant',
            });
            if (dragAnimationFrameRef.current !== null) {
                window.cancelAnimationFrame(dragAnimationFrameRef.current);
                dragAnimationFrameRef.current = null;
            }
            pointerStartRef.current = {
                pointerId: event.pointerId,
                x: event.clientX,
                scrollLeft: event.currentTarget.scrollLeft,
            };
            dragTargetScrollLeftRef.current = event.currentTarget.scrollLeft;
            isDraggingRef.current = true;
            wasDraggedRef.current = false;
            event.currentTarget.classList.add(styles.dragging);
        }
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        const pointerStart = pointerStartRef.current;
        if (pointerStart?.pointerId !== event.pointerId) return;

        const distance = event.clientX - pointerStart.x;
        if (Math.abs(distance) > 5) wasDraggedRef.current = true;
        const maxScrollLeft = event.currentTarget.scrollWidth - event.currentTarget.clientWidth;
        dragTargetScrollLeftRef.current = Math.max(
            0,
            Math.min(pointerStart.scrollLeft - distance, maxScrollLeft),
        );

        if (dragAnimationFrameRef.current === null) {
            const animateDrag = () => {
                const partnerList = partnerListRef.current;
                if (!partnerList || !isDraggingRef.current) {
                    dragAnimationFrameRef.current = null;
                    return;
                }

                const remainingDistance = dragTargetScrollLeftRef.current - partnerList.scrollLeft;
                if (Math.abs(remainingDistance) < 0.5) {
                    partnerList.scrollLeft = dragTargetScrollLeftRef.current;
                    dragAnimationFrameRef.current = null;
                    return;
                }

                partnerList.scrollLeft += remainingDistance * 0.25;
                dragAnimationFrameRef.current = window.requestAnimationFrame(animateDrag);
            };

            dragAnimationFrameRef.current = window.requestAnimationFrame(animateDrag);
        }
    };

    const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
        if (activePointerIdRef.current !== event.pointerId) return;

        const wasMouseDrag = pointerStartRef.current?.pointerId === event.pointerId;
        const shouldSnap = wasMouseDrag && wasDraggedRef.current;
        activePointerIdRef.current = null;
        pointerStartRef.current = null;
        isDraggingRef.current = false;
        isPausedRef.current = false;
        if (wasMouseDrag) {
            if (dragAnimationFrameRef.current !== null) {
                window.cancelAnimationFrame(dragAnimationFrameRef.current);
                dragAnimationFrameRef.current = null;
            }
            event.currentTarget.classList.remove(styles.dragging);
            if (shouldSnap) {
                const partnerList = event.currentTarget;
                const cards = Array.from(partnerList.querySelectorAll<HTMLAnchorElement>(':scope > *'));
                if (cards.length > 0) {
                    const containerLeft = partnerList.getBoundingClientRect().left + partnerList.clientLeft;
                    const nearestCard = cards.reduce((nearest, card) => {
                        const nearestLeft =
                            partnerList.scrollLeft + nearest.getBoundingClientRect().left - containerLeft;
                        const cardLeft =
                            partnerList.scrollLeft + card.getBoundingClientRect().left - containerLeft;
                        return Math.abs(cardLeft - dragTargetScrollLeftRef.current) <
                            Math.abs(nearestLeft - dragTargetScrollLeftRef.current)
                            ? card
                            : nearest;
                    });
                    const cardLeft =
                        partnerList.scrollLeft + nearestCard.getBoundingClientRect().left - containerLeft;
                    partnerList.scrollTo({
                        left: Math.max(0, Math.min(cardLeft, partnerList.scrollWidth - partnerList.clientWidth)),
                        behavior: 'smooth',
                    });
                }
            }
        }
        resetAutoScrollTimer();
    };

    return (
        <section data-title={PARTNERS} className={styles.section}>
            <AnimBlock>
                <h3>{PARTNERS}</h3>

                <div
                    ref={partnerListRef}
                    className={styles.partner_list}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onClickCapture={event => {
                        if (!wasDraggedRef.current) return;
                        event.preventDefault();
                        event.stopPropagation();
                        wasDraggedRef.current = false;
                    }}
                >
                    {partners.map(partner => (
                        <span key={partner.link} title={partner.name}>
                            <div className={styles.image}>
                                <div
                                    className={styles.image_inner}
                                    style={{ backgroundImage: `url(${partner.image.src})` }}
                                />
                            </div>
                        </span>
                    ))}
                </div>
            </AnimBlock>
        </section>
    );
};

export default PartnerSection;
