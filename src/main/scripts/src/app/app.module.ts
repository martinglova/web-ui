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

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {WorkspaceModule} from './workspace/workspace.module';
import {CollectionModule} from './collection/collection.module';
import {SearchModule} from './search/search.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    CollectionModule,
    SearchModule,
    WorkspaceModule,
    AppRoutingModule // needs to stay last
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
