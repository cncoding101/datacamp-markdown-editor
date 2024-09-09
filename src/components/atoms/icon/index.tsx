import React, { useMemo, lazy, Suspense } from 'react';

type Type = keyof typeof REACT_ICONS;
type Variant = MdVariant | FaVariant;
type MdVariant = keyof typeof REACT_ICONS.md;
type FaVariant = keyof typeof REACT_ICONS.fa;

interface IProps {
  type: Type;
  icon: Variant;
  size?: number;
  color?: string;
  className?: string;
}

const REACT_ICONS = {
  md: {
    download: 'MdOutlineFileDownload',
  },
  fa: {
    preview: 'FaRegEye',
  },
} as const;

const ICON_TYPES = Object.keys(REACT_ICONS) as Type[];

const Icon: React.FC<IProps> = ({ icon, type, color, size, className }) => {
  // Memoize the dynamic import to prevent re-imports on every render
  const IconComponent = useMemo(() => {
    if (!ICON_TYPES.includes(type)) return null;

    switch (type) {
      case 'md':
        if (!REACT_ICONS.md[icon as MdVariant]) return null;
        return lazy(() =>
          import('react-icons/md').then((icons) => ({
            default: icons[REACT_ICONS.md[icon as MdVariant]],
          })),
        );

      case 'fa':
        if (!REACT_ICONS.fa[icon as FaVariant]) return null;
        return lazy(() =>
          import('react-icons/fa').then((icons) => ({
            default: icons[REACT_ICONS.fa[icon as FaVariant]],
          })),
        );

      default:
        return null;
    }
  }, [icon, type]);

  if (!IconComponent) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent color={color} size={size} className={className} />
    </Suspense>
  );
};

export default Icon;
