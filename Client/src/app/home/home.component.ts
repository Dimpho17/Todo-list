import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/interfaces/items';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Items[] = [];




  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });


  constructor(private crudService: CrudService) { }


  ngOnInit() {
    //get all the items.

    this.crudService.read().subscribe((data: any) => {
      this.items = data;


    });
  }



  add(title: string, description: string) {




    this.crudService.add(title, description).subscribe((data: any) => {
      (this.items = data), console.log(this.items);
      window.location.reload()
    });
  }


  delete(id: any) {
    this.crudService.remove(id).subscribe((res: any) => {
      window.location.reload();
    });
  }

  update(id: any) {
    let item = {
      title: this.form.value.title || '',
      description: this.form.value.description || ''
    };

    this.crudService.update(item, id).subscribe((res: any) => {
      window.location.reload(),
        console.log(res)
    });
  }
}
