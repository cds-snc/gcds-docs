// Hydrogen / Component / Scripts

// ===========================================================================================

// Remove all event listeners from all menus.
function h2MenuRemoveEventsHandler_VERSION(menuWrapper) {
  var menu = menuWrapper.querySelector("[data-h2-menu]");
  var allMenuItems = menu.querySelectorAll("*");
  allMenuItems.forEach(function(item) {
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    item.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
  });
  var menuTriggers = menuWrapper.querySelectorAll("[data-h2-mobile-menu-trigger]");
  menuTriggers.forEach(function(trigger) {
    trigger.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    trigger.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    trigger.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
  });
}

// Close all open submenus.
function h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper) {
  var menu = menuWrapper.querySelector("[data-h2-menu]");
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
function h2MenuCloseSubmenusAndActivateMainMenuHandler_VERSION(menuWrapper) {
  var menu = menuWrapper.querySelector("[data-h2-menu]");
  var menuContainer = menu.querySelector("[data-h2-menu-container]");
  var mobileTrigger = menuWrapper.querySelector("[data-h2-mobile-menu-trigger]");
  // Remove event listeners from all menus.
  h2MenuRemoveEventsHandler_VERSION(menuWrapper);
  // Close all submenus.
  h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
  // Get main menu items.
  var menuChildren = menuContainer.children;
  var mainMenus = [];
  for (var i = 0; i < menuChildren.length; i++) {
    var child = menuChildren[i];
    if (child.hasAttribute("data-h2-menulist")) {
      mainMenus = mainMenus.concat(child);
    }
  }
  var resetMainMenuItems = h2MenuGetTargetMenuItemsHandler_VERSION(mainMenus);
  // If the main menu is mobile activated, add the mobile menu trigger.
  if (menu.classList.contains("h2-mobile-menu-active")) {
    resetMainMenuItems = resetMainMenuItems.concat(mobileTrigger);
  }
  // Re-add up/down arrow listeners, left/escape listners.
  resetMainMenuItems.forEach(function(item) {
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    item.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuRightArrowEvent_VERSION);
  });
}

