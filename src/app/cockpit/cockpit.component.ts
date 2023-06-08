import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  // Properties
  // EventEmitter for server creation event
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  
  // EventEmitter for blueprint creation event
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // Variables to hold input values
  newServerName = "";
  newServerContent = "";

  ngOnInit() {
    console.log("Cockpit component initialization");
  }

  // Method to handle "Add Server" button click
  onAddServer() {
    // Emit the serverCreated event with the new server details
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  // Method to handle "Add Blueprint" button click
  onAddBlueprint() {
    // Emit the bluePrintCreated event with the new blueprint details
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
