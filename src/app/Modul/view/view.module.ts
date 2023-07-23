import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SliderComponent } from './component/slider/slider.component';
import { TopicComponent } from './component/topic/topic.component';
import { InstructorComponent } from './component/instructor/instructor.component';
import { CommentsComponent } from './component/comments/comments.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbPaginationModule, NgbAlertModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesComponent } from './component/features/features.component';
import { TestIqComponent } from './component/test-iq/test-iq.component';
import { SystemComponent } from './component/system/system.component';
import { HomefirstComponent } from './component/homefirst/homefirst.component';
import { VisionComponent } from './component/vision/vision.component';
import { TeamsComponent } from './component/teams/teams.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    SliderComponent,
    TopicComponent,
    InstructorComponent,
    CommentsComponent,
    MapComponent,
    FeaturesComponent,
    TestIqComponent,
    SystemComponent,
    HomefirstComponent,
    VisionComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    // NgbPaginationModule, NgbAlertModule,NgbRatingModule
  ],

})
export class ViewModule { }
