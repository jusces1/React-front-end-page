/**
 *
 * Asynchronously loads the component for Meniu
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
