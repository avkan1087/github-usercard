/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/avkan1087")
  .then(response => followersCard(response.data))



/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards');


/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

let followersData = axios.get("https://api.github.com/users/avkan1087/followers")
.then(response => {
  const followersArray =response.data;
  followersArray.forEach((follower)=> {
    axios
      .get(`https://api.github.com/users/${follower.login}`)
      .then(response => followersCard(response.data))
  })

});


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

function followersCard(obj) {

const card = document.createElement('div'),
      img1 = document.createElement('img'),
      cardInfo1 = document.createElement('div'),
      name1 = document.createElement('h3'),
      userName1 = document.createElement('p'),
      location1 = document.createElement('p'),
      profile1 = document.createElement('p'),
      address1 = document.createElement('a'),
      followers1 = document.createElement('p'),
      following1 = document.createElement('p'),
      bio1 = document.createElement('p');

      card.append(img1);
      card.append(cardInfo1);
      cardInfo1.append(name1);
      cardInfo1.append(userName1);
      cardInfo1.append(location1);
      cardInfo1.append(profile1);
      cardInfo1.append(followers1);
      cardInfo1.append(following1);
      cardInfo1.append(bio1);
      profile1.append(address1);

      cards.append(card);

      card.classList.add('card');
      cardInfo1.classList.add('card-info');
      name1.classList.add('name');
      userName1.classList.add('username');



      img1.src = obj.avatar_url;

      name1.textContent = obj.name ;
      userName1.textContent = obj.login;
      location1.textContent = `Location: ${obj.location}`;
      profile1.textContent = `Profile:`;
      address1.textContent = obj.html_url;
      followers1.textContent = `Followers: ${obj.followers}`;
      following1.textContent = `Following: ${obj.following}`;
      bio1.textContent = `Bio : ${obj.bio}`;













return card
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
