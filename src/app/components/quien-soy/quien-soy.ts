import { Component, OnInit, signal } from '@angular/core';
import { Github } from '../../services/github';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css',
})
export class QuienSoy implements OnInit {
  user = signal<any>(null);
  
  // Constructor dependencies
  constructor(private github: Github) {}

  ngOnInit() {
    this.github.getUser('LautaroMoro').subscribe(user => {
      this.user.set(user);
    });
  }
}