// Get all menu items inside the entire menu.
function h2MenuGetAllMenuItemsHandler_VERSION(menuWrapper) {
  // Get the mobile menu trigger.
  var mobileMenuTrigger = menuWrapper.querySelector("[data-h2-mobile-menu-trigger]");
  // Create an empty array that we can add menu items to.
  var menuItems = [];
  // Check to see if the menu is mobile activated, and if it is, add the mobile trigger to the array.
  if (menuWrapper.querySelector("[data-h2-menu]").classList.contains("h2-mobile-menu-active")) {
    menuItems = menuItems.concat(mobileMenuTrigger);
  }
  // Get all list items inside of the menu.
  var menuListItems = menuWrapper.querySelectorAll("li");
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
function h2MenuGetTargetMenuItemsHandler_VERSION(menuLists) {
  // Set a false variable indicating the the mobile menu is inactive by default.
  var isMenuMobileActivated = false;
  // Set an empty variable for the mobile menu trigger.
  var mobileMenuTrigger = null;
  // Set an empty array for the remaining menu items.
  var menuItems = [];
  // Loop through the array of menu lists that have been passed.
  menuLists.forEach(function(list) {
    // Check to see if the parentNode is the menu container AND that the data-h2-menu element is mobile activated. If it is, set the activated variable to true, and add the mobile trigger element.
    if (list.parentNode.hasAttribute("data-h2-menu-container") == true && list.parentNode.parentNode.classList.contains("h2-mobile-menu-active")) {
      isMenuMobileActivated = true;
      mobileMenuTrigger = list.closest("[data-h2-menu-wrapper_VERSION]").querySelector("[data-h2-mobile-menu-trigger]");
    }
    // Add the submenu trigger.
    if (list.parentNode.tagName == "LI") {
      var parentNodeListItems = list.parentNode.children;
      var submenuTrigger = null;
      for (var i = 0; i < parentNodeListItems.length; i++) {
        var child = parentNodeListItems[i];
        if (child.hasAttribute("data-h2-submenu-trigger")) {
          submenuTrigger = child;
        }
      }
      menuItems = menuItems.concat(submenuTrigger);
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
  // Return the menu items to the function.
  return menuItems;
}

// Get all menu items with submenus inside of a menulist.
function h2MenuGetMenuListItemsWithSubmenusHandler_VERSION(menuLists) {
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
      // Check to see if the item's children contain a menulist.
      var menuList = false;
      for (var i = 0; i < childItemChildren.length; i++) {
        var child = childItemChildren[i];
        if (child.hasAttribute("data-h2-menulist")) {
          menuList = true;
        }
      }
      if (menuList = true) {
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
function h2MenuOpenSubmenuHandler_VERSION(trigger) {
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
  var menuWrapper = trigger.closest("[data-h2-menu-wrapper_VERSION]");
  h2MenuRemoveEventsHandler_VERSION(menuWrapper);
  // Find submenu and it's items.
  var submenuItems = h2MenuGetTargetMenuItemsHandler_VERSION(submenu);
  // Clean and add event listeners.
  submenuItems.forEach(function(item) {
    item.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
  });
  // Focus first menu item.
  submenuItems[0].focus();
}

// Close script.
function h2MenuCloseSubmenuHandler_VERSION(trigger) {
  // Figure out which element is being used as the trigger and set the values appropriately to open the submenu.
  var menuItem = "";
  var submenuTrigger = "";
  var submenu = "";
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
      submenu = child;
    }
    if (child.getAttribute("role") == "menuitem") {
      menuItem = child;
    }
  }
  // Remove all event listeners.
  var menuWrapper = trigger.closest("[data-h2-menu-wrapper_VERSION]");
  h2MenuRemoveEventsHandler_VERSION(menuWrapper);
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
    parentMenuItems = h2MenuGetTargetMenuItemsHandler_VERSION(mainMenus);
  } else if (parentMenuWrapper.tagName == "LI") {
    var parentMenuArray = [];
    parentMenuArray = parentMenuArray.concat(parentMenu);
    parentMenuItems = h2MenuGetTargetMenuItemsHandler_VERSION(parentMenuArray);
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
    item.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    item.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
    item.addEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
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
function h2MenuToggleSubmenuEvent_VERSION(e) {
  var trigger = e.currentTarget;
  // Check if the parent <li> is active or not.
  var triggerParent = trigger.closest("li");
  if (triggerParent.classList.contains("h2-active")) {
    h2MenuCloseSubmenuHandler_VERSION(trigger);
  } else {
    h2MenuOpenSubmenuHandler_VERSION(trigger);
  }
}

// Right Trigger to Open Submenu
function h2MenuRightArrowEvent_VERSION(e) {
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
      h2MenuOpenSubmenuHandler_VERSION(trigger);
    }
  }
}

// Up/down arrow loop.
function h2MenuUpDownArrowEvent_VERSION(e) {
  // Assign the trigger and find it's menu. To do this, we need to check to see if the trigger is the mobile menu trigger, because if it is, we need to check different DOM elements than a standard menu trigger.
  var trigger = e.currentTarget;
  var menuLists = [];
  if (trigger.hasAttribute("data-h2-mobile-menu-trigger")) {
    var menus = trigger.parentNode.querySelector("[data-h2-menu-container]").children;
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
  var menuListItems = h2MenuGetTargetMenuItemsHandler_VERSION(menuLists);
  // Get the keycode of the event.
  var key = e.keyCode || e.which;
  // Get the number of items in the menu.
  var itemCount = menuListItems.length - 1;
  // If the key pressed is down, move focus to the next item.
  if (key == 40) {
    e.preventDefault();
    var currentFocus = document.activeElement;
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
    var currentFocus = document.activeElement;
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
function h2MenuCloseMenuOnAnchorClickEvent_VERSION(e) {
  var link = e.currentTarget;
  // Check to see if the menu is active.
  var menu = link.closest("[data-h2-menu]");
  var menuWrapper = menu.closest("[data-h2-menu-wrapper_VERSION]");
  var menuTriggers = menuWrapper.querySelectorAll("[data-h2-mobile-menu-trigger]");
  // Get the destination.
  var destination = link.getAttribute("href");
  if (menu.classList.contains("h2-mobile-menu-active") == true) {
    // The menu is open on a mobile device, so we need to set and travel to the anchor, but also close the menu.
    // Check to see if the link's href is a page anchor.
    if (destination.match("^#")) {
      // Remove event listeners from the current menu.
      h2MenuRemoveEventsHandler_VERSION(menuWrapper);
      // Close all submenus and reset aria values.
      h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
      // Close the main menu and reset aria values.
      menu.classList.remove("h2-mobile-menu-active");
      menuTriggers.forEach(function(trigger) {
        trigger.classList.remove("h2-active");
        trigger.setAttribute("aria-expanded", false);
      });
      var documentBody = document.querySelector("body");
      documentBody.classList.remove("h2-mobile-menu-body-lock");
    }
  } else {
    // The menu isn't open, and the user is on a desktop device.
    // Check to see if the link's href is a page anchor.
    if (destination.match("^#")) {
      var menuType = "";
      var menuAttribute = menuWrapper.getAttribute("data-h2-menu-wrapper_VERSION");
      if (menuAttribute.includes("top(")) {
        menuType = "top";
      } else if (menuAttribute.includes("side(")) {
        menuType = "side";
      }
      if (menuType == "top") {
        // Remove event listeners from the current menu.
        h2MenuRemoveEventsHandler_VERSION(menuWrapper);
        // Close all submenus and reset aria values.
        h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
      } else if (menuType == "side") {
        // Remove event listeners from the current menu.
        h2MenuRemoveEventsHandler_VERSION(menuWrapper);
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
        var mainMenuItems = h2MenuGetTargetMenuItemsHandler_VERSION(mainMenus);
        mainMenuItems.forEach(function(item) {
          item.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
          item.addEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
        });
        // Set the right listener on the main menu items that have submenus.
        var mainMenuItemsWithSubmenus = h2MenuGetMenuListItemsWithSubmenusHandler_VERSION(mainMenus);
        mainMenuItemsWithSubmenus.forEach(function(item) {
          item.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
          item.addEventListener("keydown", h2MenuRightArrowEvent_VERSION);
        });
      }
    }
  }
}

// Left/Escape Trigger to Close Submenus
function h2MenuEscapeAndLeftArrowEvent_VERSION(e) {
  var key = e.keyCode || e.which;
  var trigger = e.currentTarget;
  var triggerParent = trigger.parentNode; // a <li>
  var parentMenu = triggerParent.parentNode; // menulist
  var parentMenuWrapper = parentMenu.parentNode; // either a <li> or the menu container
  var parentMenuWrapperChildren = parentMenuWrapper.children; // parentMenu's siblings
  var menuWrapper = trigger.closest("[data-h2-menu-wrapper_VERSION]");
  var menu = trigger.closest("[data-h2-menu]");
  var mobileTrigger = menuWrapper.querySelector("[data-h2-mobile-menu-trigger]");
  
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
          // Remove event listeners from all menus.
          h2MenuRemoveEventsHandler_VERSION(menuWrapper);
          // Close all submenus.
          h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
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
          var menuTriggers = h2MenuGetMenuListItemsWithSubmenusHandler_VERSION(mainMenus);
          menuTriggers = menuTriggers.concat(mobileTrigger);
          menuTriggers.forEach(function(trigger) {
            trigger.classList.remove("h2-active");
            trigger.setAttribute("aria-expanded", false);
          });
          var documentBody = document.querySelector("body");
          documentBody.classList.remove("h2-mobile-menu-body-lock");
        }
      } 
      else {
        // Set the key variables based on this context.
        for (var i = 0; i < parentMenuWrapperChildren.length; i++) {
          var child = parentMenuWrapperChildren[i];
          if (child.hasAttribute("data-h2-submenu-trigger")) {
            submenuTrigger = child;
          }
        }
        // Close the submenu and focus the parent trigger.
        h2MenuCloseSubmenuHandler_VERSION(submenuTrigger);
        submenuTrigger.focus();
      }
    } 
    else if (trigger.hasAttribute("data-h2-submenu-trigger")) {
      // console.log("You exited on a submenu trigger.");
      // Figure out if the trigger was the parent one, or if it's one in the active menu by testing to see if the sibling submenu is active or not.
      if (triggerParent.classList.contains("h2-active")) {
        // Close the submenu and focus the parent trigger.
        h2MenuCloseSubmenuHandler_VERSION(trigger);
        // submenuTrigger.focus();
      } 
      else {
        // console.log("This trigger is a trigger inside the open submenu.");
        // Check to see if you're trying to close the main menu.
        if (parentMenuWrapper.hasAttribute("data-h2-menu-container")) {
          // console.log("You're trying to close the main menu.");
          if (menu.classList.contains("h2-mobile-menu-active")) {
            // Remove event listeners from all menus.
            h2MenuRemoveEventsHandler_VERSION(menuWrapper);
            // Close all submenus.
            h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
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
            var menuTriggers = h2MenuGetMenuListItemsWithSubmenusHandler_VERSION(mainMenus);
            menuTriggers = menuTriggers.concat(mobileTrigger);
            menuTriggers.forEach(function(trigger) {
              trigger.classList.remove("h2-active");
              trigger.setAttribute("aria-expanded", false);
            });
            var documentBody = document.querySelector("body");
            documentBody.classList.remove("h2-mobile-menu-body-lock");
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
          h2MenuCloseSubmenuHandler_VERSION(submenuTrigger);
          submenuTrigger.focus();
        }
      }
    }
  }
}

// Main menu tab exit trigger.
// This function closes all submenus and re-enables up/down, right, and left/escape key listeners if tab is pressed on any main menu items.
function h2MenuTabExitEvent_VERSION(e) {
  var documentBody = document.querySelector("body");
  var key = e.keyCode || e.which;
  var trigger = e.currentTarget;
  var menuWrapper = trigger.closest("[data-h2-menu-wrapper_VERSION]");
  var menu = menuWrapper.querySelector("[data-h2-menu]");
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
    menuItemIndex = h2MenuGetTargetMenuItemsHandler_VERSION(menuLists);
    // Check to see if the item that was tabbed on is the first or last item in the list.
    var itemCount = menuItemIndex.length - 1;
    var currentIndex = menuItemIndex.indexOf(trigger);
    // If the item was the first item and they tabbed up, close the menu and submenus.
    if (currentIndex === 0) {
      // If they tabbed up...
      // console.log("you're on the first item in the menu.");
      if (key == 9 && e.shiftKey) {
        // Remove event listeners from all menus.
        h2MenuRemoveEventsHandler_VERSION(menuWrapper);
        // Close all submenus.
        h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
        // Close the main menu.
        menu.classList.remove("h2-mobile-menu-active");
        menuItemIndex.forEach(function(trigger) {
          trigger.classList.remove("h2-active");
          trigger.setAttribute("aria-expanded", false);
        });
        documentBody.classList.remove("h2-mobile-menu-body-lock");
      }
    }
    // If the item was the last menu item and they tabbed down, close the menu and submenus.
    else if (currentIndex == itemCount) {
      // If they tabbed down...
      // console.log("you're on the last item in the menu.");
      if (key == 9 && !e.shiftKey) {
        // Remove event listeners from all menus.
        h2MenuRemoveEventsHandler_VERSION(menuWrapper);
        // Close all submenus.
        h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
        // Close the main menu.
        menu.classList.remove("h2-mobile-menu-active");
        menuItemIndex.forEach(function(trigger) {
          trigger.classList.remove("h2-active");
          trigger.setAttribute("aria-expanded", false);
        });
        documentBody.classList.remove("h2-mobile-menu-body-lock");
      }
    } 
    // Otherwise, tab to the next item like normal and close submenus..
    else {
      if (key == 9 && !e.shiftKey || key == 9 && e.shiftKey) {
        h2MenuCloseSubmenusAndActivateMainMenuHandler_VERSION(menuWrapper);
      }
    }
  } 
  // Otherwise, tab as normal while closing submenus.
  else {
    if (key == 9 && !e.shiftKey || key == 9 && e.shiftKey) {
      h2MenuCloseSubmenusAndActivateMainMenuHandler_VERSION(menuWrapper);
    }
  }
}

// Mobile menu toggle script.
// This function opens or closes the main menu when on a narrow device.
function h2MenuMobileMenuToggleEvent_VERSION(e) {
  var trigger = e.currentTarget;
  var documentBody = document.querySelector("body");
  var menuWrapper = trigger.closest("[data-h2-menu-wrapper_VERSION]");
  var menu = menuWrapper.querySelector("[data-h2-menu]");
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
    h2MenuRemoveEventsHandler_VERSION(menuWrapper);
    // Close all submenus.
    h2MenuCloseOpenSubmenusHandler_VERSION(menuWrapper);
    // Close the main menu.
    menu.classList.remove("h2-mobile-menu-active");
    var menuTriggers = h2MenuGetMenuListItemsWithSubmenusHandler_VERSION(mainMenus);
    menuTriggers = menuTriggers.concat(trigger);
    menuTriggers.forEach(function(trigger) {
      trigger.classList.remove("h2-active");
      trigger.setAttribute("aria-expanded", false);
    });
    documentBody.classList.remove("h2-mobile-menu-body-lock");
  } else {
    // Open the main menu.
    menu.classList.add("h2-mobile-menu-active");
    trigger.classList.add("h2-active");
    trigger.setAttribute("aria-expanded", true);
    documentBody.classList.add("h2-mobile-menu-body-lock");
    // Remove event listeners from all menus.
    h2MenuRemoveEventsHandler_VERSION(menuWrapper);
    var resetMainMenuItems = h2MenuGetTargetMenuItemsHandler_VERSION(mainMenus);
    // Re-add up/down arrow listeners, left/escape listners.
    resetMainMenuItems.forEach(function(item) {
      item.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
      item.removeEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
      item.removeEventListener("keydown", h2MenuTabExitEvent_VERSION);
      item.addEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
      item.addEventListener("keydown", h2MenuEscapeAndLeftArrowEvent_VERSION);
      item.addEventListener("keydown", h2MenuTabExitEvent_VERSION);
    });
    // Get main menu items with submenus.
    var resetMainMenuItemsWithSubmenus = h2MenuGetMenuListItemsWithSubmenusHandler_VERSION(mainMenus);
    // Add right arrow event listener to main menu items with submenus.
    resetMainMenuItemsWithSubmenus.forEach(function(item) {
      item.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
      item.addEventListener("keydown", h2MenuRightArrowEvent_VERSION);
    });
    // Add tab listeners to tab out of the menu and close submenus.
    var resetAllMenuItems = h2MenuGetAllMenuItemsHandler_VERSION(menuWrapper);
    // Add mobile trigger to main menu items.
    resetAllMenuItems = resetAllMenuItems.concat(trigger);
    resetAllMenuItems.forEach(function(item) {
      item.removeEventListener("keydown", h2MenuTabExitEvent_VERSION);
      item.addEventListener("keydown", h2MenuTabExitEvent_VERSION);
    });
  }
}

// ===========================================================================================

// System check function; this function allows the user to specify a specific target, or a specific version of Hydrogen so that they can target nested instances.
function h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError) {
  var menus = [];
  // Check whether a target menu has been specified.
  if (targetMenu == "all") {
    // Because the user is targeting all menus, we need to check if they've specified a version as well.
    if (hydrogenSystemVersion == "latest") {
      // The user is using the most recent version of Hydrogen.
      menus = document.querySelectorAll("[data-h2-menu-wrapper_VERSION]");
      return menus;
    } else {
      // The user is targeting a specific version of Hydrogen. It's important that we check to see if the wrapper itself has the version value, and if it doesn't check its parents.
      var system = document.querySelector("[data-h2-system=\"" + hydrogenSystemVersion + "\"]");
      // Check to see if the system value has actually been found on the page. If it hasn't, return false, otherwise find the menus.
      if (system == null || system == false) {
        console.error("Hydrogen (" + functionError + "): no data-h2-system element can be found with the system version (" + hydrogenSystemVersion + ") you've specified.");
        return false;
      } else {
        if (system.hasAttribute("data-h2-menu-wrapper_VERSION")) {
          // The system object is also the menu wrapper.
          menus = menus.concat(system);
        } 
        var instancedMenus = system.querySelectorAll("[data-h2-menu-wrapper_VERSION]");
        if (instancedMenus != false || instancedMenus != null) {
          instancedMenus.forEach(function(instance) {
            menus = menus.concat(instance);
          });
        }
        // Check to see if any menus were actually found in this version. If not, return false, otherwise return the array of menus.
        if (menus == "undefined" || menus == false || menus == null) {
          return false;
        } else {
          return menus;
        }
      }
    }
  } else if (targetMenu == null || targetMenu == false || targetMenu == "") {
    // No target menu was specified, so the function can't run.
    console.error("Hydrogen (" + functionError + "): no target menu element has been specified. Please pass an HTMLelement object, a NodeList of elements, or \"all\".");
    return false;
  } else {
    // The user is passing a target, so we should check to see if it's an HTMLelement, a NodeList, or an incorrect format.
    if (targetMenu.nodeType == Node.ELEMENT_NODE) {
      // The user has passed a single HTMLelement.
      menus = menus.concat(targetMenu);
      return menus;
    } else if (NodeList.prototype.isPrototypeOf(target) == true) {
      // The user has passed a NodeList of elements.
      targetMenu.forEach(function(target) {
        menus = menus.concat(target);
      });
      return menus;
    } else {
      // The user has passed an object that Hydrogen can't pass.
      console.error("Hydrogen (" + functionError + "): you've passed an invalid menu element. Menus must be a valid HTMLelement object or NodeList of elements.");
      return false;
    }
  }
}

