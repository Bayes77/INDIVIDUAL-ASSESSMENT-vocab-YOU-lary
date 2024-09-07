import clearDom from '../../utils/sample_data/clearDom';
import renderToDom from '../../utils/sample_data/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-vocabCard--${obj.firebaseKey}` : 'submit-vocabCard'}" class="mb-4"> 
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="entryTitle" placeholder="Enter Entry Title"C" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" placeholder="Entry Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
        </div>
        <div class="form-group">
          <label for="image">Language</label>
          <input type="text" class="form-control" id="createLanguage" placeholder=" Entry Language" value="${obj.language || ''}" required>
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input type="text" class="form-control" id="time" placeholder="Entry Time" value="${obj.time || ''}" required>
        </div>
        
        </div>
        
        <button type="submit" class="btn btn-primary">Submit Entry
        </button>
      </form>`;

  renderToDom('#form-container', domString);
//   selectAuthor(`${obj.author_id || ''}`);
};

export default addVocabForm;
