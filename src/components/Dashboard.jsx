import { useState, useEffect } from "react"                                                         // Import React hooks that help manage component state and side effects
import { useNavigate } from "react-router-dom"                                                      // Import navigation function to move between pages
import { Users, LogOut, AlertTriangle, TrendingUp, TrendingDown, GraduationCap, ArrowRight, Award } from "lucide-react"   // Import various icon components from the Lucide icon library
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"                // Import chart components from the Recharts library for creating graphs
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { ComposedChart } from "recharts";
// Import more icon components from the Heroicons library
import {
  HomeIcon,                                                                                         // House icon for home
  UsersIcon,                                                                                        // People icon for users
  ChartBarIcon,                                                                                     // Bar chart icon
  BookOpenIcon,                                                                                     // Open book icon
  TrophyIcon,                                                                                       // Trophy icon for awards
  LightBulbIcon,                                                                                    // Light bulb icon for ideas
} from "@heroicons/react/24/outline"
import { LineChart, Line } from "recharts";                                                         // Add this import for the KPI trend line chart


const WorkloadDistributionChart = () => {                                                           // Create a component that shows how work is distributed among teachers
  const data = [                                                                                    // Define the data for the pie chart with three categories
    { name: "High", value: 25, color: "#ef4444" },                                                  // 25% have high workload (red color)
    { name: "Medium", value: 45, color: "#f59e0b" },                                                // 45% have medium workload (orange color)
    { name: "Low", value: 30, color: "#10b981" },                                                   // 30% have low workload (green color)
  ]


  const RADIAN = Math.PI / 180                                                                      // Mathematical constant for converting degrees to radians (used for positioning labels)


  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {      // Function that creates custom labels showing percentages on the pie chart
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5                                  // Calculate the distance from center to where the label should be placed
    const x = cx + radius * Math.cos(-midAngle * RADIAN)                                            // Calculate the x position of the label using trigonometry
    const y = cy + radius * Math.sin(-midAngle * RADIAN)                                            // Calculate the y position of the label using trigonometry 

    return (                                                                                        // Return the text element that will show the percentage
      <text
        x={x}                                                                                       // Horizontal position of the text
        y={y}                                                                                       // Vertical position of the text
        fill="white"                                                                                // Make the text white
        textAnchor="middle"                                                                         // Center the text horizontally
        dominantBaseline="middle"                                                                   // Center the text vertically
        style={{ fontSize: "12px", fontWeight: "500" }}                                             // Make text size 12px and medium weight
      >
        {                                                                                           /* Show percentage rounded to whole number */}
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  const CustomTooltip = ({ active, payload }) => {                                                  // Function that creates custom tooltips when hovering over chart sections  
    if (active && payload && payload.length) {                                                      // Check if the tooltip should be shown and has data
      return (                                                                                      // Return the tooltip box with information
        <div
          style={{
            backgroundColor: "white",                                                               // White background for tooltip
            padding: "8px 12px",                                                                    // Add space inside the tooltip
            border: "1px solid #e5e7eb",                                                            // Light gray border
            borderRadius: "6px",                                                                    // Rounded corners
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zoom: 0.9
          }}
        >
          <div
            style={{
              color: payload[0].payload.color,                                                      // Use the same color as the chart section
              fontWeight: "600",                                                                    // Make text bold
              fontSize: "14px",                                                                     // Set text size
            }}
          >
            {                                                                                       /* Show category name and percentage */}
            {payload[0].name}: {payload[0].value}%
          </div>
          <div
            style={{
              fontSize: "12px",                                                                     // Smaller text size
              color: "#6b7280",                                                                     // Gray color
              marginTop: "4px",                                                                     // Add space above this text
            }}
          >
            {                                                                                       /* Show number of teachers */}
            {payload[0].value} teachers
          </div>
        </div>
      )
    }
    return null                                                                                     // If no data to show, return nothing
  }

  return (                                                                                          // Return the complete pie chart component
    <div style={{ width: "100%", height: 300 }}>
      {                                                                                             /* Container that takes full width and 300px height */}
      <ResponsiveContainer>
        {                                                                                           /* Makes chart responsive to container size */}
        <PieChart>
          {                                                                                         /* The main pie chart component */}
          <Pie
            data={data}                                                                             // Use our workload data
            cx="50%"                                                                                // Center the pie horizontally
            cy="50%"                                                                                // Center the pie vertically
            labelLine={false}                                                                       // Don't show lines connecting labels
            label={renderCustomizedLabel}                                                           // Use our custom label function
            outerRadius={100}                                                                       // Set the size of the pie
            fill="#8884d8"                                                                          // Default fill color (will be overridden)
            dataKey="value"                                                                         // Tell chart which data field to use for sizes
            animationDuration={1000}                                                                // Make chart animate for 1 second when loading
          >
            {                                                                                       /* Create colored sections for each data point */}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}                                                               // Unique identifier for each section
                fill={entry.color}                                                                  // Use the color specified in our data
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",                               // Add shadow effect
                  cursor: "pointer",                                                                // Show hand cursor when hovering
                  outline: "none",                                                                  // Remove focus outline
                }}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} /> {                                                 /* Add our custom tooltip */}
          <Legend
            layout="horizontal"                                                                     // Arrange legend items horizontally
            verticalAlign="bottom"                                                                  // Place legend at bottom
            align="center"                                                                          // Center the legend
            wrapperStyle={{
              paddingTop: "20px",                                                                   // Add space above legend
              fontSize: "14px",                                                                     // Set legend text size
              fontFamily: "Montserrat, sans-serif",                                                 // Use Montserrat font
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

const PerformanceCategoriesChart = () => {                                                          // Create a component that shows teacher performance in different categories
  const data = [                                                                                    // Define the data for the bar chart with three performance levels
    {
      category: "Exceeding",                                                                        // Teachers exceeding expectations
      value: 35,                                                                                    // 35% of teachers
      totalTeachers: 12,                                                                            // 12 actual teachers
      color: "#10b981",                                                                             // Green color
      description: "Exceeding Expectations",                                                        // Full description
    },
    {
      category: "Meeting",                                                                          // Teachers meeting expectations
      value: 55,                                                                                    // 55% of teachers
      totalTeachers: 18,                                                                            // 18 actual teachers
      color: "#3b82f6",                                                                             // Blue color
      description: "Meeting Expectations",                                                          // Full description
    },
    {
      category: "Needs",                                                                            // Teachers needing improvement
      value: 20,                                                                                    // 20% of teachers
      totalTeachers: 6,                                                                             // 6 actual teachers
      color: "#f59e0b",                                                                             // Orange color
      description: "Needs Improvement",                                                             // Full description
    },
  ]
  const CustomTooltip = ({ active, payload }) => {                                                  // Function that creates custom tooltips for the bar chart
    if (active && payload && payload.length) {                                                      // Check if tooltip should be shown and has data
      const data = payload[0].payload                                                               // Get the data for the hovered bar  
      return (                                                                                      // Return the tooltip with detailed information    
        <div
          style={{
            backgroundColor: "white",                                                               // White background
            padding: "12px",                                                                        // Space inside tooltip
            border: "1px solid #e5e7eb",                                                            // Light border
            borderRadius: "6px",                                                                    // Rounded corners
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",                                                 // Shadow effect
          }}
        >
          <div
            style={{
              color: data.color,                                                                    // Use bar's color
              fontWeight: "600",                                                                    // Bold text
              marginBottom: "4px",                                                                  // Space below this line
            }}
          >
            {                                                                                       /* Show full description */}
            {data.description}
          </div>
          <div
            style={{
              fontSize: "14px",                                                                     // Text size
              color: "#6b7280",                                                                     // Gray color
            }}
          >
            {                                                                                       /* Show count and percentage */}
            {data.totalTeachers} teachers ({data.value}%)
          </div>
        </div>
      )
    }
    return null                                                                                     // Return nothing if no data
  }
  return (                                                                                          // Return the complete bar chart component
    <div style={{ padding: "20px", height: "300px" }}>
      {                                                                                             /* Container with padding and fixed height */}
      <ResponsiveContainer width="100%" height="100%">
        {                                                                                           /* Make chart fill container */}
        <BarChart
          data={data}                                                                               // Use our performance data
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}                                     // Add margins around chart
          barSize={40}                                                                              // Set width of bars
        >
          <CartesianGrid
            strokeDasharray="3 3"                                                                   // Create dashed grid lines
            vertical={false}                                                                        // Only show horizontal grid lines
            stroke="#f1f5f9"                                                                        // Light gray color for grid
          />
          <XAxis
            dataKey="category"                                                                      // Use category names for x-axis labels
            axisLine={false}                                                                        // Hide the axis line
            tickLine={false}                                                                        // Hide the tick marks
            stroke="#94a3b8"                                                                        // Gray color for text
            fontSize={12}                                                                           // Text size
          />
          <YAxis
            axisLine={false}                                                                        // Hide the axis line
            tickLine={false}                                                                        // Hide the tick marks
            stroke="#94a3b8"                                                                        // Gray color for text
            fontSize={12}                                                                           // Text size
            tickFormatter={(value) => `${value}%`}                                                  // Add % symbol to y-axis numbers
          />
          <Tooltip
            content={<CustomTooltip />}                                                             // Use our custom tooltip
            cursor={{ fill: "transparent" }}                                                        // Make hover cursor invisible
          />
          <Bar
            dataKey="value"                                                                         // Use value field for bar heights
            radius={[4, 4, 0, 0]}                                                                   // Round the top corners of bars
          >
            {                                                                                       /* Create colored bars for each data point */}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}                                                               // Unique identifier
                fill={entry.color}                                                                  // Use specified color
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",                               // Add shadow
                  cursor: "pointer",                                                                // Show hand cursor on hover
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const Card = ({ children, style = {}, ...props }) => (                                              // Create a reusable Card component for displaying content in boxes
  <div
    style={{
      backgroundColor: "white",                                                                     // White background
      borderRadius: "12px",                                                                         // Rounded corners
      border: "1px solid #e5e7eb",                                                                  // Light gray border
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",                                                  // Subtle shadow
      fontFamily: "Montserrat, sans-serif",                                                         // Use Montserrat font
      ...style,                                                                                     // Allow custom styles to be added
    }}
    {...props}                                                                                      // Allow other properties to be passed through
  >
    {children} {                                                                                    /* Display whatever content is put inside the card */}
  </div>
)

const Button = ({ children, variant = "default", size = "default", onClick, style = {}, ...props }) => {      // Create a reusable Button component with different styles
  const baseStyles = {                                                                              // Define the basic styles that all buttons will have
    display: "inline-flex",                                                                         // Display as flexible inline element
    alignItems: "center",                                                                           // Center content vertically
    justifyContent: "center",                                                                       // Center content horizontally
    borderRadius: "6px",                                                                            // Rounded corners
    fontSize: "14px",                                                                               // Text size
    fontWeight: "500",                                                                              // Medium font weight
    cursor: "pointer",                                                                              // Show hand cursor
    border: "none",                                                                                 // No border by default
    transition: "all 0.2s ease",                                                                    // Smooth transitions for hover effects
    fontFamily: "Montserrat, sans-serif",                                                           // Use Montserrat font
  }

  const variants = {                                                                                // Define different button styles
    default: {                                                                                      // Standard blue button
      backgroundColor: "#3b82f6",                                                                   // Blue background
      color: "white",                                                                               // White text
      padding: "8px 16px",                                                                          // Space inside button
    },
    outline: {                                                                                      // Button with border but no fill   
      backgroundColor: "transparent",                                                               // No background color
      color: "#374151",                                                                             // Dark gray text
      border: "1px solid #d1d5db",                                                                  // Gray border
      padding: "8px 16px",                                                                          // Space inside button
    },
    ghost: {                                                                                        // Button with no background or border
      backgroundColor: "transparent",                                                               // No background
      color: "#374151",                                                                             // Dark gray text
      padding: "8px",                                                                               // Less padding
    },
  }
  const sizes = {                                                                                   // Define different button sizes
    default: { height: "36px" },                                                                    // Standard height
    icon: { height: "36px", width: "36px", padding: "8px" },                                        // Square button for icons
  }
  return (                                                                                          // Return the button element with all styles applied   
    <button
      style={{
        ...baseStyles,                                                                              // Apply base styles
        ...variants[variant],                                                                       // Apply variant styles
        ...sizes[size],                                                                             // Apply size styles
        ...style,                                                                                   // Apply any custom styles
      }}
      onClick={onClick}                                                                             // Handle click events
      onMouseEnter={(e) => {                                                                        // Handle mouse hover to change background color     
        if (variant === "outline") e.target.style.backgroundColor = "#f9fafb"                       // Light gray on hover
        if (variant === "ghost") e.target.style.backgroundColor = "#f3f4f6"                         // Light gray on hover
        if (variant === "default") e.target.style.backgroundColor = "#2563eb"                       // Darker blue on hover
      }}
      onMouseLeave={(e) => {                                                                        // Handle mouse leave to restore original background color
        if (variant === "outline") e.target.style.backgroundColor = "transparent"                   // Back to transparent
        if (variant === "ghost") e.target.style.backgroundColor = "transparent"                     // Back to transparent
        if (variant === "default") e.target.style.backgroundColor = "#3b82f6"                       // Back to original blue
      }}
      {...props}                                                                                    // Allow other properties to be passed through
    >
      {children} {                                                                                  /* Display button content */}
    </button>
  )
}
const Avatar = ({ children, size = 40, fallback = "U" }) => {                                       // Create a reusable Avatar component for displaying user profile pictures or initials
  const [imageError, setImageError] = useState(false)                                               // Track if there's an error loading an image
  return (                                                                                          // Return the avatar container
    <div
      style={{
        width: `${size}px`,                                                                         // Set width based on size prop
        height: `${size}px`,                                                                        // Set height based on size prop
        borderRadius: "50%",                                                                        // Make it circular
        backgroundColor: "#f3f4f6",                                                                 // Light gray background
        display: "flex",                                                                            // Use flexbox for centering
        alignItems: "center",                                                                       // Center vertically
        justifyContent: "center",                                                                   // Center horizontally
        overflow: "hidden",                                                                         // Hide anything that goes outside the circle
      }}
    >
      {                                                                                             /* Show fallback if image failed to load */}
      {imageError ? (
        <div
          style={{
            width: "100%",                                                                          // Fill the avatar container
            height: "100%",                                                                         // Fill the avatar container
            display: "flex",                                                                        // Use flexbox for centering
            alignItems: "center",                                                                   // Center vertically
            justifyContent: "center",                                                               // Center horizontally
            backgroundColor: "#e5e7eb",                                                             // Gray background
            color: "#4b5563",                                                                       // Dark gray text
            fontSize: `${size / 2}px`,                                                              // Text size based on avatar size
            fontWeight: "500",                                                                      // Medium font weight
            fontFamily: "Montserrat, sans-serif",                                                   // Use Montserrat font
          }}
        >
          {fallback} {                                                                              /* Show fallback text (usually initials) */}
        </div>
      ) : (
        children                                                                                    /* Show the image or other content */
      )}
    </div>
  )
}


export default function Dashboard() {                                                               // Main Dashboard component that displays all the dashboard content
  const navigate = useNavigate()                                                                    // Get the navigation function to move between pages
  const [windowWidth, setWindowWidth] = useState(1200)                                              // Track the current window width for responsive design
  const [loading, setLoading] = useState(true)                                                      // Track if the component is still loading
  useEffect(() => {                                                                                 // Run this code when the component first loads
    if (typeof window !== "undefined") {                                                            // Check if we're running in a browser (not server-side)
      setWindowWidth(window.innerWidth)                                                             // Set the initial window width
      setLoading(false)                                                                             // Mark loading as complete
      const handleResize = () => setWindowWidth(window.innerWidth)                                  // Create function to update width when window is resized
      window.addEventListener("resize", handleResize)                                               // Listen for window resize events
      return () => window.removeEventListener("resize", handleResize)                               // Clean up the event listener when component is destroyed
    }
  }, [])                                                                                            // Empty array means this only runs once when component loads

  const handleLogout = () => {                                                                      // Function to handle user logout
    localStorage.removeItem("isAuthenticated")                                                      // Remove authentication status from browser storage
    navigate("/")                                                                                   // Navigate back to the home page
  }

  if (loading) {                                                                                    // Show loading message while component is initializing  
    return (
      <div
        style={{
          minHeight: "100vh",                                                                       // Take up full screen height
          display: "flex",                                                                          // Use flexbox for centering
          alignItems: "center",                                                                     // Center vertically
          justifyContent: "center",                                                                 // Center horizontally
          backgroundColor: "#f8fafc",                                                               // Light gray background
          fontFamily: "Montserrat, sans-serif",                                                     // Use Montserrat font
        }}
      >
        <div style={{ color: "#3b82f6", fontSize: "18px" }}>Loading...</div> {                      /* Blue loading text */}
      </div>
    )
  }

  // Determine screen size categories for responsive design
  const isMobile = windowWidth < 1024                                                               // Mobile if less than 1024px wide
  const isTablet = windowWidth >= 768 && windowWidth < 1024                                         // Tablet if between 768px and 1024px


  const statsData = [                                                                               // Define the data for the statistics cards at the top of dashboard
    {
      title: "Total Teachers",
      value: "50",
      icon: <Users size={24} color="#3b82f6" />,
      change: "+5%",
      trend: "up",
      color: "#3b82f6",
      bgColor: "#f3f8ff",
      detail: "Active faculty members",
    },
    {
      title: "Overworked Teachers",
      value: "10",
      icon: <AlertTriangle size={24} color="#ef4444" />,
      change: "-2%",
      trend: "down",
      color: "#ef4444",
      bgColor: "#fef3f3",
      detail: "Above optimal workload",
    },
    {
      title: "Teachers in Training",
      value: "5",
      icon: <GraduationCap size={24} color="#10b981" />,
      change: "+2%",
      trend: "up",
      color: "#10b981",
      bgColor: "#f3fcf7",
      detail: "Professional development",
    },
    {
      title: "Teachers for Recognition",
      value: "3",
      icon: <Award size={24} color="#fbbf24" />,
      change: "+1%",
      trend: "up",
      color: "#fbbf24",
      bgColor: "#fffbea",
      detail: "Outstanding performance",
    },
    {
      title: "Parents feedback score",
      value: "78",
      icon: <Award size={24} color="#fbbf24" />,
      change: "+11%",
      trend: "up",
      color: "#fbbf24",
      bgColor: "#fffbea",
      detail: (
        <>
          <span style={{ fontWeight: 600 }}> (max 100) </span>
          <span style={{ fontWeight: 400, color: "#94a3b8" }}>Outstanding performance</span>
        </>
      ),
      isScore: true,
    },
    {
      title: "Student's feedback score",
      value: "82",
      icon: <Award size={24} color="#fbbf24" />,
      change: "+5%",
      trend: "up",
      color: "#fbbf24",
      bgColor: "#fffbea",
      detail: (
        <>
          <span style={{ fontWeight: 600 }}> (max 100) </span>
          <span style={{ fontWeight: 400, color: "#94a3b8" }}>Outstanding performance</span>
        </>
      ),
      isScore: true,
    },
    {
      title: "Deadline Non compliance score",
      value: "21",
      icon: <Award size={24} color="#fbbf24" />,
      change: "-12%",
      trend: "down",
      color: "#fbbf24",
      bgColor: "#fffbea",
      detail: (
        <>
          <span style={{ fontWeight: 600 }}> (max 100) </span>
        </>
      ),
      isScore: true,
    },
    {
      title: "Average lessons per clas",
      value: "5",
      icon: <Award size={24} color="#fbbf24" />,
      change: "+1%",
      trend: "up",
      color: "#fbbf24",
      bgColor: "#fffbea",
      detail: "",
    },
    {
      title: "Student Strength",
      value: "1500+",
      icon: <Award size={24} color="#fbbf24" />,
      change: "+1%",
      trend: "up",
      color: "#fbbf24",
      bgColor: "#fffbea",
      detail: "",
    },
  ]

  // Define sidebar navigation items (not currently used in this component)
  const sidebarItems = [
    { icon: <HomeIcon className="h-5 w-5" />, label: "Dashboard", page: "dashboard" },
    { icon: <UsersIcon className="h-5 w-5" />, label: "Teacher Bandwidth", page: "bandwidth" },
    { icon: <ChartBarIcon className="h-5 w-5" />, label: "Performance", page: "performance" },
    { icon: <BookOpenIcon className="h-5 w-5" />, label: "Integrated LMS", page: "lms" },
    { icon: <TrophyIcon className="h-5 w-5" />, label: "Recognition", page: "recognition" },
    { icon: <LightBulbIcon className="h-5 w-5" />, label: "AI Insights", page: "insights" },
  ]


  // KPI trend data for the line chart
  const kpiTrendData = [
    { month: "Jan", score: 78 },
    { month: "Feb", score: 82 },
    { month: "Mar", score: 85 },
    { month: "Apr", score: 88 },
    { month: "May", score: 90 },
    { month: "Jun", score: 87 },
  ]

  // Data for Teacher Performance & Burnout Risk chart
  const perfBurnoutData = [
    { month: "Jan", performance: 78, burnout: 32 },
    { month: "Feb", performance: 80, burnout: 35 },
    { month: "Mar", performance: 83, burnout: 38 },
    { month: "Apr", performance: 85, burnout: 40 },
    { month: "May", performance: 88, burnout: 42 },
    { month: "Jun", performance: 87, burnout: 41 },
    { month: "Jul", performance: 86, burnout: 39 },
    { month: "Aug", performance: 89, burnout: 37 },
    { month: "Sep", performance: 91, burnout: 36 },
    { month: "Oct", performance: 92, burnout: 34 },
    { month: "Nov", performance: 90, burnout: 33 },
    { month: "Dec", performance: 88, burnout: 32 },
  ]

  // Data for Workload Score chart
  const workloadScoreData = [
    { month: "Feb", score: 35, standard: "Standard - KG to 2" },
    { month: "Apr", score: 55, standard: "Standard - 3 to 5" },
    { month: "Jun", score: 68, standard: "Standard - 6 to 8" },
    { month: "Sep", score: 80, standard: "Standard - 9 to 10" },
    { month: "Nov", score: 92, standard: "Standard - 11 to 12" },
  ]

  // Subject hours data for grouped bar chart
  const subjectHoursData = [
    { subject: "Math", Max: 12, Median: 8, Min: 5 },
    { subject: "Science", Max: 14, Median: 9, Min: 6 },
    { subject: "History", Max: 10, Median: 7, Min: 4 },
    { subject: "English", Max: 13, Median: 8, Min: 5 },
    { subject: "Art", Max: 9, Median: 6, Min: 3 },
    { subject: "Social", Max: 11, Median: 7, Min: 4 },
  ]

  // Data for Termwise Student Performance (multi-line + bars)
  const termwisePerformanceData = [
    { percent: 0, std1: 40, std2: 30, std3: 25, std4: 20, std5: 18, bar: 0 },
    { percent: 20, std1: 60, std2: 35, std3: 28, std4: 22, std5: 20, bar: 55 },
    { percent: 40, std1: 45, std2: 28, std3: 20, std4: 18, std5: 15, bar: 30 },
    { percent: 60, std1: 55, std2: 40, std3: 35, std4: 30, std5: 28, bar: 20 },
    { percent: 80, std1: 70, std2: 55, std3: 45, std4: 38, std5: 35, bar: 80 },
    { percent: 100, std1: 65, std2: 50, std3: 40, std4: 35, std5: 32, bar: 0 },
  ];

  // Bar positions for the colored bars (simulate the image)
  const barData = [
    { percent: 20, value: 55, color: "#fbbf24" }, // yellow
    { percent: 50, value: 30, color: "#10b981" }, // green
    { percent: 80, value: 80, color: "#3b82f6" }, // blue
  ];

  // Standards for the right-side box plot (min, Q1, median, Q3, max)
  const standards = [
    { label: "KG to 2", points: [20, 30, 40, 50, 60] },
    { label: "3 to 5", points: [25, 35, 45, 55, 65] },
    { label: "6 to 8", points: [30, 40, 50, 60, 70] },
    { label: "9 to 10", points: [35, 45, 55, 65, 75] },
    { label: "11, 12", points: [40, 50, 60, 70, 80] },
  ];

  // Return the main dashboard layout
  return (
    <main style={{ padding: "32px" }}>
      {                                                                                             /* Main container with padding */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {                                                                                           /* Vertical layout with spacing */}
        {                                                                                           /* Header section with title and logout button */}
        <div
          style={{
            display: "flex",                                                                        // Horizontal layout
            justifyContent: "space-between",                                                        // Space items apart
            alignItems: "center",                                                                   // Center items vertically
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "24px" : "32px",                                                 // Smaller text on mobile
              fontWeight: "700",                                                                    // Bold text
              color: "#1f2937",                                                                     // Dark gray color
              margin: 0,                                                                            // Remove default margins
              fontFamily: "Montserrat, sans-serif",                                                 // Use Montserrat font
            }}
          >
            Overview {                                                                              /* Page title */}
          </h2>
          <Button
            onClick={handleLogout}                                                                  // Call logout function when clicked
            variant="outline"                                                                       // Use outline button style
            style={{
              display: "flex",                                                                      // Horizontal layout for button content
              alignItems: "center",                                                                 // Center items vertically
              gap: "8px",                                                                           // Space between icon and text
              color: "#ef4444",                                                                     // Red text color
              borderColor: "#ef4444",                                                               // Red border color
            }}
          >
            <LogOut size={16} /> {                                                                  /* Logout icon */}
            Logout {                                                                                /* Button text */}
          </Button>
        </div>
        {                                                                                           /* Statistics cards section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(5, 1fr)",
            gap: "24px",
            marginBottom: "8px",
          }}
        >
          {statsData.slice(0, 5).map((stat, index) => (
            <Card
              key={index}
              style={{
                padding: "24px",
                background: "#fff",
                border: "1px solid #f1f5f9",
                borderRadius: "14px",
                boxShadow: "0 2px 8px 0 rgba(16, 30, 54, 0.04)",
                minWidth: 220,
                minHeight: 140,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    background: stat.bgColor,
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: stat.trend === "up" ? "#22c55e" : "#ef4444",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {stat.trend === "up" ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  {stat.change}
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#64748b",
                    marginBottom: 2,
                  }}
                >
                  {stat.title}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "#22223b",
                    marginBottom: 2,
                  }}
                >
                  {stat.value}
                  {stat.isScore && (
                    <span style={{ fontSize: 16, fontWeight: 600, color: "#22223b" }}>
                      (max 100)
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 14, color: "#94a3b8", fontWeight: 400 }}>
                  {stat.detail}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {statsData.slice(5).map((stat, index) => (
            <Card
              key={index}
              style={{
                padding: "24px",
                background: "#fff",
                border: "1px solid #f1f5f9",
                borderRadius: "14px",
                boxShadow: "0 2px 8px 0 rgba(16, 30, 54, 0.04)",
                minWidth: 220,
                minHeight: 140,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    background: stat.bgColor,
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: stat.trend === "up" ? "#22c55e" : "#ef4444",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {stat.trend === "up" ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  {stat.change}
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#64748b",
                    marginBottom: 2,
                  }}
                >
                  {stat.title}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "#22223b",
                    marginBottom: 2,
                  }}
                >
                  {stat.value}
                  {stat.isScore && (
                    <span style={{ fontSize: 16, fontWeight: 600, color: "#22223b" }}>
                      (max 100)
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 14, color: "#94a3b8", fontWeight: 400 }}>
                  {stat.detail}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 2x2 Grid for the four main charts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gridTemplateRows: isMobile ? "auto" : "1fr 1fr",
            gap: "24px",
          }}
        >
          {/* KPI Score Trend (Monthly) */}
          <Card style={{ padding: "24px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "16px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              KPI Score Trend (Monthly)
            </h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <LineChart data={kpiTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis domain={[70, 100]} stroke="#94a3b8" fontSize={12} tickFormatter={v => `${v}%`} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Teacher Performance & Burnout Risk */}
          <Card style={{ padding: "24px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "16px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Teacher Performance & Burnout Risk
            </h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <LineChart data={perfBurnoutData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="month"
                    stroke="#94a3b8"
                    fontSize={13}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    stroke="#94a3b8"
                    fontSize={13}
                    tickLine={false}
                    axisLine={false}
                    label={{
                      value: "Score / Risk Level",
                      angle: -90,
                      position: "insideLeft",
                      style: { textAnchor: "middle", fill: "#6b7280", fontSize: 13 },
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    name="Performance Score"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="burnout"
                    name="Burnout Risk"
                    stroke="#ef4444"
                    strokeWidth={3}
                    dot={{ fill: "#ef4444", r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Workload Score */}
          <Card style={{ padding: "24px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "16px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Workload Score
            </h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <LineChart
                  data={workloadScoreData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                    label={{
                      value: "Workload Score",
                      position: "insideBottom",
                      offset: -5,
                      style: { fill: "#6b7280", fontSize: 13 },
                    }}
                    stroke="#94a3b8"
                    fontSize={13}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="month"
                    label={{
                      value: "Month",
                      angle: -90,
                      position: "insideLeft",
                      style: { textAnchor: "middle", fill: "#6b7280", fontSize: 13 },
                    }}
                    stroke="#94a3b8"
                    fontSize={13}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    ticks={[
                      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ]}
                  />
                  <Tooltip
                    formatter={(value, name, props) =>
                      [`${value}`, props && props.payload ? props.payload.standard : ""]
                    }
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{
                      r: 7,
                      fill: "#3b82f6",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 9,
                      fill: "#10b981",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                    label={({ x, y, payload }) =>
                      payload && payload.standard ? (
                        <text
                          x={x + 10}
                          y={y}
                          dy={4}
                          fontSize={12}
                          fill="#374151"
                        >
                          {payload.standard}
                        </text>
                      ) : null
                    }
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Hours Spent per Subject (Max / Median / Min) */}
          <Card style={{ padding: "24px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "16px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Hours Spent per Subject (Max / Median / Min)
            </h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <BarChart
                  data={subjectHoursData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  barGap={8}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="subject"
                    stroke="#94a3b8"
                    fontSize={13}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={13}
                    tickLine={false}
                    axisLine={false}
                    label={{
                      value: "Hours",
                      angle: -90,
                      position: "insideLeft",
                      style: { textAnchor: "middle", fill: "#6b7280", fontSize: 13 },
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Max" fill="#3b82f6" name="Max" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Median" fill="#10b981" name="Median" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Min" fill="#f59e0b" name="Min" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Termwise Student Performance and Performance Score section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
            gap: "24px",
            marginTop: "16px",
          }}
        >
          {/* Left: Termwise Student Performance */}
          <Card style={{ padding: "24px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "8px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Termwise Student Performance
            </h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <ComposedChart
                  data={termwisePerformanceData}
                  margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
                >
                  <CartesianGrid stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="percent"
                    type="number"
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                    tickFormatter={v => `${v}%`}
                    label={{
                      value: "Percentage Score",
                      position: "insideBottom",
                      offset: -5,
                      style: { fill: "#6b7280", fontSize: 13 },
                    }}
                    stroke="#94a3b8"
                    fontSize={13}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    label={{
                      value: "Student Strength (Number of Students)",
                      angle: -90,
                      position: "insideLeft",
                      style: { textAnchor: "middle", fill: "#6b7280", fontSize: 13 },
                    }}
                    stroke="#94a3b8"
                    fontSize={13}
                    axisLine={false}
                    tickLine={false}
                  />
                  {/* Colored bars */}
                  {barData.map((bar, idx) => (
                    <Bar
                      key={bar.percent}
                      dataKey={() => {
                        // Only show bar at the matching percent
                        return (d) => (d.percent === bar.percent ? bar.value : 0);
                      }}
                      fill={bar.color}
                      barSize={40}
                      isAnimationActive={false}
                    />
                  ))}
                  {/* Lines for each standard */}
                  <Line type="monotone" dataKey="std1" stroke="#ef4444" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="std2" stroke="#3b82f6" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="std3" stroke="#10b981" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="std4" stroke="#a21caf" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="std5" stroke="#f59e42" strokeWidth={3} dot={false} />
                  <Tooltip />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Right: Performance Score (horizontal box plot) */}
          <Card style={{ padding: "24px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "8px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Performance Score
            </h3>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>Performance score (Box Plot)</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", width: "100%" }}>
              {/* SVG axis for ticks and labels, rendered once below all box plots */}
              <div style={{ height: 36, position: "relative", marginLeft: 70, marginBottom: -12 }}>
                <svg width={140} height={36} style={{ display: "block" }}>
                  {/* Axis line */}
                  <line x1={10} y1={10} x2={130} y2={10} stroke="#64748b" strokeWidth="1" />
                  {/* Ticks and labels */}
                  {[20, 40, 60, 80, 100].map((tick, i) => {
                    const scale = v => 10 + (v / 100) * 120;
                    return (
                      <g key={tick}>
                        <line
                          x1={scale(tick)}
                          y1={10}
                          x2={scale(tick)}
                          y2={16}
                          stroke="#64748b"
                          strokeWidth="1"
                        />
                        <text
                          x={scale(tick)}
                          y={28}
                          textAnchor="middle"
                          fontSize="11"
                          fill="#64748b"
                        >
                          {tick}
                        </text>
                      </g>
                    );
                  })}
                  {/* X-axis label */}
                  <text
                    x={130}
                    y={34}
                    textAnchor="end"
                    fontSize="11"
                    fill="#64748b"
                    style={{ fontWeight: 500 }}
                  >
                    Score
                  </text>
                </svg>
              </div>
              {/* Box plots */}
              {standards.map((std, idx) => {
                const [min, q1, median, q3, max] = std.points;
                const scale = v => 10 + (v / 100) * 120;
                return (
                  <div key={std.label} style={{ display: "flex", alignItems: "center", width: "100%" }}>
                    <span style={{ width: 70, fontSize: 12, color: "#64748b" }}>{std.label}</span>
                    <svg width={140} height={28}>
                      {/* Whisker line */}
                      <line x1={scale(min)} y1={14} x2={scale(max)} y2={14} stroke="#64748b" strokeWidth="2" />
                      {/* Left whisker cap */}
                      <rect x={scale(min) - 2} y={10} width={4} height={8} fill="#64748b" />
                      {/* Right whisker cap */}
                      <rect x={scale(max) - 2} y={10} width={4} height={8} fill="#64748b" />
                      {/* Box */}
                      <rect
                        x={scale(q1)}
                        y={7}
                        width={scale(q3) - scale(q1)}
                        height={14}
                        fill="#e0f2fe"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        rx="3"
                      />
                      {/* Median line */}
                      <line
                        x1={scale(median)}
                        y1={7}
                        x2={scale(median)}
                        y2={21}
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {                                                                                           /* AI Insights Section */}
        <Card style={{ overflow: "hidden" }}>
          {                                                                                         /* Card that hides content that overflows */}
          <div
            style={{
              display: "grid",                                                                      // Use CSS Grid
              // Responsive: 1 column on mobile, 2 columns (2fr 1fr ratio) on larger screens
              gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
              gap: "24px",                                                                          // Space between grid sections
            }}
          >
            {                                                                                       /* Left section with teacher risk information */}
            <div style={{ padding: "32px" }}>
              {                                                                                     /* Padding around content */}
              {                                                                                     /* Section header with icon and title */}
              <div
                style={{
                  display: "flex",                                                                  // Horizontal layout
                  alignItems: "center",                                                             // Center vertically
                  gap: "12px",                                                                      // Space between icon and text
                  marginBottom: "16px",                                                             // Space below header
                }}
              >
                {                                                                                   /* Warning icon container */}
                <div
                  style={{
                    backgroundColor: "#fef2f2",                                                     // Light red background
                    padding: "8px",                                                                 // Space around icon
                    borderRadius: "50%",                                                            // Make it circular
                  }}
                >
                  <AlertTriangle size={24} color="#dc2626" /> {                                     /* Red warning triangle */}
                </div>
                <h3
                  style={{
                    fontSize: "20px",                                                               // Large heading text
                    fontWeight: "700",                                                              // Bold font
                    color: "#1f2937",                                                               // Dark gray color
                    margin: 0,                                                                      // Remove default margins
                  }}
                >
                  3 Teachers at Risk of Burnout {                                                   /* Alert title */}
                </h3>
              </div>
              {                                                                                     /* List of teachers at risk */}
              <div
                style={{
                  display: "flex",                                                                  // Vertical layout
                  flexDirection: "column",                                                          // Stack items vertically
                  gap: "16px",                                                                      // Space between teacher items
                  marginBottom: "24px",                                                             // Space below the list
                }}
              >
                {                                                                                   /* Loop through teacher names and create list items */}
                {["Sarah Johnson", "Michael Chen", "Emma Davis"].map((name, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",                                                              // Horizontal layout
                      alignItems: "center",                                                         // Center vertically
                      gap: "16px",                                                                  // Space between elements
                      padding: "12px",                                                              // Space inside the item
                      backgroundColor: "#fafafa",                                                   // Very light gray background
                      borderRadius: "8px",                                                          // Rounded corners
                      border: "1px solid #f3f4f6",                                                  // Light border
                    }}
                  >
                    {                                                                               /* Teacher avatar with initials */}
                    <div
                      style={{
                        width: "40px",                                                              // Fixed width
                        height: "40px",                                                             // Fixed height
                        borderRadius: "50%",                                                        // Make it circular
                        backgroundColor: "#e5e7eb",                                                 // Gray background
                        display: "flex",                                                            // Center the initial
                        alignItems: "center",                                                       // Center vertically
                        justifyContent: "center",                                                   // Center horizontally
                        fontSize: "16px",                                                           // Text size
                        fontWeight: "500",                                                          // Medium font weight
                        color: "#4b5563",                                                           // Dark gray text
                      }}
                    >
                      {name.charAt(0)} {                                                            /* Show first letter of name */}
                    </div>

                    {                                                                               /* Teacher information */}
                    <div style={{ flex: 1 }}>
                      {                                                                             /* Take up remaining space */}
                      <div
                        style={{
                          fontSize: "14px",                                                         // Text size
                          fontWeight: "500",                                                        // Medium font weight
                          color: "#1f2937",                                                         // Dark gray color
                          marginBottom: "4px",                                                      // Space below name
                        }}
                      >
                        {name} {                                                                    /* Teacher's name */}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",                                                         // Smaller text
                          color: "#6b7280",                                                         // Gray color
                        }}
                      >
                        Science • 45hrs/week {                                                      /* Department and workload info */}
                      </div>
                    </div>

                    {                                                                               /* Risk level indicator */}
                    <div
                      style={{
                        padding: "4px 12px",                                                        // Space inside the badge
                        borderRadius: "9999px",                                                     // Make it pill-shaped
                        fontSize: "12px",                                                           // Small text
                        fontWeight: "500",                                                          // Medium font weight
                        backgroundColor: "#fef2f2",                                                 // Light red background
                        color: "#dc2626",                                                           // Red text
                      }}
                    >
                      High Risk {                                                                   /* Risk level text */}
                    </div>
                  </div>
                ))}
              </div>
              {                                                                                     /* Button to view more AI insights */}
              <Button
                variant="outline"                                                                   // Use outline button style
                style={{
                  display: "flex",                                                                  // Horizontal layout
                  alignItems: "center",                                                             // Center vertically
                  gap: "8px",                                                                       // Space between text and icon
                }}
              >
                View AI Insights {                                                                  /* Button text */}
                <ArrowRight style={{ width: "16px", height: "16px" }} /> {                          /* Right arrow icon */}
              </Button>
            </div>

            {                                                                                       /* Right section with summary information */}
            <div
              style={{
                // Gradient background from light yellow to darker yellow
                background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                padding: "32px",                                                                    // Space inside the section
                display: "flex",                                                                    // Vertical layout
                flexDirection: "column",                                                            // Stack items vertically
                justifyContent: "center",                                                           // Center content vertically
                gap: "16px",                                                                        // Space between items
              }}
            >
              {                                                                                     /* Recommended actions box */}
              <div
                style={{
                  backgroundColor: "white",                                                         // White background
                  borderRadius: "12px",                                                             // Rounded corners
                  padding: "16px",                                                                  // Space inside the box
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",                                          // Subtle shadow
                }}
              >
                {                                                                                   /* Actions header */}
                <div
                  style={{
                    display: "flex",                                                                // Horizontal layout
                    alignItems: "center",                                                           // Center vertically
                    gap: "12px",                                                                    // Space between icon and text
                    marginBottom: "8px",                                                            // Space below header
                  }}
                >
                  <TrendingUp size={20} color="#16a34a" /> {                                        /* Green trending up icon */}
                  <span
                    style={{
                      fontSize: "14px",                                                             // Text size
                      fontWeight: "500",                                                            // Medium font weight
                      color: "#1f2937",                                                             // Dark gray color
                    }}
                  >
                    Recommended Actions {                                                           /* Section title */}
                  </span>
                </div>

                {                                                                                   /* List of recommended actions */}
                <ul
                  style={{
                    margin: "0",                                                                    // Remove default margins
                    padding: "0 0 0 16px",                                                          // Add left padding for bullets
                    fontSize: "13px",                                                               // Small text
                    color: "#4b5563",                                                               // Gray color
                  }}
                >
                  <li>Schedule wellness check-ins</li> {                                            /* Action item 1 */}
                  <li>Review workload distribution</li> {                                           /* Action item 2 */}
                  <li>Offer support resources</li> {                                                /* Action item 3 */}
                </ul>
              </div>

              {                                                                                     /* Average workload display */}
              <div
                style={{
                  textAlign: "center",                                                              // Center all text
                  padding: "16px",                                                                  // Space inside the box
                  backgroundColor: "rgba(255,255,255,0.5)",                                         // Semi-transparent white background
                  borderRadius: "12px",                                                             // Rounded corners
                }}
              >
                <div
                  style={{
                    fontSize: "32px",                                                               // Large text for the number
                    fontWeight: "700",                                                              // Bold font
                    color: "#92400e",                                                               // Brown color
                    marginBottom: "4px",                                                            // Space below the number
                  }}
                >
                  42hrs {                                                                           /* Average hours worked */}
                </div>
                <div
                  style={{
                    fontSize: "14px",                                                               // Smaller text
                    color: "#92400e",                                                               // Brown color
                  }}
                >
                  Average Weekly Workload {                                                         /* Description text */}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
