<script>
    
    function getRadius(r) { 
		return r >= 100000 ? 30 : 
		r >= 10000  ? 21 : 
		r >= 5000  ? 12 :
                6; 
	}
    @* function getColor(c) { 
		return c >= 100000 ? '#de2d26' : 
		c >= 10000  ? '#f3ff33' : 
		c >= 5000  ? '#2ca25f' : 
				'#000'; 
	}; *@

    var markerCluster = L.layerGroup()
    var markers, markersGroup = [];
    function marcarMapa(lat, lng, unidad, unisup, codunidad, cant) {
        var latLimpia = parseFloat(lat.replace(',', '.'));
        var lngLimpia = parseFloat(lng.replace(',', '.'));
        if (isNaN(latLimpia) || isNaN(lngLimpia)) return;
        markers = L.circleMarker([lngLimpia, latLimpia], { title: "Haga click para ver más información." , radius: getRadius(cant), @*color: getColor(cant)*@}).on('click', function () {
            map.setView([lngLimpia, latLimpia]);
        })
        markerCluster.addLayer(markers)
        markers.bindPopup(`<div class="text-center"><b> ${unidad} </b>
        <p>Oficiales: ${cant}</p>
        <p>Suboficiales: ${cant}</p>
        <p>Soldados: ${cant}</p>
        <p>Total: ${cant*3}</p>
        <div style="padding-top: .75vh"><a class="btn btn-success btn-xs text-center" style="color: white" onclick="verDependencias('${codunidad}')">
        <i class="fa fa-sitemap"></i> Elementos Dependientes</a></div></div>`)
    }

    $('#incluyeDependencias').change(function () {
        marcaElementosMapa($('#incluyeDependencias').prop('checked'));
        actualizaDetalleAspecto();
    })

    
    @* const svgIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19" fill="white" stroke="red" />
                    <text x="20" y="20" text-anchor="middle" alignment-baseline="middle"></text>
                </svg>`,
        className: "",
        iconSize: [24, 30],
        iconAnchor: [12, 30],
    }) *@

    $(function () {
        var lat, lng;
        let N, S, E, O, latmenor = 0, latmayor = -100, lngmenor = 0, lngmayor = -100, markerTest, markerTest2;

        $('.unidadGeoreferenciada').each(function (index, element) {
            if(index == 1) element.dataset.cant = 8000
            else if(index == 2) element.dataset.cant = 15000
            else if(index == 3) element.dataset.cant = 9000
            else if(index == 4) element.dataset.cant = 20000

            marcarMapa(element.dataset.lat, element.dataset.lng, element.dataset.unidad, element.dataset.unisup, element.dataset.coduni, element.dataset.cant)
            lat = element.dataset.lat;
            lng = element.dataset.lng;
            var latLimpia = parseFloat(lat.replace(',', '.'));
            var lngLimpia = parseFloat(lng.replace(',', '.'));
            if (!isNaN(latLimpia) && !isNaN(lngLimpia)) {
                markersGroup.push(markers);
            }
            element.addEventListener('click', (e) => {
                $(this).toggleClass('active');
                $('.unidadGeoreferenciada').not(this).removeClass('active');
                if (e.path[2].classList[3] == "active") {
                    map.removeLayer(markerCluster)
                    
                    markerTest = L.circleMarker([lngLimpia, latLimpia], { title: "Haga click para ver más información.", radius: getRadius(element.dataset.cant),@*color: getColor(element.dataset.cant)*@}).on('click', function () {
                        map.setView([lngLimpia, latLimpia])
                    }).addTo(map)
                    markerTest.bindPopup('<div class="text-center"><b>' + element.dataset.unidad + '</b><div style="padding-top: .75vh"><a class="btn btn-success btn-xs text-center" style="color: white" onclick="verDependencias(`' + element.dataset.coduni + '`)"><i class="fa fa-sitemap"></i> Elementos Dependientes</a></div></div>')
                    
                } else {
                    map.addLayer(markerCluster)
                    map.removeLayer(markerTest)
                }

            })
        })

        @* for (let i = 0; i < markersGroup.length; i++) {
            if (latmenor > markersGroup[i]._latlng.lat) latmenor = markersGroup[i]._latlng.lat
            if (latmayor < markersGroup[i]._latlng.lat) latmayor = markersGroup[i]._latlng.lat
            if (lngmenor > markersGroup[i]._latlng.lng) lngmenor = markersGroup[i]._latlng.lng
            if (lngmayor < markersGroup[i]._latlng.lng) lngmayor = markersGroup[i]._latlng.lng
        }

        N = latmenor
        S = latmayor
        E = lngmayor
        O = lngmenor

        let bounds = new L.LatLngBounds([N, E], [S, O])
        map.fitBounds(bounds, { padding: [20, 20], maxZoom: 13 }) *@
        map.addLayer(markerCluster)
    });


</script>