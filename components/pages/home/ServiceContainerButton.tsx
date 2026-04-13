'use client';

import RegularButton from '../../buttons/RegularButton';

export default function ServiceContainerButton() {
  return (
    <RegularButton
      onClick={() => {
        window.location.href = '/services';
      }}
      title="View All Services"
      hasIcon={true}
      className="mt-20 self-center"
    />
  );
}
