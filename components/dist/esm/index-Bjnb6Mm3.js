const NAMESPACE = 'gcds';
const BUILD = /* gcds */ { hydratedSelectorName: "hydrated", lazyLoad: true, updatable: true};

const globalScripts = () => {};
const globalStyles = ":root{--gcds-color-blue-100:#d7e5f5;--gcds-color-blue-500:#6584a6;--gcds-color-blue-650:#284162;--gcds-color-blue-700:#33465c;--gcds-color-blue-750:#1e7b96;--gcds-color-blue-800:#2b4380;--gcds-color-blue-850:#0535d2;--gcds-color-blue-900:#26374a;--gcds-color-grayscale-0:#fff;--gcds-color-grayscale-50:#f1f2f3;--gcds-color-grayscale-100:#d6d9dd;--gcds-color-grayscale-300:#a8adb4;--gcds-color-grayscale-500:#7d828b;--gcds-color-grayscale-700:#545961;--gcds-color-grayscale-800:#43474e;--gcds-color-grayscale-900:#333;--gcds-color-grayscale-1000:#000;--gcds-color-green-100:#e6f6ec;--gcds-color-green-500:#289f58;--gcds-color-green-700:#03662a;--gcds-color-green-800:#023b1a;--gcds-color-purple-700:#7532b8;--gcds-color-orange-700:#be5a00;--gcds-color-red-100:#fbddda;--gcds-color-red-500:#d3080c;--gcds-color-red-700:#a62a1e;--gcds-color-red-900:#822117;--gcds-color-red-flag:#eb2d37;--gcds-color-yellow-100:#faedd1;--gcds-color-yellow-500:#b3800f;--gcds-border-radius-sm:0.125rem;--gcds-border-radius-md:0.375rem;--gcds-border-radius-lg:3rem;--gcds-border-radius-xl:100%;--gcds-border-width-sm:0.0625rem;--gcds-border-width-md:0.125rem;--gcds-border-width-lg:0.25rem;--gcds-border-width-xl:0.375rem;--gcds-border-default:#7d828b;--gcds-active-background:#000;--gcds-active-text:#fff;--gcds-bg-dark:#333;--gcds-bg-light:#f1f2f3;--gcds-bg-primary:#26374a;--gcds-bg-white:#fff;--gcds-danger-background:#fbddda;--gcds-danger-border:#d3080c;--gcds-danger-text:#a62a1e;--gcds-disabled-background:#d6d9dd;--gcds-disabled-text:#545961;--gcds-focus-background:#0535d2;--gcds-focus-border:#0535d2;--gcds-focus-text:#fff;--gcds-link-default:#284162;--gcds-link-hover:#0535d2;--gcds-link-light:#fff;--gcds-link-visited:#7532b8;--gcds-link-focus-background:#0535d2;--gcds-link-focus-outline-width:0.25rem;--gcds-link-focus-outline-offset:0.125rem;--gcds-link-focus-text:#fff;--gcds-link-focus-border-radius:0.125rem;--gcds-link-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-link-font-small-desktop:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-link-font-small-mobile:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-link-font-regular-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-link-font-regular-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-link-decoration-thickness:0.0625rem;--gcds-link-hover-decoration-thickness:0.125rem;--gcds-link-underline-offset:0.125rem;--gcds-text-light:#fff;--gcds-text-primary:#333;--gcds-text-secondary:#43474e;--gcds-text-character-limit:65ch;--gcds-text-role-light:#fff;--gcds-text-role-primary:#333;--gcds-text-role-secondary:#43474e;--gcds-text-size-body-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-text-size-body-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-text-size-small-desktop:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-text-size-small-mobile:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-text-spacing-0:0rem;--gcds-text-spacing-25:0.125rem;--gcds-text-spacing-50:0.25rem;--gcds-text-spacing-75:0.375rem;--gcds-text-spacing-100:0.5rem;--gcds-text-spacing-125:0.625rem;--gcds-text-spacing-150:0.75rem;--gcds-text-spacing-175:0.875rem;--gcds-text-spacing-200:1rem;--gcds-text-spacing-225:1.125rem;--gcds-text-spacing-250:1.25rem;--gcds-text-spacing-300:1.5rem;--gcds-text-spacing-350:1.75rem;--gcds-text-spacing-400:2rem;--gcds-text-spacing-450:2.25rem;--gcds-text-spacing-500:2.5rem;--gcds-text-spacing-550:2.75rem;--gcds-text-spacing-600:3rem;--gcds-text-spacing-650:3.25rem;--gcds-text-spacing-700:3.5rem;--gcds-text-spacing-750:3.75rem;--gcds-text-spacing-800:4rem;--gcds-text-spacing-850:4.25rem;--gcds-text-spacing-900:4.5rem;--gcds-text-spacing-950:4.75rem;--gcds-text-spacing-1000:5rem;--gcds-text-spacing-1050:5.25rem;--gcds-text-spacing-1100:5.5rem;--gcds-text-spacing-1150:5.75rem;--gcds-text-spacing-1200:6rem;--gcds-text-spacing-1250:6.25rem;--gcds-text-weight-bold:700;--gcds-container-xs:20rem;--gcds-container-sm:30rem;--gcds-container-md:48rem;--gcds-container-lg:62rem;--gcds-container-xl:71.25rem;--gcds-container-full:100%;--gcds-container-border:0.0625rem solid #7d828b;--gcds-container-size-xs:20rem;--gcds-container-size-sm:30rem;--gcds-container-size-md:48rem;--gcds-container-size-lg:62rem;--gcds-container-size-xl:71.25rem;--gcds-container-size-full:100%;--gcds-container-spacing-0:0rem;--gcds-container-spacing-25:0.125rem;--gcds-container-spacing-50:0.25rem;--gcds-container-spacing-75:0.375rem;--gcds-container-spacing-100:0.5rem;--gcds-container-spacing-125:0.625rem;--gcds-container-spacing-150:0.75rem;--gcds-container-spacing-175:0.875rem;--gcds-container-spacing-200:1rem;--gcds-container-spacing-225:1.125rem;--gcds-container-spacing-250:1.25rem;--gcds-container-spacing-300:1.5rem;--gcds-container-spacing-350:1.75rem;--gcds-container-spacing-400:2rem;--gcds-container-spacing-450:2.25rem;--gcds-container-spacing-500:2.5rem;--gcds-container-spacing-550:2.75rem;--gcds-container-spacing-600:3rem;--gcds-container-spacing-650:3.25rem;--gcds-container-spacing-700:3.5rem;--gcds-container-spacing-750:3.75rem;--gcds-container-spacing-800:4rem;--gcds-container-spacing-850:4.25rem;--gcds-container-spacing-900:4.5rem;--gcds-container-spacing-950:4.75rem;--gcds-container-spacing-1000:5rem;--gcds-container-spacing-1050:5.25rem;--gcds-container-spacing-1100:5.5rem;--gcds-container-spacing-1150:5.75rem;--gcds-container-spacing-1200:6rem;--gcds-container-spacing-1250:6.25rem;--gcds-outline-width:0.25rem;--gcds-spacing-0:0rem;--gcds-spacing-25:0.125rem;--gcds-spacing-50:0.25rem;--gcds-spacing-75:0.375rem;--gcds-spacing-100:0.5rem;--gcds-spacing-125:0.625rem;--gcds-spacing-150:0.75rem;--gcds-spacing-175:0.875rem;--gcds-spacing-200:1rem;--gcds-spacing-225:1.125rem;--gcds-spacing-250:1.25rem;--gcds-spacing-300:1.5rem;--gcds-spacing-350:1.75rem;--gcds-spacing-400:2rem;--gcds-spacing-450:2.25rem;--gcds-spacing-500:2.5rem;--gcds-spacing-550:2.75rem;--gcds-spacing-600:3rem;--gcds-spacing-650:3.25rem;--gcds-spacing-700:3.5rem;--gcds-spacing-750:3.75rem;--gcds-spacing-800:4rem;--gcds-spacing-850:4.25rem;--gcds-spacing-900:4.5rem;--gcds-spacing-950:4.75rem;--gcds-spacing-1000:5rem;--gcds-spacing-1050:5.25rem;--gcds-spacing-1100:5.5rem;--gcds-spacing-1150:5.75rem;--gcds-spacing-1200:6rem;--gcds-spacing-1250:6.25rem;--gcds-base-root-font-size:16;--gcds-base-font-size:1.25;--gcds-base-font-size-mobile:1.125;--gcds-base-line-height:1.6;--gcds-base-scale:1.1;--gcds-font-h1:700 2.5625rem/117% \"Lato\",sans-serif;--gcds-font-h1-mobile:700 2.3125rem/119% \"Lato\",sans-serif;--gcds-font-h2:700 2.4375rem/123% \"Lato\",sans-serif;--gcds-font-h2-mobile:700 2.1875rem/125% \"Lato\",sans-serif;--gcds-font-h3:700 1.8125rem/137% \"Lato\",sans-serif;--gcds-font-h3-mobile:700 1.625rem/123% \"Lato\",sans-serif;--gcds-font-h4:700 1.6875rem/133% \"Lato\",sans-serif;--gcds-font-h4-mobile:700 1.5rem/133% \"Lato\",sans-serif;--gcds-font-h5:700 1.5rem/133% \"Lato\",sans-serif;--gcds-font-h5-mobile:700 1.375rem/127% \"Lato\",sans-serif;--gcds-font-h6:700 1.375rem/145% \"Lato\",sans-serif;--gcds-font-h6-mobile:700 1.25rem/140% \"Lato\",sans-serif;--gcds-font-text:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-font-text-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-font-text-mono:400 1.25rem/160% \"Noto Sans Mono\",monospace;--gcds-font-text-mono-mobile:400 1.125rem/155% \"Noto Sans Mono\",monospace;--gcds-font-text-small:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-font-text-small-mobile:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-font-families-heading:\"Lato\",sans-serif;--gcds-font-families-body:\"Noto Sans\",sans-serif;--gcds-font-families-monospace:\"Noto Sans Mono\",monospace;--gcds-font-families-icons:\"gcds-icons\";--gcds-font-sizes-text-small:1.125rem;--gcds-font-sizes-text-small-mobile:1rem;--gcds-font-sizes-text:1.25rem;--gcds-font-sizes-text-mobile:1.125rem;--gcds-font-sizes-h1:2.5625rem;--gcds-font-sizes-h1-mobile:2.3125rem;--gcds-font-sizes-h2:2.4375rem;--gcds-font-sizes-h2-mobile:2.1875rem;--gcds-font-sizes-h3:1.8125rem;--gcds-font-sizes-h3-mobile:1.625rem;--gcds-font-sizes-h4:1.6875rem;--gcds-font-sizes-h4-mobile:1.5rem;--gcds-font-sizes-h5:1.5rem;--gcds-font-sizes-h5-mobile:1.375rem;--gcds-font-sizes-h6:1.375rem;--gcds-font-sizes-h6-mobile:1.25rem;--gcds-font-weights-light:300;--gcds-font-weights-regular:400;--gcds-font-weights-medium:500;--gcds-font-weights-semibold:600;--gcds-font-weights-bold:700;--gcds-line-heights-text-small:155%;--gcds-line-heights-text-small-mobile:150%;--gcds-line-heights-text:160%;--gcds-line-heights-text-mobile:155%;--gcds-line-heights-h1:117%;--gcds-line-heights-h1-mobile:119%;--gcds-line-heights-h2:123%;--gcds-line-heights-h2-mobile:125%;--gcds-line-heights-h3:137%;--gcds-line-heights-h3-mobile:123%;--gcds-line-heights-h4:133%;--gcds-line-heights-h4-mobile:133%;--gcds-line-heights-h5:133%;--gcds-line-heights-h5-mobile:127%;--gcds-line-heights-h6:145%;--gcds-line-heights-h6-mobile:140%;--gcds-alert-border-width:0.375rem;--gcds-alert-button-border-radius:0.375rem;--gcds-alert-button-border-width:0.125rem;--gcds-alert-button-default-background:#fff;--gcds-alert-button-default-text:#333;--gcds-alert-button-focus-background:#0535d2;--gcds-alert-button-focus-text:#fff;--gcds-alert-button-icon-padding:0.75rem;--gcds-alert-button-icon-width-and-height:1.125rem;--gcds-alert-button-margin:0 0 0 0.875rem;--gcds-alert-button-mobile-margin:0.875rem 0 0;--gcds-alert-button-outline-width:0.25rem;--gcds-alert-content-heading-font:700 1.5rem/133% \"Lato\",sans-serif;--gcds-alert-content-heading-margin:0 0 0.5rem;--gcds-alert-content-heading-mobile-margin:0 0 0.5rem;--gcds-alert-content-slotted-list-margin:1.5rem;--gcds-alert-content-slotted-margin:0.5rem;--gcds-alert-font:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-alert-icon-font-size:2.25rem;--gcds-alert-icon-mobile-margin:0 0 0.875rem;--gcds-alert-padding:0.75rem 0.875rem;--gcds-alert-text:#333;--gcds-alert-danger-background:#fbddda;--gcds-alert-danger-icon:#d3080c;--gcds-alert-danger-text:#333;--gcds-alert-info-background:#d7e5f5;--gcds-alert-info-icon:#6584a6;--gcds-alert-info-text:#333;--gcds-alert-success-background:#e6f6ec;--gcds-alert-success-icon:#289f58;--gcds-alert-success-text:#333;--gcds-alert-warning-background:#faedd1;--gcds-alert-warning-icon:#b3800f;--gcds-alert-warning-text:#333;--gcds-breadcrumbs-item-arrow-margin:0 0.5rem 0 0;--gcds-breadcrumbs-item-font:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-breadcrumbs-item-margin:0.5rem 0.25rem 0.5rem 0.125rem;--gcds-breadcrumbs-margin:0 0 0 -0.125rem;--gcds-breadcrumbs-padding:0 0 0 0.125rem;--gcds-button-border-radius:0.375rem;--gcds-button-border-width:0.125rem;--gcds-button-danger-default-background:#a62a1e;--gcds-button-danger-default-text:#fff;--gcds-button-danger-hover-background:#822117;--gcds-button-font-desktop:500 1.25rem/140% \"Noto Sans\",sans-serif;--gcds-button-font-mobile:500 1.125rem/140% \"Noto Sans\",sans-serif;--gcds-button-padding:0.625rem 1rem;--gcds-button-primary-default-background:#26374a;--gcds-button-primary-default-text:#fff;--gcds-button-primary-hover-background:#2b4380;--gcds-button-secondary-default-background:transparent;--gcds-button-secondary-default-text:#2b4380;--gcds-button-secondary-hover-background:#d7e5f5;--gcds-button-secondary-active-background:#d7e5f5;--gcds-button-mobile-margin:0.125rem 0;--gcds-button-mobile-width:100%;--gcds-button-shared-active-background:#000;--gcds-button-shared-active-text:#fff;--gcds-button-shared-focus-background:#0535d2;--gcds-button-shared-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-button-shared-focus-outline-width:0.25rem;--gcds-button-shared-focus-text:#fff;--gcds-button-shared-disabled-opacity:50%;--gcds-button-small-font-desktop:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-button-small-font-mobile:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-button-small-padding:0.375rem 1rem;--gcds-button-start-default-background:#03662a;--gcds-button-start-default-text:#fff;--gcds-button-start-hover-background:#023b1a;--gcds-button-start-font-desktop:600 1.375rem/145% \"Noto Sans\",sans-serif;--gcds-button-start-font-mobile:500 1.25rem/140% \"Noto Sans\",sans-serif;--gcds-button-start-padding:0.75rem 2rem;--gcds-button-width:fit-content;--gcds-card-background-color:#fff;--gcds-card-box-shadow:0 0.125rem 0.5rem 0.125rem #00000019;--gcds-card-color:#333;--gcds-card-description-font-desktop:400 1.25rem/155% \"Noto Sans\",sans-serif;--gcds-card-description-font-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-card-focus-box-shadow:inset 0 0 0 0.125rem #0535d2;--gcds-card-focus-link-background-color:transparent;--gcds-card-focus-link-border:none;--gcds-card-focus-link-box-shadow:none;--gcds-card-focus-link-color:#284162;--gcds-card-focus-link-outline:none;--gcds-card-focus-link-text-decoration-thickness:0.125rem;--gcds-card-focus-outline-offset:0.125rem;--gcds-card-focus-outline:0.25rem solid #0535d2;--gcds-card-hover-background-color:#f1f2f380;--gcds-card-hover-box-shadow:0 0.25rem 0.5rem 0.25rem #00000032;--gcds-card-image-margin:0 0 1.5rem;--gcds-card-padding:2.25rem 1.5rem;--gcds-card-badge-background-color:#20809d;--gcds-card-badge-padding:0 1.5rem;--gcds-card-badge-mobile-padding:0.125rem 1.5rem;--gcds-card-title-font-desktop:700 1.8125rem/137% \"Lato\",sans-serif;--gcds-card-title-font-mobile:700 1.625rem/123% \"Lato\",sans-serif;--gcds-card-title-margin:0 0 0.625rem;--gcds-card-max-width:34.125rem;--gcds-checkbox-check-border-width:0.3125rem;--gcds-checkbox-check-height:1.5rem;--gcds-checkbox-check-left:1rem;--gcds-checkbox-check-top:0.625rem;--gcds-checkbox-check-width:0.875rem;--gcds-checkbox-danger-border:#d3080c;--gcds-checkbox-default-background:#fff;--gcds-checkbox-default-text:#333;--gcds-checkbox-disabled-background:#d6d9dd;--gcds-checkbox-disabled-border:#545961;--gcds-checkbox-disabled-text:#545961;--gcds-checkbox-error-padding:0 0 0 3.75rem;--gcds-checkbox-fieldset-margin:0 0 1rem;--gcds-checkbox-focus-background:#fff;--gcds-checkbox-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-checkbox-focus-color:#0535d2;--gcds-checkbox-focus-outline-width:0.25rem;--gcds-checkbox-font:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-checkbox-input-border-radius:0.125rem;--gcds-checkbox-input-border-width:0.125rem;--gcds-checkbox-input-height-and-width:3rem;--gcds-checkbox-label-font-desktop:500 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-checkbox-label-font-mobile:500 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-checkbox-label-padding:0 0 0 3.75rem;--gcds-checkbox-legend-font-desktop:700 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-checkbox-legend-font-mobile:700 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-checkbox-legend-hint-margin:0 0 1rem;--gcds-checkbox-legend-margin:0 0 0.125rem;--gcds-checkbox-legend-required-font-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-checkbox-legend-required-font-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-checkbox-margin:0 0 1.125rem;--gcds-checkbox-max-width:46.5rem;--gcds-checkbox-padding:0.5rem;--gcds-date-input-danger-border:#d3080c;--gcds-date-input-fieldset-font-desktop:700 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-date-input-fieldset-font-mobile:700 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-date-input-fieldset-error-margin:0;--gcds-date-input-fieldset-hint-margin:0.375rem 0 0.125rem;--gcds-date-input-fieldset-margin:0 0 1.125rem;--gcds-date-input-fieldset-required-font-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-date-input-fieldset-required-font-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-date-input-fieldset-required-margin:0 0 0 0.375rem;--gcds-date-input-fieldset-text:#333;--gcds-date-input-label-font-desktop:500 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-date-input-label-font-mobile:500 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-date-input-margin:0.75rem;--gcds-date-modified-description-margin:0 0 0 0.125rem;--gcds-date-modified-font:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-date-modified-margin:2.5rem 0 1rem;--gcds-details-default-text:#284162;--gcds-details-default-decoration-thickness:0.0625rem;--gcds-details-focus-background:#0535d2;--gcds-details-focus-text:#fff;--gcds-details-focus-border-radius:0.125rem;--gcds-details-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-details-focus-outline-offset:0.125rem;--gcds-details-focus-outline:0.25rem solid #0535d2;--gcds-details-font-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-details-font-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-details-font-small-desktop:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-details-font-small-mobile:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-details-hover-text:#0535d2;--gcds-details-hover-decoration-thickness:0.125rem;--gcds-details-panel-border-color:#7d828b;--gcds-details-panel-border-width:0.375rem;--gcds-details-panel-margin:0.75rem 0 0 0.75rem;--gcds-details-panel-padding:0.75rem 0rem 0.75rem 1.75rem;--gcds-details-panel-slotted-margin:1.5rem;--gcds-details-print-summary-font-weight:600;--gcds-details-print-summary-text:#333;--gcds-details-summary-arrow-border-left:0.875rem;--gcds-details-summary-arrow-border-top-bottom:0.5rem;--gcds-details-summary-arrow-left:0.375rem;--gcds-details-summary-arrow-top:0.875rem;--gcds-details-summary-border-width:0.0625rem;--gcds-details-summary-padding:0.375rem 0.375rem 0.375rem 2.5rem;--gcds-error-message-text-color:#a62a1e;--gcds-error-summary-border-color:#d3080c;--gcds-error-summary-border-width:0.375rem;--gcds-error-summary-link-color:#a62a1e;--gcds-error-summary-list-item-padding:0 0 0.75rem 0.125rem;--gcds-error-summary-list-margin:0 0 0 1.25rem;--gcds-error-summary-margin:0 0 2.25rem;--gcds-error-summary-max-width:65ch;--gcds-error-summary-text:#333;--gcds-error-summary-mobile-padding:1.125rem;--gcds-error-summary-padding:2.5rem;--gcds-fieldset-default-text:#333;--gcds-fieldset-legend-margin:0 0 0.125rem;--gcds-fieldset-legend-size-h2-desktop:700 2.4375rem/123% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h2-mobile:700 2.1875rem/125% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h3-desktop:700 1.8125rem/137% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h3-mobile:700 1.625rem/123% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h4-desktop:700 1.6875rem/133% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h4-mobile:700 1.5rem/133% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h5-desktop:700 1.5rem/133% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h5-mobile:700 1.375rem/127% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h6-desktop:700 1.375rem/145% \"Lato\",sans-serif;--gcds-fieldset-legend-size-h6-mobile:700 1.25rem/140% \"Lato\",sans-serif;--gcds-file-uploader-button-background:#fff;--gcds-file-uploader-button-border-radius:0.375rem;--gcds-file-uploader-button-border-width:0.125rem;--gcds-file-uploader-button-font-weight:500;--gcds-file-uploader-button-outline-width:0.25rem;--gcds-file-uploader-button-margin:0 0 1.125rem;--gcds-file-uploader-button-padding:0.625rem 0.75rem;--gcds-file-uploader-button-text:#2b4380;--gcds-file-uploader-default-text:#333;--gcds-file-uploader-disabled-background:#d6d9dd;--gcds-file-uploader-disabled-text:#545961;--gcds-file-uploader-font-desktop:400 1.25rem/140% \"Noto Sans\",sans-serif;--gcds-file-uploader-font-mobile:400 1.125rem/140% \"Noto Sans\",sans-serif;--gcds-file-uploader-file-border-color:#7d828b;--gcds-file-uploader-file-border-width:0.125rem;--gcds-file-uploader-file-button-border-width:0.0625rem;--gcds-file-uploader-file-button-border-radius:0.375rem;--gcds-file-uploader-file-button-underline-offset:0.25rem;--gcds-file-uploader-file-button-default-text:#a62a1e;--gcds-file-uploader-file-button-default-decoration-thickness:0.0625rem;--gcds-file-uploader-file-button-hover-text:#822117;--gcds-file-uploader-file-button-hover-decoration-thickness:0.125rem;--gcds-file-uploader-file-button-margin:0 0 0 2.25rem;--gcds-file-uploader-file-button-padding:0.375rem 0.125rem;--gcds-file-uploader-file-danger-border-color:#d3080c;--gcds-file-uploader-file-focus-border-color:#0535d2;--gcds-file-uploader-file-max-width:30rem;--gcds-file-uploader-file-padding:0.75rem 1.125rem;--gcds-file-uploader-focus-button-background:#0535d2;--gcds-file-uploader-focus-button-text:#fff;--gcds-file-uploader-focus-button-outline-width:0.25rem;--gcds-file-uploader-focus-button-outline-offset:0.125rem;--gcds-file-uploader-hover-button-background:#d7e5f5;--gcds-file-uploader-active-button-background:#000;--gcds-file-uploader-active-button-text:#fff;--gcds-footer-band-padding-desktop:2.25rem 0;--gcds-footer-band-padding-mobile:1.5rem 0;--gcds-footer-container-margin:0 auto;--gcds-footer-container-width:71.25rem;--gcds-footer-contextual-background:#33465c;--gcds-footer-contextual-text:#fff;--gcds-footer-font:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-footer-font-heading:700 1.625rem/123% \"Lato\",sans-serif;--gcds-footer-grid-gap:1.5rem;--gcds-footer-heading-margin:0 0 1.5rem;--gcds-footer-list-padding:0;--gcds-footer-main-background:#26374a;--gcds-footer-main-nav-first-after-border-color:#fff;--gcds-footer-main-nav-first-after-border-width:0.25rem;--gcds-footer-main-nav-first-after-width:2.25rem;--gcds-footer-main-text:#fff;--gcds-footer-sub-background:#f1f2f3;--gcds-footer-sub-listitem-before-margin:0 0.75rem;--gcds-footer-sub-signature-width:10.25rem;--gcds-footer-sub-signature-min-width:auto;--gcds-footer-sub-signature-max-height:2.4375rem;--gcds-footer-sub-signature-margin:0 0 0 auto;--gcds-footer-sub-signature-sm-width:6.25rem;--gcds-footer-sub-signature-sm-max-height:1.5rem;--gcds-grid-columns-default-base:1;--gcds-grid-columns-default-tablet:6;--gcds-grid-columns-default-desktop:12;--gcds-grid-gap-150:0.75rem;--gcds-grid-gap-175:0.875rem;--gcds-grid-gap-200:1rem;--gcds-grid-gap-225:1.125rem;--gcds-grid-gap-250:1.25rem;--gcds-grid-gap-300:1.5rem;--gcds-grid-gap-350:1.75rem;--gcds-grid-gap-400:2rem;--gcds-grid-gap-450:2.25rem;--gcds-grid-gap-500:2.5rem;--gcds-grid-gap-550:2.75rem;--gcds-grid-gap-600:3rem;--gcds-grid-gap-650:3.25rem;--gcds-grid-gap-700:3.5rem;--gcds-grid-gap-750:3.75rem;--gcds-grid-gap-800:4rem;--gcds-header-brand-border-color:#d6d9dd;--gcds-header-brand-border-width:0.0625rem;--gcds-header-brand-grid-gap:0.5rem;--gcds-header-brand-padding:0.5rem 0 1rem;--gcds-header-brand-toggle-padding:0 1.125rem;--gcds-header-container-max-width:71.25rem;--gcds-header-margin:0 0 3rem;--gcds-header-menu-top-nav-mobile-trigger-margin:1rem;--gcds-header-skiptonav-top:0.75rem;--gcds-heading-character-limit-h1:31ch;--gcds-heading-character-limit-h2:35ch;--gcds-heading-character-limit-h3:40ch;--gcds-heading-character-limit-h4:45ch;--gcds-heading-character-limit-h5:50ch;--gcds-heading-character-limit-h6:57ch;--gcds-heading-default-text:#333;--gcds-heading-h1-border-background:#a62a1e;--gcds-heading-h1-border-height:0.375rem;--gcds-heading-h1-border-margin:0.5rem;--gcds-heading-h1-border-width:4.5rem;--gcds-heading-h1-desktop:700 2.5625rem/117% \"Lato\",sans-serif;--gcds-heading-h1-mobile:700 2.3125rem/119% \"Lato\",sans-serif;--gcds-heading-h2-desktop:700 2.4375rem/123% \"Lato\",sans-serif;--gcds-heading-h2-mobile:700 2.1875rem/125% \"Lato\",sans-serif;--gcds-heading-h3-desktop:700 1.8125rem/137% \"Lato\",sans-serif;--gcds-heading-h3-mobile:700 1.625rem/123% \"Lato\",sans-serif;--gcds-heading-h4-desktop:700 1.6875rem/133% \"Lato\",sans-serif;--gcds-heading-h4-mobile:700 1.5rem/133% \"Lato\",sans-serif;--gcds-heading-h5-desktop:700 1.5rem/133% \"Lato\",sans-serif;--gcds-heading-h5-mobile:700 1.375rem/127% \"Lato\",sans-serif;--gcds-heading-h6-desktop:700 1.375rem/145% \"Lato\",sans-serif;--gcds-heading-h6-mobile:700 1.25rem/140% \"Lato\",sans-serif;--gcds-heading-spacing-0:0rem;--gcds-heading-spacing-25:0.125rem;--gcds-heading-spacing-50:0.25rem;--gcds-heading-spacing-75:0.375rem;--gcds-heading-spacing-100:0.5rem;--gcds-heading-spacing-125:0.625rem;--gcds-heading-spacing-150:0.75rem;--gcds-heading-spacing-175:0.875rem;--gcds-heading-spacing-200:1rem;--gcds-heading-spacing-225:1.125rem;--gcds-heading-spacing-250:1.25rem;--gcds-heading-spacing-300:1.5rem;--gcds-heading-spacing-350:1.75rem;--gcds-heading-spacing-400:2rem;--gcds-heading-spacing-450:2.25rem;--gcds-heading-spacing-500:2.5rem;--gcds-heading-spacing-550:2.75rem;--gcds-heading-spacing-600:3rem;--gcds-heading-spacing-650:3.25rem;--gcds-heading-spacing-700:3.5rem;--gcds-heading-spacing-750:3.75rem;--gcds-heading-spacing-800:4rem;--gcds-heading-spacing-850:4.25rem;--gcds-heading-spacing-900:4.5rem;--gcds-heading-spacing-950:4.75rem;--gcds-heading-spacing-1000:5rem;--gcds-heading-spacing-1050:5.25rem;--gcds-heading-spacing-1100:5.5rem;--gcds-heading-spacing-1150:5.75rem;--gcds-heading-spacing-1200:6rem;--gcds-heading-spacing-1250:6.25rem;--gcds-hint-margin:-0.375rem 0 0.5rem;--gcds-hint-text:#43474e;--gcds-icon-font-family:\"gcds-icons\";--gcds-icon-font-size-text-small:1.125rem;--gcds-icon-font-size-text:1.25rem;--gcds-icon-font-size-h6:1.375rem;--gcds-icon-font-size-h5:1.5rem;--gcds-icon-font-size-h4:1.6875rem;--gcds-icon-font-size-h3:1.8125rem;--gcds-icon-font-size-h2:2.4375rem;--gcds-icon-font-size-h1:2.5625rem;--gcds-icon-font-size-text-small-mobile:1rem;--gcds-icon-font-size-text-mobile:1.125rem;--gcds-icon-font-size-h6-mobile:1.25rem;--gcds-icon-font-size-h5-mobile:1.375rem;--gcds-icon-font-size-h4-mobile:1.5rem;--gcds-icon-font-size-h3-mobile:1.625rem;--gcds-icon-font-size-h2-mobile:2.1875rem;--gcds-icon-font-size-h1-mobile:2.3125rem;--gcds-icon-line-height-text-small:155%;--gcds-icon-line-height-text:160%;--gcds-icon-line-height-h6:145%;--gcds-icon-line-height-h5:133%;--gcds-icon-line-height-h4:133%;--gcds-icon-line-height-h3:137%;--gcds-icon-line-height-h2:123%;--gcds-icon-line-height-h1:117%;--gcds-icon-line-height-text-small-mobile:150%;--gcds-icon-line-height-text-mobile:155%;--gcds-icon-line-height-h6-mobile:140%;--gcds-icon-line-height-h5-mobile:127%;--gcds-icon-line-height-h4-mobile:133%;--gcds-icon-line-height-h3-mobile:123%;--gcds-icon-line-height-h2-mobile:125%;--gcds-icon-line-height-h1-mobile:119%;--gcds-icon-margin-0:0rem;--gcds-icon-margin-25:0.125rem;--gcds-icon-margin-50:0.25rem;--gcds-icon-margin-75:0.375rem;--gcds-icon-margin-100:0.5rem;--gcds-icon-margin-125:0.625rem;--gcds-icon-margin-150:0.75rem;--gcds-icon-margin-175:0.875rem;--gcds-icon-margin-200:1rem;--gcds-icon-margin-225:1.125rem;--gcds-icon-margin-250:1.25rem;--gcds-icon-margin-300:1.5rem;--gcds-icon-margin-350:1.75rem;--gcds-icon-margin-400:2rem;--gcds-icon-margin-450:2.25rem;--gcds-icon-margin-500:2.5rem;--gcds-icon-margin-550:2.75rem;--gcds-icon-margin-600:3rem;--gcds-icon-margin-650:3.25rem;--gcds-icon-margin-700:3.5rem;--gcds-icon-margin-750:3.75rem;--gcds-icon-margin-800:4rem;--gcds-icon-margin-850:4.25rem;--gcds-icon-margin-900:4.5rem;--gcds-icon-margin-950:4.75rem;--gcds-icon-margin-1000:5rem;--gcds-icon-margin-1050:5.25rem;--gcds-icon-margin-1100:5.5rem;--gcds-icon-margin-1150:5.75rem;--gcds-icon-margin-1200:6rem;--gcds-icon-margin-1250:6.25rem;--gcds-input-border-radius:0.125rem;--gcds-input-border-width:0.125rem;--gcds-input-danger-border:#d3080c;--gcds-input-default-background:#fff;--gcds-input-default-text:#333;--gcds-input-disabled-background:#d6d9dd;--gcds-input-disabled-text:#545961;--gcds-input-focus-border:#0535d2;--gcds-input-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-input-font:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-input-margin:0 0 1.5rem;--gcds-input-min-width-and-height:3rem;--gcds-input-outline-width:0.25rem;--gcds-input-padding:0.5rem;--gcds-label-font-desktop:600 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-label-font-mobile:600 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-label-margin:0 0 0.5rem;--gcds-label-required-font-weight:400;--gcds-label-required-margin:0 0 0 0.375rem;--gcds-label-text:#333;--gcds-lang-toggle-font-desktop:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-lang-toggle-font-mobile:700 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-lang-toggle-padding:0.375rem 0.625rem;--gcds-nav-group-mobile-background:#fff;--gcds-nav-group-mobile-list-margin:0.875rem 0 0;--gcds-nav-group-mobile-padding:0.5rem 0.875rem 4.75rem 0.875rem;--gcds-nav-group-mobile-trigger-border-radius:0.375rem;--gcds-nav-group-mobile-trigger-border-width:0.125rem;--gcds-nav-group-mobile-trigger-font:500 1rem/150% \"Noto Sans\",sans-serif;--gcds-nav-group-mobile-trigger-margin:0.5rem;--gcds-nav-group-mobile-trigger-text:#2b4380;--gcds-nav-group-side-nav-dropdown-padding:2.25rem;--gcds-nav-group-side-nav-trigger-font-weight:600;--gcds-nav-group-side-nav-trigger-hover-background:#f1f2f3;--gcds-nav-group-side-nav-trigger-icon-margin:1.125rem;--gcds-nav-group-side-nav-trigger-margin:0.5rem;--gcds-nav-group-top-nav-dropdown-background:#fff;--gcds-nav-group-top-nav-dropdown-box-shadow:0 0 0.5rem rgba(0,0,0,.25);--gcds-nav-group-top-nav-dropdown-padding:0.75rem 0.75rem 0.125rem;--gcds-nav-group-top-nav-dropdown-width:20rem;--gcds-nav-group-top-nav-font:500 1rem/150% \"Noto Sans\",sans-serif;--gcds-nav-group-top-nav-trigger-hover-background:#d6d9dd;--gcds-nav-group-top-nav-trigger-hover-text:#0535d2;--gcds-nav-group-top-nav-trigger-hover-decoration-thickness:0.125rem;--gcds-nav-group-top-nav-trigger-decoration-thickness:0.0625rem;--gcds-nav-group-top-nav-trigger-underline-offset:0.25rem;--gcds-nav-group-top-nav-trigger-expanded-background-color:#d6d9dd;--gcds-nav-group-top-nav-trigger-icon-margin:0.5rem;--gcds-nav-group-top-nav-trigger-padding:1.125rem 1rem;--gcds-nav-group-trigger-focus-background:#0535d2;--gcds-nav-group-trigger-focus-text:#fff;--gcds-nav-group-trigger-focus-border-radius:0.125rem;--gcds-nav-group-trigger-focus-outline-offset:0.125rem;--gcds-nav-group-trigger-focus-outline:0.25rem solid #0535d2;--gcds-nav-group-trigger-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-nav-group-trigger-font:400 1.25rem/140% \"Noto Sans\",sans-serif;--gcds-nav-group-trigger-hover-text:#0535d2;--gcds-nav-group-trigger-max-width:20rem;--gcds-nav-group-trigger-padding:0.625rem 0.75rem;--gcds-nav-group-trigger-text:#333;--gcds-nav-link-active-border-color:#33465c;--gcds-nav-link-active-font-weight:700;--gcds-nav-link-active-text:#26374a;--gcds-nav-link-active-background:#d7e5f5;--gcds-nav-link-border-width:0.125rem;--gcds-nav-link-default-text:#284162;--gcds-nav-link-default-decoration-thickness:0.0625rem;--gcds-nav-link-default-max-width:20rem;--gcds-nav-link-default-underline-offset:0.25rem;--gcds-nav-link-focus-background:#0535d2;--gcds-nav-link-focus-text:#fff;--gcds-nav-link-focus-border-radius:0.125rem;--gcds-nav-link-focus-outline-offset:0.125rem;--gcds-nav-link-focus-outline:0.25rem solid #0535d2;--gcds-nav-link-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-nav-link-font:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-nav-link-font-mobile:500 1rem/150% \"Noto Sans\",sans-serif;--gcds-nav-link-hover-decoration-thickness:0.125rem;--gcds-nav-link-hover-text:#0535d2;--gcds-nav-link-margin:0.5rem;--gcds-nav-link-padding:0.625rem;--gcds-nav-link-side-nav-hover-background:#f1f2f3;--gcds-nav-link-side-nav-padding:0.625rem 0.5rem;--gcds-nav-link-top-nav-font:500 1rem/150% \"Noto Sans\",sans-serif;--gcds-nav-link-top-nav-hover-background:#d6d9dd;--gcds-nav-link-top-nav-home-font:700 1rem/150% \"Noto Sans\",sans-serif;--gcds-nav-link-top-nav-home-padding:1rem 0.125rem;--gcds-nav-link-top-nav-padding:1rem;--gcds-nav-link-top-nav-text:#333;--gcds-nav-link-top-nav-margin:0;--gcds-notice-border-width:0.375rem;--gcds-notice-content-heading-font-desktop:700 1.8125rem/137% \"Lato\",sans-serif;--gcds-notice-content-heading-font-mobile:700 1.625rem/123% \"Lato\",sans-serif;--gcds-notice-content-heading-margin-block-start-desktop:1rem;--gcds-notice-content-heading-margin-block-start-mobile:1.25rem;--gcds-notice-content-slotted-font-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-notice-content-slotted-font-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-notice-content-slotted-list-margin:1.5rem;--gcds-notice-content-slotted-margin:0.5rem;--gcds-notice-danger-text:#a62a1e;--gcds-notice-icon-after-height:calc(100% - 3.5rem);--gcds-notice-icon-before-height:1.125rem;--gcds-notice-icon-gap:0.875rem;--gcds-notice-icon-margin:0.125rem auto 0;--gcds-notice-icon-width:2.25rem;--gcds-notice-info-text:#1e7b96;--gcds-notice-text:#333;--gcds-notice-success-text:#03662a;--gcds-notice-warning-text:#be5a00;--gcds-pagination-active-text:#fff;--gcds-pagination-active-background:#26374a;--gcds-pagination-border-radius:0.125rem;--gcds-pagination-border-width:0.125rem;--gcds-pagination-default-text:#284162;--gcds-pagination-hover-background:#d7e5f5;--gcds-pagination-hover-text:#0535d2;--gcds-pagination-focus-background:#0535d2;--gcds-pagination-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-pagination-focus-text:#fff;--gcds-pagination-focus-outline-width:0.25rem;--gcds-pagination-font-desktop:500 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-pagination-font-mobile:500 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-pagination-list-end-button-padding:0.5rem;--gcds-pagination-listitem-margin:0.375rem;--gcds-pagination-mobile-list-border:#284162;--gcds-pagination-mobile-list-item-margin:0.125rem;--gcds-pagination-mobile-list-prevnext-margin:0.75rem auto 0;--gcds-pagination-simple-label-font-weight:400;--gcds-pagination-simple-listitem-margin:0.375rem 0.375rem 0.75rem;--gcds-pagination-simple-listitem-text-margin:0 0 0.125rem;--gcds-pagination-simple-padding:0.75rem 0.5rem;--gcds-phase-banner-details-cta-margin:0 0 0 0.875rem;--gcds-phase-banner-font:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-phase-banner-icon-margin:1.125rem;--gcds-phase-banner-icon-max-height:1.125rem;--gcds-phase-banner-padding:0.875rem;--gcds-phase-banner-primary-background:#26374a;--gcds-phase-banner-primary-text:#fff;--gcds-phase-banner-secondary-background:#f1f2f3;--gcds-phase-banner-secondary-text:#333;--gcds-radio-border-radius:100%;--gcds-radio-check-border-width:0.3125rem;--gcds-radio-check-height-and-width:1.125rem;--gcds-radio-check-left:0.9375rem;--gcds-radio-check-top:0.9375rem;--gcds-radio-danger-border:#d3080c;--gcds-radio-default-background:#fff;--gcds-radio-default-text:#333;--gcds-radio-disabled-background:#d6d9dd;--gcds-radio-disabled-border:#545961;--gcds-radio-disabled-text:#545961;--gcds-radio-error-message-margin:0 0 0.5rem;--gcds-radio-focus-background:#fff;--gcds-radio-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-radio-focus-color:#0535d2;--gcds-radio-focus-outline-width:0.25rem;--gcds-radio-font:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-radio-hint-margin:0 0 1rem;--gcds-radio-input-border-width:0.125rem;--gcds-radio-input-height-and-width:3rem;--gcds-radio-label-font-desktop:500 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-radio-label-font-mobile:500 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-radio-label-padding:0 0 0 3.75rem;--gcds-radio-legend-font-desktop:700 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-radio-legend-font-mobile:700 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-radio-legend-hint-margin:0 0 1rem;--gcds-radio-legend-margin:0 0 0.125rem;--gcds-radio-legend-required-font-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-radio-legend-required-font-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-radio-margin:0 0 1.125rem;--gcds-radio-max-width:46.5rem;--gcds-radio-padding:0.5rem;--gcds-search-border-color:#d6d9dd;--gcds-search-border-width:0.0625rem;--gcds-search-button-width-height:2.5rem;--gcds-search-default-background:#fff;--gcds-search-default-text:#333;--gcds-search-focus-border-color:#0535d2;--gcds-search-focus-border-width:0.125rem;--gcds-search-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-search-focus-margin:0 -0.125rem 0 0;--gcds-search-font:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-search-margin:0 0 0.125rem;--gcds-search-max-height:2.5rem;--gcds-search-outline-width:0.25rem;--gcds-search-padding:0.375rem 0 0.375rem 0.75rem;--gcds-search-placeholder:#545961;--gcds-select-arrow-position-x:calc(100% - 0.75rem);--gcds-select-border-radius:0.125rem;--gcds-select-border-width:0.125rem;--gcds-select-danger-border:#d3080c;--gcds-select-default-background:#fff;--gcds-select-default-text:#333;--gcds-select-disabled-background:#d6d9dd;--gcds-select-disabled-text:#545961;--gcds-select-focus-border:#0535d2;--gcds-select-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-select-font-desktop:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-select-font-mobile:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-select-margin:0 0 1.5rem;--gcds-select-min-width-and-height:3rem;--gcds-select-outline-width:0.25rem;--gcds-select-padding:0.5rem 3.75rem 0.5rem 0.5rem;--gcds-side-nav-heading-font:700 1.5rem/133% \"Lato\",sans-serif;--gcds-side-nav-heading-margin:0.5rem;--gcds-side-nav-heading-padding:0.625rem;--gcds-side-nav-max-width:20rem;--gcds-signature-color-flag:#eb2d37;--gcds-signature-color-text:#000;--gcds-signature-signature-height:1.21875rem;--gcds-signature-signature-height-desktop:2.09375rem;--gcds-signature-white-default:#fff;--gcds-signature-wordmark-height:3rem;--gcds-stepper-font-desktop:600 1.375rem/145% \"Lato\",sans-serif;--gcds-stepper-font-mobile:600 1.25rem/140% \"Lato\",sans-serif;--gcds-stepper-margin-desktop:0 0 0.5rem;--gcds-stepper-margin-mobile:0 0 0.25rem;--gcds-textarea-border-radius:0.125rem;--gcds-textarea-border-width:0.125rem;--gcds-textarea-danger-border:#d3080c;--gcds-textarea-default-background:#fff;--gcds-textarea-default-text:#333;--gcds-textarea-disabled-background:#d6d9dd;--gcds-textarea-disabled-text:#545961;--gcds-textarea-focus-border:#0535d2;--gcds-textarea-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-textarea-font:400 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-textarea-margin:0 0 1.5rem;--gcds-textarea-min-height:3rem;--gcds-textarea-outline-width:0.25rem;--gcds-textarea-padding:0.5rem;--gcds-top-nav-border-color:#d6d9dd;--gcds-top-nav-border-width:0.0625rem;--gcds-top-nav-max-width:71.25rem;--gcds-topic-menu-border-width:0.0625rem;--gcds-topic-menu-button-background:#26374a;--gcds-topic-menu-button-border:#26374a;--gcds-topic-menu-button-expanded-background:#444;--gcds-topic-menu-button-expanded-border-color:#444;--gcds-topic-menu-button-expanded-text:#fff;--gcds-topic-menu-button-home-background:#fff;--gcds-topic-menu-button-home-border-color:#fff;--gcds-topic-menu-button-home-text:#284162;--gcds-topic-menu-button-padding:0.625rem 1.125rem;--gcds-topic-menu-button-text:#fff;--gcds-topic-menu-focus-background:#0535d2;--gcds-topic-menu-focus-text:#fff;--gcds-topic-menu-focus-border-radius:0.125rem;--gcds-topic-menu-focus-box-shadow:0 0 0 0.125rem #fff;--gcds-topic-menu-focus-outline-offset:0.125rem;--gcds-topic-menu-focus-outline:0.25rem solid #0535d2;--gcds-topic-menu-font:400 1rem/150% \"Noto Sans\",sans-serif;--gcds-topic-menu-max-width:71.25rem;--gcds-topic-menu-menuitem-border-block-end:#545961;--gcds-topic-menu-menuitem-border-inline-end:#fff;--gcds-topic-menu-menuitem-expanded-background:#fff;--gcds-topic-menu-menuitem-expanded-text:#333;--gcds-topic-menu-menuitem-padding:0.75rem 1.5rem;--gcds-topic-menu-menuitem-text:#fff;--gcds-topic-menu-menuitem-text-underline-offset:0.25rem;--gcds-topic-menu-menuitem-width:22.5rem;--gcds-topic-menu-mobile-item-expanded-margin-inline-start:3.75rem;--gcds-topic-menu-mobile-item-expanded-padding-inline-start:3.75rem;--gcds-topic-menu-mobile-menuitem-background:#d6d9dd;--gcds-topic-menu-mobile-mostrequested-background:#d6d9dd;--gcds-topic-menu-mobile-mostrequested-border:#a8adb4;--gcds-topic-menu-mobile-mostrequested-expanded-margin-inline-start:6rem;--gcds-topic-menu-mobile-mostrequested-hover-text:#000;--gcds-topic-menu-mobile-themelist-border:#f1f2f3;--gcds-topic-menu-mobile-themelist-margin-block-start:3rem;--gcds-topic-menu-mobile-topiclist-item-first-menuitem-border:#d6d9dd;--gcds-topic-menu-mobile-topiclist-item-first-menuitem-text:#000;--gcds-topic-menu-mobile-topiclist-item-last-menuitem-hover-text:#000;--gcds-topic-menu-mobile-topiclist-item-last-menuitem-text:#284162;--gcds-topic-menu-mobile-topiclist-menuitem-border-block-end:#d6d9dd;--gcds-topic-menu-mobile-topiclist-menuitem-hover-text:#0535d2;--gcds-topic-menu-mobile-topiclist-menuitem-padding:0.875rem 1.5rem 0.875rem 0;--gcds-topic-menu-mostrequested-item-last-margin-block-start:0.875rem;--gcds-topic-menu-mostrequested-item-width:100%;--gcds-topic-menu-themelist-background:#444;--gcds-topic-menu-themelist-item-border:#444;--gcds-topic-menu-themelist-text:#fff;--gcds-topic-menu-themelist-width:100%;--gcds-topic-menu-topiclist-background:#fff;--gcds-topic-menu-topiclist-border:#d6d9dd;--gcds-topic-menu-topiclist-box-shadow:0.5rem 0.5rem 0.5rem 0.375rem rgba(0,0,0,.1);--gcds-topic-menu-topiclist-item-first-font:700 1.8125rem/137% \"Noto Sans\",sans-serif;--gcds-topic-menu-topiclist-item-first-margin-block-end:2.25rem;--gcds-topic-menu-topiclist-item-first-width:100%;--gcds-topic-menu-topiclist-item-last-left:25rem;--gcds-topic-menu-topiclist-item-last-top:6rem;--gcds-topic-menu-topiclist-left:22.5rem;--gcds-topic-menu-topiclist-margin-block-end:1.5rem;--gcds-topic-menu-topiclist-menuitem-hover-text:#0535d2;--gcds-topic-menu-topiclist-menuitem-hover-text-decoration-thickness:0.125rem;--gcds-topic-menu-topiclist-menuitem-padding:0.375rem 0;--gcds-topic-menu-topiclist-menuitem-popup-font:700 1.25rem/160% \"Noto Sans\",sans-serif;--gcds-topic-menu-topiclist-menuitem-popup-text:#000;--gcds-topic-menu-topiclist-menuitem-text:#284162;--gcds-topic-menu-topiclist-min-height:45.9375rem;--gcds-topic-menu-topiclist-padding:0 2.25rem 1.5rem 2.25rem;--gcds-topic-menu-topiclist-text:#000;--gcds-topic-menu-topiclist-width:calc(100% - 22.5rem);--gcds-verify-banner-background:#f1f2f3;--gcds-verify-banner-container-xs:20rem;--gcds-verify-banner-container-sm:30rem;--gcds-verify-banner-container-md:48rem;--gcds-verify-banner-container-lg:62rem;--gcds-verify-banner-container-xl:71.25rem;--gcds-verify-banner-container-full:100%;--gcds-verify-banner-container-padding:1.125rem;--gcds-verify-banner-content-border-color:#7d828b;--gcds-verify-banner-content-border-width:0.0625rem;--gcds-verify-banner-content-heading-margin:0 0 0.125rem;--gcds-verify-banner-content-padding-block-start:1.5rem;--gcds-verify-banner-content-padding-block-end:0.75rem;--gcds-verify-banner-font:400 1.125rem/155% \"Noto Sans\",sans-serif;--gcds-verify-banner-summary-padding:0.75rem;--gcds-verify-banner-summary-content-margin:0 1.125rem 0 0;--gcds-verify-banner-text:#333;--gcds-verify-banner-toggle-text:#284162;--gcds-verify-banner-toggle-font-weight:700}@font-face{font-display:block;font-family:gcds-icons;font-style:normal;font-weight:400;src:url(https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@0.2.2/icons/gcds-icons.ttf) format(\"truetype\"),url(https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@0.2.2/icons/gcds-icons.woff) format(\"woff\")}@keyframes fade{0%{opacity:0}to{opacity:1}}body{animation:fade .05s ease-in-out normal forwards}";

