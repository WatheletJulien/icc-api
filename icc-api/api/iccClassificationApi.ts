/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class iccClassificationApi {
  host: string
  headers: Array<XHR.Header>
  constructor(host: string, headers: any) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  createClassification(body?: models.ClassificationDto): Promise<models.ClassificationDto | any> {
    let _body = null
    _body = body

    const _url = this.host + "/classification" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.ClassificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  deleteClassifications(classificationIds: string): Promise<Array<string> | any> {
    let _body = null

    const _url =
      this.host +
      "/classification/{classificationIds}".replace("{classificationIds}", classificationIds + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  findByHCPartyPatientSecretFKeys(
    hcPartyId?: string,
    secretFKeys?: string
  ): Promise<Array<models.ClassificationDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/classification/byHcPartySecretForeignKeys" +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + hcPartyId : "") +
      (secretFKeys ? "&secretFKeys=" + secretFKeys : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ClassificationDto(it)))
      .catch(err => this.handleError(err))
  }
  getClassification(classificationId: string): Promise<models.ClassificationDto | any> {
    let _body = null

    const _url =
      this.host +
      "/classification/{classificationId}".replace("{classificationId}", classificationId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.ClassificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getClassificationByHcPartyId(ids: string): Promise<Array<models.ClassificationDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/classification/byIds/{ids}".replace("{ids}", ids + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ClassificationDto(it)))
      .catch(err => this.handleError(err))
  }
  modifyClassification(body?: models.ClassificationDto): Promise<models.ClassificationDto | any> {
    let _body = null
    _body = body

    const _url = this.host + "/classification" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body)
      .then(doc => new models.ClassificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  newDelegations(
    classificationId: string,
    body?: Array<models.DelegationDto>
  ): Promise<models.ClassificationDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/classification/{classificationId}/delegate".replace(
        "{classificationId}",
        classificationId + ""
      ) +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.ClassificationDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  setClassificationsDelegations(body?: Array<models.IcureStubDto>): Promise<any | Boolean> {
    let _body = null
    _body = body

    const _url = this.host + "/classification/delegations" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
}
