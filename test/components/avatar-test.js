jest.unmock('../../src/components/avatar');

import Avatar from '../../src/components/avatar';
//import expect from 'unexpected';
import React from 'react';
import TestUtils from 'react-testutils-additions';

function render ({src, circle} = {}) {
  const dom = TestUtils.renderIntoDocument(
    <Avatar src={src} circle={circle}/>
  );
  const img = TestUtils.findOne('img');

  return {dom, img};
}

describe('Avatar', () => {
  it('renders image', () => {
    const {dom, img} = render({src: '/foo.png', circle: false});

    console.log(img);
  });
});
