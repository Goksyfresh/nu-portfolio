"use client";
import React, { useEffect, useRef, useState } from 'react';

const FitText = ({
  children,
  className,
  style,
  as: Tag = 'h1',
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fitText = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;

      const containerWidth = container.offsetWidth;
      if (containerWidth === 0) return;

      const baseFontSize = 100;
      text.style.fontSize = `${baseFontSize}px`;

      const textWidth = text.scrollWidth;
      if (textWidth === 0) return;

      const newFontSize = (containerWidth / textWidth) * baseFontSize;
      if (!cancelled) setFontSize(newFontSize);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) fitText();
      });
    } else {
      fitText();
    }

    const resizeObserver = new ResizeObserver(() => fitText());
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
    };
  }, [children]);

  return (
    <div ref={containerRef} className="w-full">
      <Tag
        ref={textRef}
        className={className}
        style={{
          ...style,
          fontSize: fontSize ? `${fontSize}px` : undefined,
          whiteSpace: 'nowrap',
          opacity: fontSize ? 1 : 0,
          display: 'block',
        }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default FitText;