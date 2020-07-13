import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import { interval, timer, Subscription } from 'rxjs';
import { SocketService } from '../services/socket.service';
import { switchMap } from 'rxjs/operators';

import * as SlidingMarker from 'marker-animate-unobtrusive';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  map: google.maps.Map;
  subscription: Subscription;

  lngLat: any;
  @ViewChild('mapWrapper', {static: false}) mapElement: ElementRef;

  ngAfterViewInit(){
   this.socketService.sendMessage({deviceSerialNumber:864495034011428});
    this.updateMarkers();
    // this.deviceData();
    // this.movingMultipleMarkers();
    // this.getDeviceIDs();
    // this.vehicleRoute();
  }


  constructor(private socketService : SocketService) { }


  points: any[] = [];

  public getDeviceIDs(){
    this.socketService.getDeviceIDsOfSchool(1001).subscribe(res => {
      const deviceList = res.data;
      console.log(deviceList);
      this.socketService.getDevicesData(deviceList)
    })
  }



  public movingMultipleMarkers(){
    this.lngLat = new google.maps.LatLng(12.97400, 77.74400);
    const mapOptions: google.maps.MapOptions = {
      center: this.lngLat,
      zoom: 14,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let pos1: any, pos2: any;
    let j = 0;
    let marker1 :any, marker2: any;
    let  markerArray = new Map();
    this.socketService.getDeviceGPSData().subscribe(res => {
      const sub = interval(5000).subscribe(() => {

        const deviceData = res[j++];
        console.log(deviceData);
        for (let i=0; i<deviceData.length; i++){

        if(!markerArray.has(deviceData[i]['deviceID'])){
          let initialPosition1 = new google.maps.LatLng(deviceData[i]['latitude'], deviceData[i]['longitude']);
          // let marker = new google.maps.Marker({
          //   position: initialPosition1,
          //   map: this.map,
          //   icon: "assets/img/bus1.png"
          // });
          let marker = new SlidingMarker({
            position: initialPosition1,
            map: this.map,
            icon: "assets/img/bus1.png",
            duration: 4999,
            easing: "linear"
          });

          markerArray.set(deviceData[i]['deviceID'],marker);
          console.log("First Time: " + markerArray);
        }
        else{

          pos1 = new google.maps.LatLng( deviceData[i]['latitude'], deviceData[i]['longitude']);
          markerArray.get(deviceData[i]['deviceID']).setPosition(pos1);
          //console.log("Every 5 Sec: " + markerArray);
        }
      }
      if(j >= res.length){
        sub.unsubscribe();
      }
      })

    })

  }

  public vehicleRoute(){
    this.lngLat = new google.maps.LatLng(12.964371, 77.71144);
    const mapOptions: google.maps.MapOptions = {
      center: this.lngLat,
      zoom: 16,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
    };
    const directionsService = new google.maps.DirectionsService;
    const lineSymbol = {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 4
      };
    const directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: '#FF0000',
          strokeOpacity: 0.0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }]
      }
    });
    const routeCoordinates = [];
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    directionsRenderer.setMap(this.map);
    directionsService.route({
      origin: new google.maps.LatLng(12.964371, 77.71144),
      destination: new google.maps.LatLng(12.9639686698281, 77.7488711608521),
      waypoints:[{ location: new google.maps.LatLng(12.960579, 77.716506),
        stopover: true}],
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode['DRIVING']
    }, function(response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    // this.socketService.getRouteDetails({routeID:60})
    // .subscribe(result => {
    //   console.log(result);
    //   result.data.forEach(element => {
    //        routeCoordinates.push(new google.maps.LatLng(element.latitude, element.longitude))
    //   });
    //   console.log(routeCoordinates);

    //   const lineSymbol = {
    //   path: 'M 0,-1 0,1',
    //   strokeOpacity: 1,
    //   scale: 4
    // };
    // const flightPath = new google.maps.Polyline({
    //   path: routeCoordinates,
    //   geodesic: true,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.0,
    //   icons: [{
    //     icon: lineSymbol,
    //     offset: '0',
    //     repeat: '20px'
    //   }]
    // });

    // flightPath.setMap(this.map);
    // })


  }


  public deviceData(){
    this.lngLat = new google.maps.LatLng(12.97400, 77.74400);
    const mapOptions: google.maps.MapOptions = {
      center: this.lngLat,
      zoom: 14,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let pos1: any;
    let j = 0;
    let  markerArray = new Map();
    this.socketService.getDeviceGPSData().subscribe(res => {
      const sub = interval(3000).subscribe(() => {

        const deviceData = res[j++];
        console.log(deviceData);
        for (let i=0; i<deviceData.length; i++){

        if(!markerArray.has(deviceData[i]['deviceID'])){
          let initialPosition1 = new google.maps.LatLng(deviceData[i]['latitude'], deviceData[i]['longitude']);
          let marker = new google.maps.Marker({
            position: initialPosition1,
            map: this.map,
            icon: "assets/img/bus1.png"
          });
          markerArray.set(deviceData[i]['deviceID'],marker);
          console.log("First Time: " + markerArray);
        }
        else{
          // console.log( markerArray.get(deviceData[i]['deviceID']));
          pos1 = new google.maps.LatLng( deviceData[i]['latitude'], deviceData[i]['longitude']);
          markerArray.get(deviceData[i]['deviceID']).setPosition(pos1);
          console.log("Every 5 Sec: " + markerArray);
        }
      }
      if(j >= res.length){
        sub.unsubscribe();
      }
      })

    })

  }

  public updateMarkers() {

      let pos: any;
      let busMarker: any;
      let schoolMarker: any;
      let infoWindow =new google.maps.InfoWindow();

      this.lngLat = new google.maps.LatLng(12.96152673, 77.60264754);

      const mapOptions: google.maps.MapOptions = {
        center: this.lngLat,
        zoom: 15,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      schoolMarker = new google.maps.Marker({
        position: this.lngLat,
        map: this.map,
        icon: 'assets/img/school.png'
      });

      this.socketService.getGPSData().subscribe(res => {
        console.log(res);
        let content=`<div class='info_content' id='info01' >
        <div>Device No: ${res['deviceSerialNumber']}</div>
        <div>Latitude: ${res['latitude']}</div>
        <div>Longitude: ${res['longitude']}</div>
        </div>`;

        if(!busMarker){
        let initialPosition = new google.maps.LatLng(res['latitude'], res['longitude']);
        // busMarker = new google.maps.Marker(
        //   {
        //    position: initialPosition,
        //    map: this.map,
        //    icon: "assets/img/bus1.png"
        //  });
        busMarker = new SlidingMarker({
          position: initialPosition,
          map: this.map,
          icon: "assets/img/bus1.png",
          duration: 4999,
          easing: "linear"
        });
        }
        else{
          pos = new google.maps.LatLng( res['latitude'], res['longitude']);
          busMarker.setPosition(pos);
        }

      google.maps.event.addListener(busMarker, 'mouseover', function(){
        infoWindow.setContent(content);
        infoWindow.open(this.map, busMarker);
    });

    google.maps.event.addListener(busMarker, 'mouseout', function(){
      infoWindow.close();
    });
    })

  }

}



// for(let i=0;i<res.length; i++){
        //       let marker: any;
        //       if(!marker){
        //         let initialPosition = new google.maps.LatLng(res[i]['latitude'], res[i]['longitude']);
        //         marker = new google.maps.Marker({
        //             position: initialPosition,
        //             map: this.map,
        //             icon: "assets/img/bus1.png"
        //           });
        //       }
        //       else{
        //         pos = new google.maps.LatLng( res[i]['latitude'], res[i]['longitude']);
        //         marker.setPosition(pos);
        //       }
        //     }

        // this.socketService.getDeviceData().subscribe(res => {
    //   for(let i=0;i<res.length; i++){
    //     let marker: any;
    //     if(!marker){
    //       let initialPosition = new google.maps.LatLng(res[i]['latitude'], res[i]['longitude']);
    //       marker = new google.maps.Marker({
    //           position: initialPosition,
    //           map: this.map,
    //           icon: "assets/img/bus1.png"
    //         });
    //     }
    //     else{
    //       pos = new google.maps.LatLng( res[i]['latitude'], res[i]['longitude']);
    //       marker.setPosition(pos);
    //     }
    //   }
    // })
