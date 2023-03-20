//Define an array of course objects, each containing details about a course.
const courses = [
    {
        // Path to the image of the course
        img: "images/cst8285.jpg",
        // Name of the course
        name: "Web Programming",
        // Course code
        code: "CST8285",
        // Level of the course
        level: 2,
        // Description of the course
        description: "Develop basic skills of web programming, website design and implementation. JavaScript, HTML5, \
        and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity."
    },
    {
        img: "images/cst8116.jpg",
        name: "Computer Programming",
        code: "CST8116", level: 1,
        description: "Possessing the fundamentals of logic, problem-solving and programming language structure."
    },
    {
        img: "images/cst8102.jpg",
        name: "Operating System Fundamentals (GNU/Linux)",
        code: "CST8102", level: 2,
        description: "Examine the details of operating system structures, process management, storage management, \
        installation, configuration, and administration based on the GNU/Linux operating system."
    },
    {
        img: "images/cst8101.jpg",
        name: "Computer Essentials",
        code: "CST8101", level: 1,
        description: "The essentials of computer software, hardware, and laptop management form the foundation for \
        building further technical programming skills."
    },
    {
        img: "images/cst8215.jpg",
        name: "Introduction to Database",
        code: "CST8215",
        level: 1,
        description: "The fundamentals of relational databases design using Entity Relation Diagrams (ERDs) and \
        creation using Structured Query Language (SQL)."
    },
    {
        img: "images/mat8001c.jpg",
        name: "Technical Mathematics for Computer Science",
        code: "MAT8001C",
        level: 1,
        description: "Investigate computer number systems in addition to Boolean algebra and logic to help solve \
        problems involving computer systems."
    },
    {
        img: "images/enl1813t.jpg",
        name: "Communications I",
        code: "ENL1813T",
        level: 1,
        description: "Develop and strengthen communication skills that contribute to success in both educational \
        and workplace environments."
    },
    {
        img: "images/cst8300.jpg",
        name: "Achieving Success in Changing Environments",
        code: "CST8300",
        level: 1,
        description: "Explore the possibilities ahead, assess aptitudes and strengths, and apply critical thinking \
        and decision-making tools to help resolve some important issues."
    },
    {
        img: "images/cst8284.jpg",
        name: "Object Oriented Programming (Java)",
        code: "CST8284",
        level: 2,
        description: "Explore the basics of data structures and algorithms as well as basic Graphical User Interface \
        (GUI) programming."
    },
    {
        img: "images/cst2355.jpg",
        name: "Database Systems",
        code: "CST2355",
        level: 2,
        description: "Obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts \
        and programming with Oracle's PL/SQL blocks."
    },
    {
        img: "images/enl2019t.jpg",
        name: "Technical Communication for Engineering Technologies",
        code: "ENL2019T",
        level: 2,
        description: "Foster independent and collaborative critical thinking, research, writing, visual communication \
        and presentation skills related to technical topics."
    },
    {
        img: "images/gep1001.jpg",
        name: "Cooperative Education Readiness",
        code: "GEP1001",
        level: 2,
        description: "Students are guided through a series of activities that prepare them to conduct a professional \
        job search and succeed in the workplace."
    }
];

/* 
Removes the active class from all elements with the button class and adds the active class to the clicked element.
Indicates which button is currently active.
*/
function toggleBtn(obj) {
    // Gets all elements with the button class
    const btns = document.getElementsByClassName("button");
    // Removes the active class from all buttons
    for (let btn of btns) {
        btn.classList.remove("active");
        // If the button is the clicked button, adds the active class
        if (btn === obj)
            obj.classList.add("active");
    }
}

/*
Calls the listCourses() function with the courses array to display all courses
when the webpage finishes loading.
*/
window.onload = function () {
    listCourses(courses);
};

/*
Calls the listCourses() function with the original courses array to display all courses.
Toggles the active class of the clicked button.
*/
function showCourses(obj) {
    // Calls the listCourses() function with the original courses array
    listCourses(courses);
    // Toggles the active class of the clicked button
    toggleBtn(obj);
}

/*
Creates HTML elements for each course in the courses array and appends them to the element with the ID course-c.
Displays the list of courses on the webpage.
*/
function listCourses(courses) {
    const courseContainer = document.getElementById("course-c"); // Gets the element with the ID course-c
    let courseDetails = ""; // Declares a string type variable to store the details of courses 
    // Loop through each course in the array and create an HTML element for it
    for (let course of courses) {
        courseDetails += '<div class="course"> \
                    <img src="'+ course.img + '" alt="' + course.name + '"> \
                    <h2>'+ course.name + '</h2> \
                    <p>'+ course.code + '&nbsp; Level: ' + course.level + '</p> \
                    <p>'+ course.description + '</p> \
                    </div>';
    }
    // Adds the HTML elements for the courses to the course container
    courseContainer.innerHTML = courseDetails;
}

/*
Takes a level argument and create a copy of the courses array with only the courses that match the specified level.
Then calls the listCourses() function with the filtered array and toggles the active class of the clicked button.
*/
function filterCourses(obj, level) {
    // Creates a copy of the courses array with only the courses that match the specified level
    const courseCopy = courses.filter(function (c) { return c.level === level; });
    // Displays the filtered courses on the webpage
    listCourses(courseCopy);
    // Toggles the active class of the clicked button
    toggleBtn(obj);
}

/*
Creates a copy of the courses array and sorts it by course level in either ascending or descending order,
and toggles the window.asc variable to keep track of the sorting order.
Then calls the listCourses() function with the sorted array and toggles the active class of the clicked button.
*/
function sortCourses(obj) {
    // Creates a copy of the courses array using spread syntax
    const courseCopy = [...courses];
    // Sorts the copy of courses array based on level
    courseCopy.sort(function (c1, c2) { return window.asc ? c1.level - c2.level : c2.level - c1.level });
    // Toggles the sorting order by reversing the value of window.asc
    window.asc = !window.asc;
    // Calls the listCourses() function with the sorted array
    listCourses(courseCopy);
    // Toggles the active class of the clicked button
    toggleBtn(obj);
}

/*
Keeps track of the sorting order when the "sortCourses" function is called.
When the function is called and the courses are sorted, the value of "asc" is toggled so that the next 
sorting will be in descending order.
*/
window.asc = true;

/*
Retrieves the value of the search input field, creates a copy of the courses array with only the courses that
contain the search term in their name, and then calls the listCourses() function with the filtered array. 
Toggles the active class of the clicked button.
*/
function findCourses(obj) {
    // Gets the value of the search input field
    let name = document.getElementById("search").value;
    // Creates a copy of the courses array with only the courses that contain the search term in their name
    const courseCopy = courses.filter(function (c) { return c.name.toLowerCase().match(name.toLowerCase()); });
    // Calls the listCourses() function with the filtered array
    listCourses(courseCopy);
    // Toggles the active class of the clicked button
    toggleBtn(obj);
}

// Gets the HTML element with the ID top
let mybutton = document.getElementById("top");

// Calls the scrollFunction() function when the webpage is scrolled.
window.onscroll = function () { scrollFunction() };

/*
Checks the current scroll position of the webpage and displays or hides the "top" button accordingly.
If the scroll position is greater than 40 pixels from the top of the page, the button is displayed, 
otherwise it is hidden.
*/
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/*
scrolls the webpage to the top by setting the scroll position of both the document.body and 
document.documentElement elements to 0 when clicked.
*/
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}