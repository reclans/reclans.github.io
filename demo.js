$().ready(function(){
    $.getJSON( "https://api.airtable.com/v0/appt2JEiD72oVFwyG/project%20test?api_key=keyGCIEgL1QgLoNvc", function( data ) {
        var record = data.records[1];
        for (let i = 0; i < arr.length; i++) {
            console.log(record[i]);
                        }
        //console.log(record);        
        //var record1 = data.records[1].fields;
        //console.log(record1);
        //console.log(data.records[1].fields.Data1);
        //var record2 = data.records[1].fields.data2;
        //console.log(record2)
        //console.log(typeof(data));
        //var test1 = JSON.stringify(data, null, 1);
        //console.log(typeof(test1));
        //console.log(JSON.stringify(data));
        //console.log(JSON.stringify(data, null, 1));
        //console.log(JSON.stringify(data, null, 2));            
        //$("#text").html(data);
  });
});
