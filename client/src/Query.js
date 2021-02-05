const url = "https://anfdewetourapi.herokuapp.com/api/v1";

const storeValue = (values) => {
  return values;
};

// <--- get meta data
const toJSON = (_) => _.json();
const getCountry = () => fetch(`${url}/country`).then(toJSON);
const getTrip = () => fetch(`${url}/trip`).then(toJSON);
const getTransaction = () => fetch(`${url}/transaction`).then(toJSON);
// --->

// <--- authentication
// --->

export { getTrip, getCountry, getTransaction, loginUser, storeValue };
