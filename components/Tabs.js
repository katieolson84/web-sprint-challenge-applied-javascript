// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topicsArr = document.querySelector('.topics'
);

function tabMaker(obj) {
const tab = document.createElement('div');
tab.textContent = `${obj.topics}`
tab.classList.add('tab');

console.log(tab)
// topicsArr.appendChild(tab);
 return tab
}

// ${topics}forEach(topic => {

axios.get(`https://lambda-times-api.herokuapp.com/topics`)

    .then(futureData => {
        const newtab = futureData.data.topics
        console.log(newtab)
        newtab.forEach(obj => {
            const tabtopic = tabMaker(obj)
            console.log(tabtopic)
            topicsArr.appendChild(tabtopic)
        })
       
    })
    .catch(drama => {
        console.log(drama);
    })

// })