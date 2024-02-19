import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /mobile|android|iphone|ipad|iemobile|opera mini/i.test(userAgent);
    }
    return false;
  }
}
