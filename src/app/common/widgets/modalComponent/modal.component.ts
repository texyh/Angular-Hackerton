import { Component, Output, Input, EventEmitter, ViewChild  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {
    @ViewChild('modal')
    private modal: ModalDirective;

    @Input()
    title = '[Title goes here]';

    @Input()
    closable = true;

    @Input()
    size = 'medium';

    @Output()
    onClosed = new EventEmitter<boolean>();

    show(): void {
        this.modal.show();
    }

    close(): void {
        this.modal.hide();
        this.onClosed.emit(true);
    }
}
