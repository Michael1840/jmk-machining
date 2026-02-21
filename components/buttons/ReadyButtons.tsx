'use client';

import RowContainer from '../containers/RowContainer';
import RegularButton from './RegularButton';

import { Phone } from 'lucide-react';

export default function ReadyButtons() {
  return (
    <RowContainer className="justify-center">
      <RegularButton
        title="Request a Quote"
        onClick={() => {}}
        hasIcon={true}
        className="bg-app-background border-none"
      />
      <RegularButton
        title="(021) 5555 666"
        onClick={() => {}}
        className="bg-transparent border-app-background text-app-container"
        prefixIcon={<Phone size={16} />}
      />
    </RowContainer>
  );
}
