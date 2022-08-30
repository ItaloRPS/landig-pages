import P from 'prop-types';
import * as Styled from './style';
import { TextComponent } from '../TextComponent';
import { SectionContainner } from '../SectionContainner';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainner>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainner>
    </Styled.Container>
  );a
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
