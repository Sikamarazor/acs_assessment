import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../_services/operations.service';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyProfile: any;
  shopName: string = "";

  constructor(private operationsService: OperationsService, private router: Router
    , private toastr: ToastrService) { }

  // Get merchants 
  getMerchants() {

    // Given merchant number
    let merchantNumber = "Y00000000000002";

    // Load merchant from service
    this.operationsService.getMerchantByNumber(merchantNumber).subscribe(res => {

      if (res) {
        this.companyProfile = res;

        this.shopName = this.companyProfile.shopName;
      } else {
        // If data empty, present toast
        this.toastr.error('No info', 'No data found');
      }
      
      
    }, error => {
      // If any errors arises, present toast
      this.toastr.error(error.message, 'Error found');
    });
  }

  // Navigate to profile page
  gotoProfile() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        companyProfile: JSON.stringify(this.companyProfile),
      }
    };
    this.router.navigate(['/profile'], navigationExtras);
  }

  // Navigate to terminals page
  gotoTerminal() {
    this.router.navigate(['/terminal']);
  }

  ngOnInit(): void {
    // Call getMerchants to load merchant
    this.getMerchants();
  }

}
