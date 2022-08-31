import { NgModule } from '@angular/core';
import { AdaptersModule } from './adapter/adapters.module';
import { EffectsModule } from './effects/effects.module';
import { ServicesModule } from './services/services.module';
import { StoreModule } from './store/store.module';
@NgModule({
    imports: [
        ServicesModule,
        StoreModule,
        EffectsModule,
        AdaptersModule
    ]
})
export class CoreModule
{ }
