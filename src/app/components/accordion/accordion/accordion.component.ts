import {Component, Input} from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class Accordion {
  @Input() title: string | undefined;
  @Input() content: string | undefined;
  showContent: boolean = true;

  onClick = () => {
    this.showContent = !this.showContent;
  }
}
