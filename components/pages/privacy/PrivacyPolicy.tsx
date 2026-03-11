'use client';

import { useEffect, useRef, useState } from 'react';

export default function PrivacyPolicy({ html }: { html: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="max-w-4xl mx-auto px-6 py-12"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
