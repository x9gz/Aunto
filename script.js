// Toggle Dark/Light Mode
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Collapsible Sections
const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Fade in animations for elements
const fadeIns = document.querySelectorAll('.feature-item, .command-item, blockquote');
fadeIns.forEach((element, index) => {
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.transition = 'opacity 1s ease-in';
        element.style.opacity = 1;
    }, index * 200); // Delay for each element
});

/* Styles for the Contact Section */
#contact {
    background-color: rgba(30, 30, 30, 0.9);
    padding: 60px 20px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    text-align: center;
    margin: 20px;
}

#contact h2 {
    color: #00bfff; /* Bright blue accent */
}

.socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; /* Space between social buttons */
}

.socials a {
    width: 200px; /* Fixed width for buttons */
}
