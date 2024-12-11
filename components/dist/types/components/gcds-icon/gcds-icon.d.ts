import { SpacingValues } from '../../utils/types/spacing';
export declare class GcdsIcon {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Style of the icon. 'regular' icons are outlined. Some icons have 'solid' variation.
     */
    iconStyle?: 'regular' | 'solid';
    /**
     * Add icon description.
     */
    label?: string;
    /**
     * Add margin to the left of the icon
     */
    marginLeft?: SpacingValues;
    /**
     * Add margin to the right of the icon
     */
    marginRight?: SpacingValues;
    /**
     * Name of the icon.
     */
    name: string;
    /**
     * If the icon should render as a fixed-width square, or their natural width.
     */
    fixedWidth: boolean;
    /**
     * Defines the size of the icon.
     */
    size?: 'inherit' | 'text-small' | 'text' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
    render(): any;
}
