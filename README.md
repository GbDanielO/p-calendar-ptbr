# p-calendar-ptbr

É um datepicker do PrimeNG já em português.
Está é uma alternativa para o <b>p-calendar</b> do PrimeNG e suporta a maioria de suas propriedades.

It is a datepicker of PrimeNG in portuguese.
This is an alternative for PrimeNG's <b>p-calendar</b> and supports the most of its properties.

## Getting started (Prerando o uso)

 - Install PrimeNG

 npm install primeng --save

 - Install Font-Awesome

 npm install font-awesome --save

 - Configure required styles at the styles section

 "styles": [
   "../node_modules/font-awesome/css/font-awesome.min.css",
   "../node_modules/primeng/resources/themes/omega/theme.css",
   "../node_modules/primeng/resources/primeng.min.css",
   //...
 ],

 - Install this component

 npm install p-calendar-ptbr --save

 - and then from your Angular AppModule:

 import { PCalendarPtbrModule } from 'p-calendar-ptbr';

 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PCalendarPtbrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

## Basic usage (Uso básico)

### Example 1:

&lt;p-calendar-ptbr&gt;&lt;/p-calendar-ptbr&gt;

### Example 2:

&lt;p-calendar-ptbr [yearNavigator]="true" yearRange="1900:2018" [monthNavigator]="true"&gt;&lt;/p-calendar-ptbr&gt;

## All properties supported (Todas as propriedades suportadas)

Pode ser usado como um <b>p-calendário</b> original do PrimeNG, a principal diferença entre estes, 
é que o <b>p-calendar-ptbr</b> precisa que quando a propriedade passada for um valor diferente de uma string
ou número você faça um binding nessa propriedade, passando-a dentro dos colchetes '[]'.

Desta forma, booleanos, objetos e outros, precisam que a propriedade esteja dentro de colchetes.

It can be used like a original PrimeNG's <b>p-calendar</b>, the main different
between these, is that the <b>p-calendar-ptbr</b> needs that when the property passed 
is a value different of a string or number, it needs that you make a binding at this property,
passing it inside of brackets '[ ]'.

This way, booleans, objects, and any others, need tha the property is into a brackets.

### Example 1:

&lt;p-calendar-ptbr [showButtonBar]="false" [showTime]="false" [yearNavigator]="true"
          yearRange="1900:2018" [showIcon]="true" [monthNavigator]="false" [readonlyInput]="true"
          placeholder="Seu texto" clearButtonStyleClass="ui-secondary-button"
          todayButtonStyleClass="ui-secondary-button" maxDateCount="3" selectionMode="multiple"
          inputId="my-Date" [disabled]="false" [inline]="false" [minDate]="data"
          [maxDate]="data" [disabledDates]="arrayDatas" disabledDays="[4,5]" [timeOnly]="false"&gt;
&lt;/p-calendar-ptbr&gt;

## How to get a returned value (Como pegar o valor retornado)

Este componente funciona como um componente pai para o <b>p-calendar</b>, de modo que o valor assumido pelo 
componente filho deve passar para o pai através de um event-binding. Eu nomeei esse EventEmitter para "value",
e pode ser capturado de uma das seguintes maneiras:

This component works like a father component for the <b>p-calendar</b>, so the value took  by the son component 
should pass to father through of a event binding. I named this EventEmitter for "value" and it can be catch in
one of the following ways:

### Calling a method in your component and passing the $event (Chamando um método no seu componente e passando o valor retornado no $event)

&lt;p-calendar-ptbr (value)="aoAdicionar($event)"&gt;&lt;/p-calendar-ptbr&gt;

### Passing to variable in your component (Passando para uma variável em seu componente)

&lt;p-calendar-ptbr (value)="data = $event"&gt;&lt;/p-calendar-ptbr&gt;

### Passing to a property of an object in your component (Passando para uma propriedade de um objeto no seu componente)

&lt;p-calendar-ptbr (value)="cliente.dataCadastro = $event"&gt;&lt;/p-calendar-ptbr&gt;

## Author

 - Daniel Oliveira
