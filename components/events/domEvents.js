import firebase from 'firebase';
import { deleteVocabCard, getVocab, getSingleCard } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
import addVocabForm from '../Forms/addVocabForm';

const domEvents = () => {
  // add vocabCard form
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }

    // delete vocab card event

    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
      // console.warn('clicked DELETE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabCard(firebaseKey).then(() => {
          getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
        });
      }
    }

    // editing/updating vocab card

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then(() => addVocabForm());
    }

    // add card button

    if (e.target.id.includes('add-entry-btn')) {
      addVocabForm();
    }
  });
};

export default domEvents;
