import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapserviceService } from "../services/Map/mapservice.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  opacity = 1;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 33.628463;
  lng = 73.087581;
 geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          message: 'Foo',
          iconSize: [24, 24],
        },
        geometry: {
          type: 'Point',
          coordinates: { lat: 62.324462890625, lng: 33.024695711685304 },
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Bar',
          iconSize: [24, 24],
        },
        geometry: {
          type: 'Point',
          coordinates: { lat: 73.2158203125, lng: 33.97189158092897 },
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Baz',
          iconSize: [24, 24],
        },
        geometry: {
          type: 'Point',
          coordinates: { lat: 51.29223632812498, lng: 34.28151823530889 },
        },
      },
    ],
  };

  mapArray = [
    {
      lat: 72.99641,
      lng: 33.645992,
      tag: 'Islamabad',
      size: [51, 22],
    },
    {
      lat: 73.0169,
      lng: 33.5651,
      tag: 'Rawalpindi',
      size: [51, 22],
    },
    {
      lat: 71.5249,
      lng: 34.0151,
      tag: 'Peshawar',
      size: [51, 22],
    },
    {
      lat: 67.0011,
      lng: 24.8607,
      tag: 'Karachi',
      size: [51, 22],
    },
  ];
  constructor(private mapservice: MapserviceService) { }

  ngOnInit() {
    this.initializemapbox();

    ///////////////// This is the data coming from url into our frontend map //////////////////////
    
    // this.mapservice.readData()
    // .subscribe
    // (data=> {
    //     data.property.forEach(( data ) => {
    //       // create a DOM element for the marker
    //       const el = document.createElement('div');
    //       el.className = 'data';
    //       el.style.backgroundImage = 'url(/assets/asasamarker.png)';
    //       el.innerHTML = data.demand;
    //       el.style.fontStyle = 'bold';
    //       el.style.textAlign = 'center';
    //       el.style.color = 'white';
    //       el.style.width = '51px';
    //       el.style.height = '22px';
    //       el.style.fontSize = '10px';
    //       el.style.fontWeight = '700';
    //       el.style.fontFamily = 'Jersey M54';
    //       // el.style.fontSizeAdjust = '5px';
    //       new mapboxgl.Marker(el)
    //         .setLngLat([
    //           data.location_data.marker_data.mlongitude,
    //           data.location_data.marker_data.mlatitide
    //         ])
    //         //.setPopup(new mapboxgl.Popup().setHTML(data.tag))
    //         .addTo(this.map);
    //     });
    
    // })

  }
  initializemapbox() {
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoibmFiZWVsc2FsZWVtIiwiYSI6ImNrY3p4MWhrZzBiNWwyd3FtOGx3aTZsbjEifQ.z6RLknl-YnJe2eKqMjPElg',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [73.024955 , 33.650753], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
    this.mapArray.forEach((marker) => {
      // create a DOM element for the marker
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(/assets/icons/asasamarker.png)';
      el.innerHTML = marker.tag;
      el.style.fontStyle = 'bold';
      el.style.textAlign = 'center';
      el.style.color = 'white';
      el.style.width = marker.size[0] + 'px';
      el.style.height = marker.size[1] + 'px';
      el.style.fontSize = '10px';
      el.style.fontWeight = '700';
      el.style.fontFamily = 'quartzo';
      new mapboxgl.Marker(el)
        .setLngLat([
          marker.lat,
          marker.lng,
        ])
        .setPopup(new mapboxgl.Popup().setHTML(marker.tag))
        .addTo(this.map);
    });
    // this.map.addSource
    this.mapboxOverlay();
    this.map.addControl(new mapboxgl.FullscreenControl());
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }

  mapboxOverlay() {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');
    this.map.on('load', () => {
      // tslint:disable-next-line: no-unused-expression
      this.map.addSource('myImageSource', {
        type: 'image',
        url: 'assets/i-10-islamabad.jpg',
        coordinates: [
          [73.024955 , 33.650753], // cda kashmir highway
          [73.041134, 33.659291 ], // rizvi road kashmir highway:
          [73.051520, 33.645466], // Service Rd West I-10 Islamabad,
          [73.035384, 33.636927], // I-10/3 I 10/3 I-10, Islamabad, Islamabad
        ],
      });
      this.map.addLayer({
        id: 'myImageSource',
        source: 'myImageSource',
        type: 'raster',
        paint: {
          'raster-opacity': this.opacity,
        },
      });

      slider.addEventListener('input', (e) => {
        // Adjust the layers opacity. layer here is arbitrary - this could
        // be another layer name found in your style or a custom layer
        // added on the fly using `addSource`.
        // e.target;
        const input = (document.getElementById('slider') as HTMLInputElement)
          .value;
        this.map.setPaintProperty(
          'myImageSource',
          'raster-opacity',
          parseInt('' + input + '', 10) / 100
        );
        // Value indicator
        sliderValue.textContent = '' + input + '' + '%';
      });
    });
    
    this.map.on('load', () => {
      // tslint:disable-next-line: no-unused-expression
      this.map.addSource('f-7', {
        type: 'image',
        url: 'assets/f-7.png',
        coordinates: [
          [73.042912, 33.722351 ],
          [73.061492 , 33.731482],
          [73.070957, 33.719287], 
          [73.052850, 33.709633], 
        ],
      });
      this.map.addLayer({
        id: 'f-7',
        source: 'f-7',
        type: 'raster',
        paint: {
          'raster-opacity': this.opacity,
        },
      });

      slider.addEventListener('input', (e) => {
        const input = (document.getElementById('slider') as HTMLInputElement)
          .value;
        this.map.setPaintProperty(
          'f-7',
          'raster-opacity',
          parseInt('' + input + '', 10) / 100
        );
        // Value indicator
        sliderValue.textContent = '' + input + '' + '%';
      });
    });
    this.map.on('load', () => {
      // tslint:disable-next-line: no-unused-expression
      this.map.addSource('phase-2', {
        type: 'image',
        url: 'assets/phase 2.png',
        coordinates: [
          [73.114200, 33.565860], // Phase 4 Gulrez Housing Scheme
          [73.126250, 33.565800], // Police Foundation, Rawalpindi 
          [73.125652, 33.552467], // Bahria Town Phase V Phase 5 
          [73.112955, 33.552230] // Bahria Town Phase III Phase 3  
        ],
      });
      this.map.addLayer({
        id: 'phase-2',
        source: 'phase-2',
        type: 'raster',
        paint: {
          'raster-opacity': this.opacity,
        },
      });

      slider.addEventListener('input', (e) => {
        const input = (document.getElementById('slider') as HTMLInputElement)
          .value;
        this.map.setPaintProperty(
          'phase-2',
          'raster-opacity',
          parseInt('' + input + '', 10) / 100
        );
        // Value indicator
        sliderValue.textContent = '' + input + '' + '%';
      });
    });
 
    // this.map.on('load', () => {
    //   // tslint:disable-next-line: no-unused-expression
    //   this.map.addSource('phase-3', {
    //     type: 'image',
    //     url: 'assets/phase 3.png',
    //     coordinates: [
    //       [73.104769, 33.563229], // Phase 2 Gulrez Housing Scheme
    //       [73.127969, 33.560081], // Phase 2 Bahria Town, Rawalpindi 
    //       [73.121127, 33.544900], // Soan River
    //       [73.093428, 33.550266] // Golden Jubilee Residential CHS
    //     ],
    //   });
    //   this.map.addLayer({
    //     id: 'phase-3',
    //     source: 'phase-3',
    //     type: 'raster',
    //     paint: {
    //       'raster-opacity': this.opacity,
    //     },
    //   });

    //   slider.addEventListener('input', (e) => {
    //     const input = (document.getElementById('slider') as HTMLInputElement)
    //       .value;
    //     this.map.setPaintProperty(
    //       'phase-3',
    //       'raster-opacity',
    //       parseInt('' + input + '', 10) / 100
    //     );
    //     // Value indicator
    //     sliderValue.textContent = '' + input + '' + '%';
    //   });
    // });
    this.map.on('load', () => {
      // tslint:disable-next-line: no-unused-expression
      this.map.addSource('e-16', {
        type: 'image',
        url: 'assets/maps_images/E-16-crop.png',
        coordinates: [
          [ 72.877392, 33.652982],
          [ 72.898120, 33.652946],
          [ 72.898034, 33.637977],
          [ 72.877349, 33.638049]
        ],
      });
      this.map.addLayer({
        id: 'e-16',
        source: 'e-16',
        type: 'raster',
        paint: {
          'raster-opacity': this.opacity,
        },
      });

      slider.addEventListener('input', (e) => {
        const input = (document.getElementById('slider') as HTMLInputElement)
          .value;
        this.map.setPaintProperty(
          'e-16',
          'raster-opacity',
          parseInt('' + input + '', 10) / 100
        );
        // Value indicator
        sliderValue.textContent = '' + input + '' + '%';
      });
    });
    this.map.on('load', () => {
      // tslint:disable-next-line: no-unused-expression
      this.map.addSource('e-18', {
        type: 'image',
        url: 'assets/maps_images/E-18-crop.png',
        coordinates: [
          [72.834467, 33.635597],
          [72.858070, 33.647030],
          [72.877725, 33.620232],
          [72.854551, 33.609438]
        ],
      });
      this.map.addLayer({
        id: 'e-18',
        source: 'e-18',
        type: 'raster',
        paint: {
          'raster-opacity': this.opacity,
        },
      });

      slider.addEventListener('input', (e) => {
        const input = (document.getElementById('slider') as HTMLInputElement)
          .value;
        this.map.setPaintProperty(
          'e-18',
          'raster-opacity',
          parseInt('' + input + '', 10) / 100
        );
        // Value indicator
        sliderValue.textContent = '' + input + '' + '%';
      });
    });

    this.map.on('load', () => {
      // tslint:disable-next-line: no-unused-expression
      this.map.addSource('enclave', {
        type: 'image',
        url: 'assets/enclave_map-crop.png',
        coordinates: [
          [33.701923, 73.200201],
          [33.703352, 73.264891],
          [33.674785, 73.264236],
          [33.674999, 73.196210]
        ],
      });
      this.map.addLayer({
        id: 'enclave',
        source: 'enclave',
        type: 'raster',
        paint: {
          'raster-opacity': this.opacity,
        },
      });

      slider.addEventListener('input', (e) => {
        const input = (document.getElementById('slider') as HTMLInputElement)
          .value;
        this.map.setPaintProperty(
          'enclave',
          'raster-opacity',
          parseInt('' + input + '', 10) / 100
        );
        // Value indicator
        sliderValue.textContent = '' + input + '' + '%';
      });
    });
 
  }
}