import { Component } from '@angular/core';
import { SchemaInterface } from 'src/app/interfaces/schema.interface';
import { SchemasService } from 'src/app/services/schemas/schemas.service';

@Component({
  selector: 'app-three-two-shared-schema',
  templateUrl: './three-two-shared-schema.component.html',
  styleUrls: ['./three-two-shared-schema.component.css']
})
export class ThreeTwoSharedSchemaComponent {

  constructor(private _schemaService: SchemasService) { }
  
  schemaWholeData: SchemaInterface[] = [];

  ngOnInit(): void{
    this._schemaService.getSchemaData().subscribe((response: SchemaInterface[]) => {
      this.schemaWholeData = response;
    })
  }
  
}
