import { SpacingValues } from '../../utils/types/spacing';
/**
 * A container is a basic box layout with a set width for its contents.
 *
 * @slot default - Slot for the main content of the container.
 */
export declare class GcdsContainer {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines the container's alignment.
     * This property is ignored when `layout` is set to `page`,
     * as the page layout has higher priority.
     */
    alignment?: 'start' | 'center' | 'end';
    /**
     * Defines if the container has a border.
     */
    border?: boolean;
    /**
     * Controls how the container aligns with the page layout.
     * When set to `page`, the container uses a max width of 1140px and
     * switches to 90% width on smaller screens to scale consistently with
     * core page layout components such as the header and footer.
     * When set to `full`, the container spans the full width (100%)
     * of its parent.
     */
    layout?: 'full' | 'page';
    /**
     * Container margin. Horizontal margins (left and right) are not
     * applied if the container’s alignment property is defined, since
     * alignment has higher priority.
     */
    margin?: SpacingValues;
    /**
     *  Defines the container's padding.
     */
    padding?: SpacingValues;
    /**
     * Defines container size.
     */
    size?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    /**
     * Set tag for container.
     */
    tag?: string;
    render(): any;
}
