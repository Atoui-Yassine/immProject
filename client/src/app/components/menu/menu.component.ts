import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

/*  username = this.keycloakService.profile?.username;*/


  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    const linkColor = document.querySelectorAll('.nav-link');
    linkColor.forEach(link => {
      if (window.location.href.endsWith(link.getAttribute('href') || '')) {
        link.classList.add('active');
      }
      link.addEventListener('click', () => {
        linkColor.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }

  async logout(): Promise<void> {
    this.keycloakService.logout();
  }
/*
  accountManagement(): void {
    this.keycloakService.accountManagement();
  }*/
  /*logout() {

  }*/
}
