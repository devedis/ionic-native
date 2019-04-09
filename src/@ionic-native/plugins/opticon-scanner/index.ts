import { Injectable } from '@angular/core';
import {
  Cordova,
  CordovaInstance,
  CordovaProperty,
  InstanceProperty,
  IonicNativePlugin,
  Plugin
} from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface ReadResult {
  text: string;
  codeId: string;
}

/**
 * @name Opticon Scanner
 * @description
 * This plugin is a bridge for the Opticon Scanner SDK
 *
 * @usage
 * ```typescript
 * import { OpticonScanner } from '@ionic-native/opticon-scanner';
 *
 *
 * constructor(private opticonScanner: OpticonScanner) { }
 */
@Plugin({
  pluginName: 'OpticonScanner',
  plugin: 'cordova-plugin-ionic-opticon-scanner', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.OpticonScanner', // the variable reference to call the plugin, example: navigator.geolocation
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class OpticonScanner extends IonicNativePlugin {

  @Cordova()
  init(): Promise<void> {
    return;
  }

  @Cordova({
    observable: true
  })
  onReadData(): Observable<ReadResult> {
    return;
  }

  @Cordova({
    observable: true
  })
  onTimeout(): Observable<void> {
    return;
  }

  @Cordova({
    observable: true
  })
  onStart(): Observable<void> {
    return;
  }

  @Cordova({
    observable: true
  })
  onStop(): Observable<void> {
    return;
  }

  @Cordova({
    observable: true
  })
  onConnect(): Observable<void> {
    return;
  }

  @Cordova({
    observable: true
  })
  onDisconnect(): Observable<void> {
    return;
  }

  @Cordova()
  startDecode(): Promise<void> {
    return;
  }

  @Cordova()
  stopDecode(): Promise<void> {
    return;
  }

  @Cordova()
  startTriger(): Promise<void> {
    return;
  }

  @Cordova()
  stopTriger(): Promise<void> {
    return;
  }

  @Cordova()
  isConnected(): Promise<boolean> {
    return;
  }

  @Cordova()
  isTrigerMode(): Promise<boolean> {
    return;
  }
}
