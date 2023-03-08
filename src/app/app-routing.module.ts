import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'entry',
        loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule)
    },
    {
        path: 'confirmation',
        loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationModule)
    },
    {
        path: 'thank-you',
        loadChildren: () => import('./thank-you/thank-you.module').then(m => m.ThankYouModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }