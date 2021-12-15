import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private operationsService: OperationsService, private toastr: ToastrService) { }

  // This function loads merchant terminals
  getMerchantTerminals() {

    // Given merchant number
    let merchantNumber = "Y00000000000002";

    // Load merchant terminals from service and get the data
    this.operationsService.getTerminalByNumber(merchantNumber).subscribe(res => {

      if (res) {
        this.terminals = res;
      } else {
        // If data not found, present toast
        this.toastr.error('No info', 'No data found');
      }
    }, error => {
      // Any error arising from getTerminalByNumber 
      this.toastr.error(error.message, 'Error found');
    });
  }

  viewTerminal(item: any) {
    this.terminalDetails = item;

    this.isViewTerminalMode = true;
  }

  closePopup(event: boolean) {
    this.isViewTerminalMode = event;
  }


  ngOnInit(): void {
    // Call getMerchantTerminals to load merchant terminals
    this.getMerchantTerminals();
  }

}
