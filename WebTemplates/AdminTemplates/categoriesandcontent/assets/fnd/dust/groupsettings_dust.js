(function(){dust.register("groupsettings.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.get("GroupContainer"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<form method=\"post\" target=\"OperationManager_IFrame\" enctype=\"multipart/form-data\"><input name=\"ContentSourceInfo\" value=\"").reference(ctx.get("RelativeLocation"),ctx,"h").write(":").reference(ctx.get("MasterETag"),ctx,"h").write("\" type=\"hidden\" />").section(ctx.get("GroupProfile"),ctx,{"block":body_2},null).write("</form>");}function body_2(chk,ctx){return chk.write("<fieldset><div><label class=\"control-label\">Group Profile Image</label><div class=\"controls\">").section(ctx.get("ProfileImage"),ctx,{"block":body_3},null).write("<script>var noImageUrl = \"../assets/img/no_image.gif\";var currentImageUrl = currentImageID ?\"../../AaltoGlobalImpact.OIP/MediaContent/\" + currentImageID + \"_256x256_crop\" + imageDataFileExt :noImageUrl;var profileImageID = \"").reference(ctx.getPath(false,["ProfileImage","ID"]),ctx,"h").write("\";</script><div id=\"ProfileImage_").reference(ctx.get("ID"),ctx,"h").write("\"><div class=\"thumbnail\" style=\"max-width: 200px; max-height: 150px; line-height: 20px;\"><img src=\"../assets/img/no_image.gif\" /></div><div><input type=\"file\"><input type=\"hidden\"><a href=\"#\" class=\"button\">Action</a></div></div><script>var setButtonMode = function($button, mode) {var buttonText = mode == \"add\" ? \"Add Image\" : \"Remove Image\";$button.attr('data-mode', mode);$button.html(buttonText);};var reset_field = function(e) {e.wrap('<form>').parent('form').trigger('reset');e.unwrap();};var setImageValues = function($file, $hidden, fileFieldName) {$hidden.attr('name', '');$file.attr('name', fileFieldName);};var clearImageValue = function($file, $hidden, fileFieldName) {$hidden.attr('name', fileFieldName);$file.attr('name', '');};var activateFileUpload = function() {var fileFieldName = \"File_\" + profileImageID + \"_ImageData\";var currMode = currentImageID ? \"remove\" : \"add\";var rootSelector = \"#ProfileImage_").reference(ctx.get("ID"),ctx,"h").write("\";var buttonSelector = rootSelector + \" .button\";var imageSelector = rootSelector + \" img\";var hiddenSelector = rootSelector + \" input[type=hidden]\";var fileSelector = rootSelector + \" input[type=file]\";var $image = $(imageSelector);var $button = $(buttonSelector);var $file = $(fileSelector);var $hidden = $(hiddenSelector);$image.attr(\"src\", currentImageUrl);setButtonMode($button, currMode);$button.on(\"click\", function() {var currMode = $(this).attr('data-mode');if(currMode == \"remove\") {reset_field($file);$image.attr('src', noImageUrl);setButtonMode($button, \"add\");clearImageValue($file, $hidden, fileFieldName);}});$file.change(function() {var input = this;if (input.files && input.files[0]) {var reader = new FileReader();reader.onload = function (e) {$(imageSelector).attr('src', e.target.result);setButtonMode($button, \"remove\");setImageValues($file, $hidden, fileFieldName);};reader.readAsDataURL(input.files[0]);}});};activateFileUpload();$(function() {});</script></div></div><div><label>Group Icon Image</label><div>").section(ctx.get("IconImage"),ctx,{"block":body_6},null).write("</div></div>").partial("textinput_singleline.dust",ctx,{"field_id":body_9,"field_name":body_10,"field_value":body_11,"field_label":"Group name"}).partial("textinput_multiline.dust",ctx,{"field_id":body_12,"field_name":body_13,"field_value":body_14,"field_label":"Description","rows":"6"}).partial("textinput_multiline.dust",ctx,{"field_id":body_15,"field_name":body_16,"field_value":body_17,"field_label":"Organisations and groups linked to us","rows":"6"}).partial("textinput_singleline.dust",ctx,{"field_id":body_18,"field_label":"Www site name to publish content","field_name":body_19,"field_value":body_20}).exists(ctx.getPath(false,["CustomUICollection","CollectionContent"]),ctx,{"block":body_21},null).write("<footer><div><button value=\"true\" name=\"btnCancel\">Cancel</button><button type=\"submit\" name=\"RootSourceAction\" id=\"RootSourceAction\" value=\"Save\">Save changes</button></div></footer></fieldset>");}function body_3(chk,ctx){return chk.exists(ctx.getPath(false,["ImageData","ID"]),ctx,{"else":body_4,"block":body_5},null);}function body_4(chk,ctx){return chk.write("<script>var currentImageID = null;</script>");}function body_5(chk,ctx){return chk.write("<script>var currentImageID = \"").reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h").write("\";var imageDataFileExt = \"").reference(ctx.getPath(false,["ImageData","FileExt"]),ctx,"h").write("\";</script>");}function body_6(chk,ctx){return chk.exists(ctx.getPath(false,["ImageData","ID"]),ctx,{"else":body_7,"block":body_8},null);}function body_7(chk,ctx){return chk;}function body_8(chk,ctx){return chk;}function body_9(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_GroupName");}function body_10(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_GroupName");}function body_11(chk,ctx){return chk.reference(ctx.get("GroupName"),ctx,"h");}function body_12(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_Description");}function body_13(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_Description");}function body_14(chk,ctx){return chk.reference(ctx.get("Description"),ctx,"h");}function body_15(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_OrganizationsAndGroupsLinkedToUs");}function body_16(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_OrganizationsAndGroupsLinkedToUs");}function body_17(chk,ctx){return chk.reference(ctx.get("OrganizationsAndGroupsLinkedToUs"),ctx,"h");}function body_18(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_WwwSiteToPublishTo");}function body_19(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_WwwSiteToPublishTo");}function body_20(chk,ctx){return chk.reference(ctx.get("WwwSiteToPublishTo"),ctx,"h");}function body_21(chk,ctx){return chk.write("<div><label for=\"CustomUIList\">Custom UIs</label>").section(ctx.getPath(false,["CustomUICollection","CollectionContent"]),ctx,{"block":body_22},null).write("</div>");}function body_22(chk,ctx){return chk.write("<div><span><a href=\"../../customui_").reference(ctx.get("Content"),ctx,"h").write("/\">").reference(ctx.get("Content"),ctx,"h").write("</a></span><span></span><span></span></div>");}return body_0;})();