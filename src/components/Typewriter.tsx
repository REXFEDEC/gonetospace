import { useState, useEffect } from "react";

const Typewriter = () => {
  const phrases = [
    "Check out the music I like.",
    "See the photos I clicked.",
    "Explore the games I recommend.",
    "Read my latest blogs.",
    "Visit my professional site.",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentPhrase.length) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className="text-lg text-muted-foreground font-light h-8 flex items-center">
      {displayedText}
      <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
    </div>
  );
};

export default Typewriter;
