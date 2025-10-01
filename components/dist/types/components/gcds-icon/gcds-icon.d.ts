import { SpacingValues } from '../../utils/types/spacing';
/**
 * An icon is a symbol that visually represents an action or idea.
 */
export declare class GcdsIcon {
    el: HTMLElement;
    /**
     * Props
     */
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
    name: 'checkmark-circle' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'close' | 'download' | 'email' | 'exclamation-circle' | 'external' | 'info-circle' | 'phone' | 'search' | 'warning-triangle';
    validateName(newValue: string): void;
    /**
     * Defines the size of the icon.
     */
    size?: 'inherit' | 'text-small' | 'text' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
    validateSize(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
