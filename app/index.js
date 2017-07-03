import "webpack-jquery-ui/dialog";
import "webpack-jquery-ui/css";

import { init as initComponent } from "./myComponent/index";

import "./css/fonts.css";
import "./css/styles.css";
import "../node_modules/font-awesome/css/font-awesome.css";

import "./images/lock.png";

$(function() {
    initComponent();
});