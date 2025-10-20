// Commented out
import { useState } from "react"
// React Router hook for navigation
import { useNavigate } from 'react-router-dom';
// Import icons from lucide-react for UI use
import {
  LogOut,
  AlertTriangle,
  TrendingUp,
  BrainCircuit,
  Users,
  Target,
  ArrowRight,
  ChartBar,
  Lightbulb,
  Activity,
  Brain
} from 'lucide-react';
// Import chart components from Recharts library
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Card Component: Simple reusable card UI element with default styles
const Card = ({ children, style = {}, ...props }) => (
  <div style={{
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    ...style
  }} {...props}>
    {children}
  </div>
);

// Main dashboard component
const AIInsightsDashboard = () => {
  const navigate = useNavigate();                                                                   // Hook to redirect users to another page
  const [activeNav, setActiveNav] = useState("AI-Powered Insights");                                // Track current navigation item
  const [activeQuickAction, setActiveQuickAction] = useState(null);                                 // Track which quick action is expanded

  // Sidebar navigation items
  const sidebarItems = [
    { icon: "🏠", label: "Dashboard", page: "dashboard" },
    { icon: "👥", label: "Teacher Bandwidth Tracker", page: "bandwidth" },
    { icon: "📊", label: "Performance Dashboard", page: "performance" },
    { icon: "📚", label: "Integrated LMS", page: "lms" },
    { icon: "🏆", label: "Recognition & Rewards System", page: "recognition" },
    { icon: "💡", label: "AI-Powered Insights", page: "insights" },
  ]

  // Top navigation bar items (unused in this example but listed)
  const topNavItems = [
    "Dashboard",
    "Teacher Bandwidth Tracker",
    "Performance Dashboard",
    "Integrated LMS",
    "Recognition & Rewards System",
    "AI-Powered Insights",
  ]

  // Log out user by clearing auth and redirecting to login page
  const handleLogout = () => {                                                                      // Clear auth state
    localStorage.removeItem("isAuthenticated");                                                     // Clear auth state
    navigate('/');                                                                                  // Redirect to login page
  };

  // Insight metrics data to display educational KPIs
  const insightMetrics = [                                                                          // Example data for demonstration purposes
    {
      title: "Teaching Quality Score",                                                              // title of the metric
      value: "92%",                                                                                 // value of the metric 
      trend: "+15%",                                                                                // trend of the metric (e.g., increase or decrease)
      icon: <BrainCircuit size={24} />,                                                             // icon for the metric
      color: "#8b5cf6",                                                                             // color of the metric
      detail: "Based on student outcomes and peer reviews",                                         // detail reviews of the metric
      impact: "15% improvement in student grades"                                                   // impact of the metric
    },
    {
      title: "Resource Optimization",
      value: "87%",
      trend: "+12%",
      icon: <TrendingUp size={24} />,
      color: "#10b981",
      detail: "Classroom and teaching resource utilization",
      impact: "Cost reduction of 23%"
    },
    {
      title: "Student Engagement",
      value: "94%",
      trend: "+8%",
      icon: <Users size={24} />,
      color: "#3b82f6",
      detail: "Active participation and attendance",
      impact: "Increased retention by 18%"
    },
    {
      title: "Curriculum Effectiveness",
      value: "90%",
      trend: "+7%",
      icon: <Target size={24} />,
      color: "#f59e0b",
      detail: "Learning objectives achievement rate",
      impact: "Higher test scores across 85% of subjects"
    }
  ];

  // AI-generated predictions and recommendations grouped by category
  const predictiveInsights = [                                                                      // Example data for demonstration purposes
    {
      category: "Academic Performance",
      predictions: [
        {
          title: "Math Department Improvement",
          prediction: "15% increase in test scores expected",
          confidence: 89,
          actionItems: ["Implement peer tutoring", "Add interactive tools"],
          impact: "Affects 250 students"
        },
        {
          title: "Science Lab Utilization",
          prediction: "Current capacity underutilized by 35%",
          confidence: 92,
          actionItems: ["Schedule optimization", "Equipment sharing"],
          impact: "Potential savings: $12,000/year"
        }
      ]
    },
    {
      category: "Resource Management",
      predictions: [
        {
          title: "Classroom Space Optimization",
          prediction: "20% more efficient use of space",
          confidence: 85,
          actionItems: ["Redesign classroom layouts", "Implement flexible seating"],
          impact: "Improves learning environment for 300 students"
        },
        {
          title: "Teaching Material Costs",
          prediction: "Reduce by 10% through bulk sourcing",
          confidence: 90,
          actionItems: ["Negotiate with suppliers", "Adopt open educational resources"],
          impact: "Saves $5,000 annually"
        }
      ]
    },
    {
      category: "Student Support",
      predictions: [
        {
          title: "Counseling Services Demand",
          prediction: "Increase by 25% in the next semester",
          confidence: 88,
          actionItems: ["Hire 2 more counselors", "Extend service hours"],
          impact: "Better mental health support for students"
        },
        {
          title: "Extracurricular Participation",
          prediction: "Boost by 30% with new programs",
          confidence: 91,
          actionItems: ["Introduce coding club", "Start a debate team"],
          impact: "Enhances student skills and engagement"
        }
      ]
    }
  ];

  // Data to be shown in performance trend chart
  const performanceData = [                                                                         // Dummy date values
    { month: 'Jan', score: 85 },
    { month: 'Feb', score: 82 },
    { month: 'Mar', score: 88 },
    { month: 'Apr', score: 86 },
    { month: 'May', score: 89 },
    { month: 'Jun', score: 85 }
  ];

  // Predefined quick actions for user interaction
  const quickActionsData = {                                                                        // Add more actions as needed
    atRisk: {
      teachers: [
        {
          name: "Ms. Olivia Thompson",
          risk: "High",
          metrics: {
            workload: "42 hours/week",
            stressIndicators: "Above threshold",
            lastAssessment: "2024-02-15"
          },
          recommendations: [
            "Reduce administrative tasks",
            "Schedule wellness check-in",
            "Adjust class size"
          ]
        },
        {
          name: "Mr. James Carter",
          risk: "Medium",
          metrics: {
            workload: "38 hours/week",
            stressIndicators: "Moderate",
            lastAssessment: "2024-02-10"
          },
          recommendations: [
            "Review task distribution",
            "Offer support resources",
            "Monitor workload"
          ]
        }
      ]
    },
    performanceMetrics: {
      summary: {
        overall: "85%",
        improvement: "+15%",
        areas: [
          { name: "Teaching Quality", score: 92 },
          { name: "Student Engagement", score: 88 },
          { name: "Professional Development", score: 85 },
          { name: "Administrative Tasks", score: 75 }
        ]
      }
    },
    aiRecommendations: [
      {
        category: "Workload Optimization",
        suggestion: "Implement team teaching for Grade 8 Science",
        impact: "Could reduce teacher stress by 25%",
        priority: "High"
      },
      {
        category: "Professional Development",
        suggestion: "Schedule stress management workshop",
        impact: "Potential 15% improvement in teacher wellbeing",
        priority: "Medium"
      },
      {
        category: "Resource Allocation",
        suggestion: "Redistribute administrative tasks",
        impact: "Could save 4 hours/week per teacher",
        priority: "High"
      }
    ]
  };

  // Quick action items user can click on
  const quickActions = [                                                                            // quick actions dummy data
    {
      id: 'atRisk',
      icon: <AlertTriangle size={20} />,
      label: "View At-Risk Teachers",
      color: "#ef4444",
      description: "Teachers requiring immediate attention"
    },
    {
      id: 'performanceMetrics',
      icon: <Activity size={20} />,
      label: "Review Performance Metrics",
      color: "#3b82f6",
      description: "Detailed performance analysis"
    },
    {
      id: 'aiRecommendations',
      icon: <Brain size={20} />,
      label: "Get AI Recommendations",
      color: "#8b5cf6",
      description: "AI-powered improvement suggestions"
    }
  ];

  // Return the JSX to render the UI
  return (
    <main style={{ padding: "32px", backgroundColor: "#f8fafc" }}>
      {                                                                                             /* Header with Logout */}
      <div style={{
        marginBottom: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#1f2937",
          margin: "0",
        }}>
          AI-Powered Insights
        </h1>
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "1px solid #ef4444",
            color: "#ef4444",
            background: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500"
          }}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {                                                                                             /* Enhanced Insight Metrics */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {insightMetrics.map((metric, index) => (                                                    // insight metrics is an array of objects
          <Card key={index} style={{
            cursor: "pointer",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)"
            }
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px"
            }}>
              <div style={{
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: `${metric.color}15`,
                color: metric.color
              }}>
                {metric.icon}
              </div>
              <div style={{
                padding: "4px 12px",
                borderRadius: "999px",
                backgroundColor: metric.trend.startsWith('+') ? "#f0fdf4" : "#fef2f2",
                color: metric.trend.startsWith('+') ? "#16a34a" : "#dc2626",
                fontSize: "14px"
              }}>
                {metric.trend}
              </div>
            </div>
            <h3 style={{
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "8px"
            }}>
              {metric.title}
            </h3>
            <div style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "8px"
            }}>
              {metric.value}
            </div>
            <div style={{
              fontSize: "12px",
              color: "#6b7280",
              marginTop: "8px"
            }}>
              {metric.detail}
            </div>
            <div style={{
              fontSize: "12px",
              color: metric.color,
              marginTop: "4px",
              fontWeight: "500"
            }}>
              {metric.impact}
            </div>
          </Card>
        ))}
      </div>

      {                                                                                             /* Add Predictive Analytics Section */}
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#1f2937",
          marginBottom: "24px"
        }}>
          AI Predictions & Recommendations
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "24px"
        }}>
          {predictiveInsights.map((category, index) => (                                            // 
            <Card key={index}>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "16px"
              }}>
                {category.category}
              </h3>
              {category.predictions.map((prediction, pIndex) => (
                <div key={pIndex} style={{
                  marginBottom: "16px",
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  borderLeft: `4px solid ${prediction.confidence > 85 ? '#10b981' : '#ef4444'}`
                }}>
                  <h4 style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#1f2937",
                    margin: "0 0 8px 0"
                  }}>
                    {prediction.title}
                  </h4>
                  <p style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    margin: "0 0 4px 0",
                    lineHeight: "1.5"
                  }}>
                    {prediction.prediction}
                  </p>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  }}>
                    <span style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontStyle: "italic"
                    }}>
                      Confidence: {prediction.confidence}%
                    </span>
                    <span style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontStyle: "italic"
                    }}>
                      Impact: {prediction.impact}
                    </span>
                  </div>
                  <div style={{
                    marginTop: "8px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px"
                  }}>
                    {prediction.actionItems.map((action, aIndex) => (                               // action Items is an array of objects with title and description
                      <span key={aIndex} style={{
                        padding: "4px 8px",
                        borderRadius: "16px",
                        backgroundColor: "#e0f2fe",
                        color: "#0d9488",
                        fontSize: "12px",
                        fontWeight: "500"
                      }}>
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </div>

      {                                                                                             /* Main Content Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {                                                                                           /* Left Column - Performance Trends */}
        <Card>
          <h2 style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "24px"
          }}>
            Performance Trends & Predictions
          </h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {                                                                                           /* Right Column - Quick Actions */}
        <Card>
          <h2 style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "24px"
          }}>
            Quick Actions
          </h2>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            {quickActions.map((action) => (
              <div key={action.id}>
                <button
                  onClick={() => setActiveQuickAction(activeQuickAction === action.id ? null : action.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    backgroundColor: activeQuickAction === action.id ? `${action.color}15` : "#f8fafc",
                    border: "none",
                    borderRadius: "8px",
                    color: "#1f2937",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontSize: "14px",
                    fontWeight: "500",
                    width: "100%"
                  }}
                >
                  <span style={{ color: action.color }}>{action.icon}</span>
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div>{action.label}</div>
                    <div style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      marginTop: "2px"
                    }}>
                      {action.description}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    style={{
                      transform: activeQuickAction === action.id ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s'
                    }}
                  />
                </button>

                {activeQuickAction === action.id && (
                  <div style={{
                    marginTop: "12px",
                    padding: "16px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    fontSize: "14px",
                    animation: "slideDown 0.2s ease-out"
                  }}>
                    {action.id === 'atRisk' && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {quickActionsData.atRisk.teachers.map((teacher, idx) => (
                          <div key={idx} style={{
                            padding: "12px",
                            borderLeft: `3px solid ${teacher.risk === 'High' ? '#ef4444' : '#f59e0b'
                              }`,
                            backgroundColor: "white",
                            marginBottom: "8px",
                            borderRadius: "4px"
                          }}>
                            <div style={{ fontWeight: "500", marginBottom: "4px" }}>
                              {teacher.name} - {teacher.risk} Risk
                            </div>
                            <div style={{ color: "#6b7280", fontSize: "12px" }}>
                              Workload: {teacher.metrics.workload}
                            </div>
                            <div style={{
                              marginTop: "8px",
                              display: "flex",
                              gap: "4px",
                              flexWrap: "wrap"
                            }}>
                              {teacher.recommendations.map((rec, recIdx) => (
                                <span key={recIdx} style={{
                                  padding: "2px 8px",
                                  backgroundColor: "#e5e7eb",
                                  borderRadius: "12px",
                                  fontSize: "12px"
                                }}>
                                  {rec}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {action.id === 'performanceMetrics' && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "16px"
                        }}>
                          <div style={{ fontSize: "24px", fontWeight: "600" }}>
                            {quickActionsData.performanceMetrics.summary.overall}
                          </div>
                          <div style={{
                            color: "#16a34a",
                            backgroundColor: "#f0fdf4",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            fontSize: "12px"
                          }}>
                            {quickActionsData.performanceMetrics.summary.improvement}
                          </div>
                        </div>
                        {quickActionsData.performanceMetrics.summary.areas.map((area, idx) => (
                          <div key={idx} style={{ marginBottom: "12px" }}>
                            <div style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "4px"
                            }}>
                              <span>{area.name}</span>
                              <span>{area.score}%</span>
                            </div>
                            <div style={{
                              height: "4px",
                              backgroundColor: "#e5e7eb",
                              borderRadius: "2px"
                            }}>
                              <div style={{
                                width: `${area.score}%`,
                                height: "100%",
                                backgroundColor: "#3b82f6",
                                borderRadius: "2px",
                                transition: "width 0.3s ease"
                              }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {action.id === 'aiRecommendations' && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {quickActionsData.aiRecommendations.map((rec, idx) => (
                          <div key={idx} style={{
                            padding: "12px",
                            backgroundColor: "white",
                            marginBottom: "8px",
                            borderRadius: "4px",
                            borderLeft: `3px solid ${rec.priority === 'High' ? '#ef4444' : '#f59e0b'
                              }`
                          }}>
                            <div style={{
                              color: "#6b7280",
                              fontSize: "12px",
                              marginBottom: "4px"
                            }}>
                              {rec.category}
                            </div>
                            <div style={{ fontWeight: "500", marginBottom: "4px" }}>
                              {rec.suggestion}
                            </div>
                            <div style={{
                              color: "#16a34a",
                              fontSize: "12px"
                            }}>
                              {rec.impact}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {                                                                                             /* Burnout Risk Section */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Burnout Risk
        </h2>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 12px 0",
              }}
            >
              Alert: Ms. Olivia shows signs of burnout.
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              Based on recent performance data and feedback, Ms. Olivia may be experiencing burnout. Consider
              offering support and resources.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "120px",
              borderRadius: "12px",
              backgroundColor: "#e5f3f0",
              backgroundImage: "url(/placeholder.svg?height=120&width=200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></div>
        </div>
      </div>

      {                                                                                             /* Detailed Career Suggestion - Made Clickable */}
      <div
        onClick={() => alert("Opening detailed career path information")}
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          flexWrap: "wrap",
          cursor: "pointer",
          transition: "transform 0.2s",
          ':hover': {
            transform: "scale(1.01)",
          }
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1f2937",
              margin: "0 0 12px 0",
            }}
          >
            Suggested Growth Path: Curriculum Development Lead
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              margin: "0",
              lineHeight: "1.5",
            }}
          >
            This role offers a new challenge and allows Ms. Olivia to leverage her expertise in a different
            capacity.
          </p>
        </div>
        <div
          style={{
            width: "200px",
            height: "120px",
            borderRadius: "12px",
            backgroundColor: "#f5f1e8",
            backgroundImage: "url(/placeholder.svg?height=120&width=200)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
          }}
        ></div>
      </div>

      {                                                                                             /* Staffing Optimization */}
      <div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Staffing Optimization
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 12px 0",
              }}
            >
              Hire 1 more Science teacher for Grade 8.
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              Based on student-teacher ratio and class size projections, an additional Science teacher is
              recommended for Grade 8.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "120px",
              borderRadius: "12px",
              backgroundColor: "#f0f4f3",
              backgroundImage: "url(/placeholder.svg?height=120&width=200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(20px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </main>
  );
}

export default AIInsightsDashboard;                                                                 // Export the dashboard component