$(document).on('flatdoc:ready', function() {

  // title from yaml meta
  wrapYamlAndContent.title === 0 ? '' : $("#flat-title").html( wrapYamlAndContent.title ) ;
  // subtitle from yaml meta
  wrapYamlAndContent.subtitle === 0 ? '' : $("#flat-subtitle").html( wrapYamlAndContent.subtitle ) ;
  // author from yaml meta
  wrapYamlAndContent.author === 0 ? '' : $("#flat-author").html( wrapYamlAndContent.author ) ;
  // date from yaml meta
  wrapYamlAndContent.date === 0 ? '' : $("#flat-date").html( jQuery.timeago( wrapYamlAndContent.date ) ) ;
  wrapYamlAndContent.date === 0 ? '' : $("#flat-date").attr( 'datetime', wrapYamlAndContent.date ) ;

}); // end flatdoc:ready

