"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const GoogleLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isLabelFloating = isFocused || email.length > 0;

  const handleNext = useCallback(() => {
    if (!email.trim()) {
      setError("Enter an email or phone number");
      inputRef.current?.focus();
    } else {
      setError("");
      // In a real app, this would transition to the password screen
      alert(`Proceeding with: ${email}`);
    }
  }, [email]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleNext();
      }
    },
    [handleNext]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f0f4f9" }}>
      {/* Top spacer */}
      <div className="flex-grow" style={{ minHeight: "32px" }} />

      {/* Main card */}
      <div className="mx-auto w-full" style={{ maxWidth: "1000px", padding: "0 24px" }}>
        <div
          className="bg-white w-full"
          style={{
            borderRadius: "28px",
            padding: "48px",
            minHeight: "400px",
            boxShadow:
              "0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)",
          }}
        >
          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row" style={{ gap: "80px" }}>
            {/* Left column */}
            <div className="md:w-5/12">
              <GoogleLogo />
              <h1
                style={{
                  fontSize: "36px",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "#202124",
                  marginTop: "24px",
                  fontFamily: '"Roboto", Arial, sans-serif',
                }}
              >
                Sign in
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#444746",
                  marginTop: "12px",
                  maxWidth: "360px",
                  fontFamily: '"Roboto", Arial, sans-serif',
                }}
              >
                with your Google Account. This account will be available to other
                Google apps in the browser.
              </p>
            </div>

            {/* Right column */}
            <div className="md:w-7/12 mt-8 md:mt-0">
              {/* Email input with floating label */}
              <div className="relative">
                <div
                  className="relative cursor-text"
                  style={{
                    height: "54px",
                    borderRadius: "4px",
                    border: error
                      ? "2px solid #d93025"
                      : isFocused
                        ? "2px solid #1a73e8"
                        : "1px solid #747775",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxShadow: isFocused ? "0 0 0 1px #1a73e8" : "none",
                  }}
                  onClick={() => inputRef.current?.focus()}
                >
                  {/* Floating label */}
                  <label
                    htmlFor="email-input"
                    className="absolute left-0 pointer-events-none select-none"
                    style={{
                      fontSize: isLabelFloating ? "12px" : "16px",
                      fontWeight: 400,
                      color: error ? "#d93025" : isFocused ? "#1a73e8" : "#444746",
                      top: isLabelFloating ? "-7px" : "50%",
                      transform: isLabelFloating
                        ? "translate(10px, 0)"
                        : "translate(14px, -50%)",
                      transition: "all 0.15s ease-out",
                      backgroundColor: isLabelFloating ? "#ffffff" : "transparent",
                      padding: isLabelFloating ? "0 6px" : "0",
                      lineHeight: "14px",
                      fontFamily: '"Roboto", Arial, sans-serif',
                      zIndex: 1,
                    }}
                  >
                    Email or phone
                  </label>

                  {/* Input field */}
                  <input
                    ref={inputRef}
                    id="email-input"
                    type="text"
                    value={email}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={handleKeyDown}
                    aria-describedby={error ? "email-error" : undefined}
                    autoComplete="email"
                    className="w-full h-full bg-transparent outline-none"
                    style={{
                      padding: "13px 14px 13px 14px",
                      fontSize: "16px",
                      color: "#202124",
                      fontFamily: '"Roboto", Arial, sans-serif',
                      borderRadius: "4px",
                    }}
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p
                    id="email-error"
                    className="flex items-center gap-1"
                    style={{
                      fontSize: "12px",
                      color: "#d93025",
                      marginTop: "4px",
                      fontFamily: '"Roboto", Arial, sans-serif',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d93025"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </p>
                )}
              </div>

              {/* Forgot email link */}
              <button
                className="bg-transparent border-none cursor-pointer p-0"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1a73e8",
                  marginTop: "12px",
                  fontFamily: '"Roboto", Arial, sans-serif',
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#174ea6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#1a73e8")
                }
              >
                Forgot email?
              </button>

              {/* Guest mode info */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "#444746",
                  marginTop: "48px",
                  fontFamily: '"Roboto", Arial, sans-serif',
                }}
              >
                Not your computer? Use Guest mode to sign in privately.
                <button
                  className="bg-transparent border-none cursor-pointer p-0 inline"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1a73e8",
                    fontFamily: '"Roboto", Arial, sans-serif',
                    textDecoration: "none",
                    transition: "text-decoration 0.2s",
                    marginLeft: "4px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  Learn more about using Guest mode
                </button>
              </p>

              {/* Action buttons */}
              <div
                className="flex justify-end items-center"
                style={{ marginTop: "48px", gap: "16px" }}
              >
                <button
                  className="cursor-pointer bg-transparent border-none"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1a73e8",
                    padding: "10px 16px",
                    borderRadius: "4px",
                    fontFamily: '"Roboto", Arial, sans-serif',
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e8f0fe")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  Create account
                </button>

                <button
                  onClick={handleNext}
                  className="cursor-pointer border-none"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#ffffff",
                    backgroundColor: "#1a73e8",
                    padding: "10px 24px",
                    borderRadius: "20px",
                    fontFamily: '"Roboto", Arial, sans-serif',
                    transition: "background-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#174ea6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1a73e8")
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="flex justify-between items-center"
          style={{
            marginTop: "24px",
            padding: "0 48px",
            maxWidth: "1000px",
          }}
        >
          {/* Language selector */}
          <button
            className="flex items-center gap-1 bg-transparent border-none cursor-pointer"
            style={{
              fontSize: "12px",
              color: "#444746",
              fontFamily: '"Roboto", Arial, sans-serif',
              padding: "4px 0",
            }}
          >
            English (United States)
            <ChevronDown size={16} color="#444746" />
          </button>

          {/* Footer links */}
          <div className="flex" style={{ gap: "32px" }}>
            {["Help", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="no-underline"
                style={{
                  fontSize: "12px",
                  color: "#444746",
                  fontFamily: '"Roboto", Arial, sans-serif',
                  transition: "text-decoration 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>

      {/* Bottom spacer */}
      <div className="flex-grow" style={{ minHeight: "32px" }} />
    </div>
  );
}
