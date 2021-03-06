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
import {RouterModule, Routes} from '@angular/router';
import {WorkspaceChooserComponent} from './workspace-chooser/workspace-chooser.component';
import {OrganizationEditComponent} from './organization-edit/organization-edit.component';
import {ProjectEditComponent} from './project-edit/project-edit.component';

const workspaceRoutes: Routes = [
  {path: 'workspace', component: WorkspaceChooserComponent},
  {path: 'organization/:organizationCode/project/:projectCode/edit', component: ProjectEditComponent},
  {path: 'organization/:organizationCode/project/add', component: ProjectEditComponent},
  {path: 'organization/:organizationCode/edit', component: OrganizationEditComponent},
  {path: 'organization/add', component: OrganizationEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(workspaceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkspaceRoutingModule {

}
