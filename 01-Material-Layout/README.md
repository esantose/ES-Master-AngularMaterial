# Start a new app

ng new MasterMaterial --routing --style=scss

# Set Up Angular Material Library

ng add @angular/material
npm i @fortawesome/fontawesome-free
ng g m share/material --flat=true

# Config projects: .editor.config and tsconfig.json

tsconfig.json
angularCompilerOptions
"paths": {
"@shared/_": ["src/app/shared/_"],
"@helpers/_": ["src/app/helpers/_"],
"@adm/_": ["src/app/modules/adm/_"]
}

## https://material.angular.io/guide/schematics

# Set Up Schematics Module and Routings

ng g m components/schematics --routing
ng g @angular/material:navigation components/schematics/navigation
ng g @angular/material:dashboard components/schematics/dashboard
ng g @angular/material:address-form components/schematics/address-form
ng g @angular/material:table components/schematics/table
ng g @angular/material:tree components/schematics/tree

# Set Up Layouts Module and Routings

ng g m dashboard/dashboard --routing
ng g m dashboard/layout --routing
ng g c dashboard/layout/layout
ng g c dashboard/layout/header
ng g c dashboard/layout/sidebar
ng g c dashboard/layout/footer
ng g c dashboard/layout/breadcrumb

ng g m components/tutorial --routing
ng g c components/tutorial/book
ng g c components/tutorial/chpt01-introduction
ng g c components/tutorial/chpt02-getting-started

ng g m components/pages --routing
ng g c components/pages/page-layout
ng g c components/pages/page01
ng g c components/pages/page02

ng g m components/forms --routing
ng g c components/forms/form-layout
ng g c components/forms/login01
ng g c components/forms/signup01

ng g c components/home
ng g c components/about-us

# TODO

review "Stop Using Shared Material Module"
https://indepth.dev/posts/1191/stop-using-shared-material-module

Responsive User Interfaces For Authentication With Angular Material Design
https://bproo.com/posts/1ycewv380sku5h9k/Front-end/create-responsive-user-interfaces-for-authentication-with-angular-material-design
