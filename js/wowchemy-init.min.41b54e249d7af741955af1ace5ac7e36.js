/*! Wowchemy v5.0.0-beta.1 | https://wowchemy.com/ */
/*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
/*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/master/LICENSE.md */

;
/*************************************************
 *  Wowchemy
 *  https://github.com/wowchemy/wowchemy-hugo-modules
 *
 *  Wowchemy Initialization
 **************************************************/

import {initThemeVariation} from './wowchemy-theming';

import {wcDarkLightEnabled, wcIsSiteThemeDark} from '@params';

window.wc = {
  darkLightEnabled: wcDarkLightEnabled,
  isSiteThemeDark: wcIsSiteThemeDark,
}

// Initialize theme variation and set body theme class.
initThemeVariation();
