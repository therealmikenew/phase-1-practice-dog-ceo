console.log('%c HI', 'color: firebrick')

// Challenge 1

function fetchDogs() {
     fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(dogData => renderDog(dogData));
    }



function renderDog (dogData) {
    dogData.message.forEach(dogURL => {
        let dogImg = document.createElement('img');
        const dogContainer = document.getElementById("dog-image-container");
        dogImg.src = dogURL;
        dogContainer.append(dogImg);
    });

}
document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
  })

  
//Challenge 2

function fetchBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
   .then(resp => resp.json())
   .then(breedData => renderBreed(breedData))  
}

function renderBreed (breedData) {
  for (let breed in breedData['message']) {
    let dogBreed = document.createElement('li')
    let newDogList = document.getElementById('dog-breeds');
    dogBreed.innerText = breed;
    newDogList.append(dogBreed);
    dogBreed.addEventListener('click', updateColor)

  }
}
   
document.addEventListener('DOMContentLoaded', function() {
  fetchBreeds();
})

function updateColor (event) {
  event.target.style.color = 'red';
}


// Challenge 3


