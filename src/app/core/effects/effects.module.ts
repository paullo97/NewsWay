import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';

import { NewsEffect } from './news.effect';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
  NewsEffect
]);

@NgModule({
  imports: [ effects ]
})
export class EffectsModule
{ }
