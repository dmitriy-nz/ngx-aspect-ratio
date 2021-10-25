import {Component, ElementRef, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'ngx-aspect-ratio',
  templateUrl: './ngx-aspect-ratio.component.html',
  styleUrls: ['./ngx-aspect-ratio.component.scss']
})
export class NgxAspectRatioComponent implements OnChanges {
  @Input() heightPercent?: number | string;
  @Input() aspectRatio?: string = '1/1';


  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  get width(): number {
    return this.elementRef.nativeElement.clientWidth;
  }

  @HostBinding('style.padding-bottom')
  get paddingBottom(): string {
    return this.heightPercent + '%';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.aspectRatio) {
      this.parseAspectRatio();
    }
  }


  private parseAspectRatio(): void {
    if (this.aspectRatio) {
      const regexRes = /(\d+)[\/:](\d+)/.exec(this.aspectRatio);
      if (!regexRes || regexRes?.length < 3)
        throw new Error(`Incorrect aspect ratio format, aspectRatio should be like 4/3 16/9 or 4:3 16:9...`);

      const aspectWith: number = +regexRes[1];
      const aspectHeight: number = +regexRes[2];
      const aspectRatio = Math.min(aspectWith, aspectHeight) / Math.max(aspectWith, aspectHeight);

      if (aspectWith === aspectHeight) {
        this.heightPercent = 100;
      } else if (aspectWith > aspectHeight) {
        this.heightPercent = (this.width / this.width * aspectRatio) * 100;
      }
    }
  }

}
