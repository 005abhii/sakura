// Navigation utility for teacher dashboards
export const navigateToPage = (page) => {
    // Get current path to determine if we're in a React Router environment
    const currentPath = window.location.pathname;

    // Define route mappings
    const routes = {
        'Overview': '/teacher-profile',
        'Workload': '/teacher/workload',
        'Performance': '/teacher/performance',
        'Feedback': '/teacher/feedback'
    };

    // Check if we have React Router available
    if (window.history && window.history.pushState) {
        // Use pushState for SPA navigation
        const targetRoute = routes[page];
        if (targetRoute && targetRoute !== currentPath) {
            window.history.pushState(null, '', targetRoute);

            // Dispatch a custom event to notify components of route change
            window.dispatchEvent(new CustomEvent('routechange', {
                detail: { page, route: targetRoute }
            }));

            // Force page reload for now (in a real app, you'd use React Router)
            window.location.reload();
        }
    } else {
        // Fallback to direct navigation
        const targetRoute = routes[page];
        if (targetRoute) {
            window.location.href = targetRoute;
        }
    }
};

// Get active page based on current URL
export const getActivePage = () => {
    const path = window.location.pathname;

    if (path.includes('/workload')) return 'Workload';
    if (path.includes('/performance')) return 'Performance';
    if (path.includes('/feedback')) return 'Feedback';
    if (path.includes('/profile')) return 'Overview';
    // Default fallback
    return 'Overview';
};

// Check if a navigation item should be active
export const isPageActive = (page) => {
    return getActivePage() === page;
};

// Navigation items configuration
export const sidebarItems = [
    {
        icon: 'RiDashboardLine',
        label: 'Overview',
        route: '/teacher-profile',
        description: 'Teacher profile and overview'
    },
    {
        icon: 'RiTimeLine',
        label: 'Workload',
        route: '/teacher/workload',
        description: 'Manage teaching workload and schedule'
    },
    {
        icon: 'RiBarChartBoxLine',
        label: 'Performance',
        route: '/teacher/performance',
        description: 'Track teaching performance metrics'
    },
    {
        icon: 'RiMessage2Line',
        label: 'Feedback',
        route: '/teacher/feedback',
        description: 'View student and peer feedback'
    }
];

// Logout functionality
export const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("teacherAuthenticated");
    sessionStorage.removeItem('teacherRedirectPath');

    // Dispatch storage event to notify other components
    window.dispatchEvent(new Event('storage'));

    // Navigate to login page
    window.location.href = '/teacher-login';
};

// Breadcrumb generation
export const generateBreadcrumb = (currentPage) => {
    const breadcrumbs = [
        { label: 'Teacher Dashboard', route: '/teacher-profile' }
    ];

    if (currentPage !== 'Overview') {
        breadcrumbs.push({ label: currentPage, route: null });
    }

    return breadcrumbs;
};

// URL parameter utilities
export const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    const result = {};

    for (const [key, value] of params) {
        result[key] = value;
    }

    return result;
};

export const setUrlParam = (key, value) => {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.replaceState(null, '', url);
};

export const removeUrlParam = (key) => {
    const url = new URL(window.location);
    url.searchParams.delete(key);
    window.history.replaceState(null, '', url);
};