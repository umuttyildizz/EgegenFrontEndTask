function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(c => c.classList.remove('active'));
    content.classList.add('active');
}