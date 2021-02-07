// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardContainer = document.querySelector('.cards-container');

function cardMaker(article) {
    // instantiating the elements
      const card = document.createElement('div');
      const headline = document.createElement('div');
      const author = document.createElement('div');
    
// inside the card
      const imgContainer = document.createElement('div');
        const authorImg = document.createElement('img')
      const authorName = document.createElement('span');

    // adding classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // add to html
      card.appendChild(headline);
      card.appendChild(author);
      author.appendChild(imgContainer);
      imgContainer.appendChild(authorImg);
      author.appendChild(authorName);
    
    // pulling data
      headline.textContent = `${article.headline}`
      authorImg.src = `${article.authorPhoto}`
      authorName.textContent = `By: ${article.authorName}`; 
    //   listener
      
    headline.addEventListener('click', function(event) {
        console.log('Clicked on Headline');
        console.log(article.headline);
      })

      return card
    }

    axios.get(`https://lambda-times-api.herokuapp.com/articles`)
        .then((futureData) => {
            const article = futureData.data.articles;
            // console.log(article)

            Object.keys(article).forEach(obj => {
                console.log(obj)
            article[obj].forEach(aObj => {
                cardContainer.appendChild(cardMaker(aObj))
                console.log(article)
            })
            });
        })
        .catch(drama => {
        console.log(drama)
        })