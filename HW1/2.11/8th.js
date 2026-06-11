if (-1 || 0) alert( 'first' ); // T
if (-1 && 0) alert( 'second' ); // F, wont execute
if (null || -1 && 1) alert( 'third' ); // T