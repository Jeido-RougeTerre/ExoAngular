type order = 'asc' | 'desc';

import { Component } from '@angular/core';
import { Book } from './book';
import { BooleanemojiPipe } from '../../utils/pipes/booleanemoji.pipe';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BooleanemojiPipe],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  books : Book[] = [new Book("meh.", "Me", false), new Book("awesome book", "super author", true)];

  order : order = "asc";

  toggleRead(book : Book) {
    book.toggleRead();
  }

}
