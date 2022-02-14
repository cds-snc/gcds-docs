import { Component, Host, h } from '@stencil/core';
import { h2MenuAddUpDownArrowsToMainMenuItems_VERSION, h2MenuTabOrder_VERSION, h2MenuAddRightArrowToMainMenuItems_VERSION, h2MenuEnableSubmenuTriggers_VERSION, h2MenuAddMobileMenuTrigger_VERSION, h2MenuAddPageAnchor_VERSION } from "./utils/module";
export class GcdsSiteMenu {
  componentWillLoad() {
    h2MenuAddUpDownArrowsToMainMenuItems_VERSION("all");
    h2MenuTabOrder_VERSION("all");
    h2MenuAddRightArrowToMainMenuItems_VERSION("all");
    h2MenuEnableSubmenuTriggers_VERSION("all");
    h2MenuAddMobileMenuTrigger_VERSION("all");
    h2MenuAddPageAnchor_VERSION("all");
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "gcds-site-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gcds-site-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gcds-site-menu.css"]
  }; }
}
