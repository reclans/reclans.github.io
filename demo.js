$().ready(function(){
    $.getJSON( "https://api.airtable.com/v0/appt2JEiD72oVFwyG/project%20test?api_key=keyGCIEgL1QgLoNvc", function( data ) {
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(data, null, 1));
    console.log(JSON.stringify(data, null, 2));            
    //$("#text").html(data["records"]);
  });
});