/*
 Stencil Client Platform v4.35.1 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var PrimitiveType = /* @__PURE__ */ ((PrimitiveType2) => {
  PrimitiveType2["Undefined"] = "undefined";
  PrimitiveType2["Null"] = "null";
  PrimitiveType2["String"] = "string";
  PrimitiveType2["Number"] = "number";
  PrimitiveType2["SpecialNumber"] = "number";
  PrimitiveType2["Boolean"] = "boolean";
  PrimitiveType2["BigInt"] = "bigint";
  return PrimitiveType2;
})(PrimitiveType || {});
var NonPrimitiveType = /* @__PURE__ */ ((NonPrimitiveType2) => {
  NonPrimitiveType2["Array"] = "array";
  NonPrimitiveType2["Date"] = "date";
  NonPrimitiveType2["Map"] = "map";
  NonPrimitiveType2["Object"] = "object";
  NonPrimitiveType2["RegularExpression"] = "regexp";
  NonPrimitiveType2["Set"] = "set";
  NonPrimitiveType2["Channel"] = "channel";
  NonPrimitiveType2["Symbol"] = "symbol";
  return NonPrimitiveType2;
})(NonPrimitiveType || {});
var TYPE_CONSTANT = "type";
var VALUE_CONSTANT = "value";
var SERIALIZED_PREFIX = "serialized:";

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        if (!hmrVersionId || !BUILD.hotModuleReplacement) {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          }
          switch(bundleId) {
              
                case 'gcds-fieldset':
                    return import(
                      /* webpackMode: "lazy" */
                      './gcds-fieldset.entry.js').then(processMod, consoleError);
                case 'gcds-topic-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './gcds-topic-menu.entry.js').then(processMod, consoleError);
                case 'gcds-alert_40':
                    return import(
                      /* webpackMode: "lazy" */
                      './gcds-alert_40.entry.js').then(processMod, consoleError);
          }
      }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();

// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var COMMENT_NODE_ID = "c";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];
var win = typeof window !== "undefined" ? window : {};
var H = win.HTMLElement || class {
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/remote-value.ts
var RemoteValue = class _RemoteValue {
  /**
   * Deserializes a LocalValue serialized object back to its original JavaScript representation
   *
   * @param serialized The serialized LocalValue object
   * @returns The original JavaScript value/object
   */
  static fromLocalValue(serialized) {
    const type = serialized[TYPE_CONSTANT];
    const value = VALUE_CONSTANT in serialized ? serialized[VALUE_CONSTANT] : void 0;
    switch (type) {
      case "string" /* String */:
        return value;
      case "boolean" /* Boolean */:
        return value;
      case "bigint" /* BigInt */:
        return BigInt(value);
      case "undefined" /* Undefined */:
        return void 0;
      case "null" /* Null */:
        return null;
      case "number" /* Number */:
        if (value === "NaN") return NaN;
        if (value === "-0") return -0;
        if (value === "Infinity") return Infinity;
        if (value === "-Infinity") return -Infinity;
        return value;
      case "array" /* Array */:
        return value.map((item) => _RemoteValue.fromLocalValue(item));
      case "date" /* Date */:
        return new Date(value);
      case "map" /* Map */:
        const map2 = /* @__PURE__ */ new Map();
        for (const [key, val] of value) {
          const deserializedKey = typeof key === "object" && key !== null ? _RemoteValue.fromLocalValue(key) : key;
          const deserializedValue = _RemoteValue.fromLocalValue(val);
          map2.set(deserializedKey, deserializedValue);
        }
        return map2;
      case "object" /* Object */:
        const obj = {};
        for (const [key, val] of value) {
          obj[key] = _RemoteValue.fromLocalValue(val);
        }
        return obj;
      case "regexp" /* RegularExpression */:
        const { pattern, flags } = value;
        return new RegExp(pattern, flags);
      case "set" /* Set */:
        const set = /* @__PURE__ */ new Set();
        for (const item of value) {
          set.add(_RemoteValue.fromLocalValue(item));
        }
        return set;
      case "symbol" /* Symbol */:
        return Symbol(value);
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }
  /**
   * Utility method to deserialize multiple LocalValues at once
   *
   * @param serializedValues Array of serialized LocalValue objects
   * @returns Array of deserialized JavaScript values
   */
  static fromLocalValueArray(serializedValues) {
    return serializedValues.map((value) => _RemoteValue.fromLocalValue(value));
  }
  /**
   * Verifies if the given object matches the structure of a serialized LocalValue
   *
   * @param obj Object to verify
   * @returns boolean indicating if the object has LocalValue structure
   */
  static isLocalValueObject(obj) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    if (!obj.hasOwnProperty(TYPE_CONSTANT)) {
      return false;
    }
    const type = obj[TYPE_CONSTANT];
    const hasTypeProperty = Object.values({ ...PrimitiveType, ...NonPrimitiveType }).includes(type);
    if (!hasTypeProperty) {
      return false;
    }
    if (type !== "null" /* Null */ && type !== "undefined" /* Undefined */) {
      return obj.hasOwnProperty(VALUE_CONSTANT);
    }
    return true;
  }
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/serialize.ts
function deserializeProperty(value) {
  if (typeof value !== "string" || !value.startsWith(SERIALIZED_PREFIX)) {
    return value;
  }
  return RemoteValue.fromLocalValue(JSON.parse(atob(value.slice(SERIALIZED_PREFIX.length))));
}
function createShadowRoot(cmpMeta) {
  const shadowRoot = this.attachShadow({
    mode: "open",
    delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */)
  }) ;
  if (supportsConstructableStylesheets) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(globalStyles);
    shadowRoot.adoptedStyleSheets.push(sheet);
  }
}
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0 || getSlotName(childNode) === slotName)) {
      slottedNodes.push(childNode);
      if (typeof slotName !== "undefined") return slottedNodes;
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var addSlotRelocateNode = (newChild, slotNode, prepend, position) => {
  if (newChild["s-ol"] && newChild["s-ol"].isConnected) {
    return;
  }
  const slottedNodeLocation = document.createTextNode("");
  slottedNodeLocation["s-nr"] = newChild;
  if (!slotNode["s-cr"] || !slotNode["s-cr"].parentNode) return;
  const parent = slotNode["s-cr"].parentNode;
  const appendMethod = internalCall(parent, "appendChild");
  if (typeof position !== "undefined") {
    slottedNodeLocation["s-oo"] = position;
    const childNodes = internalCall(parent, "childNodes");
    const slotRelocateNodes = [slottedNodeLocation];
    childNodes.forEach((n) => {
      if (n["s-nr"]) slotRelocateNodes.push(n);
    });
    slotRelocateNodes.sort((a, b) => {
      if (!a["s-oo"] || a["s-oo"] < (b["s-oo"] || 0)) return -1;
      else if (!b["s-oo"] || b["s-oo"] < a["s-oo"]) return 1;
      return 0;
    });
    slotRelocateNodes.forEach((n) => appendMethod.call(parent, n));
  } else {
    appendMethod.call(parent, slottedNodeLocation);
  }
  newChild["s-ol"] = slottedNodeLocation;
  newChild["s-sh"] = slotNode["s-hn"];
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function dispatchSlotChangeEvent(elm) {
  elm.dispatchEvent(new CustomEvent("slotchange", { bubbles: false, cancelable: false, composed: false }));
}
function findSlotFromSlottedNode(slottedNode, parentHost) {
  var _a;
  parentHost = parentHost || ((_a = slottedNode["s-ol"]) == null ? void 0 : _a.parentElement);
  if (!parentHost) return { slotNode: null, slotName: "" };
  const slotName = slottedNode["s-sn"] = getSlotName(slottedNode) || "";
  const childNodes = internalCall(parentHost, "childNodes");
  const slotNode = getHostSlotNodes(childNodes, parentHost.tagName, slotName)[0];
  return { slotNode, slotName };
}
var patchSlottedNode = (node) => {
  if (!node || node.__nextSibling !== void 0 || !globalThis.Node) return;
  patchNextSibling(node);
  patchPreviousSibling(node);
  patchParentNode(node);
  if (node.nodeType === Node.ELEMENT_NODE) {
    patchNextElementSibling(node);
    patchPreviousElementSibling(node);
  }
};
var patchNextSibling = (node) => {
  if (!node || node.__nextSibling) return;
  patchHostOriginalAccessor("nextSibling", node);
  Object.defineProperty(node, "nextSibling", {
    get: function() {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.childNodes;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index + 1];
      }
      return this.__nextSibling;
    }
  });
};
var patchNextElementSibling = (element) => {
  if (!element || element.__nextElementSibling) return;
  patchHostOriginalAccessor("nextElementSibling", element);
  Object.defineProperty(element, "nextElementSibling", {
    get: function() {
      var _a;
      const parentEles = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.children;
      const index = parentEles == null ? void 0 : parentEles.indexOf(this);
      if (parentEles && index > -1) {
        return parentEles[index + 1];
      }
      return this.__nextElementSibling;
    }
  });
};
var patchPreviousSibling = (node) => {
  if (!node || node.__previousSibling) return;
  patchHostOriginalAccessor("previousSibling", node);
  Object.defineProperty(node, "previousSibling", {
    get: function() {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.childNodes;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousSibling;
    }
  });
};
var patchPreviousElementSibling = (element) => {
  if (!element || element.__previousElementSibling) return;
  patchHostOriginalAccessor("previousElementSibling", element);
  Object.defineProperty(element, "previousElementSibling", {
    get: function() {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.children;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousElementSibling;
    }
  });
};
var patchParentNode = (node) => {
  if (!node || node.__parentNode) return;
  patchHostOriginalAccessor("parentNode", node);
  Object.defineProperty(node, "parentNode", {
    get: function() {
      var _a;
      return ((_a = this["s-ol"]) == null ? void 0 : _a.parentNode) || this.__parentNode;
    },
    set: function(value) {
      this.__parentNode = value;
    }
  });
};
var validElementPatches = ["children", "nextElementSibling", "previousElementSibling"];
var validNodesPatches = [
  "childNodes",
  "firstChild",
  "lastChild",
  "nextSibling",
  "previousSibling",
  "textContent",
  "parentNode"
];
function patchHostOriginalAccessor(accessorName, node) {
  let accessor;
  if (validElementPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Element.prototype, accessorName);
  } else if (validNodesPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Node.prototype, accessorName);
  }
  if (!accessor) {
    accessor = Object.getOwnPropertyDescriptor(node, accessorName);
  }
  if (accessor) Object.defineProperty(node, "__" + accessorName, accessor);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};

