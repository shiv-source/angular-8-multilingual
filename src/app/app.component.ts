import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'angular-multilingual';
// }



export class AppComponent {
  title = 'angular-multilingual';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'hi']);
    translate.setDefaultLang('en-US');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/hi|hi-HI/) ? 'hi' : 'en-US');
    
    // console.log('Browser Lang =', browserLang);
    // console.log('Navigator Lang =', navigator.language);
    // console.log('Current Lang =', translate.currentLang);
  }
}
