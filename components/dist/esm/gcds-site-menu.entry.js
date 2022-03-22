import { r as registerInstance, h, H as Host, g as getElement } from './index-44aa51bb.js';

// Hydrogen / Component / Scripts

// ===========================================================================================

// Remove all event listeners from all menus.
function h2MenuRemoveEventsHandler(menuWrapper) {
  var menu = menuWrapper.shadowRoot.querySelector("[data-h2-menu]");
  var allMenuItems = menu.querySelectorAll("*");
  allMenuItems.forEach(function(item) {
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent);
    item.removeEventListener("keydown", h2MenuRightArrowEvent);
    item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);
  });
  var menuTriggers = menuWrapper.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]").shadowRoot.querySelector("button");

  menuTriggers.removeEventListener("keydown", h2MenuUpDownArrowEvent);
  menuTriggers.removeEventListener("keydown", h2MenuRightArrowEvent);
  menuTriggers.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);

}

// Close all open submenus.
function h2MenuCloseOpenSubmenusHandler(menuWrapper) {
  var menu = menuWrapper.shadowRoot.querySelector("[data-h2-menu]");
  var menuListChildren = menu.querySelectorAll("[data-h2-menulist] li");
  menuListChildren.forEach(function(child) {
    child.classList.remove("h2-active");
  });
  var menuItems = menu.querySelectorAll("[role='menuitem']");
  menuItems.forEach(function(item) {
    item.setAttribute("aria-expanded", false);
  });
  var submenuLinks = menu.querySelectorAll("[data-h2-submenu-link]");
  submenuLinks.forEach(function(link) {
    link.setAttribute("aria-expanded", false);
  });
}

// Close all submenus and re-enable the main menu.
function h2MenuCloseSubmenusAndActivateMainMenuHandler(menuWrapper) {
  var menu = menuWrapper.shadowRoot.querySelector("[data-h2-menu]");
  var menuContainer = menu.querySelector("[data-h2-menu-container]");
  var mobileTrigger = menuWrapper.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]");
  // Remove event listeners from all menus.
  h2MenuRemoveEventsHandler(menuWrapper);
  // Close all submenus.
  h2MenuCloseOpenSubmenusHandler(menuWrapper);
  // Get main menu items.
  var menuChildren = menuContainer.children;
  var mainMenus = [];
  for (var i = 0; i < menuChildren.length; i++) {
    var child = menuChildren[i];
    if (child.hasAttribute("data-h2-menulist")) {
      mainMenus = mainMenus.concat(child);
    }
  }
  var resetMainMenuItems = h2MenuGetTargetMenuItemsHandler(mainMenus);
  // If the main menu is mobile activated, add the mobile menu trigger.
  if (menu.classList.contains("h2-mobile-menu-active")) {
    resetMainMenuItems = resetMainMenuItems.concat(mobileTrigger);
  }
  // Re-add up/down arrow listeners, left/escape listners.
  resetMainMenuItems.forEach(function(item) {
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent);
    item.removeEventListener("keydown", h2MenuRightArrowEvent);
    item.addEventListener("keydown", h2MenuUpDownArrowEvent);
    item.addEventListener("keydown", h2MenuRightArrowEvent);
  });
}

// Get all menu items inside the entire menu.
function h2MenuGetAllMenuItemsHandler(menuWrapper) {
  // Get the mobile menu trigger.
  var mobileMenuTrigger = menuWrapper.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]").shadowRoot.querySelector("button");
  // Create an empty array that we can add menu items to.
  var menuItems = [];
  // Check to see if the menu is mobile activated, and if it is, add the mobile trigger to the array.
  if (menuWrapper.shadowRoot.querySelector("[data-h2-menu]").classList.contains("h2-mobile-menu-active")) {
    menuItems = menuItems.concat(mobileMenuTrigger);
  }
  // Get all list items inside of the menu.
  var menuListItems = menuWrapper.shadowRoot.querySelectorAll("li");
  // Loop through the list items to find the menu items and add them to the array.
  menuListItems.forEach(function(item) {
    var listItemChildren = item.children;
    for (var i = 0; i < listItemChildren.length; i++) {
      var child = listItemChildren[i];
      if (child.getAttribute("role") == "menuitem") {
        menuItems = menuItems.concat(child);
      } else if (child.hasAttribute("data-h2-submenu-trigger")) {
        menuItems = menuItems.concat(child);
      }
    }
  });
  // Pass the menu items back to the function.
  return menuItems;
}

// ===========================================================================================

// Get all menu items inside of an array of menulists.
function h2MenuGetTargetMenuItemsHandler(menuLists) {
  // Set a false variable indicating the the mobile menu is inactive by default.
  var isMenuMobileActivated = false;
  // Set an empty variable for the mobile menu trigger.
  var mobileMenuTrigger = null;
  // Set an empty array for the remaining menu items.
  var menuItems = [];

  menuLists.forEach(function(list) {
    // Check to see if the parentNode is the menu container AND that the data-h2-menu element is mobile activated. If it is, set the activated variable to true, and add the mobile trigger element.
    if (list.parentNode.hasAttribute("data-h2-menu-container") == true && list.parentNode.parentNode.classList.contains("h2-mobile-menu-active")) {
      isMenuMobileActivated = true;
      mobileMenuTrigger = list.closest("[data-h2-menu]").parentNode.host.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]").shadowRoot.querySelector('button');
    }
  });


  // Add the mobile trigger to the array of menu items if the menu is mobile activated.
  if (isMenuMobileActivated == true) {
    menuItems = menuItems.concat(mobileMenuTrigger);
  }
  
  // Loop through the menu lists that have been passed.
  menuLists.forEach(function(list) {
    // Get the direct children that are <li> elements.
    var listChildrenItems = [];
    var listChildren = list.children;
    for (var i = 0; i < listChildren.length; i++) {
      var child = listChildren[i];
      if (child.tagName == "LI") {
        listChildrenItems = listChildrenItems.concat(child);
      }
    }
    // Loop through the <li> children and look for children that are menu items or submenu triggers.
    listChildrenItems.forEach(function(childItem) {
      var childItemChildren = childItem.children;
      for (var i = 0; i < childItemChildren.length; i++) {
        var child = childItemChildren[i];
        if (child.getAttribute("role") == "menuitem") {
          menuItems = menuItems.concat(child);
        }
        if (child.hasAttribute("data-h2-submenu-trigger")) {
          menuItems = menuItems.concat(child);
        }
      }
    });
  });

  // Loop through the array of menu lists that have been passed.
  menuLists.forEach(function(list) {
  
    // Add the submenu trigger.
    if (list.parentNode.tagName == "LI") {
      var parentNodeListItems = list.parentNode.children;
      var submenuTrigger = null;
      var parentItem = null;
      for (var i = 0; i < parentNodeListItems.length; i++) {
        var child = parentNodeListItems[i];
        if (child.hasAttribute("data-h2-submenu-trigger")) {
          submenuTrigger = child;
        } else if(child.getAttribute("role") == "menuitem"){
          parentItem = child;
        }
      }
      menuItems = menuItems.concat(parentItem);
      menuItems = menuItems.concat(submenuTrigger);
    }
  });

  // Return the menu items to the function.
  return menuItems;
}

// Get all menu items with submenus inside of a menulist.
function h2MenuGetMenuListItemsWithSubmenusHandler(menuLists) {
  // Set an empty array for the menu items.
  var menuItemsWithSubmenus = [];
  // Loop through the menu lists that have been passed.
  menuLists.forEach(function(list) {
    // Get the direct children that are <li> elements.
    var listChildrenItems = [];
    var listChildren = list.children;
    for (var i = 0; i < listChildren.length; i++) {
      var child = listChildren[i];
      if (child.tagName == "LI") {
        listChildrenItems = listChildrenItems.concat(child);
      }
    }
    // Loop through the <li> children and look for children that are menu items or submenu triggers.
    listChildrenItems.forEach(function(childItem) {
      var childItemChildren = childItem.children;
      for (var i = 0; i < childItemChildren.length; i++) {
        var child = childItemChildren[i];
        if (child.hasAttribute("data-h2-menulist")) ;
      }
      if (true) {
        // Since the children contain a submenu, find the siblings and add them to the list items.
        for (var i = 0; i < childItemChildren.length; i++) {
          var child = childItemChildren[i];
          if (child.getAttribute("role") == "menuitem") {
            menuItemsWithSubmenus = menuItemsWithSubmenus.concat(child);
          }
          if (child.hasAttribute("data-h2-submenu-trigger")) {
            menuItemsWithSubmenus = menuItemsWithSubmenus.concat(child);
          }
        }
      }
    });
  });
  // Return the menu items to the function.
  return menuItemsWithSubmenus;
}

// ===========================================================================================

