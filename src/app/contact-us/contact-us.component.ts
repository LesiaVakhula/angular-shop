import { Component, OnInit, Optional, InjectionToken, Inject } from '@angular/core';
import { LocalStorageService } from '../core/services/local-storage.service';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { GeneratorSequence, SequenceGeneratorFactory } from '../core/services/sequence-generator.factory';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Inject(GeneratorSequence) @Optional() private generator: string
  ) { }

  ngOnInit() {
  }

}
