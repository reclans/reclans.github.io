$().ready(function() {
    $.getJSON( "/api.airtable.com/v0/appt2JEiD72oVFwyG/project%20test?api_key=keyGCIEgL1QgLoNvc", function( data ) {
    console.log(data);
   $("#text").html(data["records"]);
});
