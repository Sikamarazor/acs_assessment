import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../_services/operations.service';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.css']
})
export class TerminalsComponent implements OnInit {

  terminals: any;
  isViewTerminalMode: boolean = false;
  terminalDetails: any;

  constructor(private operationsService: OperationsService) { }

  // This function loads merchant terminals
  getMerchantTerminals() {

    // Given merchant number
    let merchantNumber = "Y00000000000002";

    // Load merchant terminals from service and get the data
    this.operationsService.getTerminalByNumber(merchantNumber).subscribe(res => {
      console.log('getTerminalByNumber data ', res);
      this.terminals = res;

    }, error => {
      // Any error arising from getTerminalByNumber 
      console.log('getTerminalByNumber Error ', error);
    });
  }

  viewTerminal(item: any) {
    this.terminalDetails = item;

    this.isViewTerminalMode = true;

    console.log('viewTerminal ', this.terminalDetails);
  }

  closePopup(event: boolean) {
    console.log('closePopup ', event);
    this.isViewTerminalMode = event;
  }


  ngOnInit(): void {
    // Call getMerchantTerminals to load merchant terminals
    this.getMerchantTerminals();
  }

}
