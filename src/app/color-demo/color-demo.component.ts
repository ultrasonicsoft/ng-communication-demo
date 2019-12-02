    import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

    @Component({
        selector: 'app-color-demo',
        templateUrl: './color-demo.component.html',
        styleUrls: ['./color-demo.component.css']
    })
    export class ColorDemoComponent implements OnInit {

        @Input('inputBGColor') inputColor = '';
        @Output() outputColorChanged = new EventEmitter<string>();

        
        constructor() { }

        ngOnInit() {
            this.inputColor = 'gray';
        }

        updateParent() {
            this.outputColorChanged.emit(this.inputColor);
        }
    }
