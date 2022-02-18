import axios from "axios";

export const RECEIVE_DATA_NAME_BY_ID = "RECEIVE_DATA_NAME_BY_ID";

function receiveDataNameById(payload) {
  return {
    type: RECEIVE_DATA_NAME_BY_ID,
    payload
  };
}

function formatData(data, knownFor) {
  return {
    id: data.id,
    name: data.name,
    role: data.role,
    image: data.image,
    summary: data.summary,
    awards: data.awards,
    knownFor: knownFor
  };
}

async function getDataName(nameId) {
  const getName = await axios.get(
    `https://imdb-api.com/en/API/Name/k_m8a8f7lf/${nameId}`
  );
  const data = getName.data;
  const sortKnownFor = data.knownFor.sort((a, b) => b.year - a.year);
  const payload = formatData(data, sortKnownFor);
  return payload;
}

export function handleGetDataName(nameId) {
  return dispatch => {
    return getDataName(nameId).then(data => {
      dispatch(receiveDataNameById(data));
    });
  };
}
