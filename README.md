## How to apply SOLID Principles in Angular 

According to oficial website, Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps. 

And SOLID are five design principles that can make software design more understandable, flexible, and maintainable. They could be used in any OOP language. - [Wikipedia](https://en.wikipedia.org/wiki/SOLID)


Although Angular is not a language, it uses object-oriented programming (OOP) and those principles can be used to improve code structure, reusability, and maintainability of the apps builded with the framework .
  
First, let's review these principals:

- S - Single Responsibility Principle: A class should have only one responsibility, and should be only one reason to change it. This principle can also be applicable to components, methods, etc...

- O - Open-Closed Principle (OCP): A class/component/methods should be open for extension, but closed for modification.

- L - Liskov Substitution Principle: Derived classes should be substitutable for their base classes.

- I - Interface Segregation Principle: Clients should not be forced to depend on interfaces they do not use.

- D - Dependency Inversion Principle: A class should depend upon abstraction (interface and abstract class), not concretions.

Now, let's see how they are applied into a app.
___________________________________________________________________________________________________________________________________________

(SRP) - Single Responsibility Principle:

Problem: app.component has too many responsabilities. The header, main, and footer html elements were implemented in the same component. 

![Problem](/solid/src/assets/imgs/single-responsibility-problem.png)

```
[app.component]
<header>
...
<header>
<main>
...
</main>
<footer>
...
</footer>
```

Solution: Create new components and move their specific responsabilities to them (html/classes/methods).

```
[app.component]
<app-header></app-header>
<app-main></app-main>
<app-footer></app-footer>

class HeaderComponent {...}
class MainComponent {...}
class FooterComponent {...}
```

![Solution](/solid/src/assets/imgs/single-responsibility-solution.png)

(OCP) - Open Closed Principle:

Problem: The main component contains elements of the product item. In the future, if we need to implement a new feature that makes a product item have no button, we need to modify the main control, and this can introduce bugs.

![Problem](/solid/src/assets/imgs/open-closed-problem.png)

```
[app.component]
<h1>main</h1>
<div class="main">
  <div class="container">
    <div class="col" *ngFor="let p of products; index as i">
      <div>{{ p.Name }}</div>
      <div>Price: {{ p.Price }}</div>
      <button class="btn btn-primary" (click)="delete(i)">Delete</button>
      <br />
    </div>
  </div>
```

Solution: Create a new component with HTML specific elements of products and use it in the main component.

![Solution](/solid/src/assets/imgs/open-closed-solution.png)

```
[app.component]
<div class="main">
  <h1>main</h1>
  <div class="container">
    <app-product-item/>
    <app-product-list/>
  </div>
</div>
```

L - Liskov Substitution Principle:

Problem: class ProductListComponent extends ItemBaseComponent, but not support deleteOnClick event.

![Problem](/solid/src/assets/imgs/liskov-substitution-problem.png)

```
class ItemBaseComponent
{
    products[] = [];
    deleteOnClick(index:number){...}
}

class ProductItemComponent
extends ItemBaseComponent {...}

[app.component]
<div class="main">    
    <app-liskov-product-item (itemDeleted)="onDeleted($event)" />
    <app-liskov-product-list (itemDeleted)="onDeleted($event)" />
</div>
```

Solution: Create a new class ListBaseComponent, so ProductListComponent can extends ListBaseComponent.

![Solution](/solid/src/assets/imgs/liskov-substitution-solution.png)

```
class ItemBaseComponent
{
    products[] = [];
    deleteOnClick(index:number){...}
}

class ListBaseComponent
{
    products[] = [];    
}

class ProductItemComponent
extends ItemBaseComponent {...}

class ProductListComponent
extends ListBaseComponent {...}

[app.component]
<div class="main">    
    <app-product-item (itemDeleted)="onDeleted($event)" />
    <app-product-list/>
</div>
```

ISP - Interface Segregation Principle:

Problem: Products interface contains method that forces ProductListComponent to have a method that is not supported.

![Problem](/solid/src/assets/imgs/interface-segregation-problem.png)

```
interface Products
{
    products: Product[];
    deleteOnClick(index: number);
}

class ProductItemComponent
extends ItemBaseComponent
implements Products
{
    override products: Product[] = [];
    override deleteOnClick(index: number) {...}
}

class ProductListComponent 
extends ItemBaseComponent
implements Products
{
    override products: Product[] = [];
    override deleteOnClick(index: number); //dummy implementation
}
```

Solution: Implement the deleteOnClick method into a new interface to solve the issue.


![Problem](/solid/src/assets/imgs/interface-segregation-solution.png)

```
interface Products
{
  products: Product[];
}

interface Deletable
{
  deleteOnClick(index: number);
}

class ProductItemComponent
extends ItemBaseComponent
implements Products, Deletable
{
    override products: Product[] = [];
}

class ProductListComponent
extends ItemBaseComponent
implements Products
{
  override products: Product[] = [];
  override deleteOnClick(index: number) {...}
}
```

(DIP) - Dependency Inversion Principle:

Problem: Customer class uses a external component(NGXLogger) to log messages. If the component breaks, the app can stop working.

![Problem](/solid/src/assets/imgs/dependency-inversion-problem.png)

```
class ProductItemComponent
extends ItemBaseComponent
implements Products, Deletable {
  override products: Product[] = [];
  constructor(...,private loggerService: LoggerService) {...}
  override deleteOnClick(index: number) {    
    this.loggerService.info('Product has been deleted.');
  }
```

Solution: Create a interface Logger and make LoggerService implement it. In the angular providers, cofigure the dependency.

![Solution](/solid/src/assets/imgs/dependency-inversion-solution.png)

```
interface Logger
{
  info(message: string);
  ...
}

class LoggerService
implements Logger
{
  constructor(private logger: NGXLogger) {...}

  info(message: string) {
    this.logger.info(message);
  }

  ...
}
[angular.json]
providers: [
    {
      provide: 'Logger', useClass: LoggerService
    }
  ]

export class ProductItemComponent
extends ItemBaseComponent
implements Products, Deletable
{
  override products: Product[] = [];

  constructor(...,@Inject('Logger') public logger: Logger) {...}

  override deleteOnClick(index: number) {
    super.deleteOnClick(index);
    this.logger.info('Product has been deleted.');
  }
}

```
- Full App

![Full App](/solid/src/assets/imgs/full-app.png)

```
[app.component]
<app-header/>
<div class="main">
  <app-content/>
</div>
<app-footer/>

[app.content]
<h1>content</h1>
<div class="container">
  <app-content-section-item (itemDeleted)="onDeleted($event)" />
  <app-content-section-list (itemDeleted)="onDeleted($event)" />
</div>

class ContentSectionItemComponent
extends ItemBaseComponent
implements Products, Deletable
{
  override products: Product[] = [];
  constructor(...,@Inject('Logger') public logger: Logger {...}  

  override deleteOnClick(index: number) {...}
}

class ContentSectionListComponent
extends ItemBaseComponent
implements Products
{
  override products: Product[] = [];
  ...   
}

```
- Full App Page

![Full App Page ](/solid/src/assets/imgs/full-app-page.png)
