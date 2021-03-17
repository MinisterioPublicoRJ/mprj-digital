import React, { lazy, Suspense } from 'react';

const LazyPartnerPage = lazy(() => import('./PartnerPage'));

const PartnerPage = props => (
  <Suspense fallback={null}>
    <LazyPartnerPage {...props} />
  </Suspense>
);

export default PartnerPage;
