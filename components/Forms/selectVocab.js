// import { getVocab } from '../../api/vocabData';
// import renderToDom from '../../utils/sample_data/renderToDom';

// const selectVocab = (language) => {
//   let domString = `<label for="author">Select a Language</label>
//       <select class="form-control" id="language" required>
//       <option value="">Select an Language</option>`;

//   getVocab().then((languageArray) => {
//     languageArray.forEach((language) => {
//       domString += `
//             <option
//               value="${vocab.language}"
//               ${vocab === vocab.language ? 'selected' : ''}>
//             </option>`;
//     });

//     domString += '</select>';

//     renderToDom('#select-language', domString);
//   });
// };
