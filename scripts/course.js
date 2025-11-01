// 1. The Course List Array (Required Data Structure)
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// 2. Function to render course cards and credit total to the DOM
function renderCourseCards(courseList) {
    const container = document.getElementById('course-cards-container');
    const creditTotalElement = document.getElementById('credit-total');

    // Clear the container before adding new cards
    container.innerHTML = '';

    // CALCULATE CREDITS: Use the array reduce method
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditTotalElement.textContent = totalCredits;

    // Generate HTML for each course
    courseList.forEach(course => {
        // Apply 'completed-course' class if the course is finished
        const completedClass = course.completed ? 'completed-course' : '';

        // Create the card element
        const card = document.createElement('div');
        // Add the required classes
        card.className = `course-card ${completedClass}`;

        // Structure the content as required
        card.innerHTML = `
            <p class="course-subject">${course.subject} ${course.number}</p>
            <p class="course-title">${course.title}</p>
            <p class="course-credits">${course.credits} Credits</p>
        `;

        container.appendChild(card);
    });
}

// 3. Function to handle filtering (using the array filter method) and rendering
function filterCourses(subject = 'ALL') {
    let filteredList = [];

    if (subject === 'ALL') {
        filteredList = courses;
    } else {
        // Filter the array: only keep courses where the subject matches the button
        filteredList = courses.filter(course => course.subject === subject);
    }

    // Call the rendering function with the (newly filtered) list
    renderCourseCards(filteredList);
}

// 4. Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial Load: Display all courses when the page loads
    filterCourses('ALL');

    // Add event listeners to the filter buttons (make sure these IDs match your HTML)
    document.getElementById('filter-all').addEventListener('click', () => {
        filterCourses('ALL');
    });

    document.getElementById('filter-wdd').addEventListener('click', () => {
        filterCourses('WDD');
    });

    document.getElementById('filter-cse').addEventListener('click', () => {
        filterCourses('CSE');
    });
});