// Add anchor click events to the menu items.
function h2MenuAddPageAnchor_VERSION(targetMenu, hydrogenSystemVersion = "latest") {
  // Set the system check error value.
  var functionError = "h2MenuAddPageAnchor_VERSION";
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    menuWrappers.forEach(function(wrapper) {
      var menuItems = wrapper.querySelectorAll("[role='menuitem']");
      if (menuItems != false && menuItems != null && menuItems != undefined) {
        menuItems.forEach(function(menuItem) {
          menuItem.removeEventListener("click", h2MenuCloseMenuOnAnchorClickEvent_VERSION);
          menuItem.addEventListener("click", h2MenuCloseMenuOnAnchorClickEvent_VERSION);
        });
      }
    });
  }
}

// Add mobile menu trigger listeners.
function h2MenuAddMobileMenuTrigger_VERSION(targetMenu, hydrogenSystemVersion = "latest") {
  // Set the system check error value.
  var functionError = "h2MenuAddMobileMenuTrigger_VERSION";
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    menuWrappers.forEach(function(wrapper) {
      var mobileTriggers = wrapper.querySelectorAll("[data-h2-mobile-menu-trigger]");
      if (mobileTriggers != false && mobileTriggers != null && mobileTriggers != undefined) {
        mobileTriggers.forEach(function(mobileTrigger) {
          mobileTrigger.removeEventListener("click", h2MenuMobileMenuToggleEvent_VERSION);
          mobileTrigger.addEventListener("click", h2MenuMobileMenuToggleEvent_VERSION);
        });
      }
    });
  }
}

