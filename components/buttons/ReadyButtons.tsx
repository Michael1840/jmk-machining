'use client';

import RowContainer from '../containers/RowContainer';
import RegularButton from './RegularButton';

import { Phone } from 'lucide-react';

export default function ReadyButtons() {
  return (
    <RowContainer className="justify-center">
      <RegularButton
        title="Request a Quote"
        onClick={() => {
          window.location.href = '/contact';
        }}
        hasIcon={true}
        className="bg-app-background border-none"
      />
      <RegularButton
        title="+27 60 524 5324"
        onClick={() => {
          window.location.href = 'tel:+27605245324';
        }}
        className="bg-transparent border-app-background text-app-container"
        prefixIcon={<Phone size={16} />}
      />
    </RowContainer>
  );
}
