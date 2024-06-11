
function creaMappa(){
    let map = L.map('map').setView([42.638426,12.674297], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker1 = L.marker([43.7697955, 11.2556404]).addTo(map);
    marker1.bindPopup("<b>" + "Firenze (FI)" + "</b><br>").openPopup();

    let marker2 = L.marker([41.1257843, 16.8620293]).addTo(map);
    marker2.bindPopup("<b>" + "Bari (BA)" + "</b><br>").openPopup();

    let marker3 = L.marker([45.4384958, 10.9924122]).addTo(map);
    marker3.bindPopup("<b>" + "Verona (VR)" + "</b><br>").openPopup();

    let marker4 = L.marker([37.0646139, 15.2907196]).addTo(map);
    marker4.bindPopup("<b>" + "Siracusa (SR)" + "</b><br>").openPopup();

    let marker5 = L.marker([44.136352, 12.2422442]).addTo(map);
    marker5.bindPopup("<b>" + "Cesena (FC)" + "</b><br>").openPopup();

    let marker6 = L.marker([39.2171994, 9.113311]).addTo(map);
    marker6.bindPopup("<b>" + "Cagliari (CA)" + "</b><br>").openPopup();
    
    let marker7 = L.marker([42.3633774, 13.3445665]).addTo(map);
    marker7.bindPopup("<b>" + "L'Aquila (AQ)" + "</b><br>").openPopup();

    let marker8 = L.marker([41.8933203, 12.4829321]).addTo(map);
    marker8.bindPopup("<b>" + "Roma (RM)" + "</b><br>").openPopup();
    
    let marker9 = L.marker([45.0677551, 7.6824892]).addTo(map);
    marker9.bindPopup("<b>" + "Torino (TO)" + "</b><br>").openPopup();

    let marker10 = L.marker([38.8819112, 16.4987299]).addTo(map);
    marker10.bindPopup("<b>" + "Catanzaro (CZ)" + "</b><br>").openPopup();

}   
