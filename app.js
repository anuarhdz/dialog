import './app.css';
import Modal from './modal';

Modal();
if (import.meta.hot) {
  import.meta.hot.accept('./modal', (HMRModal) => {
    HMRModal?.default();
  });
}
