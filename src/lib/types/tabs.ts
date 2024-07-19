export interface ITab {
    icon?: string; // the font-awesome icon to display
    iconPosition?: 'start' | 'end';
    id: string;
    label: string;
    selected: boolean;
}