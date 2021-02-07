// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container')

function Header() {
    // create elements
    const header = document.createElement('div');
        header.classList.add('header');
    const dateSpan = document.createElement('span');
        dateSpan.classList.add('date');
    const mainTitle = document.createElement('h1');
    const temp = document.createElement('span');
        temp.classList.add('temp');
    
    // append to HTML
    header.appendChild(dateSpan);
    header.appendChild(mainTitle);
    header.appendChild(temp);

    // assign data to elements
    dateSpan.textContent = "MARCH 28, 2020";
    mainTitle.textContent = "Lambda Times";
    temp.textContent = "98°";

    return header;
    
}
    headerContainer.appendChild(Header()) 






