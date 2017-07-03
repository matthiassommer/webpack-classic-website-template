// import modules from jQuery UI
import "webpack-jquery-ui/dialog";
import "webpack-jquery-ui/css";

// Examplary import from other modules.
import { init as initComponent } from "./myComponent/index";

import "./css/fonts.css";
import "./css/styles.css";
// This is how you use files from the node_modules folder, such as the font-awesome package.
import "../node_modules/font-awesome/css/font-awesome.css";

/**
 * Import images in your .js files, otherwise they won't be included in the dist folder.
 */
import "./images/lock.png";

$(function() {
    initComponent();
});