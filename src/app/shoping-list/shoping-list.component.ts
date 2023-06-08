import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
/* NOTE - The ngOnInit hook is commonly used for the following use cases:

Initializing component properties:

You can use ngOnInit to set default values or initialize component properties before the component is rendered.
For example, you might fetch data from a service or set default values for properties based on certain conditions.
Performing component setup tasks:

ngOnInit provides a convenient place to perform any necessary setup tasks for the component.
For example, you might establish connections to external services, set up subscriptions to observables, or configure component-specific settings.
Calling external services or APIs:

ngOnInit can be used to call external services or APIs to retrieve data that the component needs.
For example, you might use ngOnInit to make an HTTP request to fetch initial data from a server.
Subscribing to observables:

If your component uses observables, you can subscribe to them in the ngOnInit hook to start receiving data or events.
Subscribing in ngOnInit ensures that the subscription is set up when the component is initialized and unsubscribed automatically when the component is destroyed. 

*/

export class ShopingListComponent  implements OnInit {
  ingredients : Ingredient [] = [
    new Ingredient('Orange', 19),
    new Ingredient('Tomato', 65),
  ];

  ngOnInit() {}

}
