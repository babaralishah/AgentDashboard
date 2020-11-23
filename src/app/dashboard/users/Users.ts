export class Users {
    userId: string;
    fullname: string;
    contact: string;
    location: string;
    email: string;
    access: string;
    status: string;

    constructor(Id, Client, Area, Location, Email, Access, Status) {
        this.userId = Id;
        this.fullname = Client;
        this.contact = Area;
        this.location = Location;
        this.email = Email;
        this.access = Access;
        this.status = Status;
    }

}
