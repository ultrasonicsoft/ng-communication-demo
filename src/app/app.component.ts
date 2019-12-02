import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    backgroundColor = '';

    newColor = '';

    ngOnInit(){
        this.newColor = "gray"
    }

    onOutputColorChanged(newColor: string) {
        this.newColor = newColor;
    }
}
