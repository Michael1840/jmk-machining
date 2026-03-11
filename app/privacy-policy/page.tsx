// app/privacy-policy/page.tsx
import PrivacyPolicy from '@/components/pages/privacy/PrivacyPolicy';
import fs from 'fs';
import path from 'path';

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), 'public', 'privacy-policy.html');
  const html = fs.readFileSync(filePath, 'utf8');

  return <PrivacyPolicy html={html} />;
}
