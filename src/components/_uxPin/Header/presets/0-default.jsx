import React from 'react';
import Header from '../Header';
import Brand from '../../../Brand/Brand';
import Button from '../../Button/Button';

export default (
  <Header
    uxpId="header-01"
    title="Application Title"
    endContent={
      <Button uxpId="button-1" color="primary" variant="outline" size="sm">
        Contact Us
      </Button>
    }
    brand={<Brand uxpId="brand-01" />}
  />
);
