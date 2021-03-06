/*
 * -----------------------------------------------------------------------\
 * Lumeer
 *
 * Copyright (C) since 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * -----------------------------------------------------------------------/
 */

import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {WorkspaceService} from './workspace.service';
import {HeaderComponent} from './header/header.component';
import {HttpClient} from './rest/http-client.service';
import {UserSettingsService} from './rest/user-settings.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProjectService} from './rest/project.service';
import {OrganizationService} from './rest/organization.service';
import {CollectionService} from './rest/collection.service';
import {DocumentService} from './rest/document.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  providers: [
    CollectionService,
    DocumentService,
    HttpClient,
    OrganizationService,
    ProjectService,
    UserSettingsService,
    WorkspaceService
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import CoreModule only in the AppModule!');
    }
  }

}
