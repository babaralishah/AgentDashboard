import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {

  constructor() { }
  search_id: string;
  search_client: string;
  general_search: string;
  search_location: string;
  search_type: string;
  search_demand: string;
  search_area: string;
  users: any[] = [
    { Id: '1', Client: 'Aftab Nabi', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 4 bed apartment', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    { Id: '2', Client: 'Awais', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '12', Area: '1 Kanal', Location: 'F-6/4', Demand: '450,000', Phone_num: '090078601', Comment: 'Want 4 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    { Id: '3', Client: 'Usama Gull', Purpose: 'Buy', Prop_type: 'House', Prop_num: '14', Area: '2 Kanal', Location: 'G-15/2', Demand: '150,000', Phone_num: '090078601', Comment: 'Want 3 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    { Id: '4', Client: 'Usman', Purpose: 'Rent', Prop_type: 'Residential Plot', Prop_num: '72', Area: '2 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 1 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    { Id: '5', Client: 'Zakria', Purpose: 'Buy', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 5 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
  ];
  ngOnInit(): void {
  }

}
