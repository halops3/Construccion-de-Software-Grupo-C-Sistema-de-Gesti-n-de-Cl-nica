import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
@Component({selector:'app-tutor',standalone:true,imports:[SidebarComponent],templateUrl:'./tutor.html',styleUrl:'./tutor.css'})
export class TutorComponent { docente='<DOCENTE>'; paralelo='<PARALELO>'; }
