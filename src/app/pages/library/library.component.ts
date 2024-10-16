type order = 'asc' | 'desc';

import { Component } from '@angular/core';
import { Book } from './book';
import { BooleanemojiPipe } from '../../utils/pipes/booleanemoji.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BooleanemojiPipe, FormsModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  books : Book[] = [new Book("meh.", "Me", false), new Book("awesome book", "super author", true)];
  hasSubmit : boolean = false;
  order : order = "asc";

  book : Book = new Book("", "", false);

  toggleRead(book : Book) {
    book.toggleRead();
  }

  submitBook() : void {
    this.hasSubmit = true;
    if(!(this.titleHasError || this.authorHasError)) {
      this.books.push(this.book);
      this.book = new Book("", "", false);
      this.hasSubmit = false;
    }
  }

  get titleHasError() {
    return this.hasSubmit && this.book.title.length <= 0
  }

  get authorHasError() {
    return this.hasSubmit && this.book.author.length <= 0
  }

}