function h2MenuAddUpDownArrowsToMainMenuItems_VERSION(targetMenu, hydrogenSystemVersion = "latest") {
  // Set the system check error value.
  var functionError = "h2MenuAddUpDownArrowsToMainMenuItems_VERSION";
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    menuWrappers.forEach(function(wrapper) {
      // Set an empty variable for the main menus.
      var mainMenus = [];
      // Find the main menus inside of the menu container.
      var menuChildren = wrapper.querySelector("[data-h2-menu-container]").children;
      for (var i = 0; i < menuChildren.length; i++) {
        var child = menuChildren[i];
        if (child.hasAttribute("data-h2-menulist")) {
          mainMenus = mainMenus.concat(child);
        }
      }
      // Use the main menus to get all menu items.
      if (mainMenus != false && mainMenus != null && mainMenus != undefined) {
        var mainMenuItems = h2MenuGetTargetMenuItemsHandler_VERSION(mainMenus);
        // Loop through each menu item and add the event listner.
        if (mainMenuItems != false && mainMenuItems != null && mainMenuItems != undefined) {
          mainMenuItems.forEach(function(item) {
            item.removeEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
            item.addEventListener("keydown", h2MenuUpDownArrowEvent_VERSION);
          });
        }
      }
    });
  }
}

function h2MenuTabOrder_VERSION(targetMenu, hydrogenSystemVersion = "latest") {
  // Set the system check error value.
  var functionError = "h2MenuTabOrder_VERSION";
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    menuWrappers.forEach(function(wrapper) {
      var allMenuItems = h2MenuGetAllMenuItemsHandler_VERSION(wrapper);
      if (allMenuItems != false && allMenuItems != null && allMenuItems != undefined) {
        allMenuItems.forEach(function(item) {
          item.removeEventListener("keydown", h2MenuTabExitEvent_VERSION);
          item.addEventListener("keydown", h2MenuTabExitEvent_VERSION);
        });
      }
    });
  }
}

