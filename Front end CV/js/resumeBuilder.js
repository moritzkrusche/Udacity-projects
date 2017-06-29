//************************************** Content Management ************************************************************
// Content goes here, can be expanded, or added within existing system
var bio = {
    "name": "Moritz Krusche",
    "role": "Graduate Student",
    "contacts": {
        "email": "<a href='mailto:moritzkrusche@gmail.com'>moritzkrusche@gmail.com</a>",
        "github": "<a href='https://github.com/moritzkrusche'>moritzkrusche</a>",
        "twitter": "<a href='https://twitter.com/MoritzKrusche'>@moritzkrusche</a>",
        "LinkedIn": "<a href='https://www.linkedin.com/in/moritz-krusche-037201b1/'>Moritz Krusche</a>",
        "location": "<a href='https://www.google.com/maps/dir//London,+United+Kingdom'>London, United Kingdom</a>"
    },
    "picture": "images/moritz.png",
    "welcomeMessage": "I'm currently a graduate student in cognitive science at University College London, one of the " +
    "world's leading universities. I am mainly interested in computational cognitive science using online experiments " +
    "and real-world large-scale datasets over laboratory experiments. From October this year, I will pursue a PhD at " +
    "Warwick Business School, the #1 business school in the UK according to the Economist.",
    "skills": ["Research", "Python", "R", "SPSS", "Javascript", "HTML/CSS", "Amazon Web Services"]
};

var work = {
    "jobs": [{
        "employer": "Froeschen Consulting",
        "title": "Internship consulting",
        "location": "Cologne, Germany",
        "datesWorked": "July - August 2016",
        "description": "In this internship, I learned a lot about modern proprietary e-learning tools, as the company " +
        "I interned at specialises in outsourcing professional education courses for insurance and financial services firms. " +
        "I had the privelege of being able to design multiple choice and short answer quizzes that were eventually implemented " +
        "when the course was pushed online. For this purpose, I made use of modern test design practices that I learned " +
        "during my BSc degree, in order to balance question difficulty o the desired knowledge level."
    },
        {
            "employer": "Maastricht University",
            "title": "Tutor",
            "location": "Maastricht, The Netherlands",
            "datesWorked": "October 2014 - April 2017",
            "description": "Maastricht University employs a unique problem-based learning system, whereby students learn " +
            "relatively independently in small groups of 15 or less. These groups are accompanied by a tutor, who could be " +
            "a member of academic staff, or a student of a higher year or degree. Exceptionally, I already tutored in my 2nd year, " +
            "and for the most challenging course of the curriculum, Statistics I, which has a pass rate of around 50% in the first " +
            "exam. I prepared students through both exercises and mini-lectures, and 8 out of 11 in my group passed. At later stages, " +
            "I also tutored other introductory courses, such as Developmental Psychology, and these required me to take back seat and " +
            "observe and facilitate the group learning effort."
        },
        {
            "employer": "Allianz SE",
            "title": "Internship recruiting",
            "location": "Cologne, Germany",
            "datesWorked": "August 2014",
            "description": "During a 4-week internship, I was involved in all sorts of stages of recruitment and selection " +
            "processes for insurance sales. During my internships I got to know how Allianz SE, one of the most successful " +
            "insurance companies worldwide, keeps turnover relatively low by identifying applicants particularly suitable " +
            "for the required position. I helped organise two assessment centres, where I also played various forms of " +
            "difficult customers, and also provided administrative support."
        },
        {
            "employer": "Baker & Pommeroy",
            "title": "Customer Service",
            "location": "Cologne, Germany",
            "datesWorked": "April 2013 - May 2014",
            "description": "I worked in various customer service roles, including hospitality, logistics and cleaning. " +
            "While in all likelihood not useful for my further career, having had this experience is something I " +
            "consider incredibly valuable, as it allows me to connect with a more hands-on approach to work, and to " +
            "people from all sort of backgrounds."
        }
    ]
};

