$().ready(function(){
    $.getJSON( "https://api.airtable.com/v0/appt2JEiD72oVFwyG/project%20test?api_key=keyGCIEgL1QgLoNvc", function( data ) {
        var record = data.records[0];
        console.log(record);
        //console.log(typeof(data));
        //var test1 = JSON.stringify(data, null, 1);
        //console.log(typeof(test1));
        //console.log(JSON.stringify(data));
        //console.log(JSON.stringify(data, null, 1));
        //console.log(JSON.stringify(data, null, 2));            
        //$("#text").html(data);
  });
});