// Open script.
function h2MenuOpenSubmenuHandler(trigger) {
  // Figure out which element is being used as the trigger and set the values appropriately to open the submenu.
  var menuItem = "";
  var submenuTrigger = "";
  var submenu = [];
  // Get the trigger's parent and siblings.
  var triggerParent = trigger.closest("li");
  var triggerSiblings = triggerParent.children;
  // Loop through the trigger's siblings to find the menuitem and the submenu trigger.
  for (var i = 0; i < triggerSiblings.length; i++) {
    var child = triggerSiblings[i];
    if (child.hasAttribute("data-h2-submenu-trigger")) {
      submenuTrigger = child;
    }
    if (child.hasAttribute("data-h2-menulist")) {
      submenu = submenu.concat(child);
    }
    if (child.getAttribute("role") == "menuitem") {
      menuItem = child;
    }
  }
  // Open the submenu.
  triggerParent.classList.add("h2-active");
  menuItem.setAttribute("aria-expanded", true);
  submenuTrigger.setAttribute("aria-expanded", true);
  // Remove all event listeners.
  var menuWrapper = trigger.closest("[data-h2-menu]").parentNode.host;
  h2MenuRemoveEventsHandler(menuWrapper);
  // Find submenu and it's items.
  var submenuItems = h2MenuGetTargetMenuItemsHandler(submenu);
  // Clean and add event listeners.
  submenuItems.forEach(function(item) {
    item.removeEventListener("keydown", h2MenuRightArrowEvent);
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent);
    item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);
    item.addEventListener("keydown", h2MenuRightArrowEvent);
    item.addEventListener("keydown", h2MenuUpDownArrowEvent);
    item.addEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);
  });
  // Focus first menu item.
  submenuItems[0].focus();
}

// Close script.
function h2MenuCloseSubmenuHandler(trigger) {
  // Figure out which element is being used as the trigger and set the values appropriately to open the submenu.
  var menuItem = "";
  var submenuTrigger = "";
  // Get the trigger's parent and siblings.
  var triggerParent = trigger.closest("li");
  var triggerSiblings = triggerParent.children;
  // Loop through the trigger's siblings to find the menuitem and the submenu trigger.
  for (var i = 0; i < triggerSiblings.length; i++) {
    var child = triggerSiblings[i];
    if (child.hasAttribute("data-h2-submenu-trigger")) {
      submenuTrigger = child;
    }
    if (child.hasAttribute("data-h2-menulist")) ;
    if (child.getAttribute("role") == "menuitem") {
      menuItem = child;
    }
  }
  // Remove all event listeners.
  var menuWrapper = trigger.closest("[data-h2-menu]").parentNode.host;
  h2MenuRemoveEventsHandler(menuWrapper);
  // Find the parent menulist and check to see if it is nested inside of the menu container. We need to make sure that if it is, we account for the possibility of a sibling menulist item.
  var parentMenuItems = [];
  var parentMenu = triggerParent.closest("[data-h2-menulist]");
  var parentMenuWrapper = parentMenu.parentNode;
  if (parentMenuWrapper.hasAttribute("data-h2-menu-container")) {
    // Find the main menu. Remember that there can in fact be two menus nested in the container.
    var mainMenus = [];
    var menuChildren = parentMenuWrapper.children;
    for (var i = 0; i < menuChildren.length; i++) {
      var child = menuChildren[i];
      if (child.hasAttribute("data-h2-menulist")) {
        mainMenus = mainMenus.concat(child);
      }
    }
    parentMenuItems = h2MenuGetTargetMenuItemsHandler(mainMenus);
  } else if (parentMenuWrapper.tagName == "LI") {
    var parentMenuArray = [];
    parentMenuArray = parentMenuArray.concat(parentMenu);
    parentMenuItems = h2MenuGetTargetMenuItemsHandler(parentMenuArray);
    // Check to see if the parentMenuWrapper has a submenu trigger as its child, and if it does, add the trigger to the parentMenuItems.
    var menuChildren = parentMenuWrapper.children;
    var parentTrigger = "";
    var triggerPresence = false;
    for (var i = 0; i < menuChildren.length; i++) {
      var child = menuChildren[i];
      if (child.hasAttribute("data-h2-submenu-trigger")) {
        triggerPresence = true;
        parentTrigger = child;
      }
    }
    if (triggerPresence == true) {
      parentMenuItems = parentMenuItems.concat(parentTrigger);
    }
  }
  // Clean and add event listeners.
  parentMenuItems.forEach(function(item) {
    item.removeEventListener("keydown", h2MenuRightArrowEvent);
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent);
    item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);
    item.addEventListener("keydown", h2MenuRightArrowEvent);
    item.addEventListener("keydown", h2MenuUpDownArrowEvent);
    item.addEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);
  });
  // Close all nested submenus.
  var nestedSubmenus = triggerParent.querySelectorAll("[data-h2-menulist] li");
  nestedSubmenus.forEach(function(nestedSubmenu) {
    nestedSubmenu.classList.remove("h2-active");
  });
  var nestedMenuItems = triggerParent.querySelectorAll("[role='menuitem']");
  nestedMenuItems.forEach(function(nestedMenuItem) {
    nestedMenuItem.setAttribute("aria-expanded", false);
  });
  var nestedSubmenuTriggers = triggerParent.querySelectorAll("[data-h2-submenu-trigger]");
  nestedSubmenuTriggers.forEach(function(nestedSubmenuTrigger) {
    nestedSubmenuTrigger.setAttribute("aria-expanded", false);
  });
  // Close the active submenu.
  triggerParent.classList.remove("h2-active");
  menuItem.setAttribute("aria-expanded", false);
  submenuTrigger.setAttribute("aria-expanded", false);
}

// ===========================================================================================

// Decision tree on whether to open or close a submenu on click.
function h2MenuToggleSubmenuEvent(e) {
  var trigger = e.currentTarget;
  // Check if the parent <li> is active or not.
  var triggerParent = trigger.closest("li");
  if (triggerParent.classList.contains("h2-active")) {
    h2MenuCloseSubmenuHandler(trigger);
  } else {
    h2MenuOpenSubmenuHandler(trigger);
  }
}

// Right Trigger to Open Submenu
function h2MenuRightArrowEvent(e) {
  var key = e.keyCode || e.which;
  var trigger = e.currentTarget;
  if (key == 39) {
    // Prevent default actions on key press.
    e.preventDefault();
    // Check to see if the trigger's siblings contain a submenu to open.
    var triggerParent = trigger.parentNode;
    var triggerParentChildren = triggerParent.children;
    var submenuPresence = false;
    for (var i = 0; i < triggerParentChildren.length; i++) {
      var child = triggerParentChildren[i];
      if (child.hasAttribute("data-h2-menulist")) {
        submenuPresence = true;
      }
    }
    // Since a submenu is present, check to see if the parentNode is active. so we can decide what to do with it.
    if (submenuPresence == true) {
      h2MenuOpenSubmenuHandler(trigger);
    }
  }
}

// Up/down arrow loop.
function h2MenuUpDownArrowEvent(e) {
  // Assign the trigger and find it's menu. To do this, we need to check to see if the trigger is the mobile menu trigger, because if it is, we need to check different DOM elements than a standard menu trigger.
  var trigger = e.currentTarget;
  var menuLists = [];
  if (trigger.parentNode.host != null && trigger.parentNode.host.hasAttribute("data-h2-mobile-menu-trigger")) {
    var menus = trigger.parentNode.host.parentNode.host.shadowRoot.querySelector("[data-h2-menu-container]").children;
    for (var i = 0; i < menus.length; i++) {
      var child = menus[i];
      if (child.hasAttribute("data-h2-menulist")) {
        menuLists = menuLists.concat(child);
      }
    } 
  } else {
    // Now we need to check if the trigger is a submenu trigger, and if it is, we need to check if it's active, because if it is, we need to target its sibling submenu, not its parent menu.
    if (trigger.hasAttribute("data-h2-submenu-trigger") && trigger.parentNode.classList.contains("h2-active")) {
      var menus = trigger.parentNode.children;
      for (var i = 0; i < menus.length; i++) {
        var child = menus[i];
        if (child.hasAttribute("data-h2-menulist")) {
          menuLists = menuLists.concat(child);
        }
      }
    } else {
      var menus = trigger.parentNode.parentNode.parentNode.children;
      for (var i = 0; i < menus.length; i++) {
        var child = menus[i];
        if (child.hasAttribute("data-h2-menulist")) {
          menuLists = menuLists.concat(child);
        }
      } 
    }
  }
  var menuListItems = h2MenuGetTargetMenuItemsHandler(menuLists);
  // Get the keycode of the event.
  var key = e.keyCode || e.which;
  // Get the number of items in the menu.
  var itemCount = menuListItems.length - 1;
  // If the key pressed is down, move focus to the next item.
  if (key == 40) {
    e.preventDefault();
    if(trigger.parentNode.host && trigger.parentNode.host.hasAttribute('data-h2-mobile-menu-trigger')){
      var hostElement = trigger.parentNode.host;
    } else {
      var hostElement = trigger.closest('[data-h2-menu]').parentNode.host;
    }
    var currentFocus = hostElement.shadowRoot.activeElement;
    menuListItems.forEach(function(item) {
      if (currentFocus == item) {
        var currentIndex = menuListItems.indexOf(item);
        var nextItemIndex = currentIndex + 1;
        if (nextItemIndex > itemCount) {
          menuListItems[0].focus();
        } else {
          menuListItems[nextItemIndex].focus();
        }
      }
    });
  }
  // If the key pressed is up, move focus to the previous item.
  else if (key == 38) {
    e.preventDefault();
    if(trigger.parentNode.host && trigger.parentNode.host.hasAttribute('data-h2-mobile-menu-trigger')){
      var hostElement = trigger.parentNode.host;
    } else {
      var hostElement = trigger.closest('[data-h2-menu]').parentNode.host;
    }
    var currentFocus = hostElement.shadowRoot.activeElement;
    menuListItems.forEach(function(item) {
      if (currentFocus == item) {
        var currentIndex = menuListItems.indexOf(item);
        var previousItemIndex = currentIndex - 1;
        if (previousItemIndex < 0) {
          menuListItems[itemCount].focus();
        } else {
          menuListItems[previousItemIndex].focus();
        }
      }
    });
  }
}

