import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { StudentsModule } from './students.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(StudentsModule);