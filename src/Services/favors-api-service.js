import TokenService from './token-service';
import Config from '../Config';

const FavorsApiService = {
  getUserFavors(user_id) {
    return fetch(`${Config.API_ENDPOINT}/users/${user_id}/favors`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  getFavor(favorId) {
    return fetch(`${Config.API_ENDPOINT}/favors/${favorId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  postFavor(toUserId, fromUserId, title, content) {
    return fetch(`${Config.API_ENDPOINT}/favors`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        to_user_id: toUserId,
        from_user_id: fromUserId,
        favor_title: title,
        favor_content: content,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  patchFavor(favorId, cancelled, completed) {
    return fetch(`${Config.API_ENDPOINT}/favors/${favorId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        completed: completed,
        cancelled: cancelled,
        end_date: new Date()
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
    
  }
}

export default FavorsApiService;