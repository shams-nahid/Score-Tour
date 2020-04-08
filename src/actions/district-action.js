import { GET_DISTRICT_BY_DIVISION_ID } from '../action-types/district-type';
import { districts } from '../constants/districts';

export const getDistrictById = divisionId => {
  const filteredDistricts =
    divisionId === 9
      ? districts
      : districts.filter(district => district.divisionId === divisionId);
  return {
    type: GET_DISTRICT_BY_DIVISION_ID,
    payload: {
      districts: filteredDistricts
    }
  };
};
