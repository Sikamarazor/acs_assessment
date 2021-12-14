import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationsService } from '../_services/operations.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  companyProfile: any;
  shopName: string = "";
  merchantNumber: string = "";
  merchantStreetAddress: string = "";
  city: string = "";
  regionCode: string = "";
  countryCode: string = "";

  constructor(private route: ActivatedRoute, private operationsService: OperationsService
    , private toastr: ToastrService) { 
  }

  
  // Get merchants if not available from params
  getMerchants() {

    // Given merchant number
    let merchantNumber = "Y00000000000002";

    // Load merchant from service
    this.operationsService.getMerchantByNumber(merchantNumber).subscribe(res => {
      
      if (res) {
        this.companyProfile = res;

        this.shopName = this.companyProfile.shopName;
        this.merchantNumber = this.companyProfile.merchantNumber;
        this.merchantStreetAddress = this.companyProfile.merchantStreetAddress;
        this.city = this.companyProfile.city;
        this.regionCode = this.companyProfile.regionCode;
        this.countryCode = this.companyProfile.countryCode;
      } else {
        this.toastr.error('No info', 'No data found');
      }
      
    }, error => {
      this.toastr.error(error.message, 'Error found');;
    });
  }

  // Load params from home component, if not available load from getMerchantByNumber
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      // Check if any data from params, if nothing load from the service
      if (Object.keys(params).length != 0) {
        this.companyProfile = JSON.parse(params['companyProfile']);

        this.shopName = this.companyProfile.shopName;
        this.merchantNumber = this.companyProfile.merchantNumber;
        this.merchantStreetAddress = this.companyProfile.merchantStreetAddress;
        this.city = this.companyProfile.city;
        this.regionCode = this.companyProfile.regionCode;
        this.countryCode = this.companyProfile.countryCode;
      } else {
        // Not available, load from the service
        this.getMerchants();
      }

    });
  }

}
