import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faPlus,
  faBell,
  faTimes,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
// cache icons in library
library.add(faBars, faBell, faPlus, faTimes, faSignOutAlt);

export default library;
