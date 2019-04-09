import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface KeyboardResult {
  triggers: Trigger[];
}

export interface Trigger {
  id: number;
  name: string;
  enabled: boolean;
}

/**
 * @name KeyboardManager
 * @description
 * This plugin is a bridge for the KeyboardManager of Datalogic Scanner SDK
 *
 * @usage
 * ```typescript
 * import { KeyboardManager } from '@ionic-native/datalogic-keyboard';
 *
 *
 * constructor(private keyboardManager: KeyboardManager) { }
 */
@Plugin({
  pluginName: 'KeyboardManager',
  plugin: 'cordova-plugin-datalogic', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.keyboardManager', // the variable reference to call the plugin, example: navigator.geolocation
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class KeyboardManager extends IonicNativePlugin {

  /**
   * returns json in form of KeyboardResult
   */
  @Cordova()
  getAllAvailableTriggers(): Promise<string> {
    return;
  }

  /**
   * returns text "Successfully set all triggers"
   * @param enable: boolean
   */
  @Cordova()
  setAllAvailableTriggers(enable: boolean): Promise<string> {
    return;
  }

  /**
   * returns json in form of KeyboardResult
   * @param config
   */
  @Cordova()
  setTriggers(config: Trigger[]): Promise<string> {
    return;
  }
}
