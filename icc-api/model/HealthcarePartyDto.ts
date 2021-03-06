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

import * as models from "./models"

export class HealthcarePartyDto {
  constructor(json: JSON | any) {
    Object.assign(this as HealthcarePartyDto, json)
  }
  id?: string

  rev?: string

  deletionDate?: number

  name?: string

  lastName?: string

  firstName?: string

  gender?: HealthcarePartyDto.GenderEnum

  civility?: string

  speciality?: string

  companyName?: string

  bankAccount?: string

  bic?: string

  proxyBankAccount?: string

  proxyBic?: string

  invoiceHeader?: string

  userName?: string

  publicKey?: string

  nihii?: string

  ssin?: string

  cbe?: string

  convention?: number

  userId?: string

  parentId?: string

  supervisorId?: string

  notes?: string

  sendFormats?: { [key: string]: string }

  addresses?: Array<models.AddressDto>

  languages?: Array<string>

  statuses?: Array<HealthcarePartyDto.StatusesEnum>

  specialityCodes?: Array<models.CodeDto>

  hcPartyKeys?: { [key: string]: Array<string> }

  financialInstitutionInformation?: Array<models.FinancialInstitutionInformationDto>

  options?: { [key: string]: string }

  billingType?: string

  type?: string

  contactPerson?: string

  contactPersonHcpId?: string

  flatRateTarifications?: Array<models.FlatRateTarificationDto>
}
export namespace HealthcarePartyDto {
  export enum GenderEnum {
    Male = <any>"male",
    Female = <any>"female",
    Unknown = <any>"unknown",
    Indeterminate = <any>"indeterminate",
    Changed = <any>"changed",
    ChangedToMale = <any>"changedToMale",
    ChangedToFemale = <any>"changedToFemale"
  }
  export enum StatusesEnum {
    Trainee = <any>"trainee",
    Withconvention = <any>"withconvention",
    Accreditated = <any>"accreditated"
  }
}
