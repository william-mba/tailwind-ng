import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'code',
  standalone: true
})
export class CodeSnippetPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/<\//g, '&lt;/')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // .replace(/&lt;\//g, '<span class="text-gray-500">&lt;/</span>')
      .replace(/&lt;/g, '<span class="text-gray-500">&lt;</span>')
      .replace(/&gt;/g, '<span class="text-gray-500">&gt;</span>')
  }
}
