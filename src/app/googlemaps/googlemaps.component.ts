// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-googlemaps',
//   templateUrl: './googlemaps.component.html',
//   styleUrls: ['./googlemaps.component.css']
// })
// export class GooglemapsComponent implements OnInit {


//   zoom: number = 8;

//   lat = 51.678418;
//   lng = 7.809007;
// markerDragEnd: any;

//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

//   mapClicked($event: MouseEvent) {
//     this.markers.push({
//       lat: $event.coords.lat,
//       lng: $event.coords.lng,
//       draggable: true
//     });
//   }

  
//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }

//   markerDragEnd(m: marker, $event: MouseEvent) {
//     console.log('dragEnd', m, $event);
//   }

//   markers: marker[] = [
// 	  {
// 		  lat: 51.673858,
// 		  lng: 7.815982,
// 		  label: 'A',
// 		  draggable: true
// 	  },
// 	  {
// 		  lat: 51.373858,
// 		  lng: 7.215982,
// 		  label: 'B',
// 		  draggable: false
// 	  },
// 	  {
// 		  lat: 51.723858,
// 		  lng: 7.895982,
// 		  label: 'C',
// 		  draggable: true
// 	  }
//   ]
// function handleMouseMove(event: MouseEvent) {
//   const x = event.coords.x; // Error: Property 'coords' does not exist on type 'MouseEvent'
//   const y = event.coords.y; // Error: Property 'coords' does not exist on type 'MouseEvent'
//   const clientX = event.clientX; // OK
//   const clientY = event.clientY; // OK
// }
// }


