/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
promise = axios.get('https://api.github.com/users/5f1839842f2fb')
  .then (response => {
    cardMaker(response)
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
  console.log(response);
  let parent = document.querySelector('.cards');
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  let pfpImg = document.createElement('img');
  pfpImg.setAttribute('src', response.data.avatar_url);
  let cardinfoDiv = document.createElement('div');
  cardinfoDiv.classList.add('card-info');
  let nameH3 = document.createElement('h3');
  nameH3.classList.add('name');
  nameH3.textContent = response.data.name;
  let usernameP = document.createElement('p');
  usernameP.classList.add('username');
  usernameP.textContent = response.data.login;
  let locationP =  document.createElement('p');
  locationP.textContent = 'Location: '+response.data.location;
  let profileP = document.createElement('p');
  profileP.textContent = 'Profile: ';
  let pageA = document.createElement('a');
  pageA.setAttribute('href', response.data.html_url);
  pageA.textContent = response.data.html_url;
  let followersP = document.createElement('p');
  followersP.textContent = 'Followers: ' + response.data.followers;
  let followingP = document.createElement('p');
  followingP.textContent = 'Following: ' + response.data.following;
  let bioP = document.createElement('p');
  bioP.textContent = 'Bio: ' + response.data.bio;
  
  parent.appendChild(cardDiv)
  cardDiv.appendChild(pfpImg)
  cardDiv.appendChild(cardinfoDiv)
  cardinfoDiv.appendChild(nameH3)
  cardinfoDiv.appendChild(usernameP)
  cardinfoDiv.appendChild(locationP)
  cardinfoDiv.appendChild(profileP)
  profileP.appendChild(pageA)
  cardinfoDiv.appendChild(followersP)
  cardinfoDiv.appendChild(followingP)
  cardinfoDiv.appendChild(bioP)
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
