/**
 *
 * Asynchronously loads the component for AddNewRowPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
