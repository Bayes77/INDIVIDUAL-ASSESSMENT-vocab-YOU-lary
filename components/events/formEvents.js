import firebase from 'firebase';
import { showVocab } from '../../pages/vocab';
import { createVocabCard, getVocab, updateVocabCard } from '../../api/vocabData';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-vocabCard')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#createLanguage').value,
        uid: `${firebase.auth().currentUser.uid}`,
        firebaseKey
        // favorite: document.querySelector('#favorite').checked,
      };
      console.warn(document.querySelector('#createLanguage').value);
      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabCard(patchPayload).then(() => {
          getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-vocabCard')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#createLanguage').value,
        time: document.querySelector('#time').value,
        // favorite: document.querySelector('#favorite').checked,
      };

      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabCard(patchPayload).then(() => {
          getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
        });
      });
    }
  });
};

export default formEvents;