// Mobile menu anchor navigation.
// This function closes the menu when a link is clicked that specifically takes the user to a point on their current page.
function h2MenuCloseMenuOnAnchorClickEvent(e) {
  var link = e.currentTarget;
  // Check to see if the menu is active.
  var menu = link.closest("[data-h2-menu]");
  var menuWrapper = menu.parentNode.host;
  var menuTriggers = menuWrapper.shadowRoot.querySelectorAll("[data-h2-mobile-menu-trigger]");
  // Get the destination.
  var destination = link.getAttribute("href");
  if (menu.classList.contains("h2-mobile-menu-active") == true) {
    // The menu is open on a mobile device, so we need to set and travel to the anchor, but also close the menu.
    // Check to see if the link's href is a page anchor.
    if (destination.match("^#")) {
      // Remove event listeners from the current menu.
      h2MenuRemoveEventsHandler(menuWrapper);
      // Close all submenus and reset aria values.
      h2MenuCloseOpenSubmenusHandler(menuWrapper);
      // Close the main menu and reset aria values.
      menu.classList.remove("h2-mobile-menu-active");
      menuTriggers.forEach(function(trigger) {
        trigger.classList.remove("h2-active");
        trigger.setAttribute("aria-expanded", false);
      });
      var documentBody = document.querySelector("body");
      // documentBody.classList.remove("h2-mobile-menu-body-lock");
      documentBody.style.overflow = "visible";
    }
  } else {
    // The menu isn't open, and the user is on a desktop device.
    // Check to see if the link's href is a page anchor.
    if (destination.match("^#")) {
      var menuType = "";
      var menuAttribute = menuWrapper.getAttribute("desktop-task");
      if (menuAttribute.includes("topbar")) {
        menuType = "top";
      } else if (menuAttribute.includes("sidebar")) {
        menuType = "side";
      }
      if (menuType == "top") {
        // Remove event listeners from the current menu.
        h2MenuRemoveEventsHandler(menuWrapper);
        // Close all submenus and reset aria values.
        h2MenuCloseOpenSubmenusHandler(menuWrapper);
      } else if (menuType == "side") {
        // Remove event listeners from the current menu.
        h2MenuRemoveEventsHandler(menuWrapper);
        // Find the main menu. Remember that there can in fact be two menus nested in the container.
        var mainMenus = [];
        var menuContainer = menu.querySelector("[data-h2-menu-container]");
        var menuChildren = menuContainer.children;
        for (var i = 0; i < menuChildren.length; i++) {
          var child = menuChildren[i];
          if (child.hasAttribute("data-h2-menulist")) {
            mainMenus = mainMenus.concat(child);
          }
        }
        // Set the up/down listeners on the main menu items.
        var mainMenuItems = h2MenuGetTargetMenuItemsHandler(mainMenus);
        mainMenuItems.forEach(function(item) {
          item.removeEventListener("keydown", h2MenuUpDownArrowEvent);
          item.addEventListener("keydown", h2MenuUpDownArrowEvent);
        });
        // Set the right listener on the main menu items that have submenus.
        var mainMenuItemsWithSubmenus = h2MenuGetMenuListItemsWithSubmenusHandler(mainMenus);
        mainMenuItemsWithSubmenus.forEach(function(item) {
          item.removeEventListener("keydown", h2MenuRightArrowEvent);
          item.addEventListener("keydown", h2MenuRightArrowEvent);
        });
      }
    }
  }
}

// Left/Escape Trigger to Close Submenus
function h2MenuEscapeAndLeftArrowEvent(e) {
  var key = e.keyCode || e.which;
  var trigger = e.currentTarget;
  if (trigger.parentNode.host == null) { //  && !trigger.parentNode.host.hasAttribute('data-h2-mobile-menu-trigger')
    var triggerParent = trigger.parentNode; // a <li>
    var parentMenu = triggerParent.parentNode; // menulist
    var parentMenuWrapper = parentMenu.parentNode; // either a <li> or the menu container
    var parentMenuWrapperChildren = parentMenuWrapper.children; // parentMenu's siblings

    var menuWrapper = trigger.closest("[data-h2-menu]").parentNode.host;
    var menu = trigger.closest("[data-h2-menu]");
  } else {
    var menuWrapper = trigger.parentNode.host.parentNode.host;
    var menu = trigger.parentNode.host.parentNode.host.querySelector("[data-h2-menu]");
  }
  var mobileTrigger = menuWrapper.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]");
  
  if (key == 37 || key == 27) {
    // Prevent default key behaviour.
    e.preventDefault();
    // Set empty key variable.
    var submenuTrigger = "";
    // Check to see if trigger is a submenu item or the submenu's trigger (because this requires different DOM levels to be checked).
    if (trigger.getAttribute("role") == "menuitem") {
      // console.log("You exited on a menu item.");
      // Check to see if you're trying to close the main menu.
      if (parentMenuWrapper.hasAttribute("data-h2-menu-container")) {
        // console.log("You're trying to close the main menu.");
        if (menu.classList.contains("h2-mobile-menu-active")) {
          // Closing open main menu sub menu from parent
          if (trigger.getAttribute("aria-expanded") == "true") {
            h2MenuCloseSubmenuHandler(trigger);
          } else {
            // Remove event listeners from all menus.
            h2MenuRemoveEventsHandler(menuWrapper);
            // Close all submenus.
            h2MenuCloseOpenSubmenusHandler(menuWrapper);
            // Close the main menu and reset aria values.
            menu.classList.remove("h2-mobile-menu-active");
            // Get main menu items.
            var menuChildren = menu.querySelector("[data-h2-menu-container]").children;
            var mainMenus = [];
            for (var i = 0; i < menuChildren.length; i++) {
              var child = menuChildren[i];
              if (child.hasAttribute("data-h2-menulist")) {
                mainMenus = mainMenus.concat(child);
              }
            }
            var menuTriggers = h2MenuGetMenuListItemsWithSubmenusHandler(mainMenus);
            menuTriggers = menuTriggers.concat(mobileTrigger);
            menuTriggers.forEach(function(trigger) {
              trigger.classList.remove("h2-active");
              trigger.setAttribute("aria-expanded", false);
            });
            var documentBody = document.querySelector("body");
            // documentBody.classList.remove("h2-mobile-menu-body-lock");
            documentBody.style.overflow = "visible";
            mobileTrigger.focus();
          }
          
        }
        else if (trigger.getAttribute("aria-expanded") == "true") {
          h2MenuCloseSubmenuHandler(trigger);
        }
      } 
      else {
        var focusItem = null;
        // Handle close logic differently when on main items
        if(triggerParent.classList.contains("h2-active")) {
          
          // Set the key variables based on this context.
          for (var i = 0; i < triggerParent.children.length; i++) {
            var child = triggerParent.children[i];
            if (child.hasAttribute("data-h2-submenu-trigger")) {
              submenuTrigger = child;
            } else if (child.getAttribute("role") == "menuitem") {
              focusItem = child;
            }
          }
          // Close the submenu and focus the parent trigger.
          h2MenuCloseSubmenuHandler(submenuTrigger);
          focusItem.focus();
        } else {
          for (var i = 0; i < parentMenuWrapperChildren.length; i++) {
            var child = parentMenuWrapperChildren[i];
            if (child.hasAttribute("data-h2-submenu-trigger")) {
              submenuTrigger = child;
            } else if (child.getAttribute("role") == "menuitem") {
              focusItem = child;
            }
          }
          // Close the submenu and focus the parent trigger.
          h2MenuCloseSubmenuHandler(submenuTrigger);
          focusItem.focus();
        }
      }
    } 
    else if (trigger.hasAttribute("data-h2-submenu-trigger")) {
      // console.log("You exited on a submenu trigger.");
      // Figure out if the trigger was the parent one, or if it's one in the active menu by testing to see if the sibling submenu is active or not.
      if (triggerParent.classList.contains("h2-active")) {
        // Close the submenu and focus the parent trigger.
        h2MenuCloseSubmenuHandler(trigger);
        // submenuTrigger.focus();
      } 
      else {
        // console.log("This trigger is a trigger inside the open submenu.");
        // Check to see if you're trying to close the main menu.
        if (parentMenuWrapper.hasAttribute("data-h2-menu-container")) {
          // console.log("You're trying to close the main menu.");
          if (menu.classList.contains("h2-mobile-menu-active")) {
            // Remove event listeners from all menus.
            h2MenuRemoveEventsHandler(menuWrapper);
            // Close all submenus.
            h2MenuCloseOpenSubmenusHandler(menuWrapper);
            // Close the main menu and reset aria values.
            menu.classList.remove("h2-mobile-menu-active");
            // Get main menu items.
            var menuChildren = menu.querySelector("[data-h2-menu-container]").children;
            var mainMenus = [];
            for (var i = 0; i < menuChildren.length; i++) {
              var child = menuChildren[i];
              if (child.hasAttribute("data-h2-menulist")) {
                mainMenus = mainMenus.concat(child);
              }
            }
            var menuTriggers = h2MenuGetMenuListItemsWithSubmenusHandler(mainMenus);
            menuTriggers = menuTriggers.concat(mobileTrigger);
            menuTriggers.forEach(function(trigger) {
              trigger.classList.remove("h2-active");
              trigger.setAttribute("aria-expanded", false);
            });
            var documentBody = document.querySelector("body");
            // documentBody.classList.remove("h2-mobile-menu-body-lock");
            documentBody.style.overflow = "visible";
          }
        } 
        else {
          // console.log("You're closing a submenu.");
          // Set the key variables based on this context.
          for (var i = 0; i < parentMenuWrapperChildren.length; i++) {
            var child = parentMenuWrapperChildren[i];
            if (child.hasAttribute("data-h2-submenu-trigger")) {
              submenuTrigger = child;
            }
          }
          // Close the submenu and focus the parent trigger.
          h2MenuCloseSubmenuHandler(submenuTrigger);
          submenuTrigger.focus();
        }
      }
    }
  }
}

