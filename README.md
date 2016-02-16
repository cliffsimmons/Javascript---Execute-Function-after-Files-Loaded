<h1>Execute Function after Files Loaded</h1>
By Cliff Simmons, http://cliffsimmons.com<br/>
<br/>
"Execute Function after Files Loaded" or "execute_function_after_files_loaded()" is a javascript function that can be used to execute another function or command upon the load completion of a specified array of files (currently image files and video files only). This function requires the jQuery library in order to work.<br/>
<br/>
<br/>
<br/>
<br/>
<h2>PARAMETERS</h2>
```
execute_function_after_files_loaded( 
  function_parameter, 
  files_parameter, 
  delay_parameter
);
```
**function_parameter** - required parameter of variable type 'function'<br/>
*The function that you would like to be executed when the all files specified in the "files_parameter" have been successfully loaded.*<br/>
<br/>
**files_parameter** - required parameter of variable type 'array'<br/>
*The array of files that you would like to be loaded before the function defined by the "function_parameter" is fired.*<br/>
<br/>
**delay_parameter** - optional parameter of variable type 'number'<br/>
*The number of milliseconds by which to delay the firing of the "function_parameter" after the files specifid in the "files_parameter") have been successfully loaded. When the "execute_function_after_files_loaded()" is used, if the "delay_parameter" is not included the parameter set then the "delay_parameter" will default to 0; meaning that the "function_parameter" will fire immediately after the files in the "file_parameter" have been loaded.*
<br/>
<br/>
<br/>
<br/>
<h2>Example Usage A</h2><br/>
Create an alert text immediately after the load process completes for the files "image-file-a.gif", "image-file-b.jpg", "image-file-c.png" and "video-file-a.mp4".
```
execute_function_after_files_loaded( 
  function(){
    alert( 'files loaded' );
  }, 
  [
    path-to-files/image-file-a.gif,
    path-to-files/image-file-b.jpg,
    path-to-files/image-file-c.png,
    path-to-files/video-file-a.mp4
  ]
);
```
<br/>  
<br/>
<br/>
<br/>
<h2>Example Usage B</h2><br/>
Create an alert text 5 seconds (5000 milliseconds) after the load process completes for the files "image-file-a.gif", "image-file-b.jpg", "image-file-c.png" and "video-file-a.mp4".
```
execute_function_after_files_loaded( 
  function(){
    alert( 'files loaded' );
  }, 
  [
    path-to-files/image-file-a.gif,
    path-to-files/image-file-b.jpg,
    path-to-files/image-file-c.png,
    path-to-files/video-file-a.mp4
  ],
  5000
);
```
