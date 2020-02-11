import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BaseAlertComponent } from 'ng-pensive-design-system/components/base-alert';
import { BaseBadgeComponent } from 'ng-pensive-design-system/components/base-badge';
import { BaseButtonComponent } from 'ng-pensive-design-system/components/base-button';
import { BaseCardComponent } from 'ng-pensive-design-system/components/base-card';
import { BaseCardHeaderComponent } from 'ng-pensive-design-system/components/base-card-header';
import { BaseCardBodyComponent } from 'ng-pensive-design-system/components/base-card-body';
import { BaseCardFooterComponent } from 'ng-pensive-design-system/components/base-card-footer';
import { BaseCarouselComponent } from 'ng-pensive-design-system/components/base-carousel';
import { BaseCarouselCaptionComponent } from 'ng-pensive-design-system/components/base-carousel-caption';
import { BaseCarouselInnerComponent } from 'ng-pensive-design-system/components/base-carousel-inner';
import { BaseSlideIndicatorComponent } from 'ng-pensive-design-system/components/base-slide-indicator';
import { BaseDropdownComponent } from 'ng-pensive-design-system/components/base-dropdown';
import { BaseDropdownMenuComponent } from 'ng-pensive-design-system/components/base-dropdown-menu';
import { BaseModalComponent } from 'ng-pensive-design-system/components/base-modal';
import { BaseModalHeaderComponent } from 'ng-pensive-design-system/components/base-modal-header';
import { BaseModalBodyComponent } from 'ng-pensive-design-system/components/base-modal-body';
import { BaseModalFooterComponent } from 'ng-pensive-design-system/components/base-modal-footer';
import { BaseNavbarComponent } from 'ng-pensive-design-system/components/base-navbar';
import { BaseProgressComponent } from 'ng-pensive-design-system/components/base-progress';
import { BaseSpinnerComponent } from 'ng-pensive-design-system/components/base-spinner';
import { CloseButtonComponent } from 'ng-pensive-design-system/components/close-button';

@NgModule({
  declarations: [
    AppComponent,
    // declare here all your components
    BaseAlertComponent,
    BaseBadgeComponent,
    BaseButtonComponent,
    BaseCardComponent,
    BaseCardHeaderComponent,
    BaseCardBodyComponent,
    BaseCardFooterComponent,
    BaseCarouselComponent,
    BaseCarouselCaptionComponent,
    BaseCarouselInnerComponent,
    BaseDropdownComponent,
    BaseDropdownMenuComponent,
    BaseModalComponent,
    BaseModalHeaderComponent,
    BaseModalBodyComponent,
    BaseModalFooterComponent,
    BaseNavbarComponent,
    BaseProgressComponent,
    BaseSlideIndicatorComponent,
    BaseSpinnerComponent,
    CloseButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