function h2MenuAddRightArrowToMainMenuItems_VERSION(targetMenu, hydrogenSystemVersion = "latest") {
  // Set the system check error value.
  var functionError = "h2MenuAddRightArrowToMainMenuItems_VERSION";
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  // Loop through the available menu wrappers.
  if (menuWrappers != false) {
    menuWrappers.forEach(function(wrapper) {
      // Set an empty variable for the main menus.
      var mainMenus = [];
      // Find the main menus inside of the menu container.
      var menuChildren = wrapper.querySelector("[data-h2-menu-container]").children;
      for (var i = 0; i < menuChildren.length; i++) {
        var child = menuChildren[i];
        if (child.hasAttribute("data-h2-menulist")) {
          mainMenus = mainMenus.concat(child);
        }
      }
      // Use the main menus to get all menu items that have submenus.
      if (mainMenus != false && mainMenus != null && mainMenus != undefined) {
        var mainMenuItemsWithSubmenu = h2MenuGetMenuListItemsWithSubmenusHandler_VERSION(mainMenus);
        // Loop through each menu item and add the event listner.
        if (mainMenuItemsWithSubmenu != false && mainMenuItemsWithSubmenu != null && mainMenuItemsWithSubmenu != undefined) {
          mainMenuItemsWithSubmenu.forEach(function(item) {
            item.removeEventListener("keydown", h2MenuRightArrowEvent_VERSION);
            item.addEventListener("keydown", h2MenuRightArrowEvent_VERSION);
          });
        }
      }
    });
  }
}

