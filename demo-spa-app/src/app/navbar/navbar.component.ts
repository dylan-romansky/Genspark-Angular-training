import { Component, OnInit } from '@angular/core';

interface link	{
	name: string;
	path: string;
}

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

	links: link[] = [{name: "Home", path: "/"}, {name: "About", path:"#about"}];
	constructor() {}

	ngOnInit(): void {
	}

}
