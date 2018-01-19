import WindowScroller from "./logic/window-scroller";
import createConfigurationFromObject from "./configuration/create-configuration-from-object";

// This function is package global import so it's now used anywhere inside the package
// noinspection JSUnusedGlobalSymbols
export function windowScroller(config) {
    return new WindowScroller(createConfigurationFromObject(config));
}