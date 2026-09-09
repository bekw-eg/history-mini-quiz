import React from 'react';
import {
  LightBulbIcon,
  HomeIcon,
  MapIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
  UserIcon,
  KeyIcon,
  LockClosedIcon,
  LockOpenIcon,
  SparklesIcon,
  TrophyIcon,
  ClockIcon,
  CheckCircleIcon,
  XMarkIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

interface DynamicHeroIconProps {
  name: string;
  className?: string;
  solid?: boolean;
}

export const DynamicHeroIcon: React.FC<DynamicHeroIconProps> = ({
  name,
  className = 'w-6 h-6',
}) => {
  switch (name) {
    case 'LightBulbIcon':
      return <LightBulbIcon className={className} aria-hidden="true" />;
    case 'HomeIcon':
      return <HomeIcon className={className} aria-hidden="true" />;
    case 'MapIcon':
      return <MapIcon className={className} aria-hidden="true" />;
    case 'Cog6ToothIcon':
      return <Cog6ToothIcon className={className} aria-hidden="true" />;
    case 'GlobeAltIcon':
      return <GlobeAltIcon className={className} aria-hidden="true" />;
    case 'AcademicCapIcon':
      return <AcademicCapIcon className={className} aria-hidden="true" />;
    case 'UserGroupIcon':
      return <UserGroupIcon className={className} aria-hidden="true" />;
    case 'BuildingLibraryIcon':
      return <BuildingLibraryIcon className={className} aria-hidden="true" />;
    case 'DevicePhoneMobileIcon':
      return <DevicePhoneMobileIcon className={className} aria-hidden="true" />;
    case 'HeartIcon':
      return <HeartIcon className={className} aria-hidden="true" />;
    case 'UserIcon':
      return <UserIcon className={className} aria-hidden="true" />;
    case 'KeyIcon':
      return <KeyIcon className={className} aria-hidden="true" />;
    case 'LockClosedIcon':
      return <LockClosedIcon className={className} aria-hidden="true" />;
    case 'LockOpenIcon':
      return <LockOpenIcon className={className} aria-hidden="true" />;
    case 'SparklesIcon':
      return <SparklesIcon className={className} aria-hidden="true" />;
    case 'TrophyIcon':
      return <TrophyIcon className={className} aria-hidden="true" />;
    case 'ClockIcon':
      return <ClockIcon className={className} aria-hidden="true" />;
    case 'CheckCircleIcon':
      return <CheckCircleIcon className={className} aria-hidden="true" />;
    case 'XMarkIcon':
      return <XMarkIcon className={className} aria-hidden="true" />;
    case 'InformationCircleIcon':
      return <InformationCircleIcon className={className} aria-hidden="true" />;
    case 'ArrowRightIcon':
      return <ArrowRightIcon className={className} aria-hidden="true" />;
    case 'PlayIcon':
      return <PlayIcon className={className} aria-hidden="true" />;
    default:
      return null;
  }
};
