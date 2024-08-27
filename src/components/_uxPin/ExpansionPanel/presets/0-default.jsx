import React from 'react';
import ExpansionPanel from '../ExpansionPanel';
import UxpButton from '../../Button/Button';

export default (
  <ExpansionPanel
    activeContent="Content in expansion panel (Active)"
    doneContent="Content in expansion panel (Done)"
    state="active"
    title="Expansion Panel"
    changeContent={
      <UxpButton color="primary" variant="flat" uxpId="button-1">
        Edit
      </UxpButton>
    }
    footerContent={
      <UxpButton color="primary" uxpId="button-2">
        Continue
      </UxpButton>
    }
    uxpId="expansion-panel-1"
  />
);
