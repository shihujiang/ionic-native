/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';
// import { Observable } from 'rxjs/Observable';

export interface YztParams {
  appid: String;
  uname: String;
  pwd: String;
}

/**
 * @name YztPlugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { YztPlugin } from 'ionic-native';
 *
 * YztPlugin.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'YiZhangTong',
  plugin: 'com.pingan.yzt', // npm package name, example: cordova-plugin-camera
  pluginRef: 'uuu', // the variable reference to call the plugin, example: navigator.geolocation
  platforms: ['Android', 'iOS']
  // repo: '', // the github repository URL for the plugin
  // install: '' // OPTIONAL install command, in case the plugin requires variables
})
export class YztPlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static coolMethod(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
