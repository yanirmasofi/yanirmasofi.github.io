﻿window.globalProvideData('slide', '{"title":"Refleksi 1","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":40,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"5l1ge2lmvXc","lmsId":"Slide40","width":1280,"height":720,"resume":true,"background":{"type":"swf","imagedata":{"assetId":237,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6eJrqdZlanQ","variables":[{"kind":"variable","name":"6eJrqdZlanQ_5mrpN9KIOhV_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eJrqdZlanQ_5mrpN9KIOhV_showing","type":"boolean","value":true,"resume":true},{"kind":"variable","name":"6eJrqdZlanQ_5VNsIO2MBJu_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eJrqdZlanQ_5VNsIO2MBJu_6eJrqdZlanQ_5VNsIO2MBJu_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eJrqdZlanQ_5VNsIO2MBJu_6OdKlQVc4vd_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eJrqdZlanQ_5VNsIO2MBJu_showing","type":"boolean","value":true,"resume":true},{"kind":"variable","name":"6eJrqdZlanQ_6UmQBOMteIR_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eJrqdZlanQ_6UmQBOMteIR_6eJrqdZlanQ_6UmQBOMteIR_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eJrqdZlanQ_6UmQBOMteIR_6qkwoAmvwqL_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eJrqdZlanQ_6UmQBOMteIR_showing","type":"boolean","value":true,"resume":true}],"actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5lUM9pvfNbL.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5j1RajBuGgJ"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5WIqpa1wB2R.InvalidPromptSlide"}}]}]},"ReviewInt_6dMVCsbXt23":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5lUM9pvfNbL"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6dMVCsbXt23":{"kind":"actiongroup","actions":[]},"AnsweredInt_6dMVCsbXt23":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6dMVCsbXt23"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6dMVCsbXt23":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5lUM9pvfNbL"},"enabled":{"type":"boolean","value":false}}]},"6dMVCsbXt23_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5j1RajBuGgJ.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6dMVCsbXt23"}]}]},"NavigationRestrictionNextSlide_6eJrqdZlanQ":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5qZfn1btiRx"}}]},"NavigationRestrictionPreviousSlide_6eJrqdZlanQ":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5WIqpa1wB2R","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5WIqpa1wB2R","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"6dMVCsbXt23_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6dMVCsbXt23","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5qZfn1btiRx"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6dMVCsbXt23","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5qZfn1btiRx"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6eJrqdZlanQ"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6eJrqdZlanQ"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":238,"id":"6fBQcy7gR6x"},{"kind":"audio","assetId":239,"id":"6U8LoAp37FY"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":122093,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lJoXkwCvIH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DLTPjS5mue"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5mrpN9KIOhV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VNsIO2MBJu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5lUM9pvfNbL"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Pnalgyk0wg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RHIwGQ2XHI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UmQBOMteIR"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":40,"id":"01","url":"story_content/5jP7Jcm09gF.png","type":"normal","altText":"6.png","width":1280,"height":720,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-40,"yPos":88,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":672,"rotateYPos":256,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1344,"bottom":512,"altText":"6.png","pngfb":false,"pr":{"l":"Lib","i":39}},"html5data":{"xPos":0,"yPos":0,"width":1344,"height":512,"strokewidth":0}},"width":1344,"height":512,"resume":true,"useHandCursor":true,"id":"6lJoXkwCvIH"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":41,"id":"01","url":"story_content/6asz1U7KMBd_P_254_26_800_693.png","type":"normal","altText":"8.png","width":800,"height":693,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":80,"yPos":16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":160,"rotateYPos":104,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":320,"bottom":208,"altText":"8.png","pngfb":false,"pr":{"l":"Lib","i":40}},"html5data":{"xPos":0,"yPos":0,"width":320,"height":208,"strokewidth":0}},"width":320,"height":208,"resume":true,"useHandCursor":true,"id":"6DLTPjS5mue"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":232,"id":"01","url":"story_content/6FJCHvKjFAH_P_96_64_1080_224.png","type":"normal","altText":"42.png","width":1080,"height":224,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":136,"yPos":96,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":193,"bottom":40,"altText":"42.png","pngfb":false,"pr":{"l":"Lib","i":216}},"html5data":{"xPos":0,"yPos":0,"width":193,"height":40,"strokewidth":0}},"states":[{"kind":"state","name":"ref 2","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-39,"top":-8,"right":232,"bottom":48,"altText":"42.png","pngfb":false,"pr":{"l":"Lib","i":217}},"html5data":{"xPos":-39,"yPos":-8,"width":271,"height":56,"strokewidth":0}}}],"width":193,"height":40,"resume":true,"useHandCursor":true,"id":"5mrpN9KIOhV","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6eJrqdZlanQ_5mrpN9KIOhV_showing","operator":"set","value":{"type":"property","value":"_this.$OnStage"}},{"kind":"store_resume_data","objRef":"_this","varref":"_parent.6eJrqdZlanQ_5mrpN9KIOhV_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.#_state","typea":"var","valueb":"ref 2","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}],"elseActions":[{"kind":"adjustvar","variable":"_this._state","operator":"set","value":{"type":"string","value":"ref 2"}},{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"ref 2"},"objRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6fBQcy7gR6x"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6fBQcy7gR6x"}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_this","varref":"_parent.6eJrqdZlanQ_5mrpN9KIOhV_resume","limited":false},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6eJrqdZlanQ_5mrpN9KIOhV_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6fBQcy7gR6x"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6fBQcy7gR6x"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":43,"id":"01","url":"story_content/6eNBY5IUtWy.png","type":"normal","altText":"11.png","width":192,"height":192,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":48,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":96,"bottom":96,"altText":"11.png","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":96,"height":96,"strokewidth":0}},"states":[{"kind":"state","name":"home 2","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":96,"bottom":96,"altText":"11.png","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":96,"height":96,"strokewidth":0}}}],"width":96,"height":96,"resume":true,"useHandCursor":true,"id":"5VNsIO2MBJu"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":44,"id":"01","url":"story_content/6FWUee3B6a9.png","type":"normal","altText":"12.png","width":192,"height":192,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":48,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":96,"bottom":96,"altText":"12.png","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":96,"height":96,"strokewidth":0}},"width":96,"height":96,"resume":true,"useHandCursor":true,"id":"6OdKlQVc4vd"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"5VNsIO2MBJu"}}],"clickdef":[{"kind":"objref","type":"string","value":"5VNsIO2MBJu"},{"kind":"objref","type":"string","value":"6OdKlQVc4vd"}]},{"kind":"state","name":"home 2","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"home 2"},"objRef":{"type":"string","value":"5VNsIO2MBJu"}}],"clickdef":[{"kind":"objref","type":"string","value":"5VNsIO2MBJu"},{"kind":"objref","type":"string","value":"6OdKlQVc4vd"}]}],"shapemaskId":"","xPos":40,"yPos":600,"tabIndex":10,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":48,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"width":96,"height":96,"resume":true,"useHandCursor":true,"id":"5VNsIO2MBJu","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"home 2","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"5VNsIO2MBJu.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6OdKlQVc4vd"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6OdKlQVc4vd"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VNsIO2MBJu"}}]}},"events":[{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6eJrqdZlanQ_5VNsIO2MBJu_showing","operator":"set","value":{"type":"property","value":"5VNsIO2MBJu.$OnStage"}},{"kind":"store_resume_data","objRef":"_this","varref":"_parent.6eJrqdZlanQ_5VNsIO2MBJu_resume"},{"kind":"store_resume_data","objRef":"5VNsIO2MBJu","varref":"_parent.6eJrqdZlanQ_5VNsIO2MBJu_6eJrqdZlanQ_5VNsIO2MBJu_resume"},{"kind":"store_resume_data","objRef":"6OdKlQVc4vd","varref":"_parent.6eJrqdZlanQ_5VNsIO2MBJu_6OdKlQVc4vd_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.#_state","typea":"var","valueb":"home 2","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}],"elseActions":[{"kind":"adjustvar","variable":"_this._state","operator":"set","value":{"type":"string","value":"home 2"}},{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"home 2"},"objRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_this","varref":"_parent.6eJrqdZlanQ_5VNsIO2MBJu_resume","limited":false},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"restore_resume_state","objRef":"5VNsIO2MBJu","varref":"_parent.6eJrqdZlanQ_5VNsIO2MBJu_6eJrqdZlanQ_5VNsIO2MBJu_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6eJrqdZlanQ_5VNsIO2MBJu_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5VNsIO2MBJu"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VNsIO2MBJu"}}]},{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}}]},{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5YN9N5BytnD.6KfvHNpSBHE"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"textinput","bindto":"_player.TextEntry","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":5000,"placeholder":"type your text here","fontsize":33,"textcolor":"0x000000","bold":false,"italic":false,"font":"Arial Narrow Charset0_vB1AE0C27","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":152,"yPos":344,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":483.5,"rotateYPos":107.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5lUM9pvfNbL","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":948,"height":216,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":583,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":221}}},"html5data":{"xPos":0,"yPos":0,"width":968,"height":216,"strokewidth":1}},"width":968,"height":216,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":969,"bottom":217,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":220}}},"id":"5lUM9pvfNbL","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Pnalgyk0wg_115055295","id":"01","linkId":"txt__default_6Pnalgyk0wg","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":948,"height":74,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Bagaimana perasaanmu setelah mempelajari materi sujud melalui MPI PINTTER?","style":{"fontFamily":"\\"Arial Narrow Charset0_vB1AE0C27\\",\\"Arial Narrow\\",\\"Arial\\"","fontSize":24,"ascent":29.5,"descent":6.734,"leading":0.484,"underlinePosition":-3.391,"underlineThickness":2.344,"xHeight":16.594}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":74,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":903,"bottom":79,"pngfb":false,"pr":{"l":"Lib","i":223}}}],"shapemaskId":"","xPos":152,"yPos":240,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":484,"rotateYPos":42,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":968,"bottom":84,"altText":"Bagaimana perasaanmu setelah mempelajari materi sujud melalui MPI PINTTER?","pngfb":false,"pr":{"l":"Lib","i":222}},"html5data":{"xPos":0,"yPos":0,"width":968,"height":84,"strokewidth":0}},"width":968,"height":84,"resume":true,"useHandCursor":true,"id":"6Pnalgyk0wg"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5zERASB2AcS_1641598850","id":"01","linkId":"txt__default_6RHIwGQ2XHI","type":"acctext","xPos":4,"yPos":2,"xAccOffset":60,"yAccOffset":2,"width":304,"height":60,"valign":"center","wordwrap":true,"textshadow":true,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"KIRIM JAWABAN","style":{"fontFamily":"\\"Avocado CreamyBold BoldA14742A5\\",\\"Avocado Creamy\\"","fontSize":36,"ascent":46.219,"descent":8.836,"leading":0.164,"underlinePosition":-5.086,"underlineThickness":3.516,"xHeight":33.305}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":13,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":24.889,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"shadow":{"offsetX":0.8,"offsetY":0.8,"color":"#969696"},"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":340,"bottom":60,"pngfb":false,"pr":{"l":"Lib","i":194}}}],"shapemaskId":"","xPos":480,"yPos":536,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":184,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":191}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":191}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":370,"bottom":66,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":192}},"html5data":{"xPos":-3,"yPos":-3,"width":373,"height":69,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":191}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":191}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":370,"bottom":66,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":192}},"html5data":{"xPos":-3,"yPos":-3,"width":373,"height":69,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":193}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":191}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":370,"bottom":66,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":192}},"html5data":{"xPos":-3,"yPos":-3,"width":373,"height":69,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":193}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":368,"bottom":64,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":191}},"html5data":{"xPos":-1,"yPos":-1,"width":369,"height":65,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":370,"bottom":66,"altText":"KIRIM JAWABAN","pngfb":false,"pr":{"l":"Lib","i":192}},"html5data":{"xPos":-3,"yPos":-3,"width":373,"height":69,"strokewidth":3}}}],"width":368,"height":64,"resume":true,"useHandCursor":true,"id":"6RHIwGQ2XHI","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"_parent.5lUM9pvfNbL.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5j1RajBuGgJ"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5WIqpa1wB2R.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":47,"id":"01","url":"story_content/6EYx1BlcLFF.png","type":"normal","altText":"11.png","width":192,"height":192,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":48,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":96,"bottom":96,"altText":"11.png","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":96,"height":96,"strokewidth":0}},"states":[{"kind":"state","name":"next 2","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":96,"bottom":96,"altText":"11.png","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":96,"height":96,"strokewidth":0}}}],"width":96,"height":96,"resume":true,"useHandCursor":true,"id":"6UmQBOMteIR"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":48,"id":"01","url":"story_content/5VciEzxsq7n.png","type":"normal","altText":"14.png","width":192,"height":192,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":48,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":96,"bottom":96,"altText":"14.png","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":96,"height":96,"strokewidth":0}},"width":96,"height":96,"resume":true,"useHandCursor":true,"id":"6qkwoAmvwqL"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6UmQBOMteIR"}}],"clickdef":[{"kind":"objref","type":"string","value":"6UmQBOMteIR"},{"kind":"objref","type":"string","value":"6qkwoAmvwqL"}]},{"kind":"state","name":"next 2","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"next 2"},"objRef":{"type":"string","value":"6UmQBOMteIR"}}],"clickdef":[{"kind":"objref","type":"string","value":"6UmQBOMteIR"},{"kind":"objref","type":"string","value":"6qkwoAmvwqL"}]}],"shapemaskId":"","xPos":1136,"yPos":608,"tabIndex":11,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":48,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":8,"scrolling":true,"shuffleLock":false,"width":96,"height":96,"resume":true,"useHandCursor":true,"id":"6UmQBOMteIR","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"next 2","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6UmQBOMteIR.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qkwoAmvwqL"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6qkwoAmvwqL"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UmQBOMteIR"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5YN9N5BytnD.5qZfn1btiRx"}}]},{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6eJrqdZlanQ_6UmQBOMteIR_showing","operator":"set","value":{"type":"property","value":"6UmQBOMteIR.$OnStage"}},{"kind":"store_resume_data","objRef":"_this","varref":"_parent.6eJrqdZlanQ_6UmQBOMteIR_resume"},{"kind":"store_resume_data","objRef":"6UmQBOMteIR","varref":"_parent.6eJrqdZlanQ_6UmQBOMteIR_6eJrqdZlanQ_6UmQBOMteIR_resume"},{"kind":"store_resume_data","objRef":"6qkwoAmvwqL","varref":"_parent.6eJrqdZlanQ_6UmQBOMteIR_6qkwoAmvwqL_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.#_state","typea":"var","valueb":"next 2","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}],"elseActions":[{"kind":"adjustvar","variable":"_this._state","operator":"set","value":{"type":"string","value":"next 2"}},{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"next 2"},"objRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_this","varref":"_parent.6eJrqdZlanQ_6UmQBOMteIR_resume","limited":false},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"restore_resume_state","objRef":"6UmQBOMteIR","varref":"_parent.6eJrqdZlanQ_6UmQBOMteIR_6eJrqdZlanQ_6UmQBOMteIR_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6eJrqdZlanQ_6UmQBOMteIR_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6UmQBOMteIR"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UmQBOMteIR"}}]},{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6U8LoAp37FY"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"5l1ge2lmvXc","duration":1000,"hidetextatstart":true,"animateshapewithtext":false,"pushdirection":"up","tweens":[{"kind":"tween","time":0,"duration":1000,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"0","y":"720","dx":"0","dy":"0"},"anchorb":{"x":"0","y":"0","dx":"0","dy":"0"}}],"duration":1000,"easing":"exponetial","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');