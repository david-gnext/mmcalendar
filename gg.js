var full_Calendar = {};
//get create event data
full_Calendar.getEventData = function (s,e) {
  // var filename = $("#dia input[name=file]").val().split("\\")[2];
  // var fileId = DriveApp.getFilesByName(filename).next().getId();
   return {"summary": $("#dia  input[name=sum]").val(),
                            "description" : $("#dia  input[name=desc]").val(),
                            "location": $("#dia  input[name=loc]").val(),                            
                            "start": {'dateTime' : s},
                            "end": {'dateTime' : e},
                            "attachments": [{
                              'fileUrl': $("#dia  input[name=file]").val(),
                              'title': 'Bizshift Attach file'
                          }]
          }   
}
//Japanese Holidays
full_Calendar.MMholiday = function () {     
            (function() {
  var calConfig = [{   
    "title" : "Myanmar Holidays",
    "did" : "ZW4uamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20",
    "creator" : "en-gb.mm#holiday@group.v.calendar.google.com"
  }];
//  var select = document.getElementById('holidayCalendar');
  for (var i = 0; i < calConfig.length; i++) {    
//    var option = document.createElement('option');
//    option.value = calConfig[i].creator;
//    option.text = calConfig[i].title;
//    select.appendChild(option);
    var source =calConfig[i].creator;
  // $('#calendar').fullCalendar('removeEventSource', source);
  //$('#calendar').fullCalendar( 'refetchEvents' );
  $('#calendar').fullCalendar('addEventSource', source);
  }
})();
      };
//js date format to google calendar format
full_Calendar.ISODateString = function (d){  
 function pad(n){return n<10 ? '0'+n : n}
 return d.getUTCFullYear()+'-'
      + pad(d.getUTCMonth()+1)+'-'
      + pad(d.getUTCDate())+'T'
      + pad(d.getUTCHours())+':'
      + pad(d.getUTCMinutes())+':'
      + pad(d.getUTCSeconds())+'Z'
    }      