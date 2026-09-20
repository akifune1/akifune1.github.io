/**
 * @file src/components/Carousel.jsx
 * @description Headless horizontal carousel powered by embla-carousel-react.
 * Features GPU-accelerated CSS mask-image depth fades, tactile drop shadows,
 * smooth drag physics, desktop flanking controls, and mobile pagination indicators.
 * Consumed by Projects.jsx and Skills.jsx.
 */

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/carousel.css';

/**
 * Carousel Component
 * Renders an accessible, touch-friendly carousel using Embla Carousel and CSS mask depth fades.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Carousel slide items to render.
 * @param {string} [props.ariaLabel='Horizontal carousel'] - Accessible label.
 * @param {string} [props.className=''] - Custom CSS class name.
 * @returns {JSX.Element} The rendered Carousel component.
 */
export default function Carousel({ children, ariaLabel = 'Horizontal carousel', className = '' }) {
  // Initialize Embla with start alignment and trimSnaps so it stops cleanly at boundaries
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  /**
   * Synchronizes button availability, active index, and edge mask states with Embla.
   */
  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Read snap points once initialized
    setScrollSnaps(emblaApi.scrollSnapList());
    updateScrollState();

    // Subscribe to Embla's reactive events
    emblaApi.on('select', updateScrollState);
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      updateScrollState();
    });
    emblaApi.on('scroll', updateScrollState);

    return () => {
      emblaApi.off('select', updateScrollState);
      emblaApi.off('scroll', updateScrollState);
    };
  }, [emblaApi, updateScrollState]);

  /**
   * Smoothly scrolls to the previous snap slide.
   */
  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  /**
   * Smoothly scrolls to the next snap slide.
   */
  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  /**
   * Scrolls to a specific slide index on dot tap.
   *
   * @param {number} index - Target slide index.
   */
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Compute CSS mask variant for the edge depth fade
  const getMaskClass = () => {
    if (canScrollPrev && canScrollNext) return 'mask-both';
    if (canScrollNext) return 'mask-right';
    if (canScrollPrev) return 'mask-left';
    return 'mask-none';
  };

  return (
    <div
      className={`carousel-wrapper ${className}`}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Flanking Floating Left Button (Desktop) */}
      <button
        type="button"
        className={`carousel-nav-btn carousel-nav-prev ${!canScrollPrev ? 'is-disabled' : ''}`}
        onClick={handlePrev}
        disabled={!canScrollPrev}
        aria-label="Previous items"
        tabIndex={canScrollPrev ? 0 : -1}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Embla Viewport with GPU mask-image depth fade */}
      <div className={`carousel-viewport ${getMaskClass()}`} ref={emblaRef}>
        <div className="carousel-track">
          {children}
        </div>
      </div>

      {/* Flanking Floating Right Button (Desktop) */}
      <button
        type="button"
        className={`carousel-nav-btn carousel-nav-next ${!canScrollNext ? 'is-disabled' : ''}`}
        onClick={handleNext}
        disabled={!canScrollNext}
        aria-label="Next items"
        tabIndex={canScrollNext ? 0 : -1}
      >
        <ChevronRight size={20} />
      </button>

      {/* Minimalist Mobile Pagination Indicator Dots (<768px) */}
      {scrollSnaps.length > 1 && (
        <div className="carousel-mobile-dots" aria-label="Carousel pagination dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-dot ${index === selectedIndex ? 'is-active' : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
