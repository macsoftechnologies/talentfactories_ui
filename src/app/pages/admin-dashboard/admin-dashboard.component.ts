import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  institutionList: any;
  professionalList: any;
  studentList: any;
  employerList: any;
  constructor(private router: Router, private services: ServiceService) {}

  ngOnInit(): void {
    this.institutionGetDetails();
    this.professionalGetDetails();
    this.studentGetDetails();
    this.employerGetDetails();
  }

  institutionGetDetails() {
    this.services.getInstitutionDetails().subscribe((institutionResp) => {
      if (institutionResp.statusCode == 200) {
        this.institutionList = institutionResp.data;
        console.log('institutionList', this.institutionList);
      }
    });
  }

  professionalGetDetails() {
    this.services.getProfessionalDetails().subscribe((professionResp) => {
      if (professionResp.statusCode == 200) {
        this.professionalList = professionResp.data;
        console.log('professionalList', this.professionalList);
      }
    });
  }

  studentGetDetails() {
    this.services.getStudentDetails().subscribe((studentResp) => {
      if (studentResp.statusCode == 200) {
        this.studentList = studentResp.data;
        console.log('studentList', this.studentList);
      }
    });
  }

  employerGetDetails() {
    this.services.getEmployerDetails().subscribe((employerResp) => {
      if (employerResp.statusCode == 200) {
        this.employerList = employerResp.data;
        console.log('employerList', this.employerList);
      }
    });
  }

  logout() {
    this.router.navigateByUrl(`/Sign-In`);
  }

  // delete Institution details

  deleteInstitution(data: any) {
    let DeleteObj = {
      learningOrgId: data.learningOrgId,
    };

    Swal.fire({
      title: 'Are you sure want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.services.institutionDelete(DeleteObj).subscribe((deleteResp) => {
          if (deleteResp.statusCode == 200) {
            Swal.fire({
              icon: 'success',
              text: 'Institution Details successfully deleted',
              showConfirmButton: false,
              timer: 3000,
            });
            this.institutionGetDetails();
          } else {
            Swal.fire('Something went wrong...!');
          }
        });
      }
    });
  }

  // delete Professional details
  deleteProfession(data: any) {
    let professionObj = {
      professionalId: data.professionalId,
    };

    Swal.fire({
      title: 'Are you sure want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.services
          .professionalDelete(professionObj)
          .subscribe((deleteResp) => {
            if (deleteResp.statusCode == 200) {
              Swal.fire({
                icon: 'success',
                text: 'Professional Details Successfully Deleted',
                showConfirmButton: false,
                timer: 3000,
              });
              this.professionalGetDetails();
            } else {
              Swal.fire('Something went wrong...!');
            }
          });
      }
    });
  }

  // delete student
  deleteStudent(studentdata: any) {
    let studentObj = {
      studentId: studentdata.studentId,
    };

    Swal.fire({
      title: 'Are you sure want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.services.studentDelete(studentObj).subscribe((deleteResp) => {
          if (deleteResp.statusCode == 200) {
            Swal.fire({
              icon: 'success',
              text: 'Student Successfully Deleted',
              showConfirmButton: false,
              timer: 3000,
            });
            this.studentGetDetails();
          } else {
            Swal.fire('Something went wrong...!');
          }
        });
      }
    });
  }

  // delete employer

  deleteEmp(data: any) {
    let DeleteObj = {
      organizationId: data.organizationId,
    };

    Swal.fire({
      title: 'Are you sure want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.services.employerDelete(DeleteObj).subscribe((deleteResp) => {
          if (deleteResp.statusCode == 200) {
            Swal.fire({
              icon: 'success',
              text: 'Employer successfully deleted',
              showConfirmButton: false,
              timer: 3000,
            });
            this.employerGetDetails();
          } else {
            Swal.fire('Something went wrong...!');
          }
        });
      }
    });
  }
}
