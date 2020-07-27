var express=require("express");
    app=express(),
    http=require("http").Server(app).listen(8000),
	console.log("Server started");
	upload=require("express-fileupload");
	app.use(upload());
	const Jimp = require("jimp");
	var appRoot = require('app-root-path');
	
	app.get("/",function(req,res){
		res.sendFile(__dirname+"/index.html");
	});
	
	
	app.post("/",function(req,res){
		
		
		if(req.files)
		{
			var file=req.files.filename;
			filename=file.name;
			file.mv("./upload/"+filename,function(err)
			{
			 	if(err)
				{
					console.log(err);
					res.send("error occured");
				}
				else{
					var savePath =  appRoot + '/upload/' + filename;
					console.log(savePath);
					
					 Jimp.read(savePath)
					 .then(savePath => {
    return savePath
      
      .writesync('output.jpg',res.download('output.jpg')); // save
  })
  .catch(err => {
    console.error(err);
  })
				
					 
					 
					 
					  
					 
					 
					 
					 
	}})}});
	
			
			
			
		
		
					
					 
					 
	
	
	


			




		
    
	
    



 






