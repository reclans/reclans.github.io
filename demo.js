const airtable = require('airtable');

const ALLOWED_FIELDS = [
    {
        name: 'Data1',
        isArray: false,
        isFiltered: false
    },
    {
        name: 'Data2',
        isArray: false,
        isFiltered: false
    },
    {
        name: 'ID',
        isArray: false,
        isFiltered: false
    }
];



$().ready(function(){
   
        //var record = data.records[1];
        if (process.env.TEST_KEY == 'testing'){
            console.log('TEST_KEY working');
        };
       
//         console.log(data.records.length);
//         for (let i = 0; i < data.records.length; i++) {
//             if (i != 0) {
//                 console.log(data.records[i].fields.Data1);
//                 console.log(data.records[i].fields.Data2);
//                 console.log(data.records[i].fields.ID);
//             };
//         };
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
//   });
});
