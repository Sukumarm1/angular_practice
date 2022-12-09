import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiModule as PracticeModule } from 'src/app/api/practice-api/api.module';


@NgModule({
    imports: [
        PracticeModule.forRoot({
            rootUrl: `${environment.apiPrefix}${environment.apiPractice}`
        }),
    ]
})


export class SwaggerApiModule { }