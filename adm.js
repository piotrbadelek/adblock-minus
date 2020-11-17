let element;
elements = document.querySelectorAll(".flex.category.hover-pointer")
for (let i = 0; i < elements.length; i++) {
    if (!elements[i].onclick) continue;
    if (elements[i].onclick.toString().includes("window.open")) element = elements[i];
};
element.style.backgroundImage = 'none';
element.style.display = 'none';
document.addEventListener("turbolinks:load", function () {
    let element;
    elements = document.querySelectorAll(".flex.category.hover-pointer")
    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].onclick) continue;
        if (elements[i].onclick.toString().includes("window.open")) element = elements[i];
    };
    element.style.backgroundImage = 'none';
    element.style.display = 'none';
}) 
