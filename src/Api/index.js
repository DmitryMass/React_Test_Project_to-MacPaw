const URL = 'https://api.thecatapi.com/v1';

const request = async (url, method = 'GET', body) => {
  const data = await fetch(`${URL}${url}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-type': 'application/json',
      'x-api-key': '36332ef3-a655-421e-abaf-7b9132eafe64',
    },
  });
  if (data.ok) {
    return data.json();
  }

  throw new Error('Sorry fetch to current api Failed...');
};
// Get random Img
export const getRandomImg = async () => {
  try {
    const data = await request('/images/search');
    return data;
  } catch (e) {
    throw new Error('Problem with getting random img');
  }
};

// Favourites
export const getFavourites = async () => {
  try {
    const data = await request('/favourites');
    return data;
  } catch (e) {
    throw new Error('Problem with getting Favourites');
  }
};

export const addToFavourite = async (favouriteEl) => {
  try {
    const data = await request('/favourites', 'POST', favouriteEl);
    return data;
  } catch (e) {
    throw new Error('Problem with adding to favourites');
  }
};

export const getOneFavourite = async (id) => {
  try {
    const data = await request(`/favourites/${id}`);
    return data;
  } catch (e) {
    throw new Error(`Problem with Getting current ${id}`);
  }
};

export const deleteFromFavourites = async (id) => {
  try {
    const data = await request(`/favourites/${id}`, 'DELETE');
    return data;
  } catch (e) {
    throw new Error('Problem with delete Favourite element');
  }
};

// Test Like

export const getVotes = async () => {
  try {
    const data = await request('/votes');
    return data;
  } catch (e) {
    throw new Error('Problem with getting Votes');
  }
};

export const addVotes = async (vote) => {
  try {
    const data = await request('/votes', 'POST', vote);
    return data;
  } catch (e) {
    throw new Error('Problem with adding Vote');
  }
};

export const getVote = async (id) => {
  try {
    const data = await request(`/votes/${id}`);
    return data;
  } catch (e) {
    throw new Error('Problem with getting current vote');
  }
};

export const removeVote = async (id) => {
  try {
    const data = await request(`/votes/${id}`, 'DELETE');
    return data;
  } catch (e) {
    throw new Error(`Problem with deleting vote ${id}`);
  }
};
