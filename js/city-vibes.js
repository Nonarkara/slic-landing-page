/**
 * SLIC Vibes - Dynamic City News Generator
 * Generates synthetic "City Ops" news items based on the user's provided logic.
 * This ensures a high-quality, "box-like" dashboard appearance with icons.
 */

document.addEventListener('DOMContentLoaded', () => {
    generateCityNews();
});

function generateCityNews() {
    const feedContainer = document.getElementById('gdelt-feed');
    if (!feedContainer) return;

    // Synthetic Data Generation based on User's "Dynamic City News Generator" Schema
    // We generate 8 items to fill the 2x4 grid.

    const newsItems = [
        {
            icon: '📊',
            title: 'New Week: 142 Reports Received',
            summary: 'System accepted new issues aligned with city goals.',
            source: 'System',
            time: 'Just now',
            color: '#3182ce' // Blue
        },
        {
            icon: '📈',
            title: 'Top Issue: Traffic Congestion',
            summary: 'AI recommends signal retiming at 3 major intersections.',
            source: 'Analytics',
            time: '2h ago',
            color: '#e53e3e' // Red
        },
        {
            icon: '✅',
            title: 'Resolution Success: 98%',
            summary: 'Community feedback positive on recent park renovations.',
            source: 'City Ops',
            time: 'Yesterday',
            color: '#38a169' // Green
        },
        {
            icon: '⚠️',
            title: 'Aging Alert: Case #4892',
            summary: 'Pending for 49 hours. Escalated to rapid response team.',
            source: 'Alert System',
            time: '4h ago',
            color: '#dd6b20' // Orange
        },
        {
            icon: '🌱',
            title: 'PM2.5 Levels Normal',
            summary: 'Air quality index stays below 50 in residential zones.',
            source: 'Environment',
            time: '5h ago',
            color: '#38a169'
        },
        {
            icon: '🏗️',
            title: 'Infrastructure Upgrade',
            summary: 'Smart lighting installation 60% complete in District 4.',
            source: 'Public Works',
            time: '1d ago',
            color: '#3182ce'
        },
        {
            icon: '👥',
            title: 'Citizen Engagement Up',
            summary: '2,500 active users on the new city app this week.',
            source: 'Community',
            time: '2d ago',
            color: '#805ad5' // Purple
        },
        {
            icon: '🏛️',
            title: 'Policy Update Approved',
            summary: 'New zoning regulations for mixed-use areas published.',
            source: 'Governance',
            time: '3d ago',
            color: '#718096' // Gray
        }
    ];

    renderNewsCards(newsItems, feedContainer);
}

function renderNewsCards(articles, container) {
    container.innerHTML = '';

    articles.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        // Inline styles to ensure "Box-like" appearance regardless of external CSS deviations
        card.style.cssText = `
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 100%;
            transition: all 0.2s ease;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            position: relative;
            overflow: hidden;
        `;

        // Add hover effect via JS event listeners for guaranteed interactivity
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
        });

        card.innerHTML = `
            <!-- Header: Icon & Time -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="font-size: 2.5rem; line-height: 1; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
                    ${item.icon}
                </div>
                <div style="font-size: 0.7rem; font-weight: 600; color: #718096; background: #f7fafc; padding: 0.25rem 0.75rem; border-radius: 20px; border: 1px solid #edf2f7; letter-spacing: 0.02em;">
                    ${item.time}
                </div>
            </div>
            
            <!-- Content -->
            <div style="flex-grow: 1;">
                <h4 style="font-size: 1.1rem; margin: 0 0 0.5rem 0; line-height: 1.3; font-weight: 700; color: #2d3748;">
                    ${item.title}
                </h4>
                <p style="font-size: 0.9rem; color: #718096; margin: 0; line-height: 1.5;">
                    ${item.summary}
                </p>
            </div>
            
            <!-- Footer: Source -->
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px dashed #e2e8f0; display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; color: ${item.color}; text-transform: uppercase; letter-spacing: 0.05em;">
                <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: ${item.color};"></span>
                ${item.source}
            </div>
            
            <!-- Decorative colored header bar -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background-color: ${item.color};"></div>
        `;

        container.appendChild(card);
    });
}
