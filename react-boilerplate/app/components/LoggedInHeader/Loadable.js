/**
 *
 * Asynchronously loads the component for LoggedIn
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
