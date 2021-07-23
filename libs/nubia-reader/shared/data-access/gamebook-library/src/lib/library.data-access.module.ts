import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NubiaReaderGamebookLibraryStoreModule } from '@nubia/nubia-reader/gamebook-library-store';

// todo: how to use a module in 2 seperate modules in the same layer
// todo: *** OR how to import and "re-import" in child modules ***
@NgModule({
  imports: [CommonModule, NubiaReaderGamebookLibraryStoreModule],
  providers: [],
  exports: [],
})
export class LibraryDataAccessModule {}
