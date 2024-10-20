
const courses = [
    {
        title: "The Future of Education",
        videoName: "The Future of Education - Yuval Noah Harari & Russell Brand",
        channelName: "Russell Brand",
        views: "1.5M views",
        videoId: "YNQDp3v-VGE",
        image: "https://img.youtube.com/vi/YNQDp3v-VGE/0.jpg"
    },
    {
        title: "Education in the Digital Age",
        videoName: "Education in the Digital Age | John Seely Brown",
        channelName: "Big Think",
        views: "145K views",
        videoId: "dqTTojTija8",
        image: "https://img.youtube.com/vi/dqTTojTija8/0.jpg"
    },
    {
        title: "Changing Education Paradigms",
        videoName: "RSA ANIMATE: Changing Education Paradigms",
        channelName: "RSA",
        views: "15M views",
        videoId: "XuVuoJDK_E8",
        image: "https://img.youtube.com/vi/XuVuoJDK_E8/0.jpg"
    },
    {
        title: "The Future of Learning",
        videoName: "The Future of Learning | Elon Musk",
        channelName: "Elon Musk Zone",
        views: "1.2M views",
        videoId: "gAa03r_Wgv0",
        image: "https://img.youtube.com/vi/gAa03r_Wgv0/0.jpg"
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