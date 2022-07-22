import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {GridSection} from '.'

import mock from './mock'

describe('<GridSection/>',()=>{
    test('shold render',()=>{
      const {container} =   renderTheme(<GridSection {...mock}/>);
        expect(container).toMatchSnapshot()
    });

    test('shold render without background',()=>{
        const {container} =   renderTheme(<GridSection {...mock} background={undefined}/>);
          expect(container).toMatchSnapshot()
      });
});

