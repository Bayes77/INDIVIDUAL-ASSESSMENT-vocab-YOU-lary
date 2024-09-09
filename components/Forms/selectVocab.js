// import firebase from 'firebase';
// import { getVocab } from '../../api/vocabData';
// import renderToDom from '../../utils/sample_data/renderToDom';

// const selectVocab = (vocabID) => {
//   let domString = `<label for="author">Select a Language</label>
//       <select class="form-control" id="language" required>
//       <option value="">Select an Language</option>`;

//   getVocab(`${firebase.auth().currentUser.uid}`).then((vocabArray) => {
//     vocabArray.forEach((vocab) => {
//       domString += `
//             <option
//               value="${vocab.firebaseKey}"
//               ${vocabID === vocab.firebaseKey ? 'selected' : ''}>
//             </option>`;
//     });

//     domString += '</select>';

//     renderToDom('#select-language', domString);
//   });
// };

// export default selectVocab;
