import React from "react";
import "./styles/ErrorMessage.css";

interface ErrorMessageProps {
  errorMessage: string;
  setErrorMessage: (error?: string) => void;
}

const ErrorMessage = ({ errorMessage, setErrorMessage }: ErrorMessageProps) => {
  return (
    <div className="error-message" role="alert">
      <button
        type="button"
        aria-label="Close"
        onClick={() => setErrorMessage()}
      >
        x
      </button>
      {errorMessage}
    </div>
  );
};

export default ErrorMessage;
