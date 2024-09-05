import { getVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
import { signOut } from '../../utils/auth';

const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL VOCAB CARDS
  console.warn(uid);
  document.querySelector('#all-entries')
    .addEventListener('click', () => {
      getVocab(uid).then(showVocab);
    });
};

export default navigationEvents;
