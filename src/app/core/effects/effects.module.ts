import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';
import { FullArticleEffect } from './full-article.effect';
import { NewsEffect } from './news.effect';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
    NewsEffect,
    FullArticleEffect
]);

@NgModule({
    imports: [ effects ]
})
export class EffectsModule
{ }
