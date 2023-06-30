import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-jobpostpage',
  templateUrl: './jobpostpage.component.html',
  styleUrls: ['./jobpostpage.component.scss'],
})
export class JobpostpageComponent {
  jobNotifyList: any;
  employersDetails: any;

  constructor(private router: Router, private services: ServiceService) {}

  ngOnInit(): void {
    this.getEmployerById();
    this.getJobNotification();
  }

  getEmployerById() {
    let params = {
      organizationId: this.jobNotifyList.jobPostedBy,
    };
    this.services.EmployerByIds(params).subscribe((respp: any) => {
      if (respp.statusCode == 200) {
        this.employersDetails = respp.data;
        // this.userName = respp.resp.name;
      }
    });
  }

  // get job notification

  getJobNotification() {
    this.services.getJobNotify().subscribe((notifyResp) => {
      if (notifyResp.statusCode == 200) {
        this.jobNotifyList = notifyResp.data;
        // console.log('jobNotifyList', this.jobNotifyList);
      }
    });
  }
}
