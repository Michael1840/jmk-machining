'use client';

import RegularButton from '../../buttons/RegularButton';
import RowContainer from '../../containers/RowContainer';

export default function HeroButtons() {
  return (
    <RowContainer className="justify-center mt-10">
      <RegularButton
        title="Request a Quote"
        onClick={() => {}}
        hasIcon={true}
        className="bg-accent border-2 border-none"
      />
      <RegularButton title="Our Services" onClick={() => {}} />
    </RowContainer>
  );
}