// Main menu tab exit trigger.
// This function closes all submenus and re-enables up/down, right, and left/escape key listeners if tab is pressed on any main menu items.
function h2MenuTabExitEvent(e) {
  var documentBody = document.querySelector("body");
  var key = e.keyCode || e.which;
  var trigger = e.currentTarget;
  if (trigger.parentNode.host != null && trigger.parentNode.host.hasAttribute("data-h2-mobile-menu-trigger")) {
    var menuWrapper = trigger.parentNode.host.parentNode.host;
  } else {
    var menuWrapper = trigger.closest("[data-h2-menu]").parentNode.host;
  }
  var menu = menuWrapper.shadowRoot.querySelector("[data-h2-menu]");
  var menuContainer = menu.querySelector("[data-h2-menu-container]");
  // If the menu is mobile activated, you need to close the main menu on tab out of the first or last items.
  if (menu.classList.contains("h2-mobile-menu-active")) {
    // Create an index of the main menu items, including the mobile trigger (this should be first in the order).
    var menuItemIndex = [];
    var menuChildren = menuContainer.children;
    var menuLists = [];
    for (var i = 0; i < menuChildren.length; i++) {
      var child = menuChildren[i];
      if (child.hasAttribute("data-h2-menulist")) {
        menuLists = menuLists.concat(child);
      }
    }
    menuItemIndex = h2MenuGetTargetMenuItemsHandler(menuLists);
    // Check to see if the item that was tabbed on is the first or last item in the list.
    var itemCount = menuItemIndex.length - 1;
    var currentIndex = menuItemIndex.indexOf(trigger);
    menuWrapper.querySelector("[slot=left]");
    // If the item was the first item and they tabbed up, close the menu and submenus.
    if (currentIndex === 0) {
      // If they tabbed up...
      // console.log("you're on the first item in the menu.");
      if (key == 9 && e.shiftKey) {
        // Remove event listeners from all menus.
        h2MenuRemoveEventsHandler(menuWrapper);
        // Close all submenus.
        h2MenuCloseOpenSubmenusHandler(menuWrapper);
        // Close the main menu.
        menu.classList.remove("h2-mobile-menu-active");
        menuItemIndex.forEach(function(trigger) {
          if (trigger.parentNode.host != null) {
            trigger.parentNode.host.classList.remove("h2-active");
            trigger.parentNode.host.setAttribute("aria-expanded", false);
          }
          trigger.classList.remove("h2-active");
          trigger.setAttribute("aria-expanded", false);
        });
        // documentBody.classList.remove("h2-mobile-menu-body-lock");
        documentBody.style.overflow = "visible";
      }
    }
    // If the item was the last menu item and they tabbed down, close the menu and submenus.
    else if (currentIndex == itemCount) {
      // If they tabbed down...
      // console.log("you're on the last item in the menu.");
      if (key == 9 && !e.shiftKey) {
        var rightOptional = menuWrapper.querySelector("[slot=right]");
        var rightOptionalHasFocusable = hasFocusableElement(rightOptional);
        if (rightOptionalHasFocusable) {
          h2MenuCloseSubmenusAndActivateMainMenuHandler(menuWrapper);
          rightOptional.removeEventListener("fcousout", rightOptionalTabExitEvent);
          rightOptional.addEventListener("focusout", rightOptionalTabExitEvent);
        }
        else {
          // Remove event listeners from all menus.
          h2MenuRemoveEventsHandler(menuWrapper);
          // Close all submenus.
          h2MenuCloseOpenSubmenusHandler(menuWrapper);
          // Close the main menu.
          menu.classList.remove("h2-mobile-menu-active");
          menuItemIndex.forEach(function(trigger) {
            if (trigger.parentNode.host != null) {
              trigger.parentNode.host.classList.remove("h2-active");
              trigger.parentNode.host.setAttribute("aria-expanded", false);
            }
            trigger.classList.remove("h2-active");
            trigger.setAttribute("aria-expanded", false);
          });
          // documentBody.classList.remove("h2-mobile-menu-body-lock");
          documentBody.style.overflow = "visible";
        }
      }
    }
    // Otherwise, tab to the next item like normal and close submenus..
    else {
      if (key == 9 && !e.shiftKey || key == 9 && e.shiftKey) {
        h2MenuCloseSubmenusAndActivateMainMenuHandler(menuWrapper);
      }
    }
  } 
  // Otherwise, tab as normal while closing submenus.
  else {
    if (key == 9 && !e.shiftKey || key == 9 && e.shiftKey) {
      h2MenuCloseSubmenusAndActivateMainMenuHandler(menuWrapper);
    }
  }
}

