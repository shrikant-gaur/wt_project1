const courses = [
    {
        title: "The Basics of Design in Business",
        videoName: "Business Design Fundamentals",
        channelName: "Sandeep Maheshwari",
        views: "5.4M views",
        videoId: "9EPTM91TBDU",
        image: "https://img.youtube.com/vi/9EPTM91TBDU/0.jpg"
    },
    {
        title: "Introduction to Strategic Management",
        videoName: "Strategic Management Crash Course",
        channelName: "Sandeep Maheshwari",
        views: "7.8M views",
        videoId: "j6Ule7GXaRs",
        image: "https://img.youtube.com/vi/j6Ule7GXaRs/0.jpg"
    },
    {
        title: "Advanced Business Analysis",
        videoName: "Comprehensive Business Analysis",
        channelName: "Sandeep Maheshwari",
        views: "6.9M views",
        videoId: "UuPt4RpV4Xc",
        image: "https://img.youtube.com/vi/UuPt4RpV4Xc/0.jpg"
    },
    {
        title: "Understanding Digital Marketing",
        videoName: "Digital Marketing Essentials",
        channelName: "Sandeep Maheshwari",
        views: "4.3M views",
        videoId: "AYL-6I7kc7w",
        image: "https://img.youtube.com/vi/AYL-6I7kc7w/0.jpg"
    }
];

function createCourseCards() {
    const container = document.getElementById('courseContainer');
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
                    <a href="https://www.youtube.com/watch?v=${course.videoId}" target="_blank">
                        <div class="thumbnail-container">
                            <img src="${course.image}" 
                                 alt="${course.title}">
                        </div>
                    </a>
                    <h3>${course.title}</h3>
                    <p>${course.videoName}</p>
                    <p>${course.channelName}</p>
                    <p class="views">${course.views}</p>
                `;
        container.appendChild(card);
    });
}
createCourseCards();