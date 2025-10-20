import { useState } from "react"
import { useNavigate } from 'react-router-dom';                                                     // importing the navigation hook for routing between the pages
import {
  LogOut,
  Award,
  Star,
  Trophy,
  Heart,
  ThumbsUp,
  Smile,
  Medal,
  Gift
} from 'lucide-react';                                                                              // importing of the icons from the lucide library

const RecognitionDashboard = () => {
  const navigate = useNavigate();                                                                   // navigating the route path between the pages
  const [activeNav, setActiveNav] = useState("Recognition & Rewards System")                        //  state for the active navigation tab
  const [activeTab, setActiveTab] = useState('all');                                                // state for the active tab in the dashboard
  const [selectedTeacher, setSelectedTeacher] = useState(null);                                     // state for the selected teacher in the dashboard
  const [showKudosForm, setShowKudosForm] = useState(false);                                        // state for the kudos form visibility
  const [sortLeaderboard, setSortLeaderboard] = useState('rank');                                   // 'rank', 'badges', 'name'
  const [expandedTimeline, setExpandedTimeline] = useState(null);                                   // state for the timeline expansion
  const [teacherRating, setTeacherRating] = useState(5);                                            // state for the teacher rating

  const leaderboardData = [                                                                         // sample leaderboard data
    {
      rank: 1,                                                                                      //  rank of the teacher
      teacher: "Ms. Harper",                                                                        // name of the teacher
      badge: "🌟",                                                                                  // badge of the teacher
      badgeColor: "#fbbf24",                                                                        // color of the badge
    },
    {
      rank: 2,
      teacher: "Mr. Bennett",
      badge: "⭐",
      badgeColor: "#9ca3af",
    },
    {
      rank: 3,
      teacher: "Ms. Carter",
      badge: "⭐",
      badgeColor: "#92400e",
    },
    {
      rank: 4,
      teacher: "Mr. Davis",
      badge: "⭐",
      badgeColor: "#0891b2",
    },
    {
      rank: 5,
      teacher: "Ms. Evans",
      badge: "⭐",
      badgeColor: "#059669",
    },
  ]

  const kudosWall = [                                                                               // sample kudos wall data
    {
      title: "Great Job!",                                                                          // tile of the kudos
      giver: "Ms. Harper",                                                                          // giver of the kudos
      receiver: "Mr. Bennett",                                                                      // receiver of the kudos
    },
    {
      title: "Excellent Work!",
      giver: "Mr. Davis",
      receiver: "Ms. Carter",
    },
    {
      title: "Outstanding Performance!",
      giver: "Ms. Evans",
      receiver: "Ms. Harper",
    },
  ]

  const achievementsTimeline = [                                                                    // sample achievements timeline data
    {
      teacher: "Ms. Harper",                                                                        // name of the teacher who achieved the milestone
      achievement: "100 Kudos Received",                                                            // achivement milestone
      icon: "🌟",                                                                                   // 
      color: "#fbbf24",                                                                             // color of the icon
    },
    {
      teacher: "Mr. Bennett",
      achievement: "50 Kudos Given",
      icon: "⭐",
      color: "#9ca3af",
    },
    {
      teacher: "Ms. Carter",
      achievement: "25 Kudos Received",
      icon: "⭐",
      color: "#92400e",
    },
  ]

  // Update reward statistics with more business-focused metrics
  const rewardStats = [
    {
      title: "Student Success Rate",                                                                // title of the metric
      value: "92%",                                                                                 // value of the metric
      icon: <Trophy size={24} />,                                                                   // icon of the metric
      color: "#10b981",                                                                             // color of the metric
      change: "+15%",                                                                               // change in the metric
      detail: "Based on student performance improvement"                                            // detail of the metric
    },
    {
      title: "Parent Satisfaction",
      value: "4.8/5",
      icon: <Heart size={24} />,
      color: "#ef4444",
      change: "+12%",
      detail: "From parent feedback surveys"
    },
    {
      title: "Teaching Excellence",
      value: "156",
      icon: <Medal size={24} />,
      color: "#3b82f6",
      change: "+8%",
      detail: "Excellence awards this semester"
    },
    {
      title: "Innovation Score",
      value: "89%",
      icon: <Gift size={24} />,
      color: "#f59e0b",
      change: "+10%",
      detail: "Based on teaching methodology adoption"
    }
  ];

  // Add business-oriented achievements
  const achievements = {
    kudos: [
      {
        id: 1,                                                                                      // unique id of the achievement
        title: "Outstanding Teaching Innovation",                                                   // title of the achivement
        description: "Successfully implemented blended learning approach, increasing student engagement by 45%",  // description of the achivement
        icon: "🌟",                                                                                 // icon of the achivement
        date: "2024-01-15",                                                                         // date of the achivement
        teacher: "Ms. Harper",                                                                      // teacher who achived the achivement
        impact: "Improved student test scores by 32%"                                               // impact of the achivement
      },
      {
        id: 2,
        title: "Team Player",
        description: "Organized department collaboration sessions",
        icon: "🤝",
        date: "2024-01-20",
        teacher: "Mr. Bennett"
      }
    ],
    awards: [
      {
        id: 1,
        title: "Excellence in STEM Education",
        description: "Led robotics program resulting in state championship",
        icon: "🏆",
        date: "2024-01-01",
        teacher: "Ms. Carter",
        impact: "15 students received tech scholarships"
      },
      {
        id: 2,
        title: "Innovation Award",
        description: "Implemented creative teaching methods",
        icon: "💡",
        date: "2024-01-10",
        teacher: "Mr. Davis"
      }
    ],
    badges: [
      {
        id: 1,
        title: "Technology Master",
        description: "Excellence in digital learning implementation",
        icon: "💻",
        date: "2024-01-05",
        teacher: "Ms. Evans"
      },
      {
        id: 2,
        title: "Mentor Excellence",
        description: "Exceptional mentoring of new teachers",
        icon: "🌟",
        date: "2024-01-12",
        teacher: "Ms. Harper"
      }
    ]
  };

  const getFilteredAchievements = () => {                                                           // filter the achivements based on selected filters
    if (activeTab === 'all') {                                                                      // if all tab is selected , return all achivements
      return [
        ...achievements.kudos,                                                                      // merge all kudos achivement
        ...achievements.awards,                                                                     // merge all awards achivement
        ...achievements.badges                                                                      // merge all badges achivement
      ];
    }
    return achievements[activeTab] || [];                                                           // return achivements based on achivement tabs
  };

  const handleLogout = () => {                                                                      // handle the page logout functionality
    localStorage.removeItem("isAuthenticated");                                                     // removes the token from the local storage, clearing the authenticated state
    navigate('/');                                                                                  // redirects the user to the login page
  };

  const handleKudosSubmit = (kudos) => {                                                            // handle the kudos submit functionality
    // Add new kudos to kudosWall
    const newKudos = {                                                                              // create a new kudos object
      title: kudos.title,                                                                           // set the title of the kudos
      giver: "Current User",                                                                        // set the giver of the kudos
      receiver: kudos.receiver,                                                                     // set the receiver of the kudos
    };
    setKudosWall([newKudos, ...kudosWall]);                                                         // add the new kudos to the kudosWall state
    setShowKudosForm(false);                                                                        // hide the kudos form
  };

  const getSortedLeaderboard = () => {                                                              //  sort the leaderboard based on the points                                        
    return [...leaderboardData].sort((a, b) => {                                                    // sort the leaderboard data
      switch (sortLeaderboard) {                                                                    // sort the leaderboard based on the selected sort option
        case 'rank': return a.rank - b.rank;                                                        // sort by rank
        case 'badges': return b.badge.localeCompare(a.badge);                                       // sort by badges
        case 'name': return a.teacher.localeCompare(b.teacher);                                     // sort by name
        default: return 0;                                                                          // default sort
      }
    });
  };

  // Add demo-ready teacher statistics
  const teacherMetrics = {                                                                          // create a new teacher metrics object
    averageStudentGrowth: "28%",                                                                    // set the average student growth
    parentEngagementRate: "95%",                                                                    // set the parent engagement rate
    professionalDevelopment: "25 hours/month",                                                      // set the professional development hours
    collaborationScore: "92%"                                                                       // set the collaboration score
  };

  // Update achievement categories with detailed metrics
  const achievementCategories = [                                                                   // create a new achievement categories array
    {
      id: 'all',                                                                                    //  set the id of the achievement category
      label: 'All Achievements',                                                                    // set the label of the achievement category
      icon: <Trophy size={20} />,                                                                   // set the icon of the achievement category
      description: 'Complete record of professional accomplishments'                                // set the description of the achievement category
    },
    {
      id: 'kudos',
      label: 'Professional Excellence',
      icon: <Award size={20} />,
      description: 'Recognition from peers and administration',
      metrics: {
        total: 156,
        thisMonth: 23,
        growth: '+15%'
      }
    },
    {
      id: 'awards',
      label: 'Academic Impact',
      icon: <Star size={20} />,
      description: 'Measurable student success outcomes',
      metrics: {
        total: 42,
        thisMonth: 8,
        growth: '+12%'
      }
    },
    {
      id: 'badges',
      label: 'Professional Development',
      icon: <Medal size={20} />,
      description: 'Certifications and skill advancement',
      metrics: {
        total: 89,
        thisMonth: 12,
        growth: '+18%'
      }
    }
  ];

  return (
    <main style={{ padding: "32px" }}>
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
          Teacher Recognition and Rewards
        </h1>
        <button
          onClick={handleLogout}                                                                    // onclick event handler for logout button
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

      {                                                                                             /* Reward Statistics */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {rewardStats.map((stat, index) => (                                                         // map through rewardStats array
          <div
            key={index}                                                                             // unique key for each stat
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px"
            }}>
              <div style={{
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: `${stat.color}15`,
                color: stat.color
              }}>
                {stat.icon}
              </div>
              <div style={{
                padding: "4px 12px",
                borderRadius: "999px",
                backgroundColor: "#f0fdf4",
                color: "#16a34a",
                fontSize: "14px"
              }}>
                {stat.change}
              </div>
            </div>
            <h3 style={{
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "8px"
            }}>
              {stat.title}
            </h3>
            <div style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#1f2937"
            }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      {                                                                                             /* Key Performance Indicators - New Section */}
      <div style={{
        marginBottom: "24px",
        padding: "20px",
        backgroundColor: "#f8fafc",
        borderRadius: "12px",
        border: "1px solid #e5e7eb"
      }}>
        <h3 style={{ color: "#1f2937", marginBottom: "16px" }}>Key Performance Indicators</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px"
        }}>
          {Object.entries(teacherMetrics).map(([key, value]) => (                                   // teacher Metrics is an object with a structure like { metric1: { value: 90, value2 : 80 }
            <div key={key} style={{
              padding: "16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
            }}>
              <div style={{ color: "#6b7280", fontSize: "14px" }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div style={{ color: "#1f2937", fontSize: "24px", fontWeight: "600" }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
      {                                                                                             /* Achievement Categories */}
      <div style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }}>
        <div style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          padding: "8px",
          marginBottom: "24px"
        }}>
          {achievementCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}                                             // set active tab
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: category.id === activeTab ? "#3b82f6" : "#f3f4f6",
                color: category.id === activeTab ? "white" : "#6b7280",
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minWidth: "200px"
              }}
            >
              <span style={{
                display: "flex",
                alignItems: "center"
              }}>
                {category.icon}
              </span>
              <div style={{
                textAlign: "left",
                flex: 1
              }}>
                <div style={{ fontWeight: "500" }}>{category.label}</div>
                {category.metrics && category.id === activeTab && (
                  <div style={{
                    fontSize: "12px",
                    opacity: 0.9,
                    marginTop: "4px"
                  }}>
                    {category.metrics.total} total · {category.metrics.growth} this month
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        <div style={{
          fontSize: "14px",
          color: "#6b7280",
          marginBottom: "16px",
          padding: "0 8px"
        }}>
          {achievementCategories.find(c => c.id === activeTab)?.description}
        </div>

        {                                                                                           /* Achievement Content - Keep existing grid layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
          padding: "16px"
        }}>
          {getFilteredAchievements().map((achievement) => (                                         // filtering achievements based on activeTab
            <div
              key={achievement.id}                                                                  // unique key for each achievement
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "8px",
                padding: "16px",
                border: "1px solid #e5e7eb"
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px"
              }}>
                <span style={{ fontSize: "24px" }}>{achievement.icon}</span>
                <div>
                  <h3 style={{
                    margin: "0",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1f2937"
                  }}>
                    {achievement.title}
                  </h3>
                  <p style={{
                    margin: "4px 0 0 0",
                    fontSize: "14px",
                    color: "#6b7280"
                  }}>
                    {achievement.teacher}
                  </p>
                </div>
              </div>
              <p style={{
                margin: "0 0 8px 0",
                fontSize: "14px",
                color: "#374151"
              }}>
                {achievement.description}
              </p>
              <div style={{
                fontSize: "12px",
                color: "#6b7280"
              }}>
                {new Date(achievement.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {                                                                                             /* Leaderboard */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}>
          <h2 style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: 0
          }}>
            Leaderboard
          </h2>
          <select
            value={sortLeaderboard}
            onChange={(e) => setSortLeaderboard(e.target.value)}                                    // set SortLeaderboard to the selected value
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
              fontSize: "14px"
            }}
          >
            <option value="rank">Sort by Rank</option>
            <option value="badges">Sort by Badges</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

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
                minWidth: "500px",
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
                    Rank
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
                    Badges
                  </th>
                </tr>
              </thead>
              <tbody>
                {getSortedLeaderboard().map((item, index) => (                                      // get SortedLeaderboard() is a function that returns an array of objects 
                  <tr
                    key={index}
                    style={{
                      borderBottom: index < leaderboardData.length - 1 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <td style={{ padding: "16px 24px", fontSize: "14px", color: "#3b82f6", fontWeight: "500" }}>
                      {item.rank}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                      {item.teacher}
                    </td>
                    <td style={{ padding: "16px 24px" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: item.badgeColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                        }}
                      >
                        {item.badge}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {                                                                                             /* Kudos Wall */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}>
          <h2 style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: 0
          }}>
            Kudos Wall
          </h2>
          <button
            onClick={() => setShowKudosForm(true)}                                                  // show the kudos form
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Give Kudos
          </button>
        </div>

        {showKudosForm && (
          <div style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "12px",
            marginBottom: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleKudosSubmit({
                title: e.target.title.value,
                receiver: e.target.receiver.value
              });
            }}>
              <input
                name="title"
                placeholder="Write your kudos..."
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb"
                }}
              />
              <select
                name="receiver"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb"
                }}
              >
                {leaderboardData.map(teacher => (
                  <option key={teacher.teacher} value={teacher.teacher}>
                    {teacher.teacher}
                  </option>
                ))}
              </select>
              <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={() => setShowKudosForm(false)}                                           // hide the form
                  style={{ padding: "8px 16px" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none"
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {kudosWall.map((kudos, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 8px 0",
                }}
              >
                {kudos.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#3b82f6",
                  margin: "0",
                }}
              >
                {kudos.giver} gave Kudos to {kudos.receiver}
              </p>
            </div>
          ))}
        </div>
      </div>

      {                                                                                             /* Achievements Timeline */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Achievements Timeline
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {achievementsTimeline.map((achievement, index) => (                                       // Achivements Timeline
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 0",
                borderBottom: index < achievementsTimeline.length - 1 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: achievement.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                {achievement.icon}
              </div>
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1f2937",
                  }}
                >
                  {achievement.teacher} - {achievement.achievement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {                                                                                             /* Teacher of the Month */}
      <div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 24px 0",
          }}
        >
          Teacher of the Month
        </h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 8px 0",
              }}
            >
              Ms. Harper
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              Recommended by AI for outstanding student engagement and positive feedback.
            </p>
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "12px",
              backgroundColor: "#f3f4f6",
              backgroundImage: "url(/placeholder.svg?height=120&width=120)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></div>
        </div>
        <div style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setTeacherRating(star)}                                                // set TeacherRating is a function that updates the rating state
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: star <= teacherRating ? "#fbbf24" : "#e5e7eb"
              }}
            >
              ★
            </button>
          ))}
          <span style={{ fontSize: "14px", color: "#6b7280", marginLeft: "8px" }}>
            ({teacherRating}/5)
          </span>
        </div>
      </div>

      {                                                                                             /* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .sidebar {
              position: fixed;
              left: -280px;
              top: 0;
              height: 100vh;
              z-index: 1000;
              transition: left 0.3s ease;
            }
            .sidebar.open {
              left: 0;
            }
            .main-content {
              margin-left: 0;
            }
            .content-padding {
              padding: 16px;
            }
            .teacher-of-month {
              flex-direction: column;
              text-align: center;
            }
            .teacher-photo {
              width: 100px;
              height: 100px;
            }
          }
          
          @media (max-width: 480px) {
            .table-container {
              font-size: 12px;
            }
            .kudos-card {
              padding: 16px;
            }
            .achievement-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
            }
          }
        `}
      </style>
    </main>
  )
}

export default RecognitionDashboard                                                                 // export as default component for App.jsx