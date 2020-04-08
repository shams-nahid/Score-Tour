import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StTopBar from './st-top-bar';
import StScore from '../st-score';
import StTopFunctionality from '../../composite/st-top-functionality';
import StCustomList from '../../composite/st-custom-list';
import StBottomBar from './st-bottom-bar';
import StDialog from '../../basic/st-dialog';
import { useDispatch } from 'react-redux';
import { setPlacesByDistrictId } from '../../../actions/place-action';

export default function StLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPlacesByDistrictId());
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <StTopBar />
      <StScore />
      <StTopFunctionality />
      <StCustomList />
      <StDialog />
      <StBottomBar />
    </>
  );
}
