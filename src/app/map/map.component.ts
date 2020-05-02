import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import { interval, timer, Subscription } from 'rxjs';
import { SocketService } from './../socket.service';
import { switchMap } from 'rxjs/operators';

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
    this.socketService.sendMessage({deviceSerialNumber:864495034011417});
    this.updateMarkers()
  }


  constructor(private socketService : SocketService) { }


      points: any[] = [];


  public updateMarkers() {

      let pos: any;
      let busMarker: any;
      let schoolMarker: any;
      let infoWindow =new google.maps.InfoWindow();

      this.lngLat = new google.maps.LatLng(12.97548, 77.745712);

      const mapOptions: google.maps.MapOptions = {
        center: this.lngLat,
        zoom: 13,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.socketService.getGPSData().subscribe(res => {
        console.log(res);

        if(!pos){
        let initialPosition = new google.maps.LatLng(res['latitude'], res['longitude']);
        busMarker = new google.maps.Marker(
          {
           position: initialPosition,
           map: this.map,
           icon: "assets/img/bus1.png"
         });

        schoolMarker = new google.maps.Marker({
          position: initialPosition,
          map: this.map,
          icon: 'assets/img/school.png'
        });
        }

        let content=`<div class='info_content' id='info01' >
        <div>Device No: ${res['deviceSerialNumber']}</div>
        <div>Latitude: ${res['latitude']}</div>
        <div>Longitude: ${res['longitude']}</div>
        </div>`;

      pos = new google.maps.LatLng( res['latitude'], res['longitude']);

      busMarker.setPosition(pos);

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
