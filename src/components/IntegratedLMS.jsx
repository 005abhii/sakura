// Import React hooks that help manage component state and side effects
import { useState } from "react"
// Import various icon components from the Lucide icon library for use in the UI
import { LogOut, Plus, BarChart2, Clock, AlertCircle, Briefcase, X, User, Tag, CalendarDays } from "lucide-react"

// Define a Card component that will be used to create styled boxes for displaying content
const Card = ({ children, style = {}, ...props }) => (
  <div
    style={{
      backgroundColor: "white",                                                                     // Set the background color of the card to white
      borderRadius: "12px",                                                                         // Round the corners of the card
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",                                                       // Add a subtle shadow for depth
      ...style,                                                                                     // Allow additional styles to be passed in
    }}
    {...props}                                                                                      // Spread any additional properties onto the div
  >
    {children}
  </div>
)

// Main component for the Integrated Learning Management System (LMS)
const IntegratedLMS = () => {
  // State variables to manage various aspects of the component
  const [activeNav, setActiveNav] = useState("Integrated LMS")                                      // Track the active navigation item
  const [selectedSubject, setSelectedSubject] = useState("")                                        // Track the selected subject
  const [selectedGrade, setSelectedGrade] = useState("")                                            // Track the selected grade
  const [selectedStatus, setSelectedStatus] = useState("")                                          // Track the selected status
  const [showAddCourseModal, setShowAddCourseModal] = useState(false)                               // Control visibility of the add course modal
  const [isSubmitting, setIsSubmitting] = useState(false)                                           // Track if a form submission is in progress
  const [formErrors, setFormErrors] = useState({})                                                  // Store any form validation errors
  const [newCourse, setNewCourse] = useState({                                                      // Initialize a new course object with default values
    title: "",
    description: "",
    duration: "",
    status: "upcoming",                                                                             // Default status is upcoming
    color: "#3b82f6",                                                                               // Default color for the course
    startDate: "",
    endDate: "",
    instructor: "",
    category: "",
    maxStudents: "",
    difficulty: "beginner",                                                                         // Default difficulty level
  })
  const [workloadStats] = useState({                                                                // Initialize workload statistics
    overworked: 3,                                                                                  // Number of overworked teachers
    optimal: 12,                                                                                    // Optimal workload
    available: 5,                                                                                   // Available capacity
  })
  const [activeTab, setActiveTab] = useState("all")                                                 // Track the active tab for course filtering
  const [currentPage, setCurrentPage] = useState(1)                                                 // Track the current page for pagination
  const coursesPerPage = 8                                                                          // Set the number of courses to display per page

  // Course analytics data to display statistics
  const courseAnalytics = {
    totalEnrollments: 245,                                                                          // Total number of enrollments
    completionRate: 78,                                                                             // Completion rate percentage
    averageProgress: 65,                                                                            // Average progress percentage
    activeUsers: 180,                                                                               // Number of active users
    averageWorkload: 5.2,                                                                           // Average workload in hours
  }

  // Analytics statistics data for display cards
  const analyticsStats = [
    {
      title: "Average Workload",                                                                    // Title of the statistic
      value: `${courseAnalytics.averageWorkload.toFixed(1)}h`,                                      // Value formatted to one decimal place
      icon: <Clock size={24} />,                                                                    // Icon to represent the statistic
      color: "#3b82f6",                                                                             // Color for the statistic
      bgColor: "#eff6ff",                                                                           // Background color for the statistic card
    },
    {
      title: "Overworked Teachers",
      value: workloadStats.overworked,                                                              // Value for overworked teachers
      icon: <AlertCircle size={24} />,                                                              // Icon for this statistic
      color: "#ef4444",                                                                             // Color for the statistic
      bgColor: "#fef2f2",                                                                           // Background color for the statistic card
    },
    {
      title: "Optimal Workload",
      value: workloadStats.optimal,                                                                 // Value for optimal workload
      icon: <BarChart2 size={24} />,                                                                // Icon for this statistic
      color: "#10b981",                                                                             // Color for the statistic
      bgColor: "#f0fdf4",                                                                           // Background color for the statistic card
    },
    {
      title: "Available Capacity",
      value: workloadStats.available,                                                               // Value for available capacity
      icon: <Briefcase size={24} />,                                                                // Icon for this statistic
      color: "#f59e0b",                                                                             // Color for the statistic
      bgColor: "#fefce8",                                                                           // Background color for the statistic card
    },
  ]

  // List of course categories for selection
  const courseCategories = [
    "Teaching Methods",
    "Classroom Management",
    "Technology Integration",
    "Student Assessment",
    "Professional Development",
    "Special Education",
    "STEM Education",
    "Language Arts",
    "Leadership",
  ]

  // List of difficulty levels for courses
  const difficultyLevels = [
    { value: "beginner", label: "Beginner" },                                                       // Beginner level
    { value: "intermediate", label: "Intermediate" },                                               // Intermediate level
    { value: "advanced", label: "Advanced" },                                                       // Advanced level
  ]

  // Initialize the courses state with sample course data
  const [courses, setCourses] = useState([
    {
      id: 1,                                                                                        // Unique identifier for the course
      title: "Introduction to Classroom Management",                                                // Course title
      duration: "4 weeks",                                                                          // Duration of the course
      color: "#a7c4bc",                                                                             // Color associated with the course
      image: "/placeholder.svg?height=200&width=300",                                               // Placeholder image for the course
      description: "Learn effective classroom management techniques",                               // Course description
      status: "in_progress",                                                                        // Current status of the course
      progress: 65,                                                                                 // Progress percentage
      startDate: "2024-01-15",                                                                      // Start date of the course
      endDate: "2024-02-12",                                                                        // End date of the course
      instructor: "Dr. Sarah Johnson",                                                              // Instructor's name
      category: "Classroom Management",                                                             // Course category
      maxStudents: 25,                                                                              // Maximum number of students allowed
      difficulty: "beginner",                                                                       // Difficulty level of the course
    },
    {
      id: 2,                                                                                        // Unique identifier for course 2
      title: "Advanced Teaching Methodologies",                                                     // Course title
      duration: "5 weeks",                                                                          // Duration of the course
      color: "#2d3748",                                                                             // Color associated with the course
      image: "/placeholder.svg?height=200&width=300",                                               // Placeholder image
      description: "Explore modern teaching approaches",                                            // Course description
      status: "completed",                                                                          // Course status
      progress: 100,                                                                                // Completion progress
      completionDate: "2024-01-10",                                                                 // Date of completion
      instructor: "Prof. Michael Chen",                                                             // Instructor's name
      category: "Teaching Methods",                                                                 // Category of the course
      maxStudents: 20,                                                                              // Maximum number of students
      difficulty: "advanced",                                                                       // Difficulty level
    },
    {
      id: 3,                                                                                        // Unique identifier for course 3
      title: "Effective Communication with Students",                                               // Course title
      duration: "3 weeks",                                                                          // Duration of the course
      color: "#2d5a5a",                                                                             // Color associated with the course
      image: "/placeholder.svg?height=200&width=300",                                               // Placeholder image
      description: "Improve student-teacher communication",                                         // Course description
      status: "upcoming",                                                                           // Course status
      startDate: "2024-03-01",                                                                      // Start date
      endDate: "2024-03-21",                                                                        // End date
      instructor: "Dr. Emily Rodriguez",                                                            // Instructor's name
      category: "Professional Development",                                                         // Course category
      maxStudents: 30,                                                                              // Maximum students
      difficulty: "intermediate",                                                                   // Difficulty level
    },
    {
      id: 4,                                                                                        // Unique identifier for course 4
      title: "Technology Integration in Education",                                                 // Course title
      duration: "5 weeks",                                                                          // Duration of the course
      color: "#b8d4b8",                                                                             // Color associated with the course
      image: "/placeholder.svg?height=200&width=300",                                               // Placeholder image
      description: "Integrate technology in teaching",                                              // Description of the course
      status: "in_progress",                                                                        // Course status
      progress: 45,                                                                                 // Progress percentage
      startDate: "2024-02-01",                                                                      // Start date
      endDate: "2024-03-15",                                                                        // End date
      instructor: "Dr. James Wilson",                                                               // Instructor name
      category: "Technology Integration",                                                           // Category
      maxStudents: 15,                                                                              // Maximum students
      difficulty: "intermediate",                                                                   // Difficulty level
    },
    {
      id: 5,                                                                                        // Unique identifier for course 5
      title: "Digital Learning Tools",                                                              // Course title
      duration: "3 weeks",                                                                          // Duration of the course
      color: "#7c3aed",                                                                             // Color for the course
      image: "/placeholder.svg?height=200&width=300",                                               // Placeholder image
      description: "Master modern digital teaching tools",                                          // Description
      status: "upcoming",                                                                           // Status of the course
      startDate: "2024-03-01",                                                                      // Start date
      endDate: "2024-03-21",                                                                        // End date
      instructor: "Dr. Lisa Thompson",                                                              // Instructor
      category: "Technology Integration",                                                           // Course category
      maxStudents: 20,                                                                              // Maximum students
      difficulty: "beginner",                                                                       // Difficulty level
    },
    {
      id: 6,                                                                                        // Unique identifier for course 6
      title: "Student Assessment Strategies",                                                       // Course title
      duration: "4 weeks",                                                                          // Duration
      color: "#0891b2",                                                                             // Color for the course
      image: "/placeholder.svg?height=200&width=300",                                               // Placeholder image
      description: "Learn effective assessment methods",                                            // Description
      status: "completed",                                                                          // Status
      progress: 100,                                                                                // Completion progress
      completionDate: "2024-01-10",                                                                 // Completion date
      instructor: "Dr. Robert Davis",                                                               // Instructor
      category: "Student Assessment",                                                               // Course category
      maxStudents: 25,                                                                              // Maximum students
      difficulty: "intermediate",                                                                   // Difficulty level
    },
  ])

  // Teacher progress data to show completed courses and recommendations
  const teacherProgress = [
    {
      name: "Ava Bennett",                                                                          // Teacher's name
      coursesCompleted: 3,                                                                          // Number of courses completed
      badges: "Classroom Management, Communication",                                                // Badges earned
      recommendedCourses: "Advanced Teaching Methods, Digital Learning",                            // Recommended courses
    },
    {
      name: "Liam Carter",                                                                          // Teacher name
      coursesCompleted: 2,                                                                          // Courses completed
      badges: "Advanced Teaching",                                                                  // Badges earned
      recommendedCourses: "Communication Skills, Student Assessment",                               // Recommended courses
    },
    {
      name: "Chloe Harper",                                                                         // Teacher name
      coursesCompleted: 4,                                                                          // Courses completed
      badges: "All Courses",                                                                        // Badges earned
      recommendedCourses: "Leadership in Education",                                                // Recommended courses
    },
  ]

  // Certification timeline data to track course completion status
  const certificationTimeline = [
    {
      title: "Introduction to Classroom Management",                                                // Course title
      status: "Completed",                                                                          // Completion status
      icon: "✓",                                                                                    // Icon representing completion
      color: "#10b981",                                                                             // Color for the status
      teachers: ["Ms. Clara Bennett", "Mr. James Carter", "Mrs. Sophia Lewis"],                     // Teachers who completed the course
      completion: 100,                                                                              // Percentage completion
    },
    {
      title: "Advanced Teaching Methodologies",                                                     // Course title
      status: "In Progress",                                                                        // Current progress status
      icon: "⏱",                                                                                    // Icon representing ongoing progress
      color: "#f59e0b",                                                                             // Color for progress
      teachers: ["Mrs. Olivia Thompson", "Mr. Liam Parker", "Mr. Ethan Wright"],                    // Teachers currently enrolled or progressing
      completion: 65,                                                                               // Percentage completion
    },
    {
      title: "Effective Communication with Students",                                               // Course title
      status: "Not Started",                                                                        // Status for course not yet begun
      icon: "✕",                                                                                    // Icon representing inactivity
      color: "#ef4444",                                                                             // Color indicating not started or alert
      teachers: ["Ms. Ava Martinez", "Mr. Noah Walker", "Ms. Mia Robinson"],                        // Teachers yet to start the course
      completion: 0,                                                                                // Percentage completion
    },
  ]

  // Course categories for filtering courses
  const categories = [
    { id: "all", label: "All Courses" },                                                            // Show all courses
    { id: "inProgress", label: "In Progress" },                                                     // Only courses currently in progress
    { id: "completed", label: "Completed" },                                                        // Only completed courses
    { id: "upcoming", label: "Upcoming" },                                                          // Upcoming courses
  ]

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")                                                      // Remove authentication flag from local storage
    // navigate('/'); // Optional: redirect user to homepage or login screen on logout
  }

  // Function to validate the input form for adding a new course
  const validateForm = () => {
    const errors = {}                                                                               // Prepare an object to hold any validation errors

    // Validate course title input
    if (!newCourse.title.trim()) {
      errors.title = "Course title is required"                                                     // Show error if title is empty
    } else if (newCourse.title.length < 3) {
      errors.title = "Course title must be at least 3 characters"                                   // Show error if title too short
    }

    // Validate description input
    if (!newCourse.description.trim()) {
      errors.description = "Description is required"                                                // Error if empty description
    } else if (newCourse.description.length < 10) {
      errors.description = "Description must be at least 10 characters"                             // Description too short error
    }

    // Validate duration input
    if (!newCourse.duration.trim()) {
      errors.duration = "Duration is required"                                                      // Duration field required error
    }

    // Validate instructor name input
    if (!newCourse.instructor.trim()) {
      errors.instructor = "Instructor name is required"                                             // Instructor field required error
    }

    // Validate category dropdown input
    if (!newCourse.category) {
      errors.category = "Category is required"                                                      // Category not selected error
    }

    // Validate max students input; must be a number greater than or equal to 1
    if (!newCourse.maxStudents || newCourse.maxStudents < 1) {
      errors.maxStudents = "Maximum students must be at least 1"                                    // Error for invalid max students
    }

    // Validate start and end dates only if course is not completed
    if (newCourse.status !== "completed") {
      if (!newCourse.startDate) {
        errors.startDate = "Start date is required"                                                 // Missing start date error
      }
      if (!newCourse.endDate) {
        errors.endDate = "End date is required"                                                     // Missing end date error
      }
      // Ensure end date is after start date
      if (newCourse.startDate && newCourse.endDate && new Date(newCourse.startDate) >= new Date(newCourse.endDate)) {
        errors.endDate = "End date must be after start date"                                        // Date order error
      }
    }

    return errors                                                                                   // Return any accumulated errors to caller
  }

  // Pagination component to navigate through multiple pages of courses
  const Pagination = ({ totalCourses }) => {
    const totalPages = Math.ceil(totalCourses / coursesPerPage)                                     // Calculate number of pages

    return (
      <div
        style={{
          display: "flex",                                                                          // Flexbox layout
          justifyContent: "center",                                                                 // Center the pagination buttons horizontally
          gap: "8px",                                                                               // Space between buttons
          padding: "24px",                                                                          // Padding around the buttons
        }}
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (                      // Render one button per page number
          <button
            key={number}                                                                            // Unique key for React
            onClick={() => setCurrentPage(number)}                                                  // Switch to selected page on click
            style={{
              padding: "8px 12px",                                                                  // Button padding
              border: "none",                                                                       // No border
              borderRadius: "6px",                                                                  // Rounded corners
              backgroundColor: currentPage === number ? "#3b82f6" : "#f3f4f6",                      // Highlight current page
              color: currentPage === number ? "white" : "#6b7280",                                  // Text color based on active state
              cursor: "pointer",                                                                    // Pointer cursor on hover
              fontWeight: currentPage === number ? "600" : "400",                                   // Bold text for active page
            }}
          >
            {number}
          </button>
        ))}
      </div>
    )
  }

  // Function to filter courses by the currently active tab
  const getFilteredCourses = () => {
    let filtered                                                                                    // Local variable to hold filtered courses based on status

    // Determine which courses to filter depending on selected tab
    switch (activeTab) {
      case "inProgress":
        filtered = courses.filter((course) => course.status === "in_progress")                      // Show in-progress courses only
        break
      case "completed":
        filtered = courses.filter((course) => course.status === "completed")                        // Show completed courses only
        break
      case "upcoming":
        filtered = courses.filter((course) => course.status === "upcoming")                         // Show upcoming courses only
        break
      default:
        filtered = courses                                                                          // Show all courses when 'all' tab selected
    }

    // Pagination: calculate indexes to slice courses for current page
    const indexOfLastCourse = currentPage * coursesPerPage                                          // Last course on current page
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage                                   // First course on current page

    // Return the sliced courses for the current page and the total number of filtered courses
    return {
      courses: filtered.slice(indexOfFirstCourse, indexOfLastCourse),
      totalCourses: filtered.length,
    }
  }

  // Function to handle adding a new course when form is submitted
  const handleAddCourse = async (e) => {
    e.preventDefault()                                                                              // Prevent default form submission behavior
    setIsSubmitting(true)                                                                           // Indicate submission in progress

    const errors = validateForm()                                                                   // Validate form fields
    setFormErrors(errors)                                                                           // Save any errors to state for display

    if (Object.keys(errors).length > 0) {                                                           // If there are validation errors
      setIsSubmitting(false)                                                                        // Stop submitting state to allow correction
      return                                                                                        // Exit handler early
    }

    // Simulate network delay or API call by waiting 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Create course object adding new course details
    const course = {
      id: courses.length + 1,                                                                       // Assign a new ID
      ...newCourse,                                                                                 // Copy entered course data
      image: "/placeholder.svg?height=200&width=300",                                               // Assign placeholder image
      maxStudents: Number.parseInt(newCourse.maxStudents),                                          // Convert max students to number
    }

    // If course is in progress, initialize progress to zero
    if (course.status === "in_progress") {
      course.progress = 0
    }
    // If course is completed, set completionDate to today and progress to 100%
    if (course.status === "completed") {
      course.completionDate = new Date().toISOString().split("T")[0]
      course.progress = 100
    }

    // Add new course to existing list of courses
    setCourses((prevCourses) => [...prevCourses, course])
    setShowAddCourseModal(false)                                                                    // Close the add course modal
    setNewCourse({                                                                                  // Reset form inputs for new course
      title: "",
      description: "",
      duration: "",
      status: "upcoming",
      color: "#3b82f6",
      startDate: "",
      endDate: "",
      instructor: "",
      category: "",
      maxStudents: "",
      difficulty: "beginner",
    })
    setFormErrors({})                                                                               // Clear form errors
    setCurrentPage(1)                                                                               // Reset to first page of courses
    setIsSubmitting(false)                                                                          // Reset submitting state
  }

  // Function to reset modal form and close modal
  const handleCloseModal = () => {
    setShowAddCourseModal(false)                                                                    // Hide the modal
    setFormErrors({})                                                                               // Clear any errors
    setNewCourse({                                                                                  // Reset form to default values
      title: "",
      description: "",
      duration: "",
      status: "upcoming",
      color: "#3b82f6",
      startDate: "",
      endDate: "",
      instructor: "",
      category: "",
      maxStudents: "",
      difficulty: "beginner",
    })
  }

  // Component for the Add Course modal dialog
  const AddCourseModal = () => (
    <div
      style={{
        position: "fixed",                                                                          // Keep modal fixed on screen
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",                                                      // Semi-transparent background overlay
        display: "flex",                                                                            // Flexbox for centering content
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,                                                                               // On top of other content
        padding: "20px",                                                                            // Padding around modal content
      }}
    >
      <div
        style={{
          backgroundColor: "white",                                                                 // Modal background color
          borderRadius: "12px",                                                                     // Rounded corners
          width: "100%",                                                                            // Full width within max width constraint
          maxWidth: "600px",                                                                        // Maximum width
          display: "flex",
          flexDirection: "column",                                                                  // Stack child elements vertically
          position: "relative",                                                                     // Relative positioning for close button
          maxHeight: "90vh",                                                                        // Maximum height relative to viewport
        }}
      >
        {                                                                                           /* Modal Header */}
        <div
          style={{
            padding: "20px 24px",                                                                   // Padding around header
            borderBottom: "1px solid #e5e7eb",                                                      // Bottom border
            position: "relative",                                                                   // Position for absolute close button
          }}
        >
          <h2
            style={{
              margin: 0,                                                                            // Remove default margin
              fontSize: "20px",                                                                     // Font size for heading
              fontWeight: "600",                                                                    // Font weight for emphasis
              color: "#111827",                                                                     // Text color
            }}
          >
            Add New Course
          </h2>
          <button
            onClick={handleCloseModal}                                                              // Close modal when clicked
            disabled={isSubmitting}                                                                 // Disable button while submitting
            style={{
              position: "absolute",                                                                 // Positioned relative to header
              right: "20px",                                                                        // Right edge offset
              top: "50%",                                                                           // Vertically centered
              transform: "translateY(-50%)",                                                        // Adjust vertical alignment
              background: "none",                                                                   // No background color
              border: "none",                                                                       // No border
              cursor: isSubmitting ? "not-allowed" : "pointer",                                     // Cursor style depends on submitting state
              padding: "4px",                                                                       // Padding inside button
              color: "#6b7280",                                                                     // Text color for icon
              opacity: isSubmitting ? 0.5 : 1,                                                      // Transparency when disabled
            }}
          >
            <X size={20} /> {                                                                       /* Close icon */}
          </button>
        </div>

        {                                                                                           /* Form Container */}
        <div
          style={{
            padding: "24px",                                                                        // Padding around form
            overflowY: "auto",                                                                      // Scroll vertically if contents grow large
            flex: 1,                                                                                // Flex grow for filling modal space
          }}
        >
          <form onSubmit={handleAddCourse}>
            <div
              style={{
                display: "grid",                                                                    // Use CSS grid for layout
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",                        // Create responsive columns
                gap: "20px",                                                                        // Gap between grid items
              }}
            >
              {                                                                                     /* Title Field */}
              <FormField>
                <FormLabel>Course Title *</FormLabel> {                                             /* Label for input */}
                <input
                  type="text"
                  value={newCourse.title}                                                           // Bind input value
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}           // Update state on change
                  style={{
                    ...formInputStyle,
                    borderColor: formErrors.title ? "#ef4444" : "#e5e7eb",                          // Red border if error
                  }}
                  placeholder="Enter course title"                                                  // Placeholder text
                  disabled={isSubmitting}                                                           // Disable input while submitting
                />
                {formErrors.title && <ErrorMessage>{formErrors.title}</ErrorMessage>} {             /* Show error message */}
              </FormField>

              {                                                                                     /* Instructor Field */}
              <FormField>
                <FormLabel>Instructor *</FormLabel>
                <div style={{ position: "relative" }}>
                  <User
                    size={16}
                    style={{
                      position: "absolute",                                                         // Position icon inside input
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#6b7280",                                                             // Icon color
                    }}
                  />
                  <input
                    type="text"
                    value={newCourse.instructor}
                    onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                    style={{
                      ...formInputStyle,
                      paddingLeft: "36px",                                                          // Padding to make room for icon
                      borderColor: formErrors.instructor ? "#ef4444" : "#e5e7eb",
                    }}
                    placeholder="Enter instructor name"
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.instructor && <ErrorMessage>{formErrors.instructor}</ErrorMessage>}
              </FormField>

              {                                                                                     /* Category Field */}
              <FormField>
                <FormLabel>Category *</FormLabel>
                <div style={{ position: "relative" }}>
                  <Tag
                    size={16}
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#6b7280",
                      zIndex: 1,
                    }}
                  />
                  <select
                    value={newCourse.category}
                    onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                    style={{
                      ...formInputStyle,
                      paddingLeft: "36px",
                      borderColor: formErrors.category ? "#ef4444" : "#e5e7eb",
                    }}
                    disabled={isSubmitting}
                  >
                    <option value="">Select category</option>
                    {courseCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                {formErrors.category && <ErrorMessage>{formErrors.category}</ErrorMessage>}
              </FormField>

              {                                                                                     /* Duration Field */}
              <FormField>
                <FormLabel>Duration *</FormLabel>
                <input
                  type="text"
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                  style={{
                    ...formInputStyle,
                    borderColor: formErrors.duration ? "#ef4444" : "#e5e7eb",
                  }}
                  placeholder="e.g., 4 weeks"
                  disabled={isSubmitting}
                />
                {formErrors.duration && <ErrorMessage>{formErrors.duration}</ErrorMessage>}
              </FormField>

              {                                                                                     /* Max Students Field */}
              <FormField>
                <FormLabel>Max Students *</FormLabel>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={newCourse.maxStudents}
                  onChange={(e) => setNewCourse({ ...newCourse, maxStudents: e.target.value })}
                  style={{
                    ...formInputStyle,
                    borderColor: formErrors.maxStudents ? "#ef4444" : "#e5e7eb",
                  }}
                  placeholder="Enter max students"
                  disabled={isSubmitting}
                />
                {formErrors.maxStudents && <ErrorMessage>{formErrors.maxStudents}</ErrorMessage>}
              </FormField>

              {                                                                                     /* Difficulty Field */}
              <FormField>
                <FormLabel>Difficulty Level</FormLabel>
                <select
                  value={newCourse.difficulty}
                  onChange={(e) => setNewCourse({ ...newCourse, difficulty: e.target.value })}
                  style={formInputStyle}
                  disabled={isSubmitting}
                >
                  {difficultyLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </FormField>

              {                                                                                     /* Status Field */}
              <FormField style={{ gridColumn: "1 / -1" }}>
                <FormLabel>Status</FormLabel>
                <select
                  value={newCourse.status}
                  onChange={(e) => setNewCourse({ ...newCourse, status: e.target.value })}
                  style={formInputStyle}
                  disabled={isSubmitting}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </FormField>

              {                                                                                     /* Date Fields - Only show if not completed */}
              {newCourse.status !== "completed" && (
                <>
                  <FormField>
                    <FormLabel>Start Date *</FormLabel>
                    <div style={{ position: "relative" }}>
                      <CalendarDays
                        size={16}
                        style={{
                          position: "absolute",
                          left: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#6b7280",
                        }}
                      />
                      <input
                        type="date"
                        value={newCourse.startDate}
                        onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })}
                        style={{
                          ...formInputStyle,
                          paddingLeft: "36px",
                          borderColor: formErrors.startDate ? "#ef4444" : "#e5e7eb",
                        }}
                        disabled={isSubmitting}
                      />
                    </div>
                    {formErrors.startDate && <ErrorMessage>{formErrors.startDate}</ErrorMessage>}
                  </FormField>

                  <FormField>
                    <FormLabel>End Date *</FormLabel>
                    <div style={{ position: "relative" }}>
                      <CalendarDays
                        size={16}
                        style={{
                          position: "absolute",
                          left: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#6b7280",
                        }}
                      />
                      <input
                        type="date"
                        value={newCourse.endDate}
                        onChange={(e) => setNewCourse({ ...newCourse, endDate: e.target.value })}
                        style={{
                          ...formInputStyle,
                          paddingLeft: "36px",
                          borderColor: formErrors.endDate ? "#ef4444" : "#e5e7eb",
                        }}
                        disabled={isSubmitting}
                      />
                    </div>
                    {formErrors.endDate && <ErrorMessage>{formErrors.endDate}</ErrorMessage>}
                  </FormField>
                </>
              )}

              {                                                                                     /* Description Field */}
              <FormField style={{ gridColumn: "1 / -1" }}>
                <FormLabel>Description *</FormLabel>
                <textarea
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  style={{
                    ...formInputStyle,
                    height: "100px",
                    resize: "vertical",
                    borderColor: formErrors.description ? "#ef4444" : "#e5e7eb",
                  }}
                  placeholder="Enter course description"
                  disabled={isSubmitting}
                />
                {formErrors.description && <ErrorMessage>{formErrors.description}</ErrorMessage>}
              </FormField>

              {                                                                                     /* Color Field */}
              <FormField>
                <FormLabel>Color Theme</FormLabel>
                <input
                  type="color"
                  value={newCourse.color}
                  onChange={(e) => setNewCourse({ ...newCourse, color: e.target.value })}
                  style={{
                    ...formInputStyle,
                    padding: "6px",
                    height: "40px",
                  }}
                  disabled={isSubmitting}
                />
              </FormField>
            </div>

            {                                                                                       /* Form Actions */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "32px",
                borderTop: "1px solid #e5e7eb",
                paddingTop: "20px",
              }}
            >
              <button
                type="button"
                onClick={handleCloseModal}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "#374151",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.5 : 1,
                  fontWeight: "500",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: isSubmitting ? "#9ca3af" : "#3b82f6",
                  color: "white",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {isSubmitting ? (
                  <>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid #ffffff",
                        borderTop: "2px solid transparent",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                    Adding...
                  </>
                ) : (
                  "Add Course"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  // Main render of the course management dashboard
  return (
    <main style={{ padding: "32px", backgroundColor: "#f8fafc" }}>
      {                                                                                             /* Add CSS for spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {                                                                                             /* Header Section */}
      <div
        style={{
          display: "flex",                                                                          // Horizontal layout for header
          justifyContent: "space-between",                                                          // Space between title and logout button
          alignItems: "center",                                                                     // Vertically align items center
          marginBottom: "32px",                                                                     // Margin below header
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "32px",                                                                     // Large font size for title
              fontWeight: "700",                                                                    // Bold font weight
              color: "#1f2937",                                                                     // Dark gray color
              margin: "0 0 8px 0",                                                                  // Bottom margin spacing
            }}
          >
            Courses
          </h1>
          <p
            style={{
              fontSize: "16px",                                                                     // Paragraph font size
              color: "#6b7280",                                                                     // Medium gray text color
              margin: "0",                                                                          // No margin
            }}
          >
            Explore and manage courses for teachers.
          </p>
        </div>
        <button
          onClick={handleLogout}                                                                    // Call logout function when clicked
          style={{
            display: "flex",                                                                        // Flex layout for icon and text
            alignItems: "center",                                                                   // Align items vertically centered
            gap: "8px",                                                                             // Space between icon and text
            padding: "8px 16px",                                                                    // Padding around button
            borderRadius: "6px",                                                                    // Rounded corners
            border: "1px solid #ef4444",                                                            // Red border
            color: "#ef4444",                                                                       // Red text color
            background: "none",                                                                     // Transparent background
            cursor: "pointer",                                                                      // Pointer cursor on hover
            fontSize: "14px",                                                                       // Font size
            fontWeight: "500",                                                                      // Medium font weight
          }}
        >
          <LogOut size={16} /> {                                                                    /* Logout icon */}
          Logout
        </button>
      </div>

      {                                                                                             /* Analytics Stats Cards */}
      <div
        style={{
          display: "grid",                                                                          // Grid for layout
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",                              // Responsive columns
          gap: "24px",                                                                              // Spacing between cards
          marginBottom: "32px",                                                                     // Margin below stats
        }}
      >
        {analyticsStats.map((stat, index) => (
          <Card key={index} style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",                                                                    // Flex layout for icon and text
                alignItems: "center",                                                               // Vertically center content
                gap: "16px",                                                                        // Space between icon and text
              }}
            >
              <div
                style={{
                  padding: "12px",                                                                  // Padding inside icon container
                  borderRadius: "12px",                                                             // Rounded corners
                  backgroundColor: `${stat.color}15`,                                               // Light background color based on stat color
                  color: stat.color,                                                                // Icon color
                }}
              >
                {stat.icon} {                                                                       /* Icon for this stat */}
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>{stat.title}</div> {            /* Title of stat */}
                <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>{stat.value}</div> {/* Value of stat */}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {                                                                                             /* Course Management Section */}
      <Card style={{ marginBottom: "32px" }}>
        <div style={{ padding: "24px", borderBottom: "1px solid #e5e7eb" }}>
          <div
            style={{
              display: "flex",                                                                      // Flex for header content
              justifyContent: "space-between",                                                      // Space between title and add button
              alignItems: "center",                                                                 // Vertically center content
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Course Management</h2>
            <button
              onClick={() => setShowAddCourseModal(true)}                                           // Show add course modal when clicked
              style={{
                display: "flex",                                                                    // Flex layout for icon and text
                alignItems: "center",
                gap: "8px",
                padding: "10px 16px",
                backgroundColor: "#3b82f6",                                                         // Blue background
                color: "white",                                                                     // White text
                border: "none",                                                                     // No border
                borderRadius: "6px",                                                                // Rounded corners
                cursor: "pointer",                                                                  // Pointer cursor on hover
                fontWeight: "500",                                                                  // Medium font weight
                transition: "background-color 0.2s",                                                // Smooth background color change
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}                     // Darker blue on hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}                      // Original color on mouse out
            >
              <Plus size={16} /> {                                                                  /* Plus icon */}
              Add Course
            </button>
          </div>
        </div>

        {                                                                                           /* Course Categories */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid #e5e7eb" }}>
          <div
            style={{
              display: "flex",                                                                      // Flexbox for category buttons
              gap: "16px",                                                                          // Gap between buttons
              overflowX: "auto",                                                                    // Scroll horizontally if needed
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}                                                                   // Unique key
                onClick={() => setActiveTab(category.id)}                                           // Set active tab on click
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: category.id === activeTab ? "#3b82f6" : "#f3f4f6",
                  color: category.id === activeTab ? "white" : "#6b7280",
                  cursor: "pointer",
                  whiteSpace: "nowrap",                                                             // Prevent text wrapping
                  transition: "all 0.2s ease",                                                      // Smooth transition
                  fontWeight: category.id === activeTab ? "500" : "400",
                }}
              >
                {category.label} {                                                                  /* Category label */}
              </button>
            ))}
          </div>
        </div>

        {                                                                                           /* Course Grid */}
        <div
          style={{
            padding: "24px",
            display: "grid",                                                                        // Grid layout for courses
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",                           // Responsive courses
            gap: "24px",                                                                            // Gap between course cards
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {getFilteredCourses().courses.map((course) => (
            <CourseCard
              key={course.id}                                                                       // Unique key for each course
              course={course}
              showProgress={course.status === "in_progress"}                                        // Show progress bar if in progress
              showStartDate={course.status === "upcoming"}                                          // Show start date if upcoming
              showCompletionDate={course.status === "completed"}                                    // Show completion date if completed
            />
          ))}
        </div>

        {                                                                                           /* Add Pagination */}
        <Pagination totalCourses={getFilteredCourses().totalCourses} />
      </Card>

      {                                                                                             /* Teacher Progress */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Teacher Progress
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <th
                    style={{
                      padding: "16px 24px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Teacher
                  </th>
                  <th
                    style={{
                      padding: "16px 24px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Courses Completed
                  </th>
                  <th
                    style={{
                      padding: "16px 24px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Badges/Certificates
                  </th>
                  <th
                    style={{
                      padding: "16px 24px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Recommended Courses
                  </th>
                </tr>
              </thead>
              <tbody>
                {teacherProgress.map((teacher, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: index < teacherProgress.length - 1 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <td style={{ padding: "16px 24px", fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {teacher.name} {                                                              /* Teacher name */}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#6b7280" }}>
                      {teacher.coursesCompleted} {                                                  /* Number of courses completed */}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#3b82f6" }}>
                      {teacher.badges} {                                                            /* Badges or certificates */}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#10b981" }}>
                      {teacher.recommendedCourses} {                                                /* Recommended courses */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {                                                                                             /* Certification Timeline */}
      <div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Certification Timeline
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {certificationTimeline.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "16px",
                padding: "16px 0",
                borderBottom: index < certificationTimeline.length - 1 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  flexShrink: 0,
                }}
              >
                {item.icon} {                                                                       /* Icon representing status */}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1f2937",
                    marginBottom: "4px",
                  }}
                >
                  {item.title} {                                                                    /* Certification title */}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: item.color,
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  {item.status} {                                                                   /* Certification status */}
                </div>
                {                                                                                   /* Add mini progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "2px",
                    marginBottom: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${item.completion}%`,
                      height: "100%",
                      backgroundColor: item.color,
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                    }}
                  >
                    Completion
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: item.color,
                    }}
                  >
                    {item.completion}% {                                                            /* Completion percentage */}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  Teachers: {item.teachers.join(", ")} {                                            /* List teachers involved */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {                                                                                             /* Add Course Modal */}
      {showAddCourseModal && <AddCourseModal />} {                                                  /* Show modal if active */}
    </main>
  )
}

// Enhanced CourseCard Component for displaying individual courses
const CourseCard = ({ course, showProgress, showStartDate, showCompletionDate }) => (
  <Card
    style={{
      overflow: "hidden",                                                                           // Hide overflowing content
      transition: "transform 0.2s, box-shadow 0.2s",                                                // Smooth hover effects
      cursor: "pointer",                                                                            // Cursor changes to pointer on hover
      height: "fit-content",                                                                        // Height fits content
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)"                                          // Lift card on hover
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)"                               // Shadow on hover
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)"                                             // Reset position
      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"                                 // Reset shadow
    }}
  >
    <div
      style={{
        height: "160px",                                                                            // Fixed height for image section
        backgroundColor: course.color,                                                              // Background color for course
        backgroundImage: `url(${course.image})`,                                                    // Background image for course
        backgroundSize: "cover",                                                                    // Cover entire div
        backgroundPosition: "center",                                                               // Center image in div
        position: "relative",                                                                       // Relative for absolute placed difficulty badge
      }}
    >
      {                                                                                             /* Difficulty Badge */}
      <div
        style={{
          position: "absolute",                                                                     // Positioned at top right
          top: "12px",
          right: "12px",
          padding: "4px 8px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",                                              // Translucent white background
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "500",
          color: "#374151",
          textTransform: "capitalize",                                                              // Capitalize difficulty text
        }}
      >
        {course.difficulty} {                                                                       /* Difficulty level */}
      </div>
    </div>
    <div style={{ padding: "16px" }}>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "8px",
          lineHeight: "1.4",
        }}
      >
        {course.title} {                                                                            /* Course title */}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          marginBottom: "12px",
          lineHeight: "1.4",
        }}
      >
        {course.description} {                                                                      /* Course description */}
      </p>

      {                                                                                             /* Course Details */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          fontSize: "12px",
          color: "#6b7280",
        }}
      >
        <span>👨‍🏫 {course.instructor}</span> {                                                    /* Instructor name with icon */}
        <span>👥 {course.maxStudents} max</span> {                                                  /* Max students with icon */}
      </div>

      {showProgress && (                                                                            // Show progress bar if course is in progress
        <div style={{ marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <span style={{ fontSize: "12px", color: "#6b7280" }}>Progress</span>
            <span style={{ fontSize: "12px", color: "#3b82f6", fontWeight: "500" }}>{course.progress}%</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "#f3f4f6",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${course.progress}%`,
                height: "100%",
                backgroundColor: "#3b82f6",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      )}

      {showStartDate && (                                                                           // Show start date if course is upcoming
        <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>
          📅 Starts: {new Date(course.startDate).toLocaleDateString()}
        </div>
      )}

      {showCompletionDate && (                                                                      // Show completion date if course completed
        <div style={{ fontSize: "14px", color: "#10b981", marginBottom: "12px", fontWeight: "500" }}>
          ✅ Completed: {new Date(course.completionDate).toLocaleDateString()}
        </div>
      )}

      {                                                                                             /* Footer with duration and view button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            color: "#6b7280",
            fontWeight: "500",
          }}
        >
          ⏱️ {course.duration}
        </span>
        <button
          style={{
            padding: "6px 12px",
            backgroundColor: "#f3f4f6",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            color: "#4b5563",
            cursor: "pointer",
            fontWeight: "500",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
        >
          View Course
        </button>
      </div>
    </div>
  </Card>
)

// Helper component for form fields - organizes label and input vertically with spacing
const FormField = ({ children, style = {} }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "8px", ...style }}>{children}</div>
)

// Helper component for form labels
const FormLabel = ({ children }) => (
  <label
    style={{
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
    }}
  >
    {children}
  </label>
)

// Helper component for displaying error messages in forms
const ErrorMessage = ({ children }) => (
  <span
    style={{
      fontSize: "12px",
      color: "#ef4444",                                                                             // Red color for errors
      fontWeight: "500",
    }}
  >
    {children}
  </span>
)

// Shared input style applied to all form inputs for consistent styling
const formInputStyle = {
  width: "100%",                                                                                    // Full width input
  padding: "10px 12px",                                                                             // Padding inside input
  borderRadius: "6px",                                                                              // Rounded corners
  border: "1px solid #e5e7eb",                                                                      // Border color
  fontSize: "14px",                                                                                 // Font size
  color: "#111827",                                                                                 // Text color
  backgroundColor: "white",                                                                         // Background color
  outline: "none",                                                                                  // Remove default outline
  transition: "border-color 0.2s",                                                                  // Smooth transition on border color
  fontFamily: "inherit",                                                                            // Use inherited font family
}

export default IntegratedLMS

