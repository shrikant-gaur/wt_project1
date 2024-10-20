const courses = [
    {
        title: "Language Speaking Course 1",
        videoName: "Basic Language Speaking - Course 1",
        channelName: "Language Learning Hub",
        views: "230K views",
        videoId: "3NMXtItuwtU",
        image: "https://img.youtube.com/vi/3NMXtItuwtU/0.jpg"
    },
    {
        title: "Language Speaking Course 2",
        videoName: "Intermediate Language Speaking - Course 2",
        channelName: "Learn and Speak",
        views: "510K views",
        videoId: "hI4xQWUU-lw",
        image: "https://img.youtube.com/vi/hI4xQWUU-lw/0.jpg"
    },
    {
        title: "Language Speaking Course 3",
        videoName: "Advanced Language Speaking - Course 3",
        channelName: "Advanced Speaking Channel",
        views: "325K views",
        videoId: "6rluZpMi1gc",
        image: "https://img.youtube.com/vi/6rluZpMi1gc/0.jpg"
    },
    {
        title: "Language Speaking Course 4",
        videoName: "Expert Language Speaking - Course 4",
        channelName: "Speak Like a Pro",
        views: "740K views",
        videoId: "9dE2AIWhjEw",
        image: "https://img.youtube.com/vi/9dE2AIWhjEw/0.jpg"
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
                    <img src="${course.image}" alt="${course.title}">
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