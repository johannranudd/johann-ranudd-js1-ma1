const cats = [
  {
    name: 'Blob',
    age: 10,
  },
  {
    name: 'Harold',
  },
  {
    name: 'Blurt',
    age: 21,
  },
];

// 1
console.log('Question 1');
const cat = {
  complain: function () {
    console.log('Meow!');
  },
};
cat.complain();

// 2
const heading = document.querySelector('h3');
heading.innerHTML = 'Updated heading';

// 3
heading.style.fontSize = '2em';
// 4
heading.classList.add('subheading');

// 5
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((item) => (item.style.color = 'red'));

// 6
const resultsContainer = document.querySelector('.results');
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = 'yellow';

// 7
console.log('Question 7');
function getCats(list) {
  for (let item of list) {
    console.log(item.name);
  }
}
getCats(cats);
// 8
/* I've used the map function bacause it is a simpler way to loop through arrays.
if not I would have used a for-of loop. Hope this is okay
*/
const catContainer = document.querySelector('.cat-container');
function createCats(cats) {
  cats.map((item) => {
    if (!item.age) {
      item.age = 'Age unknown';
    }
    catContainer.innerHTML += `<div>
    <h5>${item.name}</h5>
    <p>${item.age}</p>
    </div>`;
  });
}
createCats(cats);
