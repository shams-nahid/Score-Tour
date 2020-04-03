import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StTopBar from '../../basic/st-top-bar';
import StScore from '../../basic/st-score';
import StCustomList from '../../basic/st-custom-list';
import StBottomBar from '../../basic/st-bottom-bar';
import StDialog from '../../basic/st-dialog';

export default function StLayout() {
  const [travellerScore, setTravellerScore] = useState(0);
  const [dialogContent, setDialogContent] = useState({
    isOpen: null,
    value: null,
    title: null,
    content: null
  });

  const onChangeTravellerScore = score => {
    setTravellerScore(score);
  };

  const onChangeDialogContent = dialogContent =>
    setDialogContent(dialogContent);

  const onCloseDialog = () => {};

  return (
    <>
      <CssBaseline />
      <StTopBar />
      <StScore travellerScore={travellerScore} />
      <StCustomList onChangeTravellerScore={onChangeTravellerScore} />
      <StDialog dialogContent={dialogContent} onCloseDialog={onCloseDialog} />
      <StBottomBar onChangeDialogContent={onChangeDialogContent} />
    </>
  );
}
