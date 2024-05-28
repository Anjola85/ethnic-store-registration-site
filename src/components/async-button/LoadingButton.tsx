import { useState, useEffect } from "react";
import LoadingIndicator from "./components/LoadingIndicator";
import styles from "./LoadingButton.module.css";

interface LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  doneMessage?: React.ReactNode;
}

const LoadingButton = ({
  isLoading,
  children,
  className,
  disabled,
  doneMessage,
  onClick,
}: LoadingProps) => {
  const [buttonContent, setButtonContent] = useState(children);
  const [wasLoading, setWasLoading] = useState(false);
  const message = doneMessage || <div>Yayy! &#129395;</div>;

  useEffect(() => {
    if (wasLoading && !isLoading) {
      setButtonContent(message);
      const timer = setTimeout(() => {
        setButtonContent(children);
        setWasLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (isLoading) {
      setWasLoading(true);
    }
  }, [isLoading, children]);

  return (
    <div
      className={`${className} ${styles.btn} ${disabled && styles.disabled}`}
      onClick={onClick}
    >
      {isLoading ? <LoadingIndicator /> : buttonContent}
    </div>
  );
};

export default LoadingButton;