var education = {
    "schools": [

        {
            "name": "University College London",
            "datesAttended": "2016 - 2016",
            "location": "London, United Kingdom",
            "degree": "MSc Cognitive Science",
            "majors": "",
            "Courses": "Principles of Cognitions, Cognitive Science, Programming in Python, Neural Computations, " +
            "Knowledge Learning and Inference, Business Psychology",
            "Societies": "UCLU Debating Society, UCLU Data Science Society, UCLU Tech Society",
            "url": "https://www.ucl.ac.uk"
        },
        {
            "name": "University of Sydney",
            "datesAttended": "2015 - 2015",
            "location": "Sydney, New South Wales, Australia",
            "degree": "year abroad",
            "majors": "",
            "Courses": "Applications of Psychological Science, Intermediate Microeconomics, Custom Research Project",
            "Societies": "USU Debating, UNSW Underwater Club",
            "url": "https://sydney.edu.au/"
        },
        {
            "name": "Maastricht University",
            "datesAttended": "2013 - 2016",
            "location": "Maastricht, The Netherlands",
            "degree": "B.Sc. Psychology",
            "majors": "",
            "Courses": "Research Methods, Statistics 1, 2, 3, " +
            "Complex Cognition, Human & Machine, Research Practical, Cognitive Neuroscience, all core Psychology & 6 Skills courses",
            "Societies": "Rhetorica Maastricht debating society, Student Council Faculty Psychology & Neuroscience",
            "url": "https://www.maastrichtuniversity.nl"
        }
    ],
    "onlineCourses": [{
        "school": "Chris deLeon via Udemy",
        "title": "How to Program Games: Tile Classics in JS for HTML5 Canvas",
        "completed": "May 2017",
        "url": "https://www.udemy.com/how-to-program-games/"
    },
        {
            "school": "Chris deLeon via Udemy",
            "title": "Code Your First Game: Arcade Classic in JavaScript on Canvas",
            "completed": "May 2017",
            "url": "https://www.udemy.com/code-your-first-game/"
        },
        {
            "school": "Codecademy",
            "title": "JavaScript",
            "completed": "May 2017",
            "url": "https://www.codecademy.com/learn/javascript"
        },
        {
            "school": "University of Michigan via Coursera",
            "title": "Intro to HTML and CSS",
            "completed": "October 2016",
            "url": "https://www.coursera.org/learn/python-data"
        },
        {
            "school": "University of Michigan via Coursera",
            "title": "Programming for Everybody (Getting Started with Python)",
            "completed": "October 2016",
            "url": "https://www.coursera.org/learn/python"
        }
    ]
};



var projects = {
    "projects": [{
        "title": "Exploration vs. exploration decision making game on HTML5 Canvas",
        "datesWorked": "May - June 2017",
        "description": "Features: Created an online game using HTML5 Canvas as part of my final research " +
        "project at UCL. Participants explore an ressource patches on a . Maps are dynamically generated from " +
        "a Beta-distribution. At a later stage, there are also custom generated maps. Data is send and received " +
        "via a backend through Firebase. Features object oriented programming practices in JavaScript, " +
        "animations, sprites and rendering from tilesheets. While I took inspiration from the excellent Udemy " +
        "course by Chris deLeon (which doesn't use OOP), I built mostly from scratch; ca. 1500 source lines of " +
        "JavaScript.",
        "images": ["images/decision-game.png"],
        "url": "https://moritzkrusche.github.io/CoDeS-Project/"
    },
        {
            "title": "Exploration vs. exploitation decision making game in Python via PyQt",
            "datesWorked": "March 2017",
            "description": "For my final project in a Python programming course at UCL, I designed a complete experiment " +
            "in PyQt. There is a consent form, a demographics page including a vallidation script (you must tick all boxes, " +
            "be at least 18 years old etc.). The actual experiment takes place over three levels where participants control " +
            "a stone-age hunter gatherer with the aim to survive. They do so through exploiting resource patches, being back " +
            "at their cave before nightfall and generally avoid being eaten. All behaviour and result are written to a .csv file; " +
            "ca. 800 source lines of Python.",
            "images": ["images/stone-age.png"],
            "url": "https://github.com/moritzkrusche/Hunter-gatherer-experiment/"
        }
    ]
};

