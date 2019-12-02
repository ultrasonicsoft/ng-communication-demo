import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

    @Input() inputColor = '';
    @Output() outputColor = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
        this.inputColor = 'gray';
    }

    updateParent() {
        this.outputColor.emit(this.inputColor);
    }
}
