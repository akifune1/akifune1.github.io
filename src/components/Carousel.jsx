/**
 * @file src/components/Carousel.jsx
 * @description Headless horizontal carousel powered by embla-carousel-react and embla-carousel-auto-scroll.
 * Features GPU-accelerated CSS mask-image depth fades, tactile drop shadows, smooth drag physics,
 * desktop flanking controls, mobile pagination indicators, prioritized manual button navigation,
 * and zero-delay auto-scroll resumption with seamless infinite loop wrapping.
 * Consumed by Projects.jsx, Skills.jsx, and Certifications.jsx.
 */

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/carousel.css';

/**
 * Carousel Component
 * Renders an accessible, touch-friendly carousel using Embla Carousel and CSS mask depth fades.
 * Supports optional continuous auto-scrolling with zero-delay pause on hover and prioritized manual buttons.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Carousel slide items to render.
 * @param {string} [props.ariaLabel='Horizontal carousel'] - Accessible label for screen readers.
 * @param {string} [props.className=''] - Custom CSS class name.
 * @param {boolean} [props.loop=false] - Whether the carousel wraps endlessly.
 * @param {boolean} [props.autoScroll=false] - Enables continuous slow drift auto-scroll.
 * @param {number} [props.autoScrollSpeed=1] - Speed velocity of the auto-scrolling motion.
 * @returns {JSX.Element} The rendered Carousel component.
 */
export default function Carousel({
  children,
  ariaLabel = 'Horizontal carousel',
  className = '',
  loop = false,
  autoScroll = false,
  autoScrollSpeed = 1,
}) {
  const isLooping = loop || autoScroll;
  const isHoveredRef = useRef(false);

  // Memoize Embla configuration options so reference remains stable across renders
  const emblaOptions = useMemo(
    () => ({
      align: 'start',
      containScroll: isLooping ? false : 'trimSnaps',
      dragFree: false,
      loop: isLooping,
      skipSnaps: false,
    }),
    [isLooping]
  );

  // Memoize AutoScroll plugin with startDelay: 0 for instant zero-delay resumption on hover leave
  const plugins = useMemo(() => {
    if (!autoScroll) return [];
    return [
      AutoScroll({
        speed: autoScrollSpeed,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    ];
  }, [autoScroll, autoScrollSpeed]);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, plugins);

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

    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      updateScrollState();
    };

    /**
     * When manual scroll settles, re-check hover state and resume auto-scroll if pointer has exited.
     */
    const onSettle = () => {
      updateScrollState();
      if (autoScroll) {
        const autoScrollPlugin = emblaApi.plugins()?.autoScroll;
        if (autoScrollPlugin && !isHoveredRef.current) {
          autoScrollPlugin.play(0);
        }
      }
    };

    // Subscribe to Embla's reactive events
    emblaApi.on('select', updateScrollState);
    emblaApi.on('reInit', onReInit);
    emblaApi.on('settle', onSettle);

    return () => {
      emblaApi.off('select', updateScrollState);
      emblaApi.off('reInit', onReInit);
      emblaApi.off('settle', onSettle);
    };
  }, [emblaApi, autoScroll, updateScrollState]);

  /**
   * Smoothly scrolls to the previous snap slide.
   * Immediately stops auto-scroll so the manual click takes absolute priority.
   */
  const handlePrev = useCallback(() => {
    if (!emblaApi) return;
    const autoScrollPlugin = emblaApi.plugins()?.autoScroll;
    if (autoScrollPlugin) {
      autoScrollPlugin.stop();
    }
    emblaApi.scrollPrev();
  }, [emblaApi]);

  /**
   * Smoothly scrolls to the next snap slide.
   * Immediately stops auto-scroll so the manual click takes absolute priority.
   */
  const handleNext = useCallback(() => {
    if (!emblaApi) return;
    const autoScrollPlugin = emblaApi.plugins()?.autoScroll;
    if (autoScrollPlugin) {
      autoScrollPlugin.stop();
    }
    emblaApi.scrollNext();
  }, [emblaApi]);

  /**
   * Scrolls to a specific slide index on dot tap.
   *
   * @param {number} index - Target slide index.
   */
  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      const autoScrollPlugin = emblaApi.plugins()?.autoScroll;
      if (autoScrollPlugin) {
        autoScrollPlugin.stop();
      }
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  /**
   * Tracks hover entry on carousel wrapper to stop auto-scroll across cards and flanking buttons.
   */
  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    if (autoScroll && emblaApi) {
      const autoScrollPlugin = emblaApi.plugins()?.autoScroll;
      if (autoScrollPlugin) {
        autoScrollPlugin.stop();
      }
    }
  }, [autoScroll, emblaApi]);

  /**
   * Tracks hover exit on carousel wrapper to resume auto-scroll with zero delay.
   */
  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    if (autoScroll && emblaApi) {
      const autoScrollPlugin = emblaApi.plugins()?.autoScroll;
      if (autoScrollPlugin) {
        autoScrollPlugin.play(0);
      }
    }
  }, [autoScroll, emblaApi]);

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
