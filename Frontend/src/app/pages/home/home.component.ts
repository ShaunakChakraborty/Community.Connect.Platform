import { Component, OnInit } from '@angular/core';
import { faHome, faBell, faSignOutAlt, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isSelectedItem = 0
  sidebarIconList = [faHome, faSmileBeam, faBell, faSignOutAlt]
  sidebarList = ["Home", "Profile", "Notifications", "Logout"]
  connectionList = ["Capricorn", "Cancer", "Virgo"]
  ngOnInit(): void {
  }

  menuSelect(i: number) {
    this.isSelectedItem = i
  }

}
