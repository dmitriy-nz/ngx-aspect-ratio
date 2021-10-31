# Description

Angular component container that maintains aspect ratio when responsive or changing the width of the parent. Convenient
to use for inserting videos, photos or other content for which you need to maintain aspect ratio.

#### [Demo](https://dmitriy-nz.github.io/ngx-aspect-ratio/)

## Installation

```sh
$ npm install ngx-aspect-ratio
```

Add the module to your application

```ts
@Module({
  imports: [
    NgxAspectRatioModule,
  ],
})
export class AppModule {
}
```
### Version
Install  library version for you angular version  

angular 12 -> latest  
angular 11 -> v11.2.14  

## Usage

```html

<ngx-aspect-ratio aspectRatio="4:3">
  <!-- your content-->
</ngx-aspect-ratio>
```

### Properties

| Prop            | Type    | Description                                                                                                          |
|---------------	|--------	|--------------------------------------------------------------------------------------------------------------------	|
| aspectRatio    | string  | Aspect ratio in format number[:/]number. For example 4: 3 or 16/9                                          |
| heightPercent  | number  | The height of the container as a percentage of the width of the container. Set automatically when using aspectRatio  | 
