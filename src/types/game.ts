export type ScreenType =
  | 'intro'
  | 'key1'
  | 'game1'
  | 'key2'
  | 'game2'
  | 'bridge'
  | 'key3'
  | 'game3'
  | 'final';

export type EraId = 'cognitive' | 'neolithic' | 'agrarian' | 'industrial' | 'modern';

export interface EraItem {
  id: EraId;
  order: number;
  nameKz: string;
  iconName: 'LightBulbIcon' | 'HomeIcon' | 'MapIcon' | 'Cog6ToothIcon' | 'GlobeAltIcon';
  periodKz: string;
  shortDescKz: string;
}

export interface RevolutionEvent {
  id: string;
  textKz: string;
  correctEra: EraId;
  hintKz: string;
}

export interface PersonalityFactor {
  id: string;
  nameKz: string;
  isCorrect: boolean;
  iconName?: 'HomeIcon' | 'AcademicCapIcon' | 'UserGroupIcon' | 'BuildingLibraryIcon' | 'DevicePhoneMobileIcon' | 'HeartIcon';
  descKz?: string;
}

export interface InternalQuality {
  id: string;
  titleKz: string;
  subtitleKz: string;
}
