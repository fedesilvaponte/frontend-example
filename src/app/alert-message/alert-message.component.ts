import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {
  @Input() color;
  @Input() message;

  ngOnInit(): void { }
}
