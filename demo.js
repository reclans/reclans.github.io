$().ready(function(){
    $.getJSON( "https://api.airtable.com/v0/appt2JEiD72oVFwyG/project%20test?api_key=keyGCIEgL1QgLoNvc", function( data ) {
    coosole.log(typeof data);
    JSON.stringify(data);
    console.log(typeof data);
    console.log(data);
    $("#text").html(data["records"]);
  });
});
