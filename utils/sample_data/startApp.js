import { getVocab } from '../../api/vocabData';
import domBuilder from '../../components/Shared/domBuilder';
import navBar from '../../components/Shared/navBar';
import domEvents from '../../components/events/domEvents';
import formEvents from '../../components/events/formEvents';
import navigationEvents from '../../components/events/navigationEvents';
import logoutButton from '../../components/logoutButton';
import { showVocab } from '../../pages/vocab';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents();

  getVocab(user.uid).then((vocab) => showVocab(vocab));
  console.warn(user.uid);
};

export default startApp;