// Mobile menu toggle script.
// This function opens or closes the main menu when on a narrow device.
function h2MenuMobileMenuToggleEvent(e) {
  var trigger = e.currentTarget;
  var documentBody = document.querySelector("body");
  var menuWrapper = trigger.parentNode.host;
  var menu = menuWrapper.shadowRoot.querySelector("[data-h2-menu]");
  var menuContainer = menu.querySelector("[data-h2-menu-container]");
  // Get main menu items.
  var menuChildren = menuContainer.children;
  var mainMenus = [];
  for (var i = 0; i < menuChildren.length; i++) {
    var child = menuChildren[i];
    if (child.hasAttribute("data-h2-menulist")) {
      mainMenus = mainMenus.concat(child);
    }
  }
  // Close the menu.
  if (trigger.classList.contains("h2-active")) {
    // Remove event listeners from all menus.
    h2MenuRemoveEventsHandler(menuWrapper);
    // Close all submenus.
    h2MenuCloseOpenSubmenusHandler(menuWrapper);
    // Close the main menu.
    menu.classList.remove("h2-mobile-menu-active");
    var menuTriggers = h2MenuGetMenuListItemsWithSubmenusHandler(mainMenus);
    menuTriggers = menuTriggers.concat(trigger);
    menuTriggers.forEach(function(trigger) {
      trigger.classList.remove("h2-active");
      trigger.setAttribute("aria-expanded", false);
    });
    // documentBody.classList.remove("h2-mobile-menu-body-lock");
    documentBody.style.overflow = "visible";
  } else {
    // Open the main menu.
    menu.classList.add("h2-mobile-menu-active");
    trigger.classList.add("h2-active");
    trigger.setAttribute("aria-expanded", true);
    // documentBody.classList.add("h2-mobile-menu-body-lock");
    documentBody.style.overflow = "hidden";
    // Remove event listeners from all menus.
    h2MenuRemoveEventsHandler(menuWrapper);
    var resetMainMenuItems = h2MenuGetTargetMenuItemsHandler(mainMenus);
    // Re-add up/down arrow listeners, left/escape listners.
    resetMainMenuItems.forEach(function(item) {
      item.removeEventListener("keydown", h2MenuUpDownArrowEvent);
      item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);
      item.removeEventListener("keydown", h2MenuTabExitEvent);
      item.addEventListener("keydown", h2MenuUpDownArrowEvent);
      item.addEventListener("keydown", h2MenuEscapeAndLeftArrowEvent);
      item.addEventListener("keydown", h2MenuTabExitEvent);
    });
    // Get main menu items with submenus.
    var resetMainMenuItemsWithSubmenus = h2MenuGetMenuListItemsWithSubmenusHandler(mainMenus);
    // Add right arrow event listener to main menu items with submenus.
    resetMainMenuItemsWithSubmenus.forEach(function(item) {
      item.removeEventListener("keydown", h2MenuRightArrowEvent);
      item.addEventListener("keydown", h2MenuRightArrowEvent);
    });
    // Add tab listeners to tab out of the menu and close submenus.
    var resetAllMenuItems = h2MenuGetAllMenuItemsHandler(menuWrapper);
    // Add mobile trigger to main menu items.
    //resetAllMenuItems = resetAllMenuItems.concat(trigger.shadowRoot.querySelector("button"));
    resetAllMenuItems.forEach(function(item) {
      item.removeEventListener("keydown", h2MenuTabExitEvent);
      item.addEventListener("keydown", h2MenuTabExitEvent);
    });
    // resetMainMenuItems[0].focus();
  }
}

// Check if optional content passed to menu has focusable elements
// This will change TabExit behaviour
function hasFocusableElement(el) {
  var focusableElementInventory = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
  var hasFocusableElement = false;
  if(el != null) {
    // check passed element
    if (focusableElementInventory.includes(el.nodeName)) {
      hasFocusableElement = true;
    }
    //check children of passed element
    el.querySelectorAll("*").forEach(function(element) {
      // check if children are web components
      if (!!element.shadowRoot) {
        element.shadowRoot.querySelectorAll('*').forEach(function(shadowElements) {
          if (focusableElementInventory.includes(shadowElements.nodeName)) {
            hasFocusableElement = true;
          }
        });
      }
      else if (focusableElementInventory.includes(element.nodeName)) {
        hasFocusableElement = true;
      }
    });
  }
  return hasFocusableElement;
}

// Check if focus is now out of right optional content to close mobile menu
function rightOptionalTabExitEvent(e) {
  var trigger = e.currentTarget;
  var target = e.relatedTarget;
  var menuWrapper = trigger.closest("gcds-site-menu");
  var mobileTrigger = menuWrapper.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]");
  var menu = menuWrapper.shadowRoot.querySelector("[data-h2-menu]");
  if (!trigger.contains(target) && menu.classList.contains("h2-mobile-menu-active")) {
    menu.classList.remove("h2-mobile-menu-active");
    mobileTrigger.classList.remove("h2-active");
    mobileTrigger.setAttribute("aria-expanded", false);
    document.querySelector("body").style.overflow = "visible";
  }
}

// Add anchor click events to the menu items.
function h2MenuAddPageAnchor(targetMenu, hydrogenSystemVersion = "latest") {
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = targetMenu;
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    var menuItems = menuWrappers.shadowRoot.querySelectorAll("[role='menuitem']");
    if (menuItems != false && menuItems != null && menuItems != undefined) {
      menuItems.forEach(function(menuItem) {
        menuItem.removeEventListener("click", h2MenuCloseMenuOnAnchorClickEvent);
        menuItem.addEventListener("click", h2MenuCloseMenuOnAnchorClickEvent);
      });
    }
  }
}

// Add mobile menu trigger listeners.
function h2MenuAddMobileMenuTrigger(targetMenu, hydrogenSystemVersion = "latest") {
  // Use the system check function to get the appropriate menu wrappers.
  //var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  var menuWrappers = targetMenu;
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    var mobileTriggers = menuWrappers.shadowRoot.querySelectorAll("[data-h2-mobile-menu-trigger]");
    if (mobileTriggers != false && mobileTriggers != null && mobileTriggers != undefined) {
      mobileTriggers.forEach(function(mobileTrigger) {
        mobileTrigger.removeEventListener("click", h2MenuMobileMenuToggleEvent);
        mobileTrigger.addEventListener("click", h2MenuMobileMenuToggleEvent);
      });
    }
  }
}

function h2MenuAddUpDownArrowsToMainMenuItems(targetMenu, hydrogenSystemVersion = "latest") {
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = targetMenu;
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    // Set an empty variable for the main menus.
    var mainMenus = [];
    // Find the main menus inside of the menu container.
    var menuChildren = menuWrappers.shadowRoot.querySelector("[data-h2-menu-container]").children;
    for (var i = 0; i < menuChildren.length; i++) {
      var child = menuChildren[i];
      if (child.hasAttribute("data-h2-menulist")) {
        mainMenus = mainMenus.concat(child);
      }
    }
    // Use the main menus to get all menu items.
    if (mainMenus != false && mainMenus != null && mainMenus != undefined) {
      var mainMenuItems = h2MenuGetTargetMenuItemsHandler(mainMenus);
      // Loop through each menu item and add the event listner.
      if (mainMenuItems != false && mainMenuItems != null && mainMenuItems != undefined) {
        mainMenuItems.forEach(function(item) {
          item.removeEventListener("keydown", h2MenuUpDownArrowEvent);
          item.addEventListener("keydown", h2MenuUpDownArrowEvent);
        });
      }
    }
  }
}

function h2MenuTabOrder(targetMenu, hydrogenSystemVersion = "latest") {
  // Use the system check function to get the appropriate menu wrappers.
  // var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  var menuWrappers = targetMenu;
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    var allMenuItems = h2MenuGetAllMenuItemsHandler(menuWrappers);
    if (allMenuItems != false && allMenuItems != null && allMenuItems != undefined) {
      allMenuItems.forEach(function(item) {
        item.removeEventListener("keydown", h2MenuTabExitEvent);
        item.addEventListener("keydown", h2MenuTabExitEvent);
      });
    }
  }
}

function h2MenuAddRightArrowToMainMenuItems(targetMenu, hydrogenSystemVersion = "latest") {
  // Use the system check function to get the appropriate menu wrappers.
  //var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  var menuWrappers = targetMenu;
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    // Set an empty variable for the main menus.
    var mainMenus = [];
    // Find the main menus inside of the menu container.
    var menuChildren = menuWrappers.shadowRoot.querySelector("[data-h2-menu-container]").children;
    for (var i = 0; i < menuChildren.length; i++) {
      var child = menuChildren[i];
      if (child.hasAttribute("data-h2-menulist")) {
        mainMenus = mainMenus.concat(child);
      }
    }
    // Use the main menus to get all menu items that have submenus.
    if (mainMenus != false && mainMenus != null && mainMenus != undefined) {
      var mainMenuItemsWithSubmenu = h2MenuGetMenuListItemsWithSubmenusHandler(mainMenus);
      // Loop through each menu item and add the event listner.
      if (mainMenuItemsWithSubmenu != false && mainMenuItemsWithSubmenu != null && mainMenuItemsWithSubmenu != undefined) {
        mainMenuItemsWithSubmenu.forEach(function(item) {
          item.removeEventListener("keydown", h2MenuRightArrowEvent);
          item.addEventListener("keydown", h2MenuRightArrowEvent);
        });
      }
    }

  }
}

function h2MenuEnableSubmenuTriggers(targetMenu, hydrogenSystemVersion = "latest") {
  // Use the system check function to get the appropriate menu wrappers.
  // var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  var menuWrappers = targetMenu;
  // Get the submenu triggers from all relevant menu wrappers.
  if (menuWrappers != false) {
    // Set an empty array for the submenu triggers.
    var submenuTriggers = [];
    // Find all the submenu triggers inside the current wrapper.
    var wrapperTriggers = menuWrappers.shadowRoot.querySelectorAll("[data-h2-submenu-trigger]");
    if (wrapperTriggers != false) {
      wrapperTriggers.forEach(function(trigger) {
        submenuTriggers = submenuTriggers.concat(trigger);
      });
    }
    // Add the event listeners to the submenu triggers.
    if (submenuTriggers != false) {
      submenuTriggers.forEach(function(item) {
        item.removeEventListener("click", h2MenuToggleSubmenuEvent);
        item.addEventListener("click", h2MenuToggleSubmenuEvent);
      });
    }
  }
}

