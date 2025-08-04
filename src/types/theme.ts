export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  fontSize: number;
  settingsVisible: boolean;
  toggleTheme: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleSettings: () => void;
}