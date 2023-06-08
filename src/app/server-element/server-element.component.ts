import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent  implements OnInit {
  // LINK - ../app.component.html
 // NOTE: The @Input decorator get data from the the parent component
// NOTE: srvElement work as alias for the @Input decorator element
 @Input('srvElement')  element: {
    type: string;
    name: string;
    content: string;
  }

  ngOnInit() {
    console.log("ServerElementComponent initialization");
    
  }

}
