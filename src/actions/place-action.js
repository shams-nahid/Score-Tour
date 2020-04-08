import { GET_PLACES_BY_DISTRICT_ID } from '../action-types/place-type';
import { places } from '../constants/places';

export const setPlacesByDistrictId = () => {
  let placesInDistrict = {};
  places.map(place => {
    const { districtId } = place;
    !placesInDistrict[districtId] && (placesInDistrict[districtId] = []);
    placesInDistrict[districtId].push(place);
    return place;
  });
  return {
    type: GET_PLACES_BY_DISTRICT_ID,
    payload: {
      places: placesInDistrict
    }
  };
};