const I18N = {
    "en": {
        navLabel: "Main navigation - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.",
        mobileTriggerClose: "Close",
        mobileTriggerLabel: "Use the enter key to open or close the main menu.",
        submenuButtonText: "Open or close {$t}'s submenu."
    },
    "fr": {
        navLabel: "Navigation principale - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.",
        mobileTriggerClose: "Fermer",
        mobileTriggerLabel: "Utiliser la touche Entrée pour ouvrir ou fermer le menu principal.",
        submenuButtonText: "Ouvrir ou fermer l'élément du sous-menu {$t}."
    }
};

const gcdsSiteMenuCss = ".h2-mobile-menu-body-lock{overflow:hidden}@media screen and (min-width: 64em){.h2-mobile-menu-body-lock{overflow:visible}}:host([data-h2-menu-wrapper]) [data-h2-mobile-menu-trigger]{position:fixed;bottom:0;left:50%;transform:translate(-50%, 0);z-index:10000000}@media screen and (min-width: 64em){:host([data-h2-menu-wrapper]) [data-h2-mobile-menu-trigger]{display:none}}:host([data-h2-menu-wrapper]) [data-h2-mobile-menu-trigger] [data-h2-mobile-menu-trigger-open-label]{display:inline}:host([data-h2-menu-wrapper]) [data-h2-mobile-menu-trigger] [data-h2-mobile-menu-trigger-close-label]{display:none}:host([data-h2-menu-wrapper]) [data-h2-mobile-menu-trigger].h2-active [data-h2-mobile-menu-trigger-open-label]{display:none}:host([data-h2-menu-wrapper]) [data-h2-mobile-menu-trigger].h2-active [data-h2-mobile-menu-trigger-close-label]{display:inline}:host([menu-mobile-layout*=drawer]) [data-h2-menu]{background:#0a0a14;display:none;height:100vh;top:0;overflow:auto}:host([menu-mobile-layout*=toolbar]) [data-h2-menu]{bottom:0}:host([menu-mobile-layout*=drawer]) [data-h2-menu],:host([menu-mobile-layout*=toolbar]) [data-h2-menu]{position:fixed;left:0;width:100vw;z-index:1000000}:host([data-h2-menu-wrapper]) [data-h2-menu] *{box-sizing:border-box}:host([data-h2-menu-wrapper]) [data-h2-menu] ::selection{background:#F7B452 !important;color:#0a0a0c !important}:host([data-h2-menu-wrapper]) [data-h2-menu] blockquote,:host([data-h2-menu-wrapper]) [data-h2-menu] dl,:host([data-h2-menu-wrapper]) [data-h2-menu] fieldset,:host([data-h2-menu-wrapper]) [data-h2-menu] figure{margin:0}:host([data-h2-menu-wrapper]) [data-h2-menu] img,:host([data-h2-menu-wrapper]) [data-h2-menu] iframe{max-width:100%}:host([data-h2-menu-wrapper]) [data-h2-menu] .h2-active-block{display:block}:host([data-h2-menu-wrapper]) [data-h2-menu] .h2-active-inline{display:inline}:host([data-h2-menu-wrapper]) [data-h2-menu] .h2-active-inline-block{display:inline-block}:host([data-h2-menu-wrapper]) [data-h2-menu] .h2-hidden{display:none}:host([data-h2-menu-wrapper]) [data-h2-menu] .h2-mobile-lock{overflow:hidden}@media screen and (min-width: 64em){:host([data-h2-menu-wrapper]) [data-h2-menu] .h2-mobile-lock{overflow:visible}}:host([data-h2-menu-wrapper]) [data-h2-menu] h1,:host([data-h2-menu-wrapper]) [data-h2-menu] h2,:host([data-h2-menu-wrapper]) [data-h2-menu] h3,:host([data-h2-menu-wrapper]) [data-h2-menu] h4,:host([data-h2-menu-wrapper]) [data-h2-menu] h5,:host([data-h2-menu-wrapper]) [data-h2-menu] h6,:host([data-h2-menu-wrapper]) [data-h2-menu] p{font-family:sans-serif;font-weight:normal;line-height:1.5;margin:0}:host([data-h2-menu-wrapper]) [data-h2-menu] h1{font-size:calc(calc(calc(calc(calc(1rem*1.333)*1.333)*1.333)*1.333)*1.333)}:host([data-h2-menu-wrapper]) [data-h2-menu] h2{font-size:calc(calc(calc(calc(1rem*1.333)*1.333)*1.333)*1.333)}:host([data-h2-menu-wrapper]) [data-h2-menu] h3{font-size:calc(calc(calc(1rem*1.333)*1.333)*1.333)}:host([data-h2-menu-wrapper]) [data-h2-menu] h4{font-size:calc(calc(1rem*1.333)*1.333)}:host([data-h2-menu-wrapper]) [data-h2-menu] h5{font-size:calc(1rem*1.333)}:host([data-h2-menu-wrapper]) [data-h2-menu] h6{font-size:1rem}:host([data-h2-menu-wrapper]) [data-h2-menu] p,:host([data-h2-menu-wrapper]) [data-h2-menu] div{font-size:1rem}:host([data-h2-menu-wrapper]) [data-h2-menu] span,:host([data-h2-menu-wrapper]) [data-h2-menu] em,:host([data-h2-menu-wrapper]) [data-h2-menu] strong,:host([data-h2-menu-wrapper]) [data-h2-menu] a{color:inherit;font-family:inherit;font-size:inherit;line-height:1.5}:host([data-h2-menu-wrapper]) [data-h2-menu] strong{font-weight:600}:host([data-h2-menu-wrapper]) [data-h2-menu] a{text-decoration:underline;transition:color 0.2s ease}@media (hover: hover){:host([data-h2-menu-wrapper]) [data-h2-menu] a:hover{color:#5CFFEE !important;transition:color 0.2s ease}}:host([data-h2-menu-wrapper]) [data-h2-menu] ul,:host([data-h2-menu-wrapper]) [data-h2-menu] ol{font-family:sans-serif;margin:0;padding-left:1.5rem}:host([data-h2-menu-wrapper]) [data-h2-menu] ul li,:host([data-h2-menu-wrapper]) [data-h2-menu] ol li{color:inherit;font-family:inherit;font-size:inherit;line-height:1.5;margin-bottom:calc(1.5rem / 2)}:host([data-h2-menu-wrapper]) [data-h2-menu] ul li:last-child,:host([data-h2-menu-wrapper]) [data-h2-menu] ol li:last-child{margin-bottom:0}:host([data-h2-menu-wrapper]) [data-h2-menu] ul li>ul,:host([data-h2-menu-wrapper]) [data-h2-menu] ol li>ul{margin-top:calc(1.5rem / 2)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-focus]:focus{box-shadow:-1px -1px 0 #9D5CFF, 0 -1px 0 #9D5CFF, 1px -1px 0 #9D5CFF, 1px 0 0 #9D5CFF, 1px 1px 0 #9D5CFF, 0 1px 0 #9D5CFF, -1px 1px 0 #9D5CFF, -1px 0 0 #9D5CFF;outline:none}:host([menu-mobile-layout*=toolbar]) [data-h2-menu]{background:rgba(10, 10, 20, 1)}@media screen and (min-width: 64em){:host([menu-mobile-layout*=drawer]) [data-h2-menu]{background:rgba(10, 10, 20, 0.7)}:host([menu-mobile-layout*=toolbar]) [data-h2-menu]{background:rgba(10, 10, 20, 0.7)}}:host([data-h2-menu-wrapper]) [data-h2-menu].h2-mobile-menu-active{display:block}:host([data-h2-menu-wrapper]) [data-h2-menu] *{vertical-align:middle}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menulist]{list-style:none;margin:0;padding:0}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menulist] li{margin:0}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]{width:100%}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]{display:flex;justify-content:space-evenly}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:last-child{padding-bottom:0}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:last-child{padding-bottom:6rem}@media screen and (min-width: 64em){:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:last-child{padding-bottom:0}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]{display:block}}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-toolbar-parent]{display:none}@media screen and (min-width: 64em){:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-toolbar-parent]{display:block}}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li{position:relative}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li{width:30%}@media screen and (min-width: 64em){:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li{width:auto}}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li>[role=menuitem]{display:block;font-size:1rem;line-height:1.5;margin:0 1.5rem;padding-top:1.5rem;padding-right:calc(1.5rem * 3);padding-bottom:1.5rem}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li>[role=menuitem]{display:block;font-size:1rem;line-height:1.5;margin:0 0.5rem;padding-top:1.5rem;padding-bottom:1.5rem}@media screen and (min-width: 64rem){:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li>[role=menuitem]{display:block;font-size:1rem;line-height:1.5;margin:0 1.5rem;padding-top:1.5rem;padding-right:calc(1.5rem * 3);padding-bottom:1.5rem}}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li [data-h2-submenu-trigger]{background:none;border:none;cursor:pointer;line-height:1.5;padding:1.5rem calc(1.5rem * 1.5);position:absolute;top:1px;right:1.5rem}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li [data-h2-submenu-trigger]{background:none;border:none;cursor:pointer;line-height:1.5;padding:1.5rem calc(1.5rem * 1.5);position:absolute;top:1px;right:0.5rem}@media screen and (min-width: 64rem){:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li [data-h2-submenu-trigger]{background:none;border:none;cursor:pointer;line-height:1.5;padding:1.5rem calc(1.5rem * 1.5);position:absolute;top:1px;right:1.5rem}}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li [data-h2-submenu-trigger] [data-h2-submenu-trigger-accessibility-text]{height:1px;overflow:hidden;position:absolute;top:-100vw;left:-100vw;width:1px}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li [data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon]{display:block;font-size:1rem;line-height:1.5}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li [data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{display:none;font-size:1rem;line-height:1.5}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li.h2-active>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon]{display:none}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li.h2-active>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{display:block}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li.h2-active>[data-h2-menulist]{display:block}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li.h2-active>[data-h2-menulist]{position:fixed;left:3rem;right:3rem;bottom:7rem;height:auto;display:block}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li.h2-active>[data-h2-menulist]>li.h2-active>[data-h2-menulist]{position:relative;left:0;right:0;bottom:0;height:auto;display:block}@media screen and (min-width: 64rem){:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li.h2-active>[data-h2-menulist]{display:block;position:relative;bottom:auto;left:0;right:inherit;bottom:inherit}}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li [data-h2-menulist]{box-shadow:inset 0 5px 10px -5px rgba(0, 0, 0, 0.3);display:none;margin-top:0;text-align:left}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[role=menuitem]{color:#FFFFFF}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon],:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{color:#FFFFFF}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li:not(:first-child)>[role=menuitem]{border-top:1px solid #613DC1}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]+[data-h2-menulist]>li>[role=menuitem]{border-top:1px solid #613DC1}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>a:hover{color:#8ffff3}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-submenu-trigger]{background-color:rgba(255, 255, 255, 0.1)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]{background-color:#282832}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li:not(:first-child)>[role=menuitem]{border-top-color:rgba(255, 255, 255, 0.3);border-top-style:solid;border-top-width:1px}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{color:#FFFFFF;margin-left:calc(1.5rem * 1.5)}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li{width:auto}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon],:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{color:#FFFFFF}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>a:hover{color:#8ffff3}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger]{background-color:rgba(255, 255, 255, 0.1)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]{background-color:#1d1d24}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li:not(:first-child)>[role=menuitem]{border-top-color:rgba(255, 255, 255, 0.3);border-top-style:solid;border-top-width:1px}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{color:#FFFFFF;margin-left:calc(1.5rem * 2)}:host([menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li{width:auto}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon],:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{color:#FFFFFF}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>a:hover{color:#8ffff3}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger]{background-color:rgba(255, 255, 255, 0.1)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]{background-color:#111116}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li:not(:first-child)>[role=menuitem]{border-top-color:rgba(255, 255, 255, 0.3);border-top-style:solid;border-top-width:1px}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{color:#FFFFFF;margin-left:calc(1.5rem * 2.5)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon],:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{color:#FFFFFF}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>a:hover{color:#8ffff3}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger]{background-color:rgba(255, 255, 255, 0.1)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]{background-color:#060608}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li:not(:first-child)>[role=menuitem]{border-top-color:rgba(255, 255, 255, 0.3);border-top-style:solid;border-top-width:1px}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{color:#FFFFFF;margin-left:calc(1.5rem * 3)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon],:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{color:#FFFFFF}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>a:hover{color:#8ffff3}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger]{background-color:rgba(255, 255, 255, 0.1)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]{background-color:black}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li:not(:first-child)>[role=menuitem]{border-top-color:rgba(255, 255, 255, 0.3);border-top-style:solid;border-top-width:1px}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{color:#FFFFFF;margin-left:calc(1.5rem * 3.5)}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon],:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{color:#FFFFFF}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>a:hover{color:#8ffff3}:host([data-h2-menu-wrapper]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-submenu-trigger]{background-color:rgba(255, 255, 255, 0.1)}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container] [data-optional-left]{margin:1.5rem}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container] [data-optional-right]{margin:1.5rem}@media screen and (min-width: 64em){:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container] [data-optional-left]{margin:0}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container] [data-optional-right]{margin:0}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=topbar]) [data-h2-menu]{display:block;height:auto;overflow:visible;position:relative;width:100%}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]{max-width:80rem;margin-left:auto;margin-right:auto}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li{display:inline-block;margin-left:-4px;position:relative}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li:not(:last-child){border-right:1px solid #613DC1}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[role=menuitem]{border:none !important;display:inline-block;margin:0;padding:calc(1.5rem / 1.5) 1.5rem}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-submenu-trigger]{padding:calc(1.5rem / 1.5) 1.5rem;position:relative;top:auto;right:auto}:host([menu-desktop-layout*=topbar][menu-mobile-layout*=toolbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]{max-height:70vh;min-width:25rem;overflow:auto;position:absolute;left:auto;width:25vw}:host([menu-desktop-layout*=topbar][menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]{max-height:70vh;min-width:25rem;overflow:auto;position:absolute;width:25vw}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li [data-h2-menulist] li>[role=menuitem]{margin:0 1.5rem;padding:calc(1.5rem / 1.5) calc(1.5rem * 3) calc(1.5rem / 1.5) 0}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li [data-h2-menulist] li>[data-h2-submenu-trigger]{padding:calc(1.5rem / 1.5) 1.5rem;right:1.5rem}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{margin-left:calc(1.5rem * 1.5)}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{margin-left:calc(1.5rem * 2)}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{margin-left:calc(1.5rem * 2.5)}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[data-h2-menulist]>li>[role=menuitem]{margin-left:calc(1.5rem * 3)}}[data-optional-left]{color:#fff}[data-optional-right]{color:#fff}@media screen and (min-width: 64em){:host([menu-desktop-layout*=topbar][menu-sticky]) [data-h2-menu]{position:sticky;top:0;left:0}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container]{display:flex}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container] [data-h2-menulist]{width:auto}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container] [data-optional-left]{display:grid;align-content:center;margin-left:1rem}:host([menu-desktop-layout*=topbar]) [data-h2-menu] [data-h2-menu-container] [data-optional-right]{display:grid;align-content:center;margin-right:1rem}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=topbar][menu-alignment*=center]) [data-h2-menu] [data-h2-menu-container]{justify-content:space-between}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=topbar][menu-alignment*=right]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]{margin-left:auto}:host([menu-desktop-layout*=topbar][menu-alignment*=right]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]{left:auto;right:0}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=topbar][menu-alignment*=split]) [data-h2-menu] [data-h2-menu-container]{display:flex;flex-direction:row;justify-content:space-between}:host([menu-desktop-layout*=topbar][menu-alignment*=split]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:first-of-type{margin-right:auto}:host([menu-desktop-layout*=topbar][menu-alignment*=split]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:first-child{width:auto}:host([menu-desktop-layout*=topbar][menu-alignment*=split]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:last-child{text-align:right}:host([menu-desktop-layout*=topbar][menu-alignment*=split]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:last-child>li>[data-h2-menulist]{right:0}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=sidebar]) [data-h2-menu]{display:block;height:100vh;overflow:auto;position:fixed;top:var(--page-top-offset, 0);left:0;right:auto;width:25%}:host([menu-desktop-layout*=sidebar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li{position:relative}:host([menu-desktop-layout*=sidebar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li>[role=menuitem]{padding:calc(1rem) calc(1.5rem * 3) calc(1rem) 0}:host([menu-desktop-layout*=sidebar]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist] li>[data-h2-submenu-trigger]{padding:calc(1rem) 1.5rem;top:1px}:host([menu-desktop-layout*=sidebar]) [data-h2-menu] [data-h2-menu-container] [data-optional-left]{margin:1.5rem}:host([menu-desktop-layout*=sidebar]) [data-h2-menu] [data-h2-menu-container] [data-optional-right]{margin:1.5rem}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=sidebar]) [data-h2-menu]+::slotted(div),:host([menu-desktop-layout*=sidebar]) [data-h2-menu]+::slotted(main){margin-left:25%;overflow-x:hidden;width:75%}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=sidebar][menu-alignment*=right]) [data-h2-menu]{top:0;left:auto;right:0}}@media screen and (min-width: 64em){:host([menu-desktop-layout*=sidebar][menu-alignment*=right]) [data-h2-menu]+::slotted(div),:host([menu-desktop-layout*=sidebar][menu-alignment*=right]) [data-h2-menu]+::slotted(main){margin-left:auto;margin-right:25%;overflow-x:hidden;width:75%}}";

let GcdsSiteMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Menu alignment
     */
    this.menuAlignment = 'left';
    /**
     * Sticky navigation flag
     */
    this.menuPosition = 'static';
  }
  validateDesktopLayout(newValue) {
    if (newValue != 'topbar' && newValue != 'sidebar') {
      this.menuDesktopLayout = 'topbar';
    }
  }
  validateMobileLayout(newValue) {
    if (newValue != 'drawer' && newValue != 'toolbar') {
      this.menuMobileLayout = 'drawer';
    }
  }
  /**
   * Method to apply multiple attriibutes to an element
   * @param el - HTML element
   * @param attrs - Object of attributes and values
   */
  setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  /**
   * Method to apply sub menu trigger button
   * @param el - <a> tag
   */
  appendSubMenuButton(el) {
    // Create button element
    var button = document.createElement("button");
    this.setAttributes(button, { "aria-expanded": "false", "data-h2-submenu-trigger": "" });
    // Create the accessibility text span
    var a11yText = document.createElement("span");
    //a11yText.innerHTML = `Open or close ${el.textContent}'s submenu.`;
    a11yText.innerHTML = I18N[this.lang].submenuButtonText.replace('{$t}', el.textContent);
    a11yText.setAttribute("data-h2-submenu-trigger-accessibility-text", "");
    // Create the add icon span
    var addIcon = document.createElement("span");
    this.setAttributes(addIcon, { "aria-hidden": "true", "data-h2-submenu-trigger-add-icon": "" });
    addIcon.textContent = "+";
    // Create the remove icon span
    var removeIcon = document.createElement("span");
    this.setAttributes(removeIcon, { "aria-hidden": "true", "data-h2-submenu-trigger-remove-icon": "" });
    removeIcon.textContent = "-";
    // Put it all together and append button to page
    button.append(a11yText, addIcon, removeIcon);
    el.parentNode.append(button);
  }
  async configureMenu() {
    var mainMenus = [];
    var elementChildren = this.el.children;
    // Loop through slotted elements
    for (var i = 0; i < elementChildren.length; i++) {
      // Grab menus
      if (elementChildren[i].nodeName == "UL") {
        var mainMenus = mainMenus.concat(elementChildren[i]);
      }
    }
    // Assign values to menus and child elements
    for (var i = 0; i < mainMenus.length; i++) {
      // Apply attributes at the highest level
      this.setAttributes(mainMenus[i], { "data-h2-menulist": "", "role": "menu" });
      // Apply attributes to any submenu ul
      mainMenus[i].querySelectorAll("ul").forEach((list) => {
        this.setAttributes(list, { "data-h2-menulist": "", "role": "menu" });
      });
      // Apply attrubutes to all li
      mainMenus[i].querySelectorAll("li").forEach((listitem) => {
        listitem.setAttribute("role", "presentation");
        for (var x = 0; x < listitem.children.length; x++) {
          if (listitem.children[x].nodeName == "A") {
            this.setAttributes(listitem.children[x], { "role": "menuitem" });
          }
          else if (listitem.children[x].nodeName != "BUTTON" && listitem.children[x].nodeName != "UL") {
            this.setAttributes(listitem.children[x], { "role": "menuitem", "tabindex": "0" });
          }
        }
      });
      // Loop through each menuitem tag
      mainMenus[i].querySelectorAll("[role=menuitem]").forEach((menuitem) => {
        // Apply role attribute
        //menuitem.setAttribute("role", "menuitem");
        // Check if a tag has siblings
        if (menuitem.parentNode.children.length > 1) {
          // Apply attributes for sub menus
          this.setAttributes(menuitem, { "aria-expanded": "false", "aria-haspopup": "true" });
          // Append sub menu button trigger
          this.appendSubMenuButton(menuitem);
          if (menuitem.closest("ul").parentNode.nodeName == "li") {
            menuitem.setAttribute("tabindex", "-1");
          }
        }
      });
    }
  }
  async componentWillLoad() {
    // Define lang attribute
    if (!this.el.getAttribute("lang")) {
      if (document.documentElement.getAttribute("lang") == "en" || !document.documentElement.getAttribute("lang")) {
        this.lang = "en";
      }
      else {
        this.lang = "fr";
      }
    }
    else if (this.el.getAttribute("lang") == "en") {
      this.lang = "en";
    }
    else {
      this.lang = "fr";
    }
    this.validateDesktopLayout(this.menuDesktopLayout);
    this.validateMobileLayout(this.menuMobileLayout);
    // Add required attributes to slotted <ul>
    await this.configureMenu();
  }
  componentDidLoad() {
    var menus = [];
    // Add ULs to shadow DOM
    var elementChildren = this.el.children;
    // Loop through slotted elements
    for (var i = 0; i < elementChildren.length; i++) {
      // Act only on ul
      if (elementChildren[i].nodeName == "UL") {
        menus = menus.concat(elementChildren[i]);
      }
    }
    for (var i = 0; i < menus.length; i++) {
      var container = this.el.shadowRoot.querySelector("[data-h2-menu-container]");
      container.insertBefore(menus[i], container.querySelector('[data-optional-right]'));
    }
    var hostElement = this.el;
    var mobileLayout = this.menuMobileLayout;
    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
    // Check if loaded in mobile size
    if (!mediaQuery.matches && mobileLayout == "drawer") {
      document.querySelector("body").style.paddingBottom = "3rem";
    }
    // Register event listener
    mediaQuery.addEventListener("change", function (e) {
      if (e.matches) {
        // Set mobile menu to default if window size changes to desktop
        var elementNav = hostElement.shadowRoot.querySelector('nav');
        var mobileTrigger = hostElement.shadowRoot.querySelector('[data-h2-mobile-menu-trigger]');
        if (elementNav.classList.contains("h2-mobile-menu-active")) {
          elementNav.classList.remove("h2-mobile-menu-active");
          mobileTrigger.classList.remove("h2-active");
          mobileTrigger.setAttribute("aria-expanded", "false");
          document.body.style.removeProperty("overflow");
        }
        if (mobileLayout == "drawer") {
          document.querySelector("body").style.removeProperty("padding-bottom");
        }
      }
      else {
        if (mobileLayout == "drawer") {
          document.querySelector("body").style.paddingBottom = "3rem";
        }
      }
    });
    h2MenuAddUpDownArrowsToMainMenuItems(this.el);
    h2MenuTabOrder(this.el);
    h2MenuAddRightArrowToMainMenuItems(this.el);
    h2MenuEnableSubmenuTriggers(this.el);
    h2MenuAddMobileMenuTrigger(this.el);
    h2MenuAddPageAnchor(this.el);
  }
  render() {
    const sticky = this.menuPosition == 'sticky' ? true : false;
    const mobileMenutask = this.menuMobileLayout == 'drawer' ?
      h("gcds-button", { "aria-expanded": "false", "aria-label": I18N[this.lang].mobileTriggerLabel, "aria-haspopup": "true", "data-h2-mobile-menu-trigger": true, type: "button", role: "button", task: "primary" }, h("span", { "data-h2-mobile-menu-trigger-open-label": true }, "Menu"), h("span", { "data-h2-mobile-menu-trigger-close-label": true }, I18N[this.lang].mobileTriggerClose))
      :
        '';
    return (h(Host, { "data-h2-menu-wrapper": true, "menu-desktop-layout": this.menuDesktopLayout, "menu-mobile-layout": this.menuMobileLayout, "menu-sticky": sticky, lang: this.lang }, mobileMenutask, h("nav", { "aria-label": I18N[this.lang].navLabel, "data-h2-menu": true }, h("div", { "data-h2-menu-container": true }, h("div", { "data-optional-left": true }, h("slot", { name: "left" })), h("slot", null), h("div", { "data-optional-right": true }, h("slot", { name: "right" })))), h("slot", { name: "main" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "menuDesktopLayout": ["validateDesktopLayout", "validateMobileLayout"]
  }; }
};
GcdsSiteMenu.style = gcdsSiteMenuCss;

export { GcdsSiteMenu as gcds_site_menu };
