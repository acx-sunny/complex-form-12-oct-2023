import { Component } from '@angular/core';
import { ScriptInterface } from 'src/app/interfaces/script.interface';
import { ScriptsService } from 'src/app/services/scripts/scripts.service';

@Component({
  selector: 'app-three-sixth-shared-script',
  templateUrl: './three-sixth-shared-script.component.html',
  styleUrls: ['./three-sixth-shared-script.component.css'],
})
export class ThreeSixthSharedScriptComponent {
  constructor(private _scriptService: ScriptsService) {}

  scriptWholeData: ScriptInterface[] = [];

  ngOnInit(): void {
    this._scriptService
      .getscriptData()
      .subscribe((response: ScriptInterface[]) => {
        this.scriptWholeData = response;
      });
  }
}
