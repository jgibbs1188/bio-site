import React from 'react';
import { PropTypes } from 'prop-types';
import AdminRoutes from './AdminRoutes';
import PublicRoutes from './PublicRoutes';

export default function Routes({ user }) {
  return (
    <>
      {user?.isAdmin && <AdminRoutes />}
      <PublicRoutes user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Routes.defaultProps = {
  user: {},
};
