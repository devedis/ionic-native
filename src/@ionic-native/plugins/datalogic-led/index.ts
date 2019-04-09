import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface LedConfig {
  led: LedEnum;
  enable: boolean;
}

export enum LedEnum {
  LED_GOOD_READ = 'LED_GOOD_READ',
  LED_GREEN_SPOT = 'LED_GREEN_SPOT',
  LED_NOTIFICATION = 'LED_NOTIFICATION'
}

/**
 * @name LedManager
 * @description
 * This plugin is a bridge for the LedManager of Datalogic Scanner SDK
 *
 * @usage
 * ```typescript
 * import { LedManager } from '@ionic-native/datalogic-led';
 *
 *
 * constructor(private ledManager: LedManager) { }
 */
@Plugin({
  pluginName: 'LedManager',
  plugin: 'cordova-plugin-datalogic', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.ledManager', // the variable reference to call the plugin, example: navigator.geolocation
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class LedManager extends IonicNativePlugin {

  /**
   * returns "Successfully set the Led"
   */
  @Cordova()
  setLed(ledConfig: LedConfig): Promise<string> {
    return;
  }
}
