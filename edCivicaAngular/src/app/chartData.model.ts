export class ChartData {
  public dati = [];
  constructor(public title, public type, json_data, public columnNames) {
    for (var i in json_data) {
      const parsedX = parseInt(json_data['TimePeriod']);
      const parsedY = parseFloat(json_data['Value'])
      if (!isNaN(parsedX) && !isNaN(parsedY)) {
        this.dati.push([parsedX, parsedY]);
      }
    }
  }
}
