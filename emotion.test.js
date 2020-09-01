import React from 'react'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import styled from '@emotion/styled'
 
expect.extend(matchers)

const RED = 'rgba(255, 0, 0, 1)';
 
test('renders with correct styles', () => {
  const Div = styled('div')`
    color: ${RED};
  `;
  const tree = renderer.create(<Div />).toJSON();
  expect(tree).toHaveStyleRule('color', RED);
})
