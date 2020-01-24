/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let responseObj;
promise = axios.get('https://api.github.com/users/5f1839842f2fb')
  .then (response => {
    responseObj = response;
  })
  .catch (error => {

  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
cardMaker = (response) => {
  const elementList = [
    { //0
      tag: 'div',
      attributes: {class: 'card'}
    }, 
    { //1
      tag: 'img',
      attributes: {src: response.data.avatar_url},
      parent: elementList[0]
    }, 
    { //2
      tag: 'div',
      attributes: {class: 'card-info'},
      parent: elementList[0]
    }, 
    { //3
      tag: 'h3',
      attributes: {class: 'name'},
      textContent: response.data.login,
      parent: elementList[2]
    },
    { //4
      tag: 'p',
      textContent: 'Location: '+response.data.location,
      parent: elementList[2]
    }, 
    { //5
      tag: 'p',
      textContent: 'Profile: ',
      parent: elementList[2]
    }, 
    { //6
      tag: 'a',
      attributes: {href: response.data.html_url},
      textContent: response.data.html_url,
      parent: elementList[5]
    }, 
    { //7
      tag: 'p',
      textContent: 'Followers: '+response.data.followers,
      parent: elementList[2]
    }, 
    { //8
      tag: 'p',
      textContent: 'Following: '+response.data.following,
      parent: elementList[2]
    },
    { //9
      tag: 'p',
      textContent: 'Bio: '+response.data.bio,
      parent: elementList[2]
    },]
  elementList.forEach((element, index) => {
    let node = elementList[index];
    node = document.createElement(node.tag)
  })
  console.log(elementList)
  /* elementList[0].appendChild(elementList[1])
  elementList[0].appendChild(elementList[2])
  elementList[2].appendChild(elementList[3])
  elementList[2].appendChild(elementList[4])
  elementList[2].appendChild(elementList[5])
  elementList[2].appendChild(elementList[6])
  elementList[2].appendChild(elementList[7])
  elementList[2].appendChild(elementList[8])
  elementList[2].appendChild(elementList[9]) */
  return elementList
}
elementList = cardMaker(responseObj)
const cardsDiv = document.querySelector('.cards').appendChild(elementList[0])
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
