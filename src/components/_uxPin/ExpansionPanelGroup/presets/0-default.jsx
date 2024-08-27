import React from 'react';
import ExpansionPanelGroup from '../ExpansionPanelGroup';
import ExpansionPanel from '../../ExpansionPanel/ExpansionPanel';
import UxpButton from '../../Button/Button';

export default (
  <ExpansionPanelGroup uxpId="expansion-panel-group-1">
    <ExpansionPanel
      activeContent="Content in expansion panel (Active)"
      doneContent="Content in expansion panel (Done)"
      state="done"
      title="Done Panel"
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
    <ExpansionPanel
      activeContent="Content in expansion panel (Active)"
      doneContent="Content in expansion panel (Done)"
      state="active"
      title="Active Panel"
      changeContent={
        <UxpButton color="primary" variant="flat" uxpId="button-3">
          Edit
        </UxpButton>
      }
      footerContent={
        <UxpButton color="primary" uxpId="button-4">
          Continue
        </UxpButton>
      }
      uxpId="expansion-panel-2"
    />
    <ExpansionPanel
      activeContent="Content in expansion panel (Active)"
      doneContent="Content in expansion panel (Done)"
      state="pending"
      title="Pending Panel"
      changeContent={
        <UxpButton color="primary" variant="flat" uxpId="button-5">
          Edit
        </UxpButton>
      }
      footerContent={
        <UxpButton color="primary" uxpId="button-6">
          Continue
        </UxpButton>
      }
      uxpId="expansion-panel-3"
    />
  </ExpansionPanelGroup>
);
