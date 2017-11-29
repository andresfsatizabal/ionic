import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-basic-inputs-page',
  templateUrl: './basic-inputs-page.component.html',
  styleUrls: ['./basic-inputs-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicInputsPageComponent implements OnInit {
  datetimeValue = '2017-11-18T14:17:45-06:00';
  textareaValue = 'This is the Textarea Input';
  textValue = 'This is the Text Input';

  checkboxValue = true;
  toggleValue = false;

  constructor() {}

  ngOnInit() {}

  onBlur(evt) {
    console.log('blur: ', evt);
  }

  change(evt) {
    console.log('change: ', evt);
  }
}
