export class User {
    Id: string;
    Location: string;
    Area: string;
    Type: string;
    Demand: string;
    Purpose: string;
    Beds: string;
    Client: string;
    Agent: string;


    constructor(Id, Location, Area, Type, Demand, Purpose, Beds, Client, Agent) {
        this.Id = Id;
        this.Location = Location;
        this.Area = Area;
        this.Type = Type;
        this.Demand = Demand;
        this.Purpose = Purpose;
        this.Beds = Beds;
        this.Client = Client;
        this.Agent = Agent;
    }

}
