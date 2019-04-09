import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';


export interface ReadResult {
  barcodeData: string;
  barcodeType: string;
}

/**
 * @name BarcodeManager
 * @description
 * This plugin is a bridge for the BarcodeManager of Datalogic Scanner SDK
 *
 * @usage
 * ```typescript
 * import { BarcodeManager } from '@ionic-native/datalogic-barcode';
 *
 *
 * constructor(private barcodeManager: BarcodeManager) { }
 */
@Plugin({
  pluginName: 'BarcodeManager',
  plugin: 'cordova-plugin-datalogic', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.barcodeManager', // the variable reference to call the plugin, example: navigator.geolocation
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class BarcodeManager extends IonicNativePlugin {

  /**
   * returns a json in form of ReadResult
   */
  @Cordova({
    observable: true
  })
  addReadListner(): Observable<string> {
    return;
  }
}
