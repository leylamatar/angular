import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
x:number=0;
y:number=0;



//   title = 'simple';
 //  text = "deneme"
//   num1:number=1;
//   //x:number=0;
//   n:number=0;
//   a:number=1;
//   b:number=1;
//   //y:number=0;
//   k:number=0;
//  x:number=0;
//  y:number=0;
//  z:number=0;
//   getString(){
//     return this.num1%2==0?"çift":"tek"
//   }
//   addOne(){
//     this.num1+=1;
//   }
//   countNums(){
//     let list:number[]=[]
//     for(let i=this.x; i<=this.n ;i++){
//       console.log(i)
//     list.push(i)
//     }
//     return list
//   }
//   fibNum(){
//     var count=3;
//     while (count <= this.y) {
//       var z = this.x + this.y;
//       console.log(z);
//       this.x = this.y;
//       this.y = z;
//       count++;
//   }
// }
// tambolen(){
//   let list:number[]=[]
//   for (var i = 1; i <= this.k; i++) { 
//     if (this.k % i == 0) {
//       list.push(i)
//         console.log(this.k + " is divisible by " + i);
//     }
//     else{
//       console.log("exit");
//     }
// }
// return list
// }
// sayisiralama(){
//   let list:number[]=[]
//   list.push(this.x,this.y,this.z)
//   list.sort((x,y)=>x-y)
// return list[1]
// }
carpmaislemi(){
  if(this.x==0|| this.y==0) return 0;
  let xc:number=this.x<0?this.x*-1:this.x;
  let yc:number=this.y<0?this.y*-1:this.y;
  let sum:number=0;
  while(yc>0){
    sum+=xc;
    yc--;
  }
  return ((this.x>0&&this.y<0)||(this.x<0&&this.y>0))?-sum:sum;
}

}



