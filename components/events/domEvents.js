import addVocabForm from '../Forms/addVocabForm';

const domEvents = () => {
  // add vocabCard form
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocabcard-btn')) {
      addVocabForm();
    }
  });
};

export default domEvents;
