import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-terminal-popup',
  templateUrl: './terminal-popup.component.html',
  styleUrls: ['./terminal-popup.component.css']
})
export class TerminalPopupComponent implements OnInit {

  modalRef?: BsModalRef;

  @ViewChild('template', { static: true }) template!: TemplateRef<any>;
  @Output() closePopupEmitter = new EventEmitter();
  @Input('terminalDetails') terminalDetails: any;
  
  constructor(private modalService: BsModalService) {
    // this.content = {};
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  close() {
    this.modalRef?.hide();

    this.closePopupEmitter.emit(false);
  }

  ngOnInit(): void {

    this.openModal(this.template);

    console.log('terminalDetails ', this.terminalDetails);
  }

}
