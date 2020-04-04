import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StTopBar from '../../basic/st-top-bar';
import StScore from '../../basic/st-score';
import StCustomList from '../../basic/st-custom-list';
import StBottomBar from '../../basic/st-bottom-bar';
import StDialog from '../../basic/st-dialog';
import StTopFunctionality from '../../basic/st-top-functionality';

export default function StLayout() {
  const [travellerScore, setTravellerScore] = useState(0);
  const [isCollapseAll, setIsCollapseAll] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    isOpen: null,
    value: null,
    title: null,
    content: null,
  });

  const onChangeTravellerScore = (score) => {
    setTravellerScore(score);
  };

  const onChangeIsCollapseAll = (isCollapseAll) => {
    setIsCollapseAll(isCollapseAll);
  };

  const onChangeDialogContent = (dialogContent) =>
    setDialogContent(dialogContent);

  const onCloseDialog = () => {};

  return (
    <>
      <CssBaseline />
      <StTopBar />
      <StScore travellerScore={travellerScore} />
      <StTopFunctionality
        onChangeIsCollapseAll={onChangeIsCollapseAll}
        isCollapseAll={isCollapseAll}
      />
      <StCustomList
        onChangeTravellerScore={onChangeTravellerScore}
        isCollapseAll={isCollapseAll}
      />
      <StDialog dialogContent={dialogContent} onCloseDialog={onCloseDialog} />
      <StBottomBar onChangeDialogContent={onChangeDialogContent} />
    </>
  );
}
