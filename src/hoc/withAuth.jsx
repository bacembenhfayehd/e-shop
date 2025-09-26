function withAuth(WrappedComponent) {
  return function ProtectedComponent({ isAuthenticated, ...props }) {
  if (!isAuthenticated) {
    return <p>🚫 Accès refusé</p>;
  }
  return <WrappedComponent {...props} />;
};
}

export default withAuth;
