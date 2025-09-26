import { Component, inject, computed } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-doc-viewer',
  standalone: true,
  imports: [RouterModule, MarkdownModule],
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.css'],
})
export class DocViewerComponent {
  private route = inject(ActivatedRoute);

  // Use a computed signal to reactively determine the path when the route changes
  private urlSegments = toSignal(this.route.url, { initialValue: [] });

  markdownPath = computed(() => {
    const segments = this.urlSegments()
      .map((s) => s.path)
      .join('/');
    console.log(segments ? `assets/docs/${segments}.md` : '');
    return segments ? `assets/docs/${segments}.md` : '';
  });
}
