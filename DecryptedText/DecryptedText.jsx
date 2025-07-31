import { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import React from "react";

/**
 * DecryptedText
 *
 * Props:
 * - text: string
 * - speed?: number
 * - maxIterations?: number
 * - sequential?: boolean
 * - revealDirection?: "start" | "end" | "center"
 * - useOriginalCharsOnly?: boolean
 * - characters?: string
 * - className?: string          (applied to revealed/normal letters)
 * - encryptedClassName?: string (applied to encrypted letters)
 * - parentClassName?: string    (applied to the top-level span container)
 * - animateOn?: "view" | "hover"  (default: "hover")
 */
export default function DecryptedText({
  text,
  speed = 30,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}) {
  // Memoize initialTextLines to prevent unnecessary re-computation
  const initialTextLines = useMemo(() => {
    return React.Children.toArray(props.children)
      .map((child) =>
        typeof child === "string"
          ? child
          : child.props && child.props.children
          ? child.props.children
          : ""
      )
      .join("")
      .split(/<br\s*\/?>/i)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }, [props.children]);

  const [displayTextLines, setDisplayTextLines] = useState(initialTextLines);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(
    initialTextLines.map(() => new Set())
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let intervals = [];
    let currentIterations = initialTextLines.map(() => 0);

    if (initialTextLines.length === 0) {
      console.warn("DecryptedText: No valid text lines to render");
      return;
    }

    const getNextIndex = (revealedSet, textLength) => {
      switch (revealDirection) {
        case "start":
          return revealedSet.size;
        case "end":
          return textLength - 1 - revealedSet.size;
        case "center": {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex =
            revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

          if (
            nextIndex >= 0 &&
            nextIndex < textLength &&
            !revealedSet.has(nextIndex)
          ) {
            return nextIndex;
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(initialTextLines.join(""))).filter((char) => char !== " ")
      : characters.split("");

    const shuffleText = (originalText, currentRevealed) => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ];
        })
        .join("");
    };

    if (isHovering) {
      setIsScrambling(true);
      initialTextLines.forEach((lineText, lineIndex) => {
        const interval = setInterval(() => {
          setRevealedIndices((prevRevealed) => {
            const newRevealed = [...prevRevealed];
            if (sequential) {
              if (newRevealed[lineIndex].size < lineText.length) {
                const nextIndex = getNextIndex(newRevealed[lineIndex], lineText.length);
                const lineRevealed = new Set(newRevealed[lineIndex]);
                lineRevealed.add(nextIndex);
                newRevealed[lineIndex] = lineRevealed;

                setDisplayTextLines((prevDisplay) => {
                  const newDisplay = [...prevDisplay];
                  newDisplay[lineIndex] = shuffleText(lineText, lineRevealed);
                  return newDisplay;
                });

                return newRevealed;
              } else {
                clearInterval(interval);
                if (
                  initialTextLines.every(
                    (line, idx) => newRevealed[idx].size >= line.length
                  )
                ) {
                  setIsScrambling(false);
                }
                return newRevealed;
              }
            } else {
              setDisplayTextLines((prevDisplay) => {
                const newDisplay = [...prevDisplay];
                newDisplay[lineIndex] = shuffleText(lineText, newRevealed[lineIndex]);
                return newDisplay;
              });

              currentIterations[lineIndex]++;
              if (currentIterations[lineIndex] >= maxIterations) {
                clearInterval(interval);
                setDisplayTextLines((prevDisplay) => {
                  const newDisplay = [...prevDisplay];
                  newDisplay[lineIndex] = lineText;
                  return newDisplay;
                });
                if (
                  currentIterations.every((iteration) => iteration >= maxIterations)
                ) {
                  setIsScrambling(false);
                }
              }
              return newRevealed;
            }
          });
        }, speed);
        intervals.push(interval);
      });
    } else {
      setDisplayTextLines(initialTextLines);
      setRevealedIndices(initialTextLines.map(() => new Set()));
      setIsScrambling(false);
    }

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [
    isHovering,
    initialTextLines,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ]);

  useEffect(() => {
    if (animateOn !== "view") return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === "hover"
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      {initialTextLines.length > 0 ? (
        <>
          <span className="sr-only">{displayTextLines.join("\n")}</span>
          <span aria-hidden="true">
            {displayTextLines.map((lineText, lineIndex) => (
              <span key={lineIndex} className="block">
                {lineText.split("").map((char, charIndex) => {
                  const isRevealedOrDone =
                    revealedIndices[lineIndex].has(charIndex) ||
                    !isScrambling ||
                    !isHovering;

                  return (
                    <span
                      key={`${lineIndex}-${charIndex}`}
                      className={isRevealedOrDone ? className : encryptedClassName}
                    >
                      {char}
                    </span>
                  );
                })}
                {lineIndex < displayTextLines.length - 1 && <br />}
              </span>
            ))}
          </span>
        </>
      ) : (
        <span className={className}>No text to display</span>
      )}
    </motion.span>
  );
}