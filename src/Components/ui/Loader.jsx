const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurece el fondo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Asegura que esté por delante de todo
  },
  loader: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

const Loader = () => (
  <div style={styles.overlay}>
    <div style={styles.loader}>Cargando...</div>
  </div>
);

export default Loader;
