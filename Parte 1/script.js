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
  // layer.on('click', onMarkerClick)
  // console.log(prov)

  prov.eachLayer(e => {
    // console.log(feature.geometry.coordinates)
    console.log(e)

  }
    )

}

const prov_url = "https://wms.ign.gob.ar/geoserver/unidades-territoriales/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=unidades-territoriales%3Aprovincia&outputFormat=application%2Fjson", 
      antena_url = "https://wms.ign.gob.ar/geoserver/ign/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ign%3Apuntos_de_comunicacion_AT010&maxFeatures=50&outputFormat=application%2Fjson"

let   prov = L.geoJSON([]).addTo(map),
      antena = L.geoJSON([]).addTo(map)

  
function onMarkerClick(prop) {
  // console.log(prop.latlng)
  
}

var popup = L.popup();


// let myPromise = new Promise(function(myResolve, myReject) {
//   // "Producing Code" (May take some time)


//     myResolve(antena,prov); // when successful
//     myReject();  // when error
//   });

//   myPromise.then(
//     function(a,p) { 
//       // console.log(
//         a.eachLayer(e => {
//           // console.log(feature.geometry.coordinates)
//           console.log('ñ')
    
//         })

//       // )

//      },
//     function() { console.log('error') }
//   );

$.getJSON(prov_url).then((res) => {
  prov.addData(res)
}).then(function(){
  $.getJSON(antena_url).then((res) => {
    antena.addData(res)
  }).then(function(){
    antena.eachLayer(ant => {
      prov.eachLayer(e => {
        
        console.log(e.contains(ant.feature.geometry.coordinates))
          
      })
      break;
    })
  });
});




// async function myFunction() {



//   return prov;
// }

// myFunction().then(
  
//     setTimeout(function(a) {
//       },2000)
// );