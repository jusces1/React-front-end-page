/**
 *
 * Asynchronously loads the component for LoggedOut
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
