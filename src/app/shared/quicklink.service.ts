import { Injectable } from '@angular/core';
import { Quicklink } from '../Models/quicklink';

@Injectable({
  providedIn: 'root'
})
export class QuicklinkService {

  constructor() { }

 public getQuicklink() : Quicklink[]{
  let quicklinks = new Quicklink();
  quicklinks.id = 1;
  quicklinks.quicklinkHeading = "Quicklinks Head";
  quicklinks.quicklinkDescription= "The Institute of Business Administration (IBA), University of Dhaka, is the pioneer in rendering business education in Bangladesh. It is also the leading business school in the country. Commitment to the highest educational standards distinguishes IBA among the educational institutes in Bangladesh. This reputation has been achieved through a tradition of excellence and dedication to quality education and research. IBA graduates are highly sought after by the industry and IBA is proud of its students who have made outstanding contributions to various fields, both at home and abroad.";
  

  return [quicklinks];

 }


  
  
}
