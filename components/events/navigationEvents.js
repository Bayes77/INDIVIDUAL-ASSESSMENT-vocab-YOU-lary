import firebase from 'firebase';
import { getVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
import { signOut } from '../../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL VOCAB CARDS
  console.warn(`${firebase.auth().currentUser.uid}`);
  document.querySelector('#all-entries')
    .addEventListener('click', () => {
      getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
    });

  // vocab On Sale
  // document.querySelector('#sale-vocab').addEventListener('click', () => {
  //   vocabOnSale().then(showVocab);
  // });

  // JavaScript event
  document.querySelector('#javascript')
    .addEventListener('click', () => {
      getVocab(`${firebase.auth().currentUser.uid}`).then(showVocab);
    });
};
export default navigationEvents;
