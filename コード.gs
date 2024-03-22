
//シートの複製
function copysheet(){
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet();

  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("原本").activate();
  const copiedSheet = sheet.getActiveSheet(); 
  copiedSheet.copyTo(sheet); 
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("原本 のコピー").activate();

  let today = new Date();

  a_today = Utilities.formatDate(today,'JST','yyyy/MM/01');

  let data1 = [[a_today]];

  copiedSheet.getRange(1,1,1,1).setValues(data1);


  today.setDate(today.getDate()+30);
  re_today = Utilities.formatDate(today,'JST','yyyy/MM/01');
 

  const sheet1 = SpreadsheetApp.getActiveSheet(); 
  let data = [[re_today]];
  sheet1.getRange(1,1,1,1).setValues(data);

  for(let i=0;i<=30;i++){

      let getvalue =sheet1.getRange(5,i+2,1,1).getValue();
      let getday = getvalue.getDay();

      if((getday=="6")||(getday=="0")){
        sheet1.getRange(6,i+2,13,1).setBackground('#666666');
      }

  }

  rere_today = Utilities.formatDate(today,'JST','yyyy_MM');

  sheet1.setName(rere_today);

  // sheet1.insertColumnBefore(3);



}




