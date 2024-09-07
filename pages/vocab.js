import clearDom from '../utils/sample_data/clearDom';
import renderToDom from '../utils/sample_data/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDom('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-entry-btn">Add Entry</button>';

  renderToDom('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>
      <h6 class="card-language">${item.language}</h6>
   <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-link">Edit</i>
<i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-link fas fa-trash-alt">Delete</i>
    
     
      
    </div>
  </div>
  `;
  });
  renderToDom('#store', domString);
};

export { showVocab, emptyVocab };
