let chaptersArray = getChapterList() || [];

//so the user adds chapter here `getChapterList()`,  
//these operators `||` check to see if a chapter is added or not, 
//result is a chapter is added or nothing to this chaptersArray []

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });
  
// For each chapter in the chaptersArray, we're performing a specific action, 
// which is calling the displayList() function and passing the current chapter to it. 

button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
  });

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'

    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // we add a class in the button element. class = "delete"
    li.append(deletebutton);// when input is executed a delete button is added.
    list.append(li);  // appending the <li> to the <ul>

    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.

      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); //The function takes the name of a chapter and removes the last character from it.
    chaptersArray = chaptersArray.filter(item => item !== chapter);// Then, it removes this modified chapter name from the list of chapters.
    setChapterList(); //Then, it removes this modified chapter name from the list of chapters.

    //So, it's like taking a book from a shelf, erasing one word from its title, putting it back on the shelf, 
    //and updating the library's records to reflect the change.
  }