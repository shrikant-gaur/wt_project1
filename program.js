// Course data with actual YouTube video IDs
const courses = [
    {
        title: "Python for Beginners",
        videoName: "Learn Python - Full Course for Beginners",
        channelName: "freeCodeCamp.org",
        views: "29M views",
        videoId: "rfscVS0vtbw"
    },
    {
        title: "JavaScript Fundamentals",
        videoName: "JavaScript Programming - Full Course",
        channelName: "freeCodeCamp.org",
        views: "3.8M views",
        videoId: "jS4aFq5-91M"
    },
    {
        title: "Java Masterclass",
        videoName: "Java Tutorial for Beginners",
        channelName: "Programming with Mosh",
        views: "5.2M views",
        videoId: "eIrMbAQSU34"
    },
    {
        title: "C++ Crash Course",
        videoName: "C++ Programming Course - Beginner to Advanced",
        channelName: "freeCodeCamp.org",
        views: "2.7M views",
        videoId: "8jLOx1hD3_o"
    },
    {
        title: "Ruby on Rails Tutorial",
        videoName: "Ruby on Rails Crash Course",
        channelName: "Traversy Media",
        views: "408K views",
        videoId: "B3Fbujmgo60"
    },
    {
        title: "Go Programming Language",
        videoName: "Learn Go Programming - Golang Tutorial for Beginners",
        channelName: "freeCodeCamp.org",
        views: "1.2M views",
        videoId: "YS4e4q9oBaU"
    },
    {
        title: "Swift for iOS Development",
        videoName: "Swift Programming Tutorial for Beginners",
        channelName: "CodeWithChris",
        views: "897K views",
        videoId: "Ulp1Kimblg0"
    },
    {
        title: "Rust Programming Language",
        videoName: "Rust Programming Course for Beginners",
        channelName: "freeCodeCamp.org",
        views: "458K views",
        videoId: "MsocPEZBd-M"
    }
];

// Function to create course cards
function createCourseCards() {
    const container = document.getElementById('courseContainer');
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${course.videoId}" target="_blank">
                <img src="https://img.youtube.com/vi/${course.videoId}/0.jpg" alt="${course.title}">
            </a>
            <h3>${course.title}</h3>
            <p>${course.videoName}</p>
            <p>${course.channelName}</p>
            <p class="views">${course.views}</p>
        `;
        container.appendChild(card);
    });
}

// Call the function to create course cards
createCourseCards();