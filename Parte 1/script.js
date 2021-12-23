// console.log("hola mundo")

// let name = 'Roberto'
// const lastname = "Juanes"

// setTimeout(()=> {document.getElementById("loader-container").style.display = "none"}, 5000)

const map = L.map("mapa", { zoomControl: false }).setView([-40, -59], 4);

L.tileLayer(
  "https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png",
  {
    attribution:
      '<a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a>',
    minZoom: 3,
    maxZoom: 18,
  }
).addTo(map);


function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  layer.on('click', onMarkerClick)
}

const prov_url = "https://wms.ign.gob.ar/geoserver/unidades-territoriales/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=unidades-territoriales%3Aprovincia&outputFormat=application%2Fjson", 
      antena_url = "https://wms.ign.gob.ar/geoserver/ign/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ign%3Apuntos_de_comunicacion_AT010&maxFeatures=50&outputFormat=application%2Fjson"

const prov = L.geoJSON().addTo(map),
      antena = L.geoJSON([],{
        onEachFeature: onEachFeature
      }).addTo(map)

$.getJSON(prov_url).then((res) => {
    prov.addData(res)
  });

$.getJSON(antena_url).then((res) => {
  antena.addData(res)
});
  
function onMarkerClick(prop) {
  prov.eachLayer(e => console.log(e.contains([prop.latlng])))
}

var popup = L.popup();