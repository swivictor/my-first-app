// NOTE - Recipe Moldel Class
// The model represents a specific car model, such as a "Sports Car" or "SUV." 
// Each car model has its own set of properties, methods, and behavior.
// The model defines the blueprint for creating instances of cars with specific 
// characteristics and features. It encapsulates the state (properties) and behavior 
// (methods) of the car.
// Just like a car model specifies its properties (color, engine type, seating capacity) 
// and behavior (accelerate, brake, turn), a model in Angular defines the properties
//  and behavior of a specific data entity.

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}