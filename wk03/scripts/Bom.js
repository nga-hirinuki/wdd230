document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#favchap');
  const button = document.querySelector('button');
  const list = document.querySelector('#list');
  
  let chaptersArray = getChapterList() || [];
  
  button.addEventListener('click', () => {
      if (input.value.trim() !== '') {
          const chapter = input.value.trim();
          displayList(chapter);
          chaptersArray.push(chapter);
          setChapterList();
          input.value = '';
          input.focus();
      }
  });
  
  chaptersArray.forEach(chapter => {
      displayList(chapter);
  });
  
  function displayList(item) {
      const li = document.createElement('li');
      li.textContent = item;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', function () {
          list.removeChild(li);
          deleteChapter(item);
      });
      
      li.appendChild(deleteButton);
      list.appendChild(li);
  }
  
  function setChapterList() {
      localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }
  
  function getChapterList() {
      return JSON.parse(localStorage.getItem('myFavBOMList'));
  }
  
  function deleteChapter(chapter) {
      chaptersArray = chaptersArray.filter(item => item !== chapter);
      setChapterList();
  }
});
