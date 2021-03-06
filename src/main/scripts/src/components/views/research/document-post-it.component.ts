import {Component, Input, OnInit, EventEmitter, Output, ContentChild, ElementRef, ViewChild} from '@angular/core';
import {Entry} from './entry-interface';
import * as _ from 'lodash';

@Component({
  selector: 'document-post-it',
  template: require('./document-post-it.component.html'),
  styles: [require('./document-post-it.component.scss').toString()]
})
export class DocumentPostItComponent implements OnInit {

  @Input() public document: any;
  @Output() private eventEmitter = new EventEmitter<any>();
  @ViewChild('previewContent') private preview: ElementRef;
  public overflow: boolean = false;
  public active: boolean = false;
  public entries: Entry[] = [];

  public ngOnInit(): void {
    _.each(this.document.content, (value, key) => {
      if(value && typeof value !== 'string' && typeof value[0] !== 'string') {
        let newValue = _
          .reduce(value, (result, nestedValue, nestedKey) => [...result, new Entry(nestedKey, nestedValue, false)], []);
        this.entries = [...this.entries, new Entry(key, newValue, true)];
      } else {
        this.entries = [...this.entries, new Entry(key, value, false)];
      }
    });
  }

  public ngAfterContentChecked() {
    this.overflow = this.isOverflow();
  }

  public clickedForDetail() {
    this.eventEmitter.emit(this.document);
  }

  public isOverflow(): boolean {
    return this.preview.nativeElement.clientHeight < this.preview.nativeElement.scrollHeight;
  }

}
