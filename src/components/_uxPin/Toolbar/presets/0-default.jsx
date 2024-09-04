import React from "react";
import Toolbar from "../Toolbar";
import IconButton from "../../../Icon-button/Icon-button";
import SearchInput from "../../../Search-input/Search-input";
import Divider from "../../../Divider/Divider";
import Select from "../../../Select/Select";

export default (
  <Toolbar
    uxpId="toolbar-01"
    actionsMobile={
      <IconButton
        uxpId="icon-button-01"
        icon="more-vert"
        tooltipMessage="Tooltip message"
        tooltipColor="light"
      />
    }
    actionsDesktop={
      <IconButton
        uxpId="icon-button-02"
        icon="table-column-settings"
        tooltipMessage="Tooltip message"
        tooltipColor="light"
      />
    }
  >
    <SearchInput placeholder="Search" uxpId="search-01" />
    <Divider vertical={true} uxpId="divider-01" />
    <Select
      info={false}
      infoPopoverTitle="Popover Title"
      infoPopoverDescription="Line 1
Line 2
Line 3"
      infoPopoverPosition="right-start"
      disabled={false}
      option1="View 1"
      option2="View 2"
      uxpId="select-01"
    />
  </Toolbar>
);
