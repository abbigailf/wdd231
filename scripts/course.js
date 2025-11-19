// 1. The Course List Array (Required Data Structure)
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML','CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML','CSS','JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML','CSS','JavaScript'],
        completed: false
    }
];

// 2. Select modal element
const courseDetails = document.getElementById('course-details');

// 3. Render course cards
function renderCourseCards(courseList) {
    const container = document.getElementById('course-cards-container');
    const creditTotalElement = document.getElementById('credit-total');

    container.innerHTML = '';
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditTotalElement.textContent = totalCredits;

    courseList.forEach(course => {
        const completedClass = course.completed ? 'completed-course' : '';
        const card = document.createElement('div');
        card.className = `course-card ${completedClass}`;
        card.innerHTML = `
            <p class="course-subject">${course.subject} ${course.number}</p>
            <p class="course-title">${course.title}</p>
            <p class="course-credits">${course.credits} Credits</p>
        `;

        // Open modal on click
        card.addEventListener('click', () => displayCourseDetails(course));

        container.appendChild(card);
    });
}

// 4. Filter courses
function filterCourses(subject = 'ALL') {
    const filteredList = subject === 'ALL' ? courses : courses.filter(course => course.subject === subject);
    renderCourseCards(filteredList);
}

// 5. Display modal
function displayCourseDetails(course) {
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    document.getElementById('closeModal').addEventListener('click', () => courseDetails.close());

    courseDetails.addEventListener('click', event => {
        const rect = courseDetails.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right ||
            event.clientY < rect.top || event.clientY > rect.bottom) {
            courseDetails.close();
        }
    });
}

// 6. Initialize
document.addEventListener('DOMContentLoaded', () => {
    filterCourses('ALL');
    document.getElementById('filter-all').addEventListener('click', () => filterCourses('ALL'));
    document.getElementById('filter-wdd').addEventListener('click', () => filterCourses('WDD'));
    document.getElementById('filter-cse').addEventListener('click', () => filterCourses('CSE'));
});