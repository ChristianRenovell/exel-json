var XLSX = require("xlsx");

const ExcelAJSON = () => {
  //capturamos el exel  
  const excel = XLSX.readFile("./datos.xls");
  //capturamos el numero de hojas
  var nombreHoja = excel.SheetNames; 
  //guardamos el json en una variable;
  var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

  console.log(datos);

};
ExcelAJSON();