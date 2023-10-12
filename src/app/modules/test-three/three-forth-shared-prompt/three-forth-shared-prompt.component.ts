import { Component } from '@angular/core';
import { PromptInterface } from 'src/app/interfaces/prompt.interface';
import { PromptsService } from 'src/app/services/prompts/prompts.service';

@Component({
  selector: 'app-three-forth-shared-prompt',
  templateUrl: './three-forth-shared-prompt.component.html',
  styleUrls: ['./three-forth-shared-prompt.component.css'],
})
export class ThreeForthSharedPromptComponent {
  constructor(private _promptService: PromptsService) {}

  promptWholeData: PromptInterface[] = [];

  ngOnInit(): void {
    this._promptService
      .getPromptData()
      .subscribe((response: PromptInterface[]) => {
        this.promptWholeData = response;
      });
  }
}
