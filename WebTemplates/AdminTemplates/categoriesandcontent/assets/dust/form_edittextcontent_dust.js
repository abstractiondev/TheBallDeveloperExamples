(function(){dust.register("form_edittextcontent.dust",body_0);function body_0(chk,ctx){return chk.write("<script>$(function() {$(\".open-textcontenteditor\").on(\"click\",function () {var currID = $(this).data(\"id\");$.getJSON(\"../../AaltoGlobalImpact.OIP/TextContent/\" + currID + \".json\", function(me) {me.ContentSourceInfo = me.RelativeLocation + \":\" + me.MasterETag;ConnectInputField(me, \"ContentSourceInfo\", \"TextContentEditor\", \"ContentSourceInfo\", \"\", true, null, null, true);ConnectInputField(me, \"Title\", \"TextContentEditor\", \"Title\", \"\", null, null, null, true);ConnectInputField(me, \"Subtitle\", \"TextContentEditor\", \"SubTitle\", \"\", null, null, null, true);ConnectInputField(me, \"Author\", \"TextContentEditor\", \"Author\", \"\", null, null, null, true);me.PublishedParsed = ParseRawTimestamp(me.Published);ConnectInputField(me, \"PublishedParsed\", \"TextContentEditor\", \"Published\", \"\", null, null, null, true);ConnectInputField(me, \"Excerpt\", \"TextContentEditor\", \"Excerpt\", \"\", null, null, null, true);ConnectInputField(me, \"IFrameSources\", \"TextContentEditor\", \"IFrameSources\", \"\", null, null, null, true);ConnectInputField(me, \"Body\", \"TextContentEditor\", \"Body\", \"\", null, null, null, true);me.CategoriesListed = \"\";me.LocationsListed = \"\";if(me.Categories && me.Categories.CollectionContent) {for(var i = 0; i < me.Categories.CollectionContent.length; i++) {var item = me.Categories.CollectionContent[i];me.CategoriesListed += item.ID + \",\";}}if(me.Locations && me.Locations.CollectionContent) {for(var i = 0; i < me.Locations.CollectionContent.length; i++) {var item = me.Locations.CollectionContent[i];me.LocationsListed += item.ID + \",\";}}ConnectInputField(me, \"CategoriesListed\", \"TextContentEditor\", \"Categories\", \"\", false, \"Object_\", true, true);ConnectInputField(me, \"LocationsListed\", \"TextContentEditor\", \"Locations\", \"\", false, \"Object_\", true, true);/*<a data-toggle=\"modal\" role=\"button\" class=\"open-textcontenteditor\" href=\"#\" data-contentinfo=\"").reference(ctx.get("RelativeLocation"),ctx,"h").write(":").reference(ctx.get("MasterETag"),ctx,"h").write("\"data-categories=\"").exists(ctx.get("Categories"),ctx,{"block":body_1},null).write("\"data-locations=\"").exists(ctx.get("Locations"),ctx,{"block":body_4},null).write("\"*//*ConnectInputField(me, \"parentcategory\", \"TextContentEditor\", \"ParentCategory\", \"\", false, \"Object_\");*/var id = me.ID;var imageid; /* = me.data(\"imageid\");*/var imageext;if(me.ImageData) {imageid = me.ImageData.ID;imageext = me.ImageData.AdditionalFormatFileExt;}var fileuploadClass;if(imageid != null){fileuploadClass = \"fileupload-exists\";$(\"#TextContentEdit_ExistingImage\").attr(\"src\", \"../../AaltoGlobalImpact.OIP/MediaContent/\" + imageid + \"_256x256_crop\" + imageext);} else {fileuploadClass = \"fileupload-new\";}var fileUploadCtrl = $(\"#TextContentEdit_FileUpload\");fileUploadCtrl.removeClass('fileupload-exists');fileUploadCtrl.removeClass('fileupload-new');fileUploadCtrl.addClass(fileuploadClass);fileUploadCtrl.attr(\"data-name\", \"File_\" + id + \"_ImageData\");InitializeModalClasses();$('#edit-textcontent').modal('show');});});});</script><div id=\"edit-textcontent\" class=\"modal hide fade full-screen\"><form id=\"TextContentditForm\" method=\"post\" class=\"form-horizontal full-screen-content\" enctype=\"multipart/form-data\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Edit Text Content</h3></div><div class=\"modal-body\"><input id=\"TextContentEditor_ContentSourceInfo\" name=\"ContentSourceInfo\" type=\"hidden\" /><fieldset><div class=\"control-group\"><label class=\"control-label\">Content Image</label><div class=\"controls\"><div id=\"TextContentEdit_FileUpload\" class=\"fileupload fileupload-exists\" data-provides=\"fileupload\" data-name=\"myimage\"><div class=\"fileupload-new thumbnail\" style=\"width: 200px; height: 150px;\"><img src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image\" /></div><div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"max-width: 200px; max-height: 150px; line-height: 20px;\"><img id=\"TextContentEdit_ExistingImage\" src=\"\"></div><div><span class=\"btn btn-file\"><span class=\"fileupload-new\">Select image</span><span class=\"fileupload-exists\">Change</span><input type=\"file\" /></span><a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\">Remove</a></div></div></div></div>").partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_Title","field_label":"Title"}).partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_SubTitle","field_label":"SubTitle"}).partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_Author","field_label":"Author"}).partial("textinput_datetime.dust",ctx,{"field_id":"TextContentEditor_Published","field_label":"Published"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"TextContentEditor_Excerpt","field_label":"Excerpt"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"TextContentEditor_Body","field_label":"Body"}).partial("textinput_multiline.dust",ctx,{"field_id":"TextContentEditor_IFrameSources","field_label":"IFrameSources"}).partial("dropdown_select.dust",ctx,{"field_id":"TextContentEditor_Categories","is_multiple":"true","item_collection":ctx.getPath(false,["CategoriesSource","CategoryCollection","CollectionContent"]),"item_type":"category","field_label":"Categories","field_name":"Categories"}).partial("dropdown_select.dust",ctx,{"field_id":"TextContentEditor_Locations","is_multiple":"true","item_collection":ctx.getPath(false,["Locations","AddressAndLocationCollection","CollectionContent"]),"item_type":"location","field_label":"Locations","field_name":"Locations"}).write("</fieldset></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\" type=\"submit\">Save changes</button></div></form></div>");}function body_1(chk,ctx){return chk.section(ctx.get("Categories"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_3},null);}function body_3(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write(",");}function body_4(chk,ctx){return chk.section(ctx.get("Locations"),ctx,{"block":body_5},null);}function body_5(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_6},null);}function body_6(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write(",");}return body_0;})();