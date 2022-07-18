import { ContactLinkProps } from '../common/components/ContactLink/ContactLink';
import { FaEnvelope, FaGithub, FaGlobe, FaXing } from 'react-icons/fa';

export const mockedContactLinks: ContactLinkProps[] = [
  {
    text: 'gueteklasse-a.de',
    href: 'https://www.gueteklasse-a.de',
    icon: FaGlobe,
  },
  {
    text: 'andreas.rissling@gmx.net',
    href: 'mailto:andreas.rissling@gmx.net',
    icon: FaEnvelope,
  },
  {
    text: 'GitHub',
    href: 'https://github.com/arisslin',
    icon: FaGithub,
  },
  {
    text: 'Xing',
    href: 'https://www.xing.com/profile/Andreas_Rissling3/',
    icon: FaXing,
  },
];
