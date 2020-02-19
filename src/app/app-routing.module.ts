import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InputOutputComponent} from './input-output/input-output.component';
import {ObservablesComponent} from './observables/observables.component';
import {ReduxComponent} from './redux/redux.component';


const routes: Routes = [
  {
    path: 'input-output',
    component: InputOutputComponent
  },
  {
    path: 'observables',
    component: ObservablesComponent
  },
  {
    path: 'redux',
    component: ReduxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
