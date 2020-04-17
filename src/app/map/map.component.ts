import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';
import { SocketService } from './../socket.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  map: google.maps.Map;

  lngLat: any;
  @ViewChild('mapWrapper', {static: false}) mapElement: ElementRef;

  ngAfterViewInit(){
    this.initializeMap();
  }


  constructor(private socketService : SocketService) { }
  initializeMap(){

    this.lngLat = new google.maps.LatLng( 12.97548,  77.745712);
    // console.log(this.lngLat);

    const mapOptions: google.maps.MapOptions = {
      center: this.lngLat,
      zoom: 13,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


    // var schoolCircle = new google.maps.Circle({
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: '#FF0000',
    //   fillOpacity: 0.35,
    //   map: this.map,
    //   // center: this.lngLat,

    //   radius: 500
    // });

    // schoolCircle.setCenter(this.lngLat)


   // this.updateMarkers();
  }

      points: any[] = [];

  public updateMarkers() {

      let i = 0;
      let j=0;
      let infoWindow =new google.maps.InfoWindow();
      this.socketService.getAllMarkers().subscribe(res => {
           // res = JSON.parse(JSON.stringify(res));
            this.lngLat = new google.maps.LatLng( res['latitude'],  res['longitude']);
            let content=`<div class='info_content' id='info01' >
            <div>Device No: ${res['deviceSerialNumber']}</div>
            <div>Latitude: ${res['latitude']}</div>
            <div>Longitude: ${res['longitude']}</div>
            <div>Speed: ${res['speed']}</div>
            </div>`;
            const mapOptions: google.maps.MapOptions = {
              center: this.lngLat,
              zoom: 13,
              fullscreenControl: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            let marker = new google.maps.Marker(
              {
               position: this.lngLat,
               map: this.map,

             });

             google.maps.event.addListener(marker, 'mouseover', function(){
              infoWindow.setContent(content);
              infoWindow.open(this.map, marker);
          });

          google.maps.event.addListener(marker, 'mouseout', function(){
            infoWindow.close();
        });

             //this.map.se
      });
   //   let marker: any;


//    let bounds: any = new google.maps.LatLngBounds();


//         let marker2 = new google.maps.Marker(
//           {
//            position: this.lngLat,
//            map: this.map,
//            icon: "assets/img/bus1.png"
//          });


//         let marker1 = new google.maps.Marker({
//           position: this.lngLat,
//           map: this.map,
//           icon: 'assets/img/school.png'
//         });
//       let result = this.socketService.getAllMarkers();
//       result.subscribe(res => {
//         console.log(res);
//         const sub = interval(1000).subscribe(() => {
//         let pos = new google.maps.LatLng( res[i].lattitude, res[i].longitude);
//           marker.setPosition(pos);

//             bounds.extend(pos);
//             this.map.fitBounds(bounds);
//             i++;
//             if(i>30){
//               sub.unsubscribe();
//             }
// // let pos1 = new google.maps.LatLng( res[1][j].lattitude, res[1][j].longitude);
// // marker.setPosition(pos);

// //   bounds.extend(pos1);
// //   this.map.fitBounds(bounds);
// //   j++;
// //   if(i>10){
// //     sub.unsubscribe();
// //   }
//           });
//          // this.map.fitBounds(bounds);
//       });




     }

}
