import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, AfterViewInit {
  navElement!: HTMLElement;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navElement = (document.getElementById('navbar') as HTMLElement);
  }
@HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    const scrollFactor = 200;
    let opacity = (window.pageYOffset / scrollFactor);
    opacity = opacity < 1 ? opacity : 1;

    if (opacity <= 1) {
      this.navElement.style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
    }

    if (window.pageYOffset / scrollFactor > 1) {
      this.navElement.classList.add('navbar-shadow');
    } else {
      this.navElement.classList.remove('navbar-shadow');
    }
  }
}
