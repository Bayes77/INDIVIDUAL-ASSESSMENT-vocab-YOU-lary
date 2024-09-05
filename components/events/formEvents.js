import { showVocab } from '../../pages/vocab';
import { createVocabCard, getVocab, updateVocabCard } from '../../api/vocabData';

const addVocabForm = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocabCard')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        time: document.querySelector('#time').value,
        favorite: document.querySelector('#favorite').checked,
      };

      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabCard(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }
  });
};

export default addVocabForm;
