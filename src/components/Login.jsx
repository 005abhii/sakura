// Enable React Server Component syntax (Next.js specific directive)
// Commented out// Import useState hook from React to manage local component state
import { useState } from "react";
// Import useNavigate from react-router-dom to programmatically navigate
import { useNavigate } from "react-router-dom";
// Import LogOut icon from lucide-react for the Sign In button
import { LogOut } from "lucide-react";

// Define the Login component
const Login = () => {
  // Initialize navigate function
  const navigate = useNavigate();
  // State to hold the entered username
  const [username, setUsername] = useState("");
  // State to hold the entered password
  const [password, setPassword] = useState("");
  // State to hold any error messages
  const [error, setError] = useState("");
  // State to track whether login is in progress
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Set loading state to true
    setIsLoading(true);
    // Clear previous error message
    setError("");

    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check if admin credentials are correct
    if (username === "Admin" && password === "Admin@123") {
      // Store authentication and role in localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", "admin");
      // Navigate to admin dashboard
      navigate("/admin/dashboard");
    }
    // Check if teacher credentials are correct
    else if (username === "Teacher" && password === "Teacher@123") {
      // Store authentication and role in localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", "teacher");
      // Navigate to teacher dashboard
      navigate("/teacher/dashboard");
    }
    // If credentials are incorrect, show error
    else {
      setError("Invalid username or password");
      setIsLoading(false);
    }
  };

  // JSX return for rendering the login form UI
  return (
    // Outer container with full viewport height and centered content
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      {/* Card container for the form */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          padding: "2.5rem",
          borderRadius: "1rem",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          width: "100%",
          maxWidth: "28rem",
        }}
      >
        {/* Header with logo and title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          {/* Logo SVG */}
          <div
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* SVG Icon used as a logo */}
            <svg
              width="48" // Set the width of the SVG
              height="48" // Set the height of the SVG
              viewBox="0 0 24 24" // Define the coordinate system for the SVG content
              fill="none" // Default fill for elements is none
              xmlns="http://www.w3.org/2000/svg" // XML namespace declaration
            >
              {/* Outer circle: Represents the border of the circular icon */}
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                fill="#667EEA" // Fill color for the outer circle (indigo shade)
              />

              {/* Middle circle: Smaller white circle inside the icon */}
              <path
                d="M12 6C8.686 6 6 8.686 6 12C6 15.314 8.686 18 12 18C15.314 18 18 15.314 18 12C18 8.686 15.314 6 12 6Z"
                fill="white" // Fill color is white for the middle circle
              />

              {/* Innermost circle/dot: Colored dot in the center */}
              <path
                d="M12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12C14 10.895 13.105 10 12 10Z"
                fill="#667EEA" // Fill color matches the outer circle
              />
            </svg>
          </div>
          {/* Application title */}
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "#1a365d",
              marginBottom: "0.5rem",
            }}
          >
            SAKURA
          </h1>
          {/* Subtitle */}
          <p
            style={{
              color: "#718096",
              fontSize: "0.9375rem",
            }}
          >
            Sign in to access your dashboard
          </p>
        </div>

        {/* Show error if login fails */}
        {error && (
          <div
            style={{
              backgroundColor: "#FEF2F2",
              color: "#DC2626",
              padding: "0.875rem",
              borderRadius: "0.5rem",
              marginBottom: "1.5rem",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>{error}</span>
          </div>
        )}

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          {/* Username input field */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#1a365d",
              }}
            >
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.875rem",
                borderRadius: "0.375rem",
                border: "1px solid #CBD5E0",
                fontSize: "0.875rem",
                color: "#1a202c",
                outline: "none",
                transition: "border-color 0.2s",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              placeholder="Enter your username"
            />
          </div>

          {/* Password input field */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#1a365d",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.875rem",
                borderRadius: "0.375rem",
                border: "1px solid #CBD5E0",
                fontSize: "0.875rem",
                color: "#1a202c",
                outline: "none",
                transition: "border-color 0.2s",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              placeholder="Enter your password"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "0.875rem",
              borderRadius: "0.375rem",
              border: "none",
              backgroundColor: "#667eea",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s, transform 0.2s",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Show loading spinner while authenticating */}
            {isLoading ? (
              <>
                <svg
                  style={{
                    marginRight: "0.5rem",
                    animation: "spin 1s linear infinite",
                    width: "16px",
                    height: "16px",
                  }}
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.25"
                  />
                  <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                {/* Default button content */}
                <LogOut style={{ marginRight: "0.5rem" }} />
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Demo credentials section */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#F7FAFC",
            borderRadius: "0.5rem",
            fontSize: "0.8125rem",
            color: "#718096",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "500", marginBottom: "0.5rem" }}>
            Demo Credentials
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* Admin credentials */}
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#4A5568",
                  fontWeight: "600",
                }}
              >
                Admin Login
              </div>
              <div>Username: Admin</div>
              <div>Password: Admin@123</div>
            </div>
            {/* Teacher credentials */}
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#4A5568",
                  fontWeight: "600",
                }}
              >
                Teacher Login
              </div>
              <div>Username: Teacher</div>
              <div>Password: Teacher@123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Login component so it can be used in other parts of the app
export default Login;
