import $api from "../http";

export default class ObjectSearchDate {
    static async fetchObjectSearchDate(obj) {
        return $api.post('v1/objectsearch', {
          "issueDateInterval": {
            "startDate": obj.dateStart,
            "endDate": obj.dateEnd
          },
          "searchContext": {
            "targetSearchEntitiesContext": {
              "targetSearchEntities": [
                {
                  "type": "company",
                  "sparkId": null,
                  "entityId": null,
                  "inn": +obj.inn,
                  "maxFullness": obj.checkbox1 === "on" ? true : false,
                  "inBusinessNews": obj.checkbox2 === null ? null : (obj.checkbox2 === "on" ? true : false)
                }
              ],
              "onlyMainRole": obj.checkbox3 === "on" ? true : false,
              "tonality": obj.tonality,
              "onlyWithRiskFactors": obj.checkbox4 === "on" ? true : false,
              "riskFactors": {
                "and": [],
                "or": [],
                "not": []
              },
              "themes": {
                "and": [],
                "or": [],
                "not": []
              }
            },
            "themesFilter": {
              "and": [],
              "or": [],
              "not": []
            }
          },
          "searchArea": {
            "includedSources": [],
            "excludedSources": [],
            "includedSourceGroups": [],
            "excludedSourceGroups": []
          },
          "attributeFilters": {
            "excludeTechNews": obj.checkbox5 === "on" ? true : false,
            "excludeAnnouncements": obj.checkbox6 === "on" ? true : false,
            "excludeDigests": obj.checkbox7 === "on" ? true : false
          },
          "similarMode": "duplicates",
          "limit": +obj.quantity,
          "sortType": "sourceInfluence",
          "sortDirectionType": "desc",
          "intervalType": "month",
          "histogramTypes": [
            "totalDocuments",
            "riskFactors"
          ]
        })
    }
}