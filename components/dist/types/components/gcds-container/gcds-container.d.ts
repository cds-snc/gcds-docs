export declare class GcdsContainer {
  el: HTMLElement;
  /**
   * Props
   */
  /**
   * Defines if container has a border or not.
   */
  border?: boolean;
  /**
   * Defines if container is centered or not.
   */
  centered?: boolean;
  /**
   * Defines the container's margin. Note that left and right margin will not be applied if the container is centered.
   */
  margin?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';
  /**
   *  Defines the container's padding.
   */
  padding?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';
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
