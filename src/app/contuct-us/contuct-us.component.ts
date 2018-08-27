import { Component, OnInit, Optional, InjectionToken, Inject } from '@angular/core';
import { LocalStorageService } from '../core/services/local-storage.service';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { GeneratorSequence, SequenceGeneratorFactory } from '../core/services/sequence-generator.factory';


@Component({
  selector: 'app-contuct-us',
  templateUrl: './contuct-us.component.html',
  styleUrls: ['./contuct-us.component.css']
})
export class ContuctUsComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Inject(GeneratorSequence) @Optional() private generator: string
  ) { }

  ngOnInit() {
  }

}
