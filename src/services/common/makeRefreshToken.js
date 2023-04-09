import { createLocalStorage } from '../../utils/createStorage';
import authService from '../auth/auth.service';

export default function makeRefreshToken(err, dispatch) {
  const storage = createLocalStorage('laptech');

  if (err.toString().includes('Invalid token!')) {
    const object = {
      refreshToken: storage.get('refreshToken')
    };
    authService.refreshToken(dispatch, object);
  }
}
