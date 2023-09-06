/*
 * Overrides default style set for 'stylescombo' plugin
 * in order to remove 'Heading 1' ({ name: 'Heading 1', element: 'h1' })
 * from the Styles dropdown.
 */
(function () {
  "use strict";

  CKEDITOR.stylesSet.add('styles_without_h1', [
	{ name: 'Normal',		element: 'p' },
	{ name: 'Heading 2',		element: 'h2' },
	{ name: 'Heading 3',		element: 'h3' },
	{ name: 'Heading 4',		element: 'h4' },
	{ name: 'Heading 5',		element: 'h5' },
	{ name: 'Heading 6',		element: 'h6' },
	{ name: 'Preformatted Text',element: 'pre' },
	{ name: 'Address',			element: 'address' }
  ]);

}());