function h2MenuEnableSubmenuTriggers_VERSION(targetMenu, hydrogenSystemVersion = "latest") {
  // Set the system check error value.
  var functionError = "h2MenuEnableSubmenuTriggers";
  // Use the system check function to get the appropriate menu wrappers.
  var menuWrappers = h2MenuSystemCheck(targetMenu, hydrogenSystemVersion, functionError);
  // Get the submenu triggers from all relevant menu wrappers.
  if (menuWrappers != false) {
    menuWrappers.forEach(function(wrapper) {
      // Set an empty array for the submenu triggers.
      var submenuTriggers = [];
      // Find all the submenu triggers inside the current wrapper.
      var wrapperTriggers = wrapper.querySelectorAll("[data-h2-submenu-trigger]");
      if (wrapperTriggers != false) {
        wrapperTriggers.forEach(function(trigger) {
          submenuTriggers = submenuTriggers.concat(trigger);
        });
      }
      // Add the event listeners to the submenu triggers.
      if (submenuTriggers != false) {
        submenuTriggers.forEach(function(item) {
          item.removeEventListener("click", h2MenuToggleSubmenuEvent_VERSION);
          item.addEventListener("click", h2MenuToggleSubmenuEvent_VERSION);
        });
      }
    });
  }
}

// ===========================================================================================

