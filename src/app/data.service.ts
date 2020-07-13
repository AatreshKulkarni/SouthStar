import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor(){}
createDb(){
  let driverData = [
  {
      "id": 1,
      "name": "Mahesh",
      "lic_number": "brg001",
      "mobile_number": 9686766656
    },
    {
      "id": 2,
      "name": "Arvind",
      "lic_number": "brg002",
      "mobile_number": 9686766654
    },
    {
      "id": 3,
      "name": "Maruthi",
      "lic_number": "brg003",
      "mobile_number": 9686746656
    },
    {
      "id": 4,
      "name": "Bharath",
      "lic_number": "brg004",
      "mobile_number": 9684766656
    },
    {
      "id": 5,
      "name": "Mousin",
      "lic_number": "brg005",
      "mobile_number": 9686466656
    },
    {
      "id": 6,
      "name": "Mahesh kumar",
      "lic_number": "brg006",
      "mobile_number": 9486766656
    },
    {
      "id": 7,
      "name": "Maheshwar",
      "lic_number": "brg007",
      "mobile_number": 9686762654
    }
  ];

  let vehicleData =  [
    {
      "id": 1,
      "veh_name": "TT",
      "veh_capacity": 12
    },
    {
      "id": 2,
      "veh_name": "TT",
      "veh_capacity": 12
    },
    {
      "id": 3,
      "veh_name": "Mini Bus",
      "veh_capacity": 34
    },
    {
      "id": 4,
      "veh_name": "Mini Bus",
      "veh_capacity": 34
    },
    {
      "id": 5,
      "veh_name": "TT",
      "veh_capacity": 12
    }
  ];

  let studentData = [
    {
      "id": 1,
      "name": "Arjun",
      "class": 4,
      "stop": "RR Nagar",
      "school": "Carmel School"
    },
    {
      "id": 2,
      "name": "Bhim",
      "class": 5,
      "stop": "RR Nagar",
      "school": "Carmel School"
    },
    {
      "id": 3,
      "name": "Nakul",
      "class": 3,
      "stop": "RR Nagar",
      "school": "Carmel School"
    },
    {
      "id": 4,
      "name": "Sahadev",
      "class": 3,
      "stop": "RR Nagar",
      "school": "Carmel School"
    },
    {
      "id": 5,
      "name": "Dharma",
      "class": 6,
      "stop": "RR Nagar",
      "school": "Carmel School"
    },
    {
      "id": 6,
      "name": "Ankit",
      "class": 5,
      "stop": "Uttarahalli",
      "school": "Carmel School"
    },
    {
      "id": 7,
      "name": "Arun",
      "class": 4,
      "stop": "RR Nagar",
      "school": "Carmel School"
    }
  ];

  let gpsData = [
    {
    "id": "366634428",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97548",
    "longitude": "77.745712"
    },
    {
    "id": "366634223",
    "device_serial_number": "861693036845444",
    "lattitude": "12.974998",
    "longitude": "77.746391"
    },
    {
    "id": "366634411",
    "device_serial_number": "861693036845444",
    "lattitude": "12.974321",
    "longitude": "77.746727"
    },
    {
    "id": "366634422",
    "device_serial_number": "861693036845444",
    "lattitude": "12.973754",
    "longitude": "77.747009"
    },
    {
    "id": "366634378",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97327",
    "longitude": "77.747306"
    },
    {
    "id": "366634126",
    "device_serial_number": "861693036845444",
    "lattitude": "12.973008",
    "longitude": "77.747779"
    },
    {
    "id": "366634135",
    "device_serial_number": "861693036845444",
    "lattitude": "12.973079",
    "longitude": "77.748481"
    },
    {
    "id": "366634427",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972979",
    "longitude": "77.749099"
    },
    {
    "id": "366634036",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972834",
    "longitude": "77.74945"
    },
    {
    "id": "366634104",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97245",
    "longitude": "77.7499"
    },
    {
    "id": "366634108",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972191",
    "longitude": "77.750259"
    },
    {
    "id": "366634505",
    "device_serial_number": "861693036845444",
    "lattitude": "12.971886",
    "longitude": "77.750289"
    },
    {
    "id": "366634528",
    "device_serial_number": "861693036845444",
    "lattitude": "12.971088",
    "longitude": "77.750221"
    },
    {
    "id": "366634431",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970945",
    "longitude": "77.750206"
    },
    {
    "id": "366634335",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970801",
    "longitude": "77.750152"
    },
    {
    "id": "366634129",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970051",
    "longitude": "77.750053"
    },
    {
    "id": "366634140",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96953",
    "longitude": "77.749977"
    },
    {
    "id": "366634376",
    "device_serial_number": "861693036845444",
    "lattitude": "12.969098",
    "longitude": "77.749893"
    },
    {
    "id": "366634239",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96802",
    "longitude": "77.749671"
    },
    {
    "id": "366634578",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966835",
    "longitude": "77.749336"
    },
    {
    "id": "366634145",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965511",
    "longitude": "77.748939"
    },
    {
    "id": "366634414",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964405",
    "longitude": "77.748596"
    },
    {
    "id": "366634558",
    "device_serial_number": "861693036845444",
    "lattitude": "12.963727",
    "longitude": "77.748489"
    },
    {
    "id": "366634164",
    "device_serial_number": "861693036845444",
    "lattitude": "12.962891",
    "longitude": "77.748176"
    },
    {
    "id": "366634557",
    "device_serial_number": "861693036845444",
    "lattitude": "12.962018",
    "longitude": "77.747871"
    },
    {
    "id": "366634192",
    "device_serial_number": "861693036845444",
    "lattitude": "12.961594",
    "longitude": "77.747734"
    },
    {
    "id": "366634361",
    "device_serial_number": "861693036845444",
    "lattitude": "12.961255",
    "longitude": "77.747749"
    },
    {
    "id": "366634218",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960696",
    "longitude": "77.747505"
    },
    {
    "id": "366634027",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960146",
    "longitude": "77.747169"
    },
    {
    "id": "366634141",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959447",
    "longitude": "77.746833"
    },
    {
    "id": "366634550",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958493",
    "longitude": "77.746315"
    },
    {
    "id": "366634320",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957744",
    "longitude": "77.745918"
    },
    {
    "id": "366634449",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957184",
    "longitude": "77.745697"
    },
    {
    "id": "366634461",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956906",
    "longitude": "77.745338"
    },
    {
    "id": "366634402",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956651",
    "longitude": "77.744621"
    },
    {
    "id": "366634202",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95683",
    "longitude": "77.743721"
    },
    {
    "id": "366634591",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956908",
    "longitude": "77.743034"
    },
    {
    "id": "366634270",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956926",
    "longitude": "77.742439"
    },
    {
    "id": "366634399",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956943",
    "longitude": "77.741828"
    },
    {
    "id": "366634255",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956956",
    "longitude": "77.741241"
    },
    {
    "id": "366634470",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956952",
    "longitude": "77.740875"
    },
    {
    "id": "366634080",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956952",
    "longitude": "77.740417"
    },
    {
    "id": "366634511",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956946",
    "longitude": "77.739959"
    },
    {
    "id": "366634293",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956953",
    "longitude": "77.739379"
    },
    {
    "id": "366634054",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95697",
    "longitude": "77.738639"
    },
    {
    "id": "366634371",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957004",
    "longitude": "77.737884"
    },
    {
    "id": "366634171",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956997",
    "longitude": "77.736671"
    },
    {
    "id": "366634585",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956753",
    "longitude": "77.735252"
    },
    {
    "id": "366634541",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956457",
    "longitude": "77.733627"
    },
    {
    "id": "366634240",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956212",
    "longitude": "77.732131"
    },
    {
    "id": "366634451",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956105",
    "longitude": "77.731262"
    },
    {
    "id": "366634499",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956076",
    "longitude": "77.730941"
    },
    {
    "id": "366634517",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956021",
    "longitude": "77.730209"
    },
    {
    "id": "366634241",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955996",
    "longitude": "77.729759"
    },
    {
    "id": "366634426",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955976",
    "longitude": "77.729255"
    },
    {
    "id": "366634489",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95588",
    "longitude": "77.728126"
    },
    {
    "id": "366634289",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955863",
    "longitude": "77.726928"
    },
    {
    "id": "366634042",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955848",
    "longitude": "77.726066"
    },
    {
    "id": "366634446",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955816",
    "longitude": "77.725288"
    },
    {
    "id": "366634133",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955804",
    "longitude": "77.724494"
    },
    {
    "id": "366634301",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955798",
    "longitude": "77.72348"
    },
    {
    "id": "366634565",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955781",
    "longitude": "77.722076"
    },
    {
    "id": "366634488",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95573",
    "longitude": "77.721076"
    },
    {
    "id": "366634215",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955737",
    "longitude": "77.720985"
    },
    {
    "id": "366634477",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955811",
    "longitude": "77.721107"
    },
    {
    "id": "366634369",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955829",
    "longitude": "77.721679"
    },
    {
    "id": "366634227",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955843",
    "longitude": "77.721756"
    },
    {
    "id": "366634060",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95615",
    "longitude": "77.721855"
    },
    {
    "id": "366634210",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956562",
    "longitude": "77.721878"
    },
    {
    "id": "366634316",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956816",
    "longitude": "77.721885"
    },
    {
    "id": "366634392",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957222",
    "longitude": "77.721893"
    },
    {
    "id": "366634334",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957588",
    "longitude": "77.721931"
    },
    {
    "id": "366634383",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957878",
    "longitude": "77.721931"
    },
    {
    "id": "366634439",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958571",
    "longitude": "77.721977"
    },
    {
    "id": "366634490",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958905",
    "longitude": "77.721862"
    },
    {
    "id": "366634500",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958918",
    "longitude": "77.721572"
    },
    {
    "id": "366634058",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958931",
    "longitude": "77.720954"
    },
    {
    "id": "366634507",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958956",
    "longitude": "77.720214"
    },
    {
    "id": "366634048",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958992",
    "longitude": "77.719612"
    },
    {
    "id": "366634251",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959016",
    "longitude": "77.719123"
    },
    {
    "id": "366634125",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959038",
    "longitude": "77.718566"
    },
    {
    "id": "366634324",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959041",
    "longitude": "77.718078"
    },
    {
    "id": "366634534",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959063",
    "longitude": "77.717712"
    },
    {
    "id": "366634454",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959088",
    "longitude": "77.717186"
    },
    {
    "id": "366634050",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959301",
    "longitude": "77.717041"
    },
    {
    "id": "366634229",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95961",
    "longitude": "77.717071"
    },
    {
    "id": "366634360",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960187",
    "longitude": "77.717124"
    },
    {
    "id": "366634323",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960419",
    "longitude": "77.717193"
    },
    {
    "id": "366634502",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960579",
    "longitude": "77.716957"
    },
    {
    "id": "366634203",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960639",
    "longitude": "77.716514"
    },
    {
    "id": "366634057",
    "device_serial_number": "861693036845444",
    "lattitude": "12.961257",
    "longitude": "77.716575"
    },
    {
    "id": "366634580",
    "device_serial_number": "861693036845444",
    "lattitude": "12.962383",
    "longitude": "77.716812"
    },
    {
    "id": "366634303",
    "device_serial_number": "861693036845444",
    "lattitude": "12.963315",
    "longitude": "77.717391"
    },
    {
    "id": "366634269",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964043",
    "longitude": "77.717803"
    },
    {
    "id": "366634425",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964528",
    "longitude": "77.718048"
    },
    {
    "id": "366634465",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964798",
    "longitude": "77.718185"
    },
    {
    "id": "366634149",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96516",
    "longitude": "77.718307"
    },
    {
    "id": "366634589",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965306",
    "longitude": "77.71833"
    },
    {
    "id": "366634089",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965626",
    "longitude": "77.718353"
    },
    {
    "id": "366634174",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966019",
    "longitude": "77.718284"
    },
    {
    "id": "366634568",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96623",
    "longitude": "77.718193"
    },
    {
    "id": "366634185",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966395",
    "longitude": "77.718078"
    },
    {
    "id": "366634594",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966643",
    "longitude": "77.717865"
    },
    {
    "id": "366634127",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966843",
    "longitude": "77.717613"
    },
    {
    "id": "366634336",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967278",
    "longitude": "77.716766"
    },
    {
    "id": "366634097",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967443",
    "longitude": "77.715683"
    },
    {
    "id": "366634552",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967465",
    "longitude": "77.71556"
    },
    {
    "id": "366634130",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967479",
    "longitude": "77.715515"
    },
    {
    "id": "366634413",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967533",
    "longitude": "77.714782"
    },
    {
    "id": "366634472",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967274",
    "longitude": "77.7145"
    },
    {
    "id": "366634128",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966881",
    "longitude": "77.714454"
    },
    {
    "id": "366634283",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966511",
    "longitude": "77.714454"
    },
    {
    "id": "366634214",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966126",
    "longitude": "77.714515"
    },
    {
    "id": "366634177",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965758",
    "longitude": "77.714523"
    },
    {
    "id": "366634345",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96547",
    "longitude": "77.714576"
    },
    {
    "id": "366634564",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965283",
    "longitude": "77.714622"
    },
    {
    "id": "366634443",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965031",
    "longitude": "77.714691"
    },
    {
    "id": "366634310",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965009",
    "longitude": "77.714668"
    },
    {
    "id": "366634430",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964929",
    "longitude": "77.714378"
    },
    {
    "id": "366634047",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964988",
    "longitude": "77.714187"
    },
    {
    "id": "366634572",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965493",
    "longitude": "77.714065"
    },
    {
    "id": "366634483",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966161",
    "longitude": "77.713943"
    },
    {
    "id": "366634247",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966738",
    "longitude": "77.713966"
    },
    {
    "id": "366634088",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966818",
    "longitude": "77.714012"
    },
    {
    "id": "366634412",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966763",
    "longitude": "77.714012"
    },
    {
    "id": "366634259",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966726",
    "longitude": "77.713989"
    },
    {
    "id": "366634037",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966739",
    "longitude": "77.713958"
    },
    {
    "id": "366634494",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966739",
    "longitude": "77.713958"
    },
    {
    "id": "366634067",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966739",
    "longitude": "77.713958"
    },
    {
    "id": "366634028",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966738",
    "longitude": "77.713951"
    },
    {
    "id": "366634029",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966739",
    "longitude": "77.713996"
    },
    {
    "id": "366634120",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966995",
    "longitude": "77.714035"
    },
    {
    "id": "366634525",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967452",
    "longitude": "77.714073"
    },
    {
    "id": "366634433",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967615",
    "longitude": "77.713882"
    },
    {
    "id": "366634257",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968016",
    "longitude": "77.713478"
    },
    {
    "id": "366634032",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968484",
    "longitude": "77.713272"
    },
    {
    "id": "366634155",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968665",
    "longitude": "77.713172"
    },
    {
    "id": "366634238",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968691",
    "longitude": "77.713157"
    },
    {
    "id": "366634440",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968689",
    "longitude": "77.713157"
    },
    {
    "id": "366634519",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968689",
    "longitude": "77.713157"
    },
    {
    "id": "366634198",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968687",
    "longitude": "77.713157"
    },
    {
    "id": "366634154",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968687",
    "longitude": "77.713157"
    },
    {
    "id": "366634479",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968687",
    "longitude": "77.713157"
    },
    {
    "id": "366634575",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968685",
    "longitude": "77.713157"
    },
    {
    "id": "366634595",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968728",
    "longitude": "77.71315"
    },
    {
    "id": "366634110",
    "device_serial_number": "861693036845444",
    "lattitude": "12.969258",
    "longitude": "77.712936"
    },
    {
    "id": "366634593",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970014",
    "longitude": "77.712585"
    },
    {
    "id": "366634055",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970212",
    "longitude": "77.712516"
    },
    {
    "id": "366634253",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970216",
    "longitude": "77.712562"
    },
    {
    "id": "366634157",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970159",
    "longitude": "77.712631"
    },
    {
    "id": "366634444",
    "device_serial_number": "861693036845444",
    "lattitude": "12.969623",
    "longitude": "77.712814"
    },
    {
    "id": "366634093",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968906",
    "longitude": "77.713172"
    },
    {
    "id": "366634384",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968743",
    "longitude": "77.713249"
    },
    {
    "id": "366634105",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968738",
    "longitude": "77.713249"
    },
    {
    "id": "366634587",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968738",
    "longitude": "77.713249"
    },
    {
    "id": "366634038",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968736",
    "longitude": "77.713249"
    },
    {
    "id": "366634484",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968733",
    "longitude": "77.713256"
    },
    {
    "id": "366634025",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968678",
    "longitude": "77.713279"
    },
    {
    "id": "366634078",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968598",
    "longitude": "77.713295"
    },
    {
    "id": "366634091",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968593",
    "longitude": "77.713302"
    },
    {
    "id": "366634482",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968585",
    "longitude": "77.71331"
    },
    {
    "id": "366634582",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96858",
    "longitude": "77.71331"
    },
    {
    "id": "366634569",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968576",
    "longitude": "77.713325"
    },
    {
    "id": "366634307",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96852",
    "longitude": "77.713356"
    },
    {
    "id": "366634400",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96796",
    "longitude": "77.7136"
    },
    {
    "id": "366634306",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967638",
    "longitude": "77.714195"
    },
    {
    "id": "366634217",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967548",
    "longitude": "77.714973"
    },
    {
    "id": "366634046",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967556",
    "longitude": "77.715438"
    },
    {
    "id": "366634359",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967559",
    "longitude": "77.715576"
    },
    {
    "id": "366634235",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967557",
    "longitude": "77.715576"
    },
    {
    "id": "366634190",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967557",
    "longitude": "77.715591"
    },
    {
    "id": "366634296",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967506",
    "longitude": "77.715904"
    },
    {
    "id": "366634510",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967445",
    "longitude": "77.716323"
    },
    {
    "id": "366634041",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967251",
    "longitude": "77.716911"
    },
    {
    "id": "366634573",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966843",
    "longitude": "77.717704"
    },
    {
    "id": "366634542",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966153",
    "longitude": "77.718254"
    },
    {
    "id": "366634180",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965584",
    "longitude": "77.718406"
    },
    {
    "id": "366634246",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965062",
    "longitude": "77.71836"
    },
    {
    "id": "366634049",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964213",
    "longitude": "77.718025"
    },
    {
    "id": "366634063",
    "device_serial_number": "861693036845444",
    "lattitude": "12.963219",
    "longitude": "77.717506"
    },
    {
    "id": "366634450",
    "device_serial_number": "861693036845444",
    "lattitude": "12.963076",
    "longitude": "77.717369"
    },
    {
    "id": "366634545",
    "device_serial_number": "861693036845444",
    "lattitude": "12.962963",
    "longitude": "77.717269"
    },
    {
    "id": "366634299",
    "device_serial_number": "861693036845444",
    "lattitude": "12.962265",
    "longitude": "77.71688"
    },
    {
    "id": "366634212",
    "device_serial_number": "861693036845444",
    "lattitude": "12.961401",
    "longitude": "77.71669"
    },
    {
    "id": "366634586",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960968",
    "longitude": "77.716621"
    },
    {
    "id": "366634199",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960835",
    "longitude": "77.716598"
    },
    {
    "id": "366634466",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960617",
    "longitude": "77.716583"
    },
    {
    "id": "366634087",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960566",
    "longitude": "77.717086"
    },
    {
    "id": "366634330",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960521",
    "longitude": "77.717674"
    },
    {
    "id": "366634349",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960513",
    "longitude": "77.71817"
    },
    {
    "id": "366634370",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960488",
    "longitude": "77.718627"
    },
    {
    "id": "366634352",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960483",
    "longitude": "77.718742"
    },
    {
    "id": "366634148",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960441",
    "longitude": "77.719123"
    },
    {
    "id": "366634401",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960416",
    "longitude": "77.719757"
    },
    {
    "id": "366634077",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960361",
    "longitude": "77.720245"
    },
    {
    "id": "366634113",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960305",
    "longitude": "77.720703"
    },
    {
    "id": "366634287",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960273",
    "longitude": "77.721023"
    },
    {
    "id": "366634268",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96033",
    "longitude": "77.721366"
    },
    {
    "id": "366634084",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960285",
    "longitude": "77.721672"
    },
    {
    "id": "366634281",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960316",
    "longitude": "77.722061"
    },
    {
    "id": "366634216",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960288",
    "longitude": "77.722381"
    },
    {
    "id": "366634304",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960253",
    "longitude": "77.722663"
    },
    {
    "id": "366634348",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96026",
    "longitude": "77.722991"
    },
    {
    "id": "366634030",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960227",
    "longitude": "77.723594"
    },
    {
    "id": "366634085",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960174",
    "longitude": "77.724021"
    },
    {
    "id": "366634548",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960171",
    "longitude": "77.724082"
    },
    {
    "id": "366634045",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960186",
    "longitude": "77.724174"
    },
    {
    "id": "366634584",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960196",
    "longitude": "77.724166"
    },
    {
    "id": "366634442",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960143",
    "longitude": "77.724128"
    },
    {
    "id": "366634346",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960198",
    "longitude": "77.723922"
    },
    {
    "id": "366634396",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960248",
    "longitude": "77.723472"
    },
    {
    "id": "366634111",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960263",
    "longitude": "77.723159"
    },
    {
    "id": "366634364",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960261",
    "longitude": "77.722847"
    },
    {
    "id": "366634278",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960271",
    "longitude": "77.722526"
    },
    {
    "id": "366634532",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960293",
    "longitude": "77.722297"
    },
    {
    "id": "366634261",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960296",
    "longitude": "77.721725"
    },
    {
    "id": "366634311",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960314",
    "longitude": "77.721435"
    },
    {
    "id": "366634381",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960301",
    "longitude": "77.721099"
    },
    {
    "id": "366634526",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960122",
    "longitude": "77.721099"
    },
    {
    "id": "366634075",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959714",
    "longitude": "77.721092"
    },
    {
    "id": "366634480",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959425",
    "longitude": "77.721115"
    },
    {
    "id": "366634377",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959088",
    "longitude": "77.721099"
    },
    {
    "id": "366634098",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959092",
    "longitude": "77.721107"
    },
    {
    "id": "366634022",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959088",
    "longitude": "77.721107"
    },
    {
    "id": "366634417",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959088",
    "longitude": "77.721107"
    },
    {
    "id": "366634309",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959088",
    "longitude": "77.721107"
    },
    {
    "id": "366634419",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959088",
    "longitude": "77.721107"
    },
    {
    "id": "366634588",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958966",
    "longitude": "77.721191"
    },
    {
    "id": "366634197",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958923",
    "longitude": "77.721733"
    },
    {
    "id": "366634549",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958861",
    "longitude": "77.721969"
    },
    {
    "id": "366634368",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958305",
    "longitude": "77.721954"
    },
    {
    "id": "366634418",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957641",
    "longitude": "77.721939"
    },
    {
    "id": "366634043",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957378",
    "longitude": "77.721954"
    },
    {
    "id": "366634530",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957097",
    "longitude": "77.721931"
    },
    {
    "id": "366634290",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956958",
    "longitude": "77.721931"
    },
    {
    "id": "366634353",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956953",
    "longitude": "77.721939"
    },
    {
    "id": "366634294",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95695",
    "longitude": "77.721931"
    },
    {
    "id": "366634279",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956685",
    "longitude": "77.721916"
    },
    {
    "id": "366634468",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956319",
    "longitude": "77.7219"
    },
    {
    "id": "366634481",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956029",
    "longitude": "77.721855"
    },
    {
    "id": "366634273",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955883",
    "longitude": "77.721855"
    },
    {
    "id": "366634124",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95584",
    "longitude": "77.722122"
    },
    {
    "id": "366634421",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955863",
    "longitude": "77.723182"
    },
    {
    "id": "366634436",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955898",
    "longitude": "77.724311"
    },
    {
    "id": "366634596",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95592",
    "longitude": "77.72554"
    },
    {
    "id": "366634302",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955941",
    "longitude": "77.726959"
    },
    {
    "id": "366634523",
    "device_serial_number": "861693036845444",
    "lattitude": "12.955976",
    "longitude": "77.728439"
    },
    {
    "id": "366634266",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956071",
    "longitude": "77.729652"
    },
    {
    "id": "366634544",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956085",
    "longitude": "77.73027"
    },
    {
    "id": "366634147",
    "device_serial_number": "861693036845444",
    "lattitude": "12.9561",
    "longitude": "77.730407"
    },
    {
    "id": "366634094",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956119",
    "longitude": "77.730598"
    },
    {
    "id": "366634536",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956134",
    "longitude": "77.730812"
    },
    {
    "id": "366634533",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956139",
    "longitude": "77.73104"
    },
    {
    "id": "366634498",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956151",
    "longitude": "77.731102"
    },
    {
    "id": "366634539",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956174",
    "longitude": "77.731376"
    },
    {
    "id": "366634341",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956188",
    "longitude": "77.731498"
    },
    {
    "id": "366634504",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956212",
    "longitude": "77.731651"
    },
    {
    "id": "366634109",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956226",
    "longitude": "77.731681"
    },
    {
    "id": "366634178",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956261",
    "longitude": "77.731742"
    },
    {
    "id": "366634403",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956261",
    "longitude": "77.731826"
    },
    {
    "id": "366634121",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95627",
    "longitude": "77.731872"
    },
    {
    "id": "366634191",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956259",
    "longitude": "77.731887"
    },
    {
    "id": "366634387",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95633",
    "longitude": "77.732383"
    },
    {
    "id": "366634136",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956496",
    "longitude": "77.733413"
    },
    {
    "id": "366634513",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956721",
    "longitude": "77.734863"
    },
    {
    "id": "366634363",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956988",
    "longitude": "77.73645"
    },
    {
    "id": "366634260",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957048",
    "longitude": "77.737831"
    },
    {
    "id": "366634343",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957037",
    "longitude": "77.73867"
    },
    {
    "id": "366634404",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957028",
    "longitude": "77.739006"
    },
    {
    "id": "366634062",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956999",
    "longitude": "77.739929"
    },
    {
    "id": "366634382",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956986",
    "longitude": "77.740562"
    },
    {
    "id": "366634189",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956983",
    "longitude": "77.741523"
    },
    {
    "id": "366634385",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956959",
    "longitude": "77.742935"
    },
    {
    "id": "366634194",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956952",
    "longitude": "77.743408"
    },
    {
    "id": "366634448",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956945",
    "longitude": "77.743415"
    },
    {
    "id": "366634143",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956943",
    "longitude": "77.743423"
    },
    {
    "id": "366634213",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956943",
    "longitude": "77.743415"
    },
    {
    "id": "366634434",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956945",
    "longitude": "77.743423"
    },
    {
    "id": "366634358",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956945",
    "longitude": "77.743423"
    },
    {
    "id": "366634033",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956945",
    "longitude": "77.743423"
    },
    {
    "id": "366634245",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956939",
    "longitude": "77.743423"
    },
    {
    "id": "366634275",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956896",
    "longitude": "77.743675"
    },
    {
    "id": "366634131",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956883",
    "longitude": "77.743713"
    },
    {
    "id": "366634579",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956883",
    "longitude": "77.743713"
    },
    {
    "id": "366634069",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956823",
    "longitude": "77.743911"
    },
    {
    "id": "366634079",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956798",
    "longitude": "77.744003"
    },
    {
    "id": "366634151",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956771",
    "longitude": "77.744117"
    },
    {
    "id": "366634286",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956776",
    "longitude": "77.744186"
    },
    {
    "id": "366634153",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956778",
    "longitude": "77.744186"
    },
    {
    "id": "366634570",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956778",
    "longitude": "77.744186"
    },
    {
    "id": "366634514",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956774",
    "longitude": "77.744194"
    },
    {
    "id": "366634416",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956776",
    "longitude": "77.744201"
    },
    {
    "id": "366634501",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956776",
    "longitude": "77.744201"
    },
    {
    "id": "366634117",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956785",
    "longitude": "77.744186"
    },
    {
    "id": "366634354",
    "device_serial_number": "861693036845444",
    "lattitude": "12.95678",
    "longitude": "77.744186"
    },
    {
    "id": "366634543",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956773",
    "longitude": "77.744194"
    },
    {
    "id": "366634187",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956765",
    "longitude": "77.744194"
    },
    {
    "id": "366634119",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956767",
    "longitude": "77.744201"
    },
    {
    "id": "366634081",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956767",
    "longitude": "77.744201"
    },
    {
    "id": "366634291",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956767",
    "longitude": "77.744201"
    },
    {
    "id": "366634056",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956767",
    "longitude": "77.744201"
    },
    {
    "id": "366634285",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956768",
    "longitude": "77.744201"
    },
    {
    "id": "366634137",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956768",
    "longitude": "77.744201"
    },
    {
    "id": "366634152",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956769",
    "longitude": "77.744201"
    },
    {
    "id": "366634337",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956768",
    "longitude": "77.744201"
    },
    {
    "id": "366634467",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956768",
    "longitude": "77.744201"
    },
    {
    "id": "366634228",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956768",
    "longitude": "77.744201"
    },
    {
    "id": "366634172",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956769",
    "longitude": "77.744201"
    },
    {
    "id": "366634592",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956769",
    "longitude": "77.744201"
    },
    {
    "id": "366634554",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956769",
    "longitude": "77.744201"
    },
    {
    "id": "366634243",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956769",
    "longitude": "77.744201"
    },
    {
    "id": "366634053",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956768",
    "longitude": "77.744209"
    },
    {
    "id": "366634300",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956769",
    "longitude": "77.744209"
    },
    {
    "id": "366634066",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956765",
    "longitude": "77.744224"
    },
    {
    "id": "366634496",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956721",
    "longitude": "77.744407"
    },
    {
    "id": "366634559",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956713",
    "longitude": "77.744636"
    },
    {
    "id": "366634277",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956769",
    "longitude": "77.744964"
    },
    {
    "id": "366634486",
    "device_serial_number": "861693036845444",
    "lattitude": "12.956952",
    "longitude": "77.745246"
    },
    {
    "id": "366634339",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957017",
    "longitude": "77.74533"
    },
    {
    "id": "366634193",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957204",
    "longitude": "77.745475"
    },
    {
    "id": "366634297",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957275",
    "longitude": "77.745521"
    },
    {
    "id": "366634224",
    "device_serial_number": "861693036845444",
    "lattitude": "12.957695",
    "longitude": "77.745697"
    },
    {
    "id": "366634506",
    "device_serial_number": "861693036845444",
    "lattitude": "12.958546",
    "longitude": "77.746048"
    },
    {
    "id": "366634551",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959474",
    "longitude": "77.746627"
    },
    {
    "id": "366634222",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959719",
    "longitude": "77.746803"
    },
    {
    "id": "366634531",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959745",
    "longitude": "77.746841"
    },
    {
    "id": "366634556",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959745",
    "longitude": "77.746841"
    },
    {
    "id": "366634095",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959797",
    "longitude": "77.746849"
    },
    {
    "id": "366634340",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959831",
    "longitude": "77.746864"
    },
    {
    "id": "366634276",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959844",
    "longitude": "77.746871"
    },
    {
    "id": "366634158",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959841",
    "longitude": "77.746887"
    },
    {
    "id": "366634313",
    "device_serial_number": "861693036845444",
    "lattitude": "12.959851",
    "longitude": "77.746894"
    },
    {
    "id": "366634350",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960002",
    "longitude": "77.746978"
    },
    {
    "id": "366634344",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960131",
    "longitude": "77.747062"
    },
    {
    "id": "366634537",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960294",
    "longitude": "77.747146"
    },
    {
    "id": "366634026",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960341",
    "longitude": "77.747169"
    },
    {
    "id": "366634221",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960408",
    "longitude": "77.747192"
    },
    {
    "id": "366634581",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960493",
    "longitude": "77.747238"
    },
    {
    "id": "366634103",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960498",
    "longitude": "77.747238"
    },
    {
    "id": "366634332",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960516",
    "longitude": "77.74723"
    },
    {
    "id": "366634071",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960537",
    "longitude": "77.747238"
    },
    {
    "id": "366634201",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960559",
    "longitude": "77.747253"
    },
    {
    "id": "366634398",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960617",
    "longitude": "77.747268"
    },
    {
    "id": "366634274",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960695",
    "longitude": "77.747314"
    },
    {
    "id": "366634375",
    "device_serial_number": "861693036845444",
    "lattitude": "12.960903",
    "longitude": "77.747428"
    },
    {
    "id": "366634123",
    "device_serial_number": "861693036845444",
    "lattitude": "12.961186",
    "longitude": "77.747543"
    },
    {
    "id": "366634424",
    "device_serial_number": "861693036845444",
    "lattitude": "12.961879",
    "longitude": "77.74768"
    },
    {
    "id": "366634441",
    "device_serial_number": "861693036845444",
    "lattitude": "12.962866",
    "longitude": "77.747993"
    },
    {
    "id": "366634397",
    "device_serial_number": "861693036845444",
    "lattitude": "12.963683",
    "longitude": "77.748237"
    },
    {
    "id": "366634159",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964131",
    "longitude": "77.748405"
    },
    {
    "id": "366634265",
    "device_serial_number": "861693036845444",
    "lattitude": "12.964594",
    "longitude": "77.74855"
    },
    {
    "id": "366634064",
    "device_serial_number": "861693036845444",
    "lattitude": "12.965453",
    "longitude": "77.748802"
    },
    {
    "id": "366634520",
    "device_serial_number": "861693036845444",
    "lattitude": "12.966426",
    "longitude": "77.74916"
    },
    {
    "id": "366634242",
    "device_serial_number": "861693036845444",
    "lattitude": "12.967234",
    "longitude": "77.749389"
    },
    {
    "id": "366634271",
    "device_serial_number": "861693036845444",
    "lattitude": "12.968226",
    "longitude": "77.749633"
    },
    {
    "id": "366634205",
    "device_serial_number": "861693036845444",
    "lattitude": "12.969363",
    "longitude": "77.749809"
    },
    {
    "id": "366634226",
    "device_serial_number": "861693036845444",
    "lattitude": "12.96982",
    "longitude": "77.749839"
    },
    {
    "id": "366634061",
    "device_serial_number": "861693036845444",
    "lattitude": "12.970303",
    "longitude": "77.7499"
    },
    {
    "id": "366634390",
    "device_serial_number": "861693036845444",
    "lattitude": "12.9707",
    "longitude": "77.749977"
    },
    {
    "id": "366634458",
    "device_serial_number": "861693036845444",
    "lattitude": "12.971211",
    "longitude": "77.750061"
    },
    {
    "id": "366634452",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972073",
    "longitude": "77.750144"
    },
    {
    "id": "366634563",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972312",
    "longitude": "77.750038"
    },
    {
    "id": "366634438",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972318",
    "longitude": "77.750038"
    },
    {
    "id": "366634328",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972568",
    "longitude": "77.749839"
    },
    {
    "id": "366634021",
    "device_serial_number": "861693036845444",
    "lattitude": "12.972908",
    "longitude": "77.749275"
    },
    {
    "id": "366634236",
    "device_serial_number": "861693036845444",
    "lattitude": "12.973094",
    "longitude": "77.748596"
    },
    {
    "id": "366634115",
    "device_serial_number": "861693036845444",
    "lattitude": "12.973053",
    "longitude": "77.74797"
    },
    {
    "id": "366634183",
    "device_serial_number": "861693036845444",
    "lattitude": "12.973181",
    "longitude": "77.74752"
    },
    {
    "id": "366634314",
    "device_serial_number": "861693036845444",
    "lattitude": "12.973641",
    "longitude": "77.747131"
    },
    {
    "id": "366634039",
    "device_serial_number": "861693036845444",
    "lattitude": "12.974338",
    "longitude": "77.746727"
    },
    {
    "id": "366634170",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975132",
    "longitude": "77.746292"
    },
    {
    "id": "366634244",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975613",
    "longitude": "77.745361"
    },
    {
    "id": "366634186",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975596",
    "longitude": "77.744247"
    },
    {
    "id": "366634471",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975471",
    "longitude": "77.74337"
    },
    {
    "id": "366634503",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975571",
    "longitude": "77.742813"
    },
    {
    "id": "366634219",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975703",
    "longitude": "77.742462"
    },
    {
    "id": "366634031",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975861",
    "longitude": "77.741996"
    },
    {
    "id": "366634233",
    "device_serial_number": "861693036845444",
    "lattitude": "12.975935",
    "longitude": "77.74176"
    },
    {
    "id": "366634456",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97595",
    "longitude": "77.741584"
    },
    {
    "id": "366634435",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976011",
    "longitude": "77.741401"
    },
    {
    "id": "366634112",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976278",
    "longitude": "77.741432"
    },
    {
    "id": "366634395",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97673",
    "longitude": "77.741569"
    },
    {
    "id": "366634522",
    "device_serial_number": "861693036845444",
    "lattitude": "12.977007",
    "longitude": "77.741676"
    },
    {
    "id": "366634338",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976983",
    "longitude": "77.741691"
    },
    {
    "id": "366634319",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976943",
    "longitude": "77.741691"
    },
    {
    "id": "366634074",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976936",
    "longitude": "77.741676"
    },
    {
    "id": "366634475",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976928",
    "longitude": "77.741683"
    },
    {
    "id": "366634254",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976924",
    "longitude": "77.741683"
    },
    {
    "id": "366634052",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976922",
    "longitude": "77.741683"
    },
    {
    "id": "366634538",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976928",
    "longitude": "77.741676"
    },
    {
    "id": "366634209",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976933",
    "longitude": "77.741676"
    },
    {
    "id": "366634318",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976931",
    "longitude": "77.741683"
    },
    {
    "id": "366634099",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976928",
    "longitude": "77.741691"
    },
    {
    "id": "366634267",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976923",
    "longitude": "77.741691"
    },
    {
    "id": "366634325",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976928",
    "longitude": "77.741676"
    },
    {
    "id": "366634092",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976924",
    "longitude": "77.741683"
    },
    {
    "id": "366634138",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97692",
    "longitude": "77.741683"
    },
    {
    "id": "366634298",
    "device_serial_number": "861693036845444",
    "lattitude": "12.976916",
    "longitude": "77.741691"
    },
    {
    "id": "366634524",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97692",
    "longitude": "77.741691"
    },
    {
    "id": "366634086",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97692",
    "longitude": "77.741691"
    },
    {
    "id": "366634415",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97692",
    "longitude": "77.741691"
    },
    {
    "id": "366634230",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97692",
    "longitude": "77.741691"
    },
    {
    "id": "366634485",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97692",
    "longitude": "77.741691"
    },
    {
    "id": "366634429",
    "device_serial_number": "861693036845444",
    "lattitude": "12.97692",
    "longitude": "77.741691"
    }

  ]

  let deviceData = [
    {
      deviceID: 861693036845444,
      lattitude: 12.974998,
      longitude: 77.746391,
      speed: 0,
    },
    {
      deviceID: 861693036845445,
      lattitude: 12.97245,
      longitude: 77.7499,
      speed: 0,
    },
    {
      deviceID: 861693036845446,
      lattitude: 12.969098,
      longitude: 77.749893,
      speed: 0,
    },
    {
      deviceID: 861693036845447,
      lattitude: 12.962018,
      longitude: 77.747871,
      speed: 0,
    },
    {
      deviceID: 861693036845448,
      lattitude: 12.95683,
      longitude: 77.743721,
      speed: 0,
    }
  ]

  // ]
  return {
    driverData,
    vehicleData,
    studentData,
    gpsData,
    deviceData
  };
}
}
