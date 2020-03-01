let personArray = [{"id":1,"first_name":"Toby","last_name":"Deason","email":"tdeason0@bigcartel.com"},
{"id":2,"first_name":"Josefina","last_name":"Faragan","email":"jfaragan1@si.edu"},
{"id":3,"first_name":"Bink","last_name":"Sprott","email":"bsprott2@drupal.org"},
{"id":4,"first_name":"Isahella","last_name":"MacCaughey","email":"imaccaughey3@angelfire.com"},
{"id":5,"first_name":"Mavra","last_name":"Donat","email":"mdonat4@shop-pro.jp"},
{"id":6,"first_name":"Juliet","last_name":"Brewitt","email":"jbrewitt5@is.gd"},
{"id":7,"first_name":"Bellanca","last_name":"Connell","email":"bconnell6@hostgator.com"},
{"id":8,"first_name":"Laureen","last_name":"Tomblett","email":"ltomblett7@wikipedia.org"},
{"id":9,"first_name":"Burlie","last_name":"Kayser","email":"bkayser8@irs.gov"},
{"id":10,"first_name":"Shaylyn","last_name":"Moro","email":"smoro9@jiathis.com"},
{"id":11,"first_name":"Sascha","last_name":"Duffer","email":"sduffera@netscape.com"},
{"id":12,"first_name":"Kora","last_name":"Rudgley","email":"krudgleyb@istockphoto.com"},
{"id":13,"first_name":"Wolfgang","last_name":"Merck","email":"wmerckc@dropbox.com"},
{"id":14,"first_name":"Anet","last_name":"Tregona","email":"atregonad@yahoo.co.jp"},
{"id":15,"first_name":"Farlie","last_name":"Morson","email":"fmorsone@nymag.com"},
{"id":16,"first_name":"Inesita","last_name":"Ashleigh","email":"iashleighf@lycos.com"},
{"id":17,"first_name":"Prudence","last_name":"Larret","email":"plarretg@china.com.cn"},
{"id":18,"first_name":"Lynn","last_name":"Minico","email":"lminicoh@meetup.com"},
{"id":19,"first_name":"Chariot","last_name":"Bohan","email":"cbohani@163.com"},
{"id":20,"first_name":"Aryn","last_name":"Redmain","email":"aredmainj@senate.gov"},
{"id":21,"first_name":"Patty","last_name":"Northedge","email":"pnorthedgek@flickr.com"},
{"id":22,"first_name":"Melisande","last_name":"Akers","email":"makersl@digg.com"},
{"id":23,"first_name":"Bendite","last_name":"Pitkeathly","email":"bpitkeathlym@shutterfly.com"},
{"id":24,"first_name":"Shirline","last_name":"Kleinplatz","email":"skleinplatzn@cam.ac.uk"},
{"id":25,"first_name":"Rickie","last_name":"Nolleth","email":"rnolletho@cafepress.com"},
{"id":26,"first_name":"Aleen","last_name":"Kelling","email":"akellingp@sohu.com"},
{"id":27,"first_name":"Wilhelmine","last_name":"Buggs","email":"wbuggsq@indiatimes.com"},
{"id":28,"first_name":"Josy","last_name":"Boutell","email":"jboutellr@flavors.me"},
{"id":29,"first_name":"Massimiliano","last_name":"Josebury","email":"mjoseburys@hhs.gov"},
{"id":30,"first_name":"Sal","last_name":"Padillo","email":"spadillot@360.cn"}
];

const table = document.getElementById("bookTable").getElementsByTagName("tbody")[0];



const insertToTable = () => personArray.forEach(element => {
    let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = element.id;
  cell2.innerHTML = element.first_name;
  cell3.innerHTML = element.last_name;
});
insertToTable();