// src/runtime/client-hydrate.ts
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  var _a;
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const slottedNodes = [];
  const shadowRootNodes = shadowRoot ? [] : null;
  const vnode = newVNode(tagName, null);
  vnode.$elm$ = hostElm;
  const members = Object.entries(((_a = hostRef.$cmpMeta$) == null ? void 0 : _a.$members$) || {});
  members.forEach(([memberName, [memberFlags, metaAttributeName]]) => {
    var _a2, _b;
    if (!(memberFlags & 31 /* Prop */)) {
      return;
    }
    const attributeName = metaAttributeName || memberName;
    const attrVal = hostElm.getAttribute(attributeName);
    if (attrVal !== null) {
      const attrPropVal = parsePropertyValue(
        attrVal,
        memberFlags,
        !!(((_a2 = hostRef.$cmpMeta$) == null ? void 0 : _a2.$flags$) & 64 /* formAssociated */)
      );
      (_b = hostRef == null ? void 0 : hostRef.$instanceValues$) == null ? void 0 : _b.set(memberName, attrPropVal);
    }
  });
  if (win.document && (!plt.$orgLocNodes$ || !plt.$orgLocNodes$.size)) {
    initializeDocumentHydrate(win.document.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  hostRef.$vnode$ = clientHydrate(
    vnode,
    childRenderNodes,
    slotNodes,
    shadowRootNodes,
    hostElm,
    hostElm,
    hostId,
    slottedNodes
  );
  let crIndex = 0;
  const crLength = childRenderNodes.length;
  let childRenderNode;
  for (crIndex; crIndex < crLength; crIndex++) {
    childRenderNode = childRenderNodes[crIndex];
    const orgLocationId = childRenderNode.$hostId$ + "." + childRenderNode.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = childRenderNode.$elm$;
    if (!shadowRoot) {
      node["s-hn"] = tagName.toUpperCase();
      if (childRenderNode.$tag$ === "slot") {
        node["s-cr"] = hostElm["s-cr"];
      }
    }
    if (childRenderNode.$tag$ === "slot") {
      childRenderNode.$name$ = childRenderNode.$elm$["s-sn"] || childRenderNode.$elm$["name"] || null;
      if (childRenderNode.$children$) {
        childRenderNode.$flags$ |= 2 /* isSlotFallback */;
        if (!childRenderNode.$elm$.childNodes.length) {
          childRenderNode.$children$.forEach((c) => {
            childRenderNode.$elm$.appendChild(c.$elm$);
          });
        }
      } else {
        childRenderNode.$flags$ |= 1 /* isSlotReference */;
      }
    }
    if (orgLocationNode && orgLocationNode.isConnected) {
      if (shadowRoot && orgLocationNode["s-en"] === "") {
        orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
      }
      orgLocationNode.parentNode.removeChild(orgLocationNode);
      if (!shadowRoot) {
        node["s-oo"] = parseInt(childRenderNode.$nodeId$);
      }
    }
    plt.$orgLocNodes$.delete(orgLocationId);
  }
  const hosts = [];
  const snLen = slottedNodes.length;
  let snIndex = 0;
  let slotGroup;
  let snGroupIdx;
  let snGroupLen;
  let slottedItem;
  for (snIndex; snIndex < snLen; snIndex++) {
    slotGroup = slottedNodes[snIndex];
    if (!slotGroup || !slotGroup.length) continue;
    snGroupLen = slotGroup.length;
    snGroupIdx = 0;
    for (snGroupIdx; snGroupIdx < snGroupLen; snGroupIdx++) {
      slottedItem = slotGroup[snGroupIdx];
      if (!hosts[slottedItem.hostId]) {
        hosts[slottedItem.hostId] = plt.$orgLocNodes$.get(slottedItem.hostId);
      }
      if (!hosts[slottedItem.hostId]) continue;
      const hostEle = hosts[slottedItem.hostId];
      if (!hostEle.shadowRoot || !shadowRoot) {
        slottedItem.slot["s-cr"] = hostEle["s-cr"];
        if (!slottedItem.slot["s-cr"] && hostEle.shadowRoot) {
          slottedItem.slot["s-cr"] = hostEle;
        } else {
          slottedItem.slot["s-cr"] = (hostEle.__childNodes || hostEle.childNodes)[0];
        }
        addSlotRelocateNode(slottedItem.node, slottedItem.slot, false, slottedItem.node["s-oo"]);
        {
          patchSlottedNode(slottedItem.node);
        }
      }
      if (hostEle.shadowRoot && slottedItem.node.parentElement !== hostEle) {
        hostEle.appendChild(slottedItem.node);
      }
    }
  }
  if (shadowRoot && !shadowRoot.childNodes.length) {
    let rnIdex = 0;
    const rnLen = shadowRootNodes.length;
    if (rnLen) {
      for (rnIdex; rnIdex < rnLen; rnIdex++) {
        shadowRoot.appendChild(shadowRootNodes[rnIdex]);
      }
      Array.from(hostElm.childNodes).forEach((node) => {
        if (typeof node["s-en"] !== "string" && typeof node["s-sn"] !== "string") {
          if (node.nodeType === 1 /* ElementNode */ && node.slot && node.hidden) {
            node.removeAttribute("hidden");
          } else if (node.nodeType === 8 /* CommentNode */ || node.nodeType === 3 /* TextNode */ && !node.wholeText.trim()) {
            node.parentNode.removeChild(node);
          }
        }
      });
    }
  }
  plt.$orgLocNodes$.delete(hostElm["s-id"]);
  hostRef.$hostElement$ = hostElm;
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId, slottedNodes = []) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  if (node.nodeType === 1 /* ElementNode */) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = createSimpleVNode({
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          // If we don't add the initial classes to the VNode, the first `vdom-render.ts` patch
          // won't try to reconcile them. Classes set on the node will be blown away.
          $attrs$: { class: node.className || "" }
        });
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        const slotName = childVNode.$elm$.getAttribute("s-sn");
        if (typeof slotName === "string") {
          if (childVNode.$tag$ === "slot-fb") {
            addSlot(
              slotName,
              childIdSplt[2],
              childVNode,
              node,
              parentVNode,
              childRenderNodes,
              slotNodes,
              shadowRootNodes,
              slottedNodes
            );
          }
          childVNode.$elm$["s-sn"] = slotName;
          childVNode.$elm$.removeAttribute("s-sn");
        }
        if (childVNode.$index$ !== void 0) {
          parentVNode.$children$[childVNode.$index$] = childVNode;
        }
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(
          parentVNode,
          childRenderNodes,
          slotNodes,
          shadowRootNodes,
          hostElm,
          node.shadowRoot.childNodes[i2],
          hostId,
          slottedNodes
        );
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = nonShadowNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(
        parentVNode,
        childRenderNodes,
        slotNodes,
        shadowRootNodes,
        hostElm,
        nonShadowNodes[i2],
        hostId,
        slottedNodes
      );
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = createSimpleVNode({
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4] || "0",
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      });
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(node, 3 /* TextNode */);
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (hostId === childVNode.$hostId$) {
            if (!parentVNode.$children$) {
              parentVNode.$children$ = [];
            }
            parentVNode.$children$[childVNode.$index$] = childVNode;
          }
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childNodeType === COMMENT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(node, 8 /* CommentNode */);
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 8 /* CommentNode */) {
          childRenderNodes.push(childVNode);
          node.remove();
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          const slotName = node["s-sn"] = childIdSplt[5] || "";
          addSlot(
            slotName,
            childIdSplt[2],
            childVNode,
            node,
            parentVNode,
            childRenderNodes,
            slotNodes,
            shadowRootNodes,
            slottedNodes
          );
        } else if (childNodeType === CONTENT_REF_ID) {
          if (shadowRootNodes) {
            node.remove();
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  } else {
    if (node.nodeType === 3 /* TextNode */ && !node.wholeText.trim()) {
      node.remove();
    }
  }
  return parentVNode;
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1 /* ElementNode */) {
    const componentId = node[HYDRATE_ID] || node.getAttribute(HYDRATE_ID);
    if (componentId) {
      orgLocNodes.set(componentId, node);
    }
    let i2 = 0;
    if (node.shadowRoot) {
      for (; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = 0; i2 < nonShadowNodes.length; i2++) {
      initializeDocumentHydrate(nonShadowNodes[i2], orgLocNodes);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
var createSimpleVNode = (vnode) => {
  const defaultVNode = {
    $flags$: 0,
    $hostId$: null,
    $nodeId$: null,
    $depth$: null,
    $index$: "0",
    $elm$: null,
    $attrs$: null,
    $children$: null,
    $key$: null,
    $name$: null,
    $tag$: null,
    $text$: null
  };
  return { ...defaultVNode, ...vnode };
};
function addSlot(slotName, slotId, childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes) {
  node["s-sr"] = true;
  childVNode.$name$ = slotName || null;
  childVNode.$tag$ = "slot";
  const parentNodeId = (parentVNode == null ? void 0 : parentVNode.$elm$) ? parentVNode.$elm$["s-id"] || parentVNode.$elm$.getAttribute("s-id") : "";
  if (shadowRootNodes && win.document) {
    const slot = childVNode.$elm$ = win.document.createElement(childVNode.$tag$);
    if (childVNode.$name$) {
      childVNode.$elm$.setAttribute("name", slotName);
    }
    if (parentNodeId && parentNodeId !== childVNode.$hostId$) {
      parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
    } else {
      node.parentNode.insertBefore(slot, node);
    }
    addSlottedNodes(slottedNodes, slotId, slotName, node, childVNode.$hostId$);
    node.remove();
    if (childVNode.$depth$ === "0") {
      shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
    }
  } else {
    const slot = childVNode.$elm$;
    const shouldMove = parentNodeId && parentNodeId !== childVNode.$hostId$ && parentVNode.$elm$.shadowRoot;
    addSlottedNodes(slottedNodes, slotId, slotName, node, shouldMove ? parentNodeId : childVNode.$hostId$);
    patchSlotNode(node);
    if (shouldMove) {
      parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
    }
  }
  childRenderNodes.push(childVNode);
  slotNodes.push(childVNode);
  if (!parentVNode.$children$) {
    parentVNode.$children$ = [];
  }
  parentVNode.$children$[childVNode.$index$] = childVNode;
}
var addSlottedNodes = (slottedNodes, slotNodeId, slotName, slotNode, hostId) => {
  let slottedNode = slotNode.nextSibling;
  slottedNodes[slotNodeId] = slottedNodes[slotNodeId] || [];
  while (slottedNode && ((slottedNode["getAttribute"] && slottedNode.getAttribute("slot") || slottedNode["s-sn"]) === slotName || slotName === "" && !slottedNode["s-sn"] && (slottedNode.nodeType === 8 /* CommentNode */ && slottedNode.nodeValue.indexOf(".") !== 1 || slottedNode.nodeType === 3 /* TextNode */))) {
    slottedNode["s-sn"] = slotName;
    slottedNodes[slotNodeId].push({ slot: slotNode, node: slottedNode, hostId });
    slottedNode = slottedNode.nextSibling;
  }
};
var findCorrespondingNode = (node, type) => {
  let sibling = node;
  do {
    sibling = sibling.nextSibling;
  } while (sibling && (sibling.nodeType !== type || !sibling.nodeValue));
  return sibling;
};
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (typeof propValue === "string" && (propValue.startsWith("{") && propValue.endsWith("}") || propValue.startsWith("[") && propValue.endsWith("]"))) {
    try {
      propValue = JSON.parse(propValue);
      return propValue;
    } catch (e) {
    }
  }
  if (typeof propValue === "string" && propValue.startsWith(SERIALIZED_PREFIX)) {
    propValue = deserializeProperty(propValue);
    return propValue;
  }
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      if (isFormAssociated && typeof propValue === "string") {
        return propValue === "" || !!propValue;
      } else {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => getHostRef(ref).$hostElement$ ;

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
var hydrateScopedToShadow = () => {
  if (!win.document) {
    return;
  }
  const styles2 = win.document.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
  let i2 = 0;
  for (; i2 < styles2.length; i2++) {
    registerStyle(styles2[i2].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles2[i2].innerHTML), true);
  }
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    if (elm["s-si"] && initialRender) {
      newClasses.push(elm["s-si"]);
      oldClasses.forEach((c) => {
        if (c.startsWith(elm["s-si"])) newClasses.push(c);
      });
      newClasses = [...new Set(newClasses)];
      classList.add(...newClasses);
    } else {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && true) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$,
          isInitialRender
        );
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$,
      isInitialRender
    );
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var hostTagName;
var useNativeShadowDom = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else {
    if (!win.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win.document.createElement(
      newVNode2.$tag$
    );
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
  }
  elm["s-hn"] = hostTagName;
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.__childNodes || host.childNodes).find(
      (ref) => ref["s-cr"]
    );
    const childNodeArray = Array.from(
      parentElm.__childNodes || parentElm.childNodes
    );
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
      }
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, before);
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(oldStartVnode.$elm$.parentNode, node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  if (text === null) {
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      }
      updateElement(oldVNode, newVNode2, isSvgMode, isInitialRender);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  if (typeof newNode["s-sn"] === "string") {
    if (parent.getRootNode().nodeType !== 11 /* DOCUMENT_FRAGMENT_NODE */) {
      patchParentNode(newNode);
    }
    parent.insertBefore(newNode, reference);
    const { slotNode } = findSlotFromSlottedNode(newNode);
    if (slotNode) dispatchSlotChangeEvent(slotNode);
    return newNode;
  }
  if (parent.__insertBefore) {
    return parent.__insertBefore(newNode, reference);
  } else {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  patch(oldVNode, rootVnode, isInitialLoad);
  if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
    const children = rootVnode.$elm$.__childNodes || rootVnode.$elm$.childNodes;
    for (const childNode of children) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        childNode.hidden = true;
      }
    }
  }
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0],
    !!(cmpMeta.$flags$ & 64 /* formAssociated */)
  );
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$flags$ & 64 /* formAssociated */ && flags & 1 /* isElementConstructor */) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach((cbName) => {
      Object.defineProperty(prototype, cbName, {
        value(...args) {
          const hostRef = getHostRef(this);
          const instance = hostRef.$lazyInstance$ ;
          if (!instance) {
            hostRef.$onReadyPromise$.then((asyncInstance) => {
              const cb = asyncInstance[cbName];
              typeof cb === "function" && cb.call(asyncInstance, ...args);
            });
          } else {
            const cb = instance[cbName] ;
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      });
    });
  }
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                )
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                );
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            const scopeId2 = addStyle(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  {
    plt.$flags$ |= 2 /* appLoaded */;
  }
  {
    hydrateScopedToShadow();
  }
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      if (cmpMeta.$flags$ & 64 /* formAssociated */) {
        HostElement.formAssociated = true;
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 4 /* TargetDocument */) {
    return doc;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

export { Fragment as F, H, Host as a, bootstrapLazy as b, getElement as c, createEvent as d, globalScripts as g, h, promiseResolve as p, registerInstance as r, setNonce as s };
//# sourceMappingURL=index-Bjnb6Mm3.js.map

//# sourceMappingURL=index-Bjnb6Mm3.js.map