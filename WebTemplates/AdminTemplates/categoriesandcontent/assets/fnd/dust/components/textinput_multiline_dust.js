(function(){dust.register("textinput_multiline.dust",body_0);function body_0(chk,ctx){return chk.write("<div><label for=\"").reference(ctx.get("field_id"),ctx,"h").write("\">").reference(ctx.get("field_label"),ctx,"h").write("</label><div><textarea ").exists(ctx.get("preprocess_function"),ctx,{"block":body_1},null).write(" name=\"").exists(ctx.get("field_name"),ctx,{"block":body_2},null).write("\" id=\"").reference(ctx.get("field_id"),ctx,"h").write("\" ").exists(ctx.get("rows"),ctx,{"block":body_3},null).write(">").exists(ctx.get("field_value"),ctx,{"block":body_4},null).write("</textarea></div></div>");}function body_1(chk,ctx){return chk.write("class=\"oippreprocess\" data-preprocessor=\"").reference(ctx.get("preprocess_function"),ctx,"h").write("\"");}function body_2(chk,ctx){return chk.reference(ctx.get("field_name"),ctx,"h");}function body_3(chk,ctx){return chk.write("rows=\"").reference(ctx.get("rows"),ctx,"h").write("\"");}function body_4(chk,ctx){return chk.reference(ctx.get("field_value"),ctx,"h");}return body_0;})();