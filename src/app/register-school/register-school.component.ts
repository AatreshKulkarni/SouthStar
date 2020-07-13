import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { SocketService } from "../services/socket.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-map",
  templateUrl: "./register-school.component.html",
  styleUrls: ["./register-school.component.css"],
})
export class RegisterSchoolComponent implements OnInit {
  messageClass;
  message;
  processing = false;
  registerForm: FormGroup;
  previousUrl;
  submitted = false;
  geoCoder = new google.maps.Geocoder();
  @ViewChild("mapWrapper", { static: true }) mapElement: ElementRef;
  map: google.maps.Map;

  get f() {
    return this.registerForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      school_name: ["", Validators.required],
      email_id: ["", Validators.required],
      mobile_number: ["", Validators.required],
      address: ["", Validators.required],

      city: ["", Validators.required],
      state: ["", Validators.required],
      country: ["", Validators.required],
      geo_fence: ["", Validators.required],
    });
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  onAddressClick() {
    console.log(this.registerForm.value.address);
  }

  loadMap() {
    var latlng = new google.maps.LatLng(17.3297, 76.8343);
    var mapOptions = {
      zoom: 12,
      center: latlng,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  confirmLatLong() {
    console.log(this.lat);
    console.log(this.lng);
  }

  lat: any;
  lng: any;
  // Functiont to submit form and login user
  onRegisterSubmit() {
    this.submitted = true;
    let that = this;
    let address = this.registerForm.value.address;
    this.loadMap();
    this.geoCoder.geocode({ address: address }, function (results, status) {
      if (status == "OK") {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();
        let latlng = new google.maps.LatLng(latitude, longitude);
        that.map.setCenter(latlng);
        let marker = new google.maps.Marker({
          map: that.map,
          position: latlng,
          draggable: true,
        });
        google.maps.event.addListener(marker, "dragend", function (event) {
          let c: any = confirm("Confirm Location");
          if (c) {
            console.log(event.latLng);
            this.lat = event.latLng.lat();
            this.lng = event.latLng.lng();
          } else {
            console.log("Error");
          }
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
}
