const courses = [
    {
        title: "Business Strategies with Sandeep Maheshwari",
        videoName: "Business Strategies Simplified",
        channelName: "Sandeep Maheshwari",
        views: "4.5M views",
        videoId: "tQ44obdMdyQ",
        image: "https://img.youtube.com/vi/tQ44obdMdyQ/0.jpg"
    },
    {
        title: "Achieving Business Success",
        videoName: "Sandeep Maheshwari on Business Growth",
        channelName: "Sandeep Maheshwari",
        views: "3.8M views",
        videoId: "uv87Sa8JP20",
        image: "https://img.youtube.com/vi/uv87Sa8JP20/0.jpg"
    },
    {
        title: "Vivek Bindra's Business Insights",
        videoName: "Keys to Business Success",
        channelName: "Vivek Bindra",
        views: "2.1M views",
        videoId: "bSe0P30Rek0",
        image: "https://img.youtube.com/vi/bSe0P30Rek0/0.jpg"
    },
    {
        title: "Business Crash Course",
        videoName: "Quick Guide to Business Fundamentals",
        channelName: "Crash Course",
        views: "5M views",
        videoId: "iywvlUk2Wfg",
        image: "https://img.youtube.com/vi/iywvlUk2Wfg/0.jpg"
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