// this function pushes all content to the web page. It only does so when called()
// var = function() is an "expression" in Javascript. Does pretty much the same as function xyz, but sometimes more readable
var pushMeOnline = function() {

    // inside there are more functions, but this time they automatically execute through the (function)(); notation
    (function createHeader() {
        // first the bio; create two mini-arrays, one goes on top of the header, the other below
        var aboveHeaderLine = [];
        var belowHeaderLine = [];
        // fill the array
        aboveHeaderLine.push(HTMLheaderName.replace("%data%", bio.name));
        aboveHeaderLine.push(HTMLheaderRole.replace("%data%", bio.role));

        belowHeaderLine.push(HTMLbioPic.replace("%data%", bio.picture));
        belowHeaderLine.push(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

        // and put it in front (prepend) / behind (append) the space holder.
        $("#header").prepend(aboveHeaderLine);
        $("#header").append(belowHeaderLine);

        // same with contacts (= i.e. how can you reach me)
        var showContactInfo = [];
        showContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        showContactInfo.push(HTMLlinkedin.replace("%data%", bio.contacts.LinkedIn));
        showContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        showContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        showContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        // but only push if I am reacheable (maybe I cut ties one day, who knows?)
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            // this is a standard for-loop to loop through my skills and append (put after bio...)
            for (var skill = 0; skill < bio.skills.length; skill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }

        // another for-loop
        for (var contact = 0; contact < showContactInfo.length; contact++) {
            $("#topContacts").append(showContactInfo[contact]);
            $("#footerContacts").append(showContactInfo[contact]);
        }
    })();

    // let's show my work experience
    (function displayWork() {

        // ... but only if I have any
        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            // we collect and deliver this information for every job position that I have held
            for (var job = 0; job < work.jobs.length; job++) {

                var showWork = [];

                // concatenate in one much nicer line
                var showEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var showWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                showWork.push(showEmployer + showWorkTitle);
                showWork.push(HTMLworkLocation.replace("%data%", work.jobs[job].location));
                showWork.push(HTMLworkDates.replace("%data%", work.jobs[job].datesWorked));
                showWork.push(HTMLworkDescription.replace("%data%", work.jobs[job].description));

                // and for every piece of information within that position
                for (var each = 0; each < showWork.length; each++) {
                    $(".work-entry:last").append(showWork[each])
                }
            }
        }
    })();

    // projects are cool. Mine are even more so.
    (function projectsDisplay() {
        if (projects.projects.length > 0) {
            for (var project = 0; project < projects.projects.length; project++) {

                $("#projects").append(HTMLprojectStart);
                var showProjects = [];

                showProjects.push(HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url));
                showProjects.push(HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked));
                showProjects.push(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

                $(".project-entry:last").append(showProjects);

                for (var img = 0; img < projects.projects[project].images.length; img++) {
                    var showProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                    $(".project-entry:last").append(showProjectImage);
                }
            }
        }
    })();

    // This is both university education, as well as online courses
    (function educationDisplay() {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var school = 0; school < education.schools.length; school++) {

                $("#education").append(HTMLschoolStart);
                var showSchool = [];

                // again, I concatenate to make the code nicer& more understandable
                var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
                var degreeType = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                showSchool.push(schoolName + degreeType);
                showSchool.push(HTMLschoolDates.replace("%data%", education.schools[school].datesAttended));
                showSchool.push(HTMLschoolLocation.replace("%data%", education.schools[school].location));
                showSchool.push(HTMLschoolCourses.replace("%data%", education.schools[school].Courses));
                showSchool.push(HTMLschoolSocieties.replace("%data%", education.schools[school].Societies));

                $(".education-entry:last").append(showSchool);

            }

            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var course = 0; course < education.onlineCourses.length; course++) {

                    $("#education").append(HTMLschoolStart);
                    var showOnline = [];

                    var onlineTitle = (HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url));
                    var onlineSchool = (HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
                    showOnline.push(onlineTitle + onlineSchool);
                    showOnline.push(HTMLonlineDates.replace("%data%", education.onlineCourses[course].completed));
                    showOnline.push(HTMLonlineURL.replace("%data%", "").replace("#", ""));

                    $(".education-entry:last").append(showOnline);
                }
            }
        }
    })(); // end of last automatic function
}; // end of content management function

// here we call the function to push all Info bout me online
pushMeOnline();

// and this calls our nice mao
$("#mapDiv").append(googleMap);