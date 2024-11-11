// Code.gs
function doGet() {
 return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getData(){ // Get data from Google sheet and return as an array
var ss = SpreadsheetApp.openById('URL_ID_HERE')
      activeSheet = ss.getActiveSheet(),
      refDatasrc = ss.getSheetByName("Hoja1"),
      refDataRange = ss.getDataRange(),
      values = refDataRange.getValues();
      values.shift();
  return values;
}