export {
  h2MenuRemoveEventsHandler_VERSION,
  h2MenuCloseOpenSubmenusHandler_VERSION,
  h2MenuCloseSubmenusAndActivateMainMenuHandler_VERSION,
  h2MenuGetAllMenuItemsHandler_VERSION,
  h2MenuGetTargetMenuItemsHandler_VERSION,
  h2MenuGetMenuListItemsWithSubmenusHandler_VERSION,
  h2MenuOpenSubmenuHandler_VERSION,
  h2MenuCloseSubmenuHandler_VERSION,
  h2MenuToggleSubmenuEvent_VERSION,
  h2MenuRightArrowEvent_VERSION,
  h2MenuUpDownArrowEvent_VERSION,
  h2MenuCloseMenuOnAnchorClickEvent_VERSION,
  h2MenuEscapeAndLeftArrowEvent_VERSION,
  h2MenuTabExitEvent_VERSION,
  h2MenuMobileMenuToggleEvent_VERSION,
  h2MenuAddPageAnchor_VERSION,
  h2MenuAddMobileMenuTrigger_VERSION,
  h2MenuAddUpDownArrowsToMainMenuItems_VERSION,
  h2MenuTabOrder_VERSION,
  h2MenuAddRightArrowToMainMenuItems_VERSION,
  h2MenuEnableSubmenuTriggers_VERSION
};