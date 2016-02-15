function execute_function_after_files_loaded( function_parameter, files_parameter, delay_parameter, index_parameter /* leave this parameter empty. This parameter should only be used when this function is called recursively */ ){
           	
	//so far, this function is only designed to process the loading of images and video files
	
	if( typeof efafl_noflthblftfp == 'undefined' ) window.efafl_noflthblftfp = new Array(); 
	/*  NOTE:                                               */
	/* "efafl_noflthblftfp" stands for "executed_function_  */
	/*  after_files_loaded number_of_files_that_have_been_  */
	/*  loaded_from_the_files_parameter".                   */
	
	if( typeof delay_parameter == 'undefined' ) var delay_parameter = 0;

	var is_image_file = /bmp|gif|img|jpg|jpeg|png/g;
	
	var is_video_file = /mp4|mpeg4|ogg|webm/g;
		
	if( typeof index_parameter == 'undefined'  ) {
		
		efafl_noflthblftfp.push( 0 );
		
		var index_parameter = efafl_noflthblftfp.length - 1;
						
		window.files_that_can_be_loaded_from_the_files_parameter = new Array();
		
		if( $('div.content_to_be_loaded.content_to_be_loaded-'+index_parameter).size() == 0 ) $( 'body' ).append( '<div class="content_to_be_loaded content_to_be_loaded-'+index_parameter+'" style="display: none;"></div>' );
		
		for( var i = 0; i < files_parameter.length; i++ ) {
			
			if( is_image_file.exec( files_parameter[i] ) ) {
					           				
				files_that_can_be_loaded_from_the_files_parameter.push( files_parameter[i] );
					           					
				$( 'div.content_to_be_loaded.content_to_be_loaded-' + index_parameter ).append( '<img class="element_' + i + '" src="' + files_parameter[i] + '">' );
				
				$( 'div.content_to_be_loaded.content_to_be_loaded-' + index_parameter + ' img.element_' + i ).load( function(){
					
					$( this ).attr( 'data-loaded', 'true' );
						           					
					efafl_noflthblftfp[ index_parameter ]++;
					
				});
					
			}
			
			if( is_video_file.exec( files_parameter[i] ) ) {
					           				
				files_that_can_be_loaded_from_the_files_parameter.push( files_parameter[i] );
					           					
				$( 'div.content_to_be_loaded.content_to_be_loaded-' + index_parameter ).append( '<video class="element_' + i + '" src="' + files_parameter[i] + '"></video>' );
				
				$( 'div.content_to_be_loaded.content_to_be_loaded-' + index_parameter + ' video.element_' + i ).on( 'canplaythrough', function(){
					
					$( this ).attr( 'data-loaded', 'true' );
						           					
					efafl_noflthblftfp[ index_parameter ]++;
					
				});
					
			}
			
		}	
		
	} 
	
	if( efafl_noflthblftfp[ index_parameter ] == files_that_can_be_loaded_from_the_files_parameter.length ) {
				           					
		efafl_noflthblftfp[ index_parameter ] = "all files passed to this iteration of the \"execute_function_after_files_loaded()\" function have been successfully loaded";
		
		setTimeout( function(){
		
			function_parameter();	
		
		}, delay_parameter );
		
	} else {
		
		setTimeout( function(){ execute_function_after_files_loaded( function_parameter, files_parameter, delay_parameter, index_parameter ) }, 500 );
		
	}

}
