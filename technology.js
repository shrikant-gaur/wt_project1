const courses = [
    {
        title: "Full Stack Web Development Course",
        videoName: "Full Stack Web Development Course for Beginners",
        channelName: "edureka!",
        views: "1.1M views",
        videoId: "BA_ZcBYWCDY",
        image: "https://img.youtube.com/vi/BA_ZcBYWCDY/0.jpg"
    },
    {
        title: "Data Science Full Course",
        videoName: "Data Science Full Course - Learn Data Science in 10 Hours",
        channelName: "Edureka",
        views: "2.8M views",
        videoId: "KcecJfxbd-4",
        image: "https://img.youtube.com/vi/KcecJfxbd-4/0.jpg"
    },
    {
        title: "Machine Learning Full Course",
        videoName: "Machine Learning Full Course | Learn Machine Learning",
        channelName: "Edureka",
        views: "2.1M views",
        videoId: "ukzFI9rgwfU",
        image: "https://img.youtube.com/vi/ukzFI9rgwfU/0.jpg"
    },
    {
        title: "Artificial Intelligence Full Course",
        videoName: "Artificial Intelligence Full Course | Artificial Intelligence Tutorial",
        channelName: "Edureka",
        views: "1.5M views",
        videoId: "G_yaHg-PQaI",
        image: "https://img.youtube.com/vi/G_yaHg-PQaI/0.jpg"
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