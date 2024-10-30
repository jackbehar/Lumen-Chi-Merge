import React from "react";
import FormItem from "../FormItem";
import Label from "../../Label/Label";
import TextInput from "../../Text-input/Text-input";

export default (
  <FormItem uxpId="form-item">
    <Label required={true} uxpId="form-item-label">
      Label
    </Label>
    <TextInput uxpId="form-item-text-input" />
  </FormItem>
);
