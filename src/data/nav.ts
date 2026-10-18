/* Primary navigation. Order is intentional. Edit here to add/remove
   routes; the Menu reads from this list. */

export interface NavItem {
  label: string;
  to: string;
}

export const NAV: NavItem[] = [
  { label: 'work', to: '/work' },
  { label: 'sketches', to: '/sketches' },
  { label: 'cv', to: '/cv' },
  { label: 'about', to: '/about' },
  { label: 'contact', to: '/contact' },
];

export const WORDMARK = 'Daria Lobanova';

/** All outside links — used by the Contact page, the menu, and the footer.
    Change a link here and it updates everywhere. */
export const SOCIAL: NavItem[] = [
  { label: 'email', to: 'mailto:dshxlva@yandex.ru' },
  { label: 'instagram', to: 'https://www.instagram.com/dshxlva/' },
  { label: 'github', to: 'https://github.com/dsshji' },
  { label: 'linkedin', to: 'https://www.linkedin.com/in/dlobanova' },
];
