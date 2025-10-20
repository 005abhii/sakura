// Mark this file as a client-side component (used in Next.js or React frameworks that support this)
"use client"

// Import React's useState hook (though not used in this component)
import { useState } from "react"
// Import useNavigate hook from react-router-dom for navigation
import { useNavigate } from "react-router-dom"

// Import icons from react-icons/ri (Remix Icons)
import {
  RiHomeLine,
  RiTeamLine,
  RiBarChartLine,
  RiBookOpenLine,
  RiAwardLine,
  RiLightbulbLine
} from 'react-icons/ri';

// Define the Layout component, accepting children (content), currentPage (active route), and onNavigate (callback function)
const Layout = ({ children, currentPage, onNavigate }) => {
  // Initialize the navigate function from react-router
  const navigate = useNavigate()

  // Define sidebar menu items with their icons, labels, and route paths
  const sidebarItems = [
    { icon: <RiHomeLine size={20} />, label: "Dashboard", page: "admin/dashboard" },
    { icon: <RiTeamLine size={20} />, label: "Teacher Bandwidth Tracker", page: "admin/bandwidth" },
    { icon: <RiBarChartLine size={20} />, label: "Performance Dashboard", page: "admin/performance" },
    { icon: <RiBookOpenLine size={20} />, label: "Integrated LMS", page: "admin/lms" },
    { icon: <RiAwardLine size={20} />, label: "Recognition & Rewards System", page: "admin/recognition" },
    { icon: <RiLightbulbLine size={20} />, label: "AI-Powered Insights", page: "admin/insights" },
  ]

  // Handle sidebar menu item click: call parent's navigation handler and navigate using react-router
  const handleNavigation = (page) => {
    onNavigate(page)                                                                                // Call parent component’s handler
    navigate(`/${page}`)                                                                            // Programmatically navigate to the selected page
  }

  // Return layout UI
  return (
    // Outer container holding sidebar and main content
    <div
      style={{
        display: "flex",                                                                            // Horizontal layout
        minHeight: "100vh",                                                                         // Full viewport height
        fontFamily: "system-ui, -apple-system, sans-serif",                                         // Set font
        backgroundColor: "#f8fafc",                                                                 // Light background
      }}
    >
      {                                                                                             /* Sidebar container */}
      <div
        style={{
          width: "280px",                                                                           // Fixed sidebar width
          backgroundColor: "white",                                                                 // White background
          borderRight: "1px solid #e2e8f0",                                                         // Light right border
          padding: "0",                                                                             // No padding
          flexShrink: 0,                                                                            // Prevent sidebar from shrinking
          position: "fixed",                                                                        // Fix position so it doesn't scroll with content
          height: "100vh",                                                                          // Full height
          overflowY: "auto",                                                                        // Enable vertical scrolling
        }}
      >
        {                                                                                           /* Sidebar Header */}
        <div
          style={{
            padding: "20px 24px",                                                                   // Inner padding
            borderBottom: "1px solid #e2e8f0",                                                      // Bottom border
          }}
        >
          <h2
            style={{
              fontSize: "18px",                                                                     // Font size
              fontWeight: "600",                                                                    // Bold weight
              color: "#1f2937",                                                                     // Dark gray color
              margin: "0",                                                                          // Remove margin
            }}
          >
            Admin                                {                                                  /* Display the section title */}
          </h2>
        </div>

        {                                                                                           /* Sidebar Navigation Menu */}
        <nav style={{ padding: "16px 0" }}>
          {                                                                                         /* Loop through each sidebar item and render it */}
          {sidebarItems.map((item, index) => (
            <div
              key={index}                                                                           // Unique key for each item
              style={{
                padding: "12px 24px",                                                               // Inner padding for item
                display: "flex",                                                                    // Align icon and label horizontally
                alignItems: "center",                                                               // Vertically center content
                gap: "12px",                                                                        // Space between icon and label
                cursor: "pointer",                                                                  // Pointer cursor on hover
                backgroundColor: item.page === currentPage ? "#eff6ff" : "transparent",             // Highlight if active
                borderRight: item.page === currentPage ? "3px solid #3b82f6" : "none",              // Blue bar if active
                color: item.page === currentPage ? "#1d4ed8" : "#4b5563",                           // Text color based on active
                fontWeight: item.page === currentPage ? "500" : "400",                              // Font weight based on active
              }}
              onClick={() => handleNavigation(item.page)}                                           // Handle click
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>   {                             /* Render the icon */}
              <span style={{ fontSize: "14px" }}>{item.label}</span> {                              /* Render the label */}
            </div>
          ))}
        </nav>
      </div>

      {                                                                                             /* Main content area (next to the sidebar) */}
      <div style={{ flex: 1, marginLeft: "280px" }}>
        {children} {                                                                                /* Render the nested content passed to Layout */}
      </div>
    </div>
  )
}

// Export the Layout component to be used in other parts of the app
export default Layout
