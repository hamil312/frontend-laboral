import { Component, OnInit } from '@angular/core';
import { LaboralInformation} from '../LaboralInformation';
import { UserInfoService } from '../userinfo.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-laboral-list',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './laboral-list.component.html',
  styleUrl: './laboral-list.component.css'
})
export class LaboralListComponent implements OnInit {
  laboralInformation: Array<LaboralInformation>=[];
  constructor(private routerPath: Router, private userinfoService: UserInfoService){

  }

  ngOnInit(){
    this.getLaboralinfo();
  }

  getLaboralinfo(){
    this.userinfoService.getLaboralInfo().subscribe(vs=>{
      this.laboralInformation=vs;
      console.log(this.laboralInformation);
    })
  }

  onEditarNavigate(id: number){
    this.routerPath.navigate([`/Netlink/addAbility/$(id)`])
  }
}
