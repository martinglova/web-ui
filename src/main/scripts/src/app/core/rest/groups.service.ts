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

import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {HttpClient} from './http-client.service';
import {isUndefined} from 'util';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class GroupsService {

  constructor(private http: HttpClient) {
  }

  public getGroups(orgCode: string): Observable<string[]> {
    return this.http.get(GroupsService.apiPrefix(orgCode))
      .map(response => response.json() as string[]);
  }

  private static apiPrefix(organizationCode: string, projCode?: string): string {
    return `/lumeer-engine/rest/organizations/${organizationCode}/groups`;
  }

}
