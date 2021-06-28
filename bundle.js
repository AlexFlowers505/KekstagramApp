(()=>{"use strict";const e={methods:{launchTotalSctipt(){t.listeners.assembleAndParseXHRThumbnailDataBlocks.onLoad(),l.listeners.switchOrderMode.onClick(),s.modalViewSettings.listeners.openUploadModal.onUploadInputChange(),s.filtersControl.listeners.effectPinMoveHandler.onMouseActions(),s.filtersControl.listeners.switchingEffectsHandler.onClick(),s.scaleControl.listeners.scaleChange.onClick(),s.validation.listeners.validatePictureUploadForm.onSubmit(),o.listeners.showThumbnailFullscreenBlock.onClick(),o.listeners.showThumbnailFullscreenBlock.onEnter(),o.listeners.closeThumnbailFullscreenBlock.onEsc(),o.listeners.closeThumnbailFullscreenBlock.onCancelBtnClick(),s.validation.listeners.handleFormSend.onSubmit()},anEmptyFn:()=>!1,turnOnBodyModalMode(){document.body.classList.add("modal-open")},turnOffBodyModalMode(){document.body.classList.remove("modal-open")},shuffleArray(e){for(let t=e.length-1;t>=0;t--){let l=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[l],e[l]=o}return e},getRandomNumber:(e,t)=>Math.floor(Math.random()*(t+1-e))+e,getRandomArrayItem:t=>t[e.methods.getRandomNumber(0,t.length-1)],getRandomTextsQuantityString(t,l,o){let s="",n=e.methods.getRandomNumber(l,o);for(let l=0;l<n;l++)s+=` ${e.methods.getRandomArrayItem(t)}`;return s},getElementMiddleX:e=>e.getBoundingClientRect().left+e.getBoundingClientRect().width/2,checkArrayDuplicatesPossesion:e=>new Set(e).size!==e.length}},t={vars:{htmlRefs:{thumbnailTemplate:document.querySelector("#picture"),dynamicThumbnailBlockArrLike:()=>document.querySelectorAll(".picture"),dynamicThumbnailImgArrLike:()=>document.querySelectorAll(".picture__img"),dynamicThumbnailCommentsCounterArrLike:()=>document.querySelectorAll(".picture__comments"),dynamicThumbnailLikesCounterArrLike:()=>document.querySelectorAll(".picture__likes"),thumbnailsBlock:document.querySelector(".pictures")},landingThumbnailsQuantity:25,thumbnailsIndexesRandomized:e.methods.shuffleArray(Array.from(Array(25).keys()))},templateData:{aCommentBlockContainer:{commentatorAvatar:"",commentatorName:"",theComment:""},aThumbnailDataContainer:{url:"",desc:"",likesCounter:"",commentsCounter:"",comments:{}}},mockData:{commentBlock:{theText:["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],commentatorFirstName:["Дима","Гренадир","Палеший","Гурин","Пешкин","Налик","Прикатыр","Нурилий","Бритасий","Пулидий","Никеш"],commentatorLastName:["Ктулин","Причемин","Зилендиусор","Парицарий","Прикайло","Белый","Ожогов","Наглубин","Писерий","Кулибин","Партнекрин"]}},methods:{assembleRandomMockCommentBlock:l=>(Object.assign(l,t.templateData.aCommentBlockContainer),l.commentatorAvatar=`img/avatar-${e.methods.getRandomNumber(1,6)}.svg`,l.commentatorName=`${t.mockData.commentBlock.commentatorFirstName[e.methods.getRandomNumber(0,t.mockData.commentBlock.commentatorFirstName.length-1)]} ${t.mockData.commentBlock.commentatorLastName[e.methods.getRandomNumber(0,t.mockData.commentBlock.commentatorFirstName.length-1)]}`,l.theComment=e.methods.getRandomTextsQuantityString(t.mockData.commentBlock.theText,1,2),l),assembleAMockThumbnailData:l=>(Object.assign(l,t.templateData.aThumbnailDataContainer),l.url=`photos/${t.vars.thumbnailsIndexesRandomized.pop()+1}.jpg`,l.desc="",l.likesCounter=e.methods.getRandomNumber(15,200),l.commentsCounter=e.methods.getRandomNumber(5,10),l.comments={},l),assembleLandingPageMockThumbnailBlocks(){!function(){for(let e=0;e<t.vars.landingThumbnailsQuantity;e++){let e=document.createDocumentFragment();e.appendChild(t.vars.htmlRefs.thumbnailTemplate.content.cloneNode(!0)),t.vars.htmlRefs.thumbnailsBlock.appendChild(e)}}(),function(){for(let e=0;e<t.vars.landingThumbnailsQuantity;e++){let l={};t.methods.assembleAMockThumbnailData(l),t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture__img")[e].src=l.url,t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture__comments")[e].textContent=l.commentsCounter,t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture__likes")[e].textContent=l.likesCounter}}()},removeTheBlocks(){for(let e of t.vars.htmlRefs.dynamicThumbnailBlockArrLike())e.remove()},assembleAndParseXHRThumbnailDataBlocks(e){for(let l of e.response){let e=document.createDocumentFragment();e.appendChild(t.vars.htmlRefs.thumbnailTemplate.content.cloneNode(!0)),t.vars.htmlRefs.thumbnailsBlock.appendChild(e);let o={};Object.assign(o,l);let s=t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture")[t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture__img").length-1];s.querySelector(".picture__img").src=o.url,s.querySelector(".picture__comments").textContent=o.comments.length,s.querySelector(".picture__likes").textContent=o.likes}}},listeners:{assembleAndParseXHRThumbnailDataBlocks:{onLoad(){window.addEventListener("load",(()=>{n.methods.handleXHR("",t.methods.assembleAndParseXHRThumbnailDataBlocks,"GET",n.data.allThumbnailsAndFullscreenViewsDataURL),l.methods.unhideTheblock()}))}}}},l={vars:{htmlRefs:{theBlock:document.querySelector(".img-filters"),btnsArrLike:document.querySelectorAll(".img-filters__button"),defaultBtn:document.querySelector("#filter-default"),randomBtn:document.querySelector("#filter-random"),discussedBtn:document.querySelector("#filter-discussed")}},methods:{unhideTheblock(){l.vars.htmlRefs.theBlock.classList.remove("img-filters--inactive")},switchOrderMode(e){e.target.classList.contains("img-filters__button--active")&&e.target!==l.vars.htmlRefs.randomBtn||(l.vars.htmlRefs.btnsArrLike.forEach((e=>e.classList.remove("img-filters__button--active"))),e.target.classList.add("img-filters__button--active"),t.methods.removeTheBlocks(),e.target===l.vars.htmlRefs.randomBtn?n.methods.handleXHR("",l.methods.switchToRandom,"GET",n.data.allThumbnailsAndFullscreenViewsDataURL):e.target===l.vars.htmlRefs.defaultBtn?n.methods.handleXHR("",t.methods.assembleAndParseXHRThumbnailDataBlocks,"GET",n.data.allThumbnailsAndFullscreenViewsDataURL):e.target===l.vars.htmlRefs.discussedBtn&&n.methods.handleXHR("",l.methods.switchToDiscussed,"GET",n.data.allThumbnailsAndFullscreenViewsDataURL))},switchToRandom(l){const o=e.methods.shuffleArray([...Array(l.response.length).keys()]);for(let e of o){let o=document.createDocumentFragment();o.appendChild(t.vars.htmlRefs.thumbnailTemplate.content.cloneNode(!0)),t.vars.htmlRefs.thumbnailsBlock.appendChild(o);let s={};Object.assign(s,l.response[e]);let n=t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture")[t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture__img").length-1];n.querySelector(".picture__img").src=s.url,n.querySelector(".picture__comments").textContent=s.comments.length,n.querySelector(".picture__likes").textContent=s.likes}},switchToDiscussed(e){let l=[];for(let t of e.response)l.push(t.comments.length-1);l.sort(((e,t)=>t-e)),l=Array.from(new Set(l));for(let o of l)e.response.forEach((e=>{if(e.comments.length===o){let l=document.createDocumentFragment();l.appendChild(t.vars.htmlRefs.thumbnailTemplate.content.cloneNode(!0)),t.vars.htmlRefs.thumbnailsBlock.appendChild(l);let o={};Object.assign(o,e);let s=t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture")[t.vars.htmlRefs.thumbnailsBlock.querySelectorAll(".picture__img").length-1];s.querySelector(".picture__img").src=o.url,s.querySelector(".picture__comments").textContent=o.comments.length,s.querySelector(".picture__likes").textContent=o.likes}}))}},listeners:{switchOrderMode:{onClick(){l.vars.htmlRefs.btnsArrLike.forEach((e=>{e.addEventListener("click",l.methods.switchOrderMode)}))}}}},o={vars:{htmlRefs:{thumbnailFullscreenBlock:document.querySelector(".big-picture"),theImg:document.querySelector(".big-picture__img img"),likesCounter:document.querySelector(".likes-count"),commentsCountBlock:document.querySelector(".social__comment-count"),allCommentsCounter:document.querySelector(".comments-count"),commentsBlock:document.querySelector(".social__comments"),theImgDescription:document.querySelector(".social__caption"),commentsLoaderBtn:document.querySelector(".comments-loader")}},settings:{atOpeningCommentsQnt:5,loadMoreCommentsQnt:3},methods:{addComments(e){let t=e.response.find((e=>e.url===o.vars.htmlRefs.theImg.src.slice(-e.url.length)));for(let e=0;e<o.settings.loadMoreCommentsQnt&&o.vars.htmlRefs.commentsBlock.childElementCount<t.comments.length;e++){let e=t.comments[o.vars.htmlRefs.commentsBlock.childElementCount];!function(){Object.assign({},e);let t=document.createDocumentFragment();t.appendChild(document.createElement("li")),t.querySelector("li").classList.add("social__comment"),t.querySelector(".social__comment").appendChild(document.createElement("img")),t.querySelector("img").classList.add("social__picture"),t.querySelector(".social__picture").alt="Аватар комментатора фотографии",t.querySelector(".social__picture").setAttribute("width",35),t.querySelector(".social__picture").setAttribute("height",35),t.querySelector(".social__comment").appendChild(document.createElement("p")),t.querySelector("p").classList.add("social__text"),o.vars.htmlRefs.commentsBlock.appendChild(t)}(),function(){let t=o.vars.htmlRefs.commentsBlock.querySelectorAll(".social__comment")[o.vars.htmlRefs.commentsBlock.querySelectorAll(".social__comment").length-1];t.querySelector(".social__picture").src=e.avatar,t.querySelector(".social__picture").alt=e.name,t.querySelector(".social__text").textContent=e.message}(),o.vars.htmlRefs.commentsBlock.childElementCount<t.comments.length?o.vars.htmlRefs.commentsLoaderBtn.classList.remove("hidden"):o.vars.htmlRefs.commentsLoaderBtn.classList.add("hidden")}},showThumbnailFullscreenBlock(l,s,r){o.listeners.handleCommentsLoader.onClick(),o.vars.htmlRefs.thumbnailFullscreenBlock.classList.contains("hidden")&&(o.methods.removeComments(),(l.target.classList.contains("picture__img")&&0===l.button||l.target.classList.contains("picture")&&13===l.keyCode)&&(o.vars.htmlRefs.thumbnailFullscreenBlock.classList.remove("hidden"),e.methods.turnOnBodyModalMode(),o.vars.htmlRefs.commentsLoaderBtn.classList.add("hidden"),o.vars.htmlRefs.commentsCountBlock.classList.add("hidden"),o.vars.htmlRefs.theImg.src=t.vars.htmlRefs.dynamicThumbnailImgArrLike()[s].src,o.vars.htmlRefs.likesCounter.textContent=t.vars.htmlRefs.dynamicThumbnailLikesCounterArrLike()[s].textContent,o.vars.htmlRefs.allCommentsCounter.textContent=t.vars.htmlRefs.dynamicThumbnailCommentsCounterArrLike()[s].textContent,r?n.methods.handleXHR("",(function(e){o.vars.htmlRefs.thumbnailFullscreenBlock.querySelector(".social__caption").textContent=e.response[s].description,o.methods.addComments(e)}),"GET",n.data.allThumbnailsAndFullscreenViewsDataURL):(o.vars.htmlRefs.theImgDescription.textContent="Тестим новую камеру!",function(){const e=document.querySelectorAll(".social__comments .social__comment");for(let l=0;l<e.length;l++){let o=[];t.methods.assembleRandomMockCommentBlock(o),e[l].querySelector(".social__picture").src=o.commentatorAvatar,e[l].querySelector(".social__picture").alt=o.commentatorName,e[l].querySelector(".social__text").textContent=o.theComment}}())))},removeComments(){for(;o.vars.htmlRefs.commentsBlock.firstChild;)o.vars.htmlRefs.commentsBlock.firstChild.remove()},closeThumnbailFullscreenBlock(t){(t.target.classList.contains("big-picture__cancel")&&0===t.button||27===t.keyCode)&&(o.vars.htmlRefs.thumbnailFullscreenBlock.classList.add("hidden"),e.methods.turnOffBodyModalMode(),o.methods.removeComments(),o.vars.htmlRefs.theImgDescription.textContent="")}},listeners:{showThumbnailFullscreenBlock:{onClick(){document.body.addEventListener("click",(e=>{o.methods.showThumbnailFullscreenBlock(e,Array.from(t.vars.htmlRefs.dynamicThumbnailImgArrLike()).indexOf(e.target),!0)}))},onEnter(){document.body.addEventListener("keydown",(e=>{o.methods.showThumbnailFullscreenBlock(e,Array.from(t.vars.htmlRefs.dynamicThumbnailImgArrLike()).indexOf(e.target.querySelector(".picture__img")),!0)}))}},closeThumnbailFullscreenBlock:{onEsc(){document.body.addEventListener("keydown",(e=>{o.methods.closeThumnbailFullscreenBlock(e)}))},onCancelBtnClick(){document.body.addEventListener("click",(e=>{o.methods.closeThumnbailFullscreenBlock(e)}))}},handleCommentsLoader:{onClick(){o.vars.htmlRefs.commentsLoaderBtn.addEventListener("click",n.methods.handleXHR("",o.methods.addComments,"GET",n.data.allThumbnailsAndFullscreenViewsDataURL))}}}},s={modalViewSettings:{vars:{htmlRefs:{theBlock:document.querySelector(".img-upload__overlay"),newImgUploadBtn:document.querySelector("#upload-file"),closeModalBtn:document.querySelector("#upload-cancel")}},methods:{openUploadModal(){s.modalViewSettings.vars.htmlRefs.theBlock.classList.remove("hidden"),e.methods.turnOnBodyModalMode()},openAndAllSetloadModal(){s.modalViewSettings.methods.openUploadModal(),s.filtersControl.methods.getAtOpenModalSettings(),s.filtersControl.vars.htmlRefs.effectNoneBtn.dispatchEvent(new Event("click")),s.modalViewSettings.listeners.closeUploadModal()},closeUploadModal(){s.modalViewSettings.vars.htmlRefs.theBlock.classList.add("hidden"),s.validation.vars.htmlRefs.hashField.value="",s.validation.vars.htmlRefs.hashField.style.backgroundColor="",s.validation.vars.htmlRefs.commentField.value="",s.validation.vars.htmlRefs.commentField.style.backgroundColor="",e.methods.turnOffBodyModalMode()}},listeners:{openUploadModal:{onUploadInputChange(){s.modalViewSettings.vars.htmlRefs.newImgUploadBtn.addEventListener("input",(()=>{s.modalViewSettings.methods.openAndAllSetloadModal()}))}},closeUploadModal(){document.body.addEventListener("keydown",(e=>{27!==e.keyCode||document.activeElement.classList.contains("text__description")||document.activeElement.classList.contains("text__hashtags")||(s.modalViewSettings.listeners.openUploadModal.onUploadInputChange(),s.modalViewSettings.methods.closeUploadModal())})),s.modalViewSettings.vars.htmlRefs.closeModalBtn.addEventListener("click",(()=>{s.modalViewSettings.methods.closeUploadModal(),s.modalViewSettings.listeners.openUploadModal.onUploadInputChange()}),{once:!0})}}},filtersControl:{vars:{htmlRefs:{theImg:document.querySelector(".img-upload__preview img"),effectSliderBlock:document.querySelector(".effect-level"),sliderFullBar:document.querySelector(".effect-level__line"),sliderEffectProgressBar:document.querySelector(".effect-level__depth"),sliderPin:document.querySelector(".effect-level__pin "),invisibleEffectValueHolder:document.querySelector(".effect-level__value"),effectsChoiceBtnsArrLike:document.querySelectorAll(".effects__radio"),noEffectChoiceBtn:document.querySelector("#effect-none"),effectNoneBtn:document.querySelector("#effect-none")}},data:{defaultEffectPinPosition:100,filterNametoCSSCorrelation:{chrome:"grayscale()",sepia:"sepia()",marvin:"invert(%)",phobos:"blur(px)",heat:"brightness()"},filterMinValues:{chrome:0,sepia:0,marvin:0,phobos:0,heat:1},filterMaxValues:{chrome:1,sepia:1,marvin:100,phobos:3,heat:3}},methods:{moveProgressBarAlongThePin(){s.filtersControl.vars.htmlRefs.sliderEffectProgressBar.style.width=e.methods.getElementMiddleX(s.filtersControl.vars.htmlRefs.sliderPin)-s.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().left+"px"},getCheckedEffectBtn:()=>s.modalViewSettings.vars.htmlRefs.theBlock.querySelector(".effects__radio:checked"),setNoneEffectChoice(){s.filtersControl.vars.htmlRefs.effectNoneBtn.checked=!0,s.filtersControl.vars.htmlRefs.theImg.style.filter="",s.filtersControl.vars.htmlRefs.effectSliderBlock.classList.add("hidden")},getAtOpenModalSettings(){s.filtersControl.methods.setNoneEffectChoice(),s.scaleControl.methods.doDefaultImgScale(s.scaleControl.data.defaultScale)},getFinalSpecifiedValue:(e,t,l)=>Number((e+(t-e)/100*l).toFixed(1)),setTheFilterEffect(e){if("effect-none"===e.id)s.filtersControl.methods.setNoneEffectChoice();else{let t=s.filtersControl.methods.getFinalSpecifiedValue(s.filtersControl.data.filterMinValues[e.id.slice(7)],s.filtersControl.data.filterMaxValues[e.id.slice(7)],s.filtersControl.methods.getProgressBarProgressPercentage());s.filtersControl.vars.htmlRefs.theImg.style.filter=s.filtersControl.data.filterNametoCSSCorrelation[e.id.slice(7)].replace(/[(]/,`(${t}`)}},getAtSwitchFiltersDefaultSettings(e){s.filtersControl.vars.htmlRefs.invisibleEffectValueHolder.value=s.filtersControl.data.defaultEffectPinPosition,s.filtersControl.vars.htmlRefs.theImg.className="",s.filtersControl.vars.htmlRefs.effectSliderBlock.classList.remove("hidden"),s.filtersControl.vars.htmlRefs.sliderPin.style.left=s.filtersControl.vars.htmlRefs.sliderFullBar.clientWidth+"px",s.filtersControl.methods.moveProgressBarAlongThePin(),"effect-none"===e.target.id?s.filtersControl.methods.setNoneEffectChoice():s.filtersControl.vars.htmlRefs.theImg.classList.add(`effects__preview--${e.target.id.slice(7)}`),s.filtersControl.methods.setTheFilterEffect(e.target)},getProgressBarProgressPercentage(){let t=s.filtersControl.vars.htmlRefs.sliderFullBar.clientWidth,l=e.methods.getElementMiddleX(s.filtersControl.vars.htmlRefs.sliderPin)-s.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().left;return Math.floor(l/(t/100))}},listeners:{switchingEffectsHandler:{onClick(){s.filtersControl.vars.htmlRefs.effectsChoiceBtnsArrLike.forEach((e=>{e.addEventListener("click",(e=>{s.filtersControl.methods.getAtSwitchFiltersDefaultSettings(e)}))}))}},effectPinMoveHandler:{onMouseActions(){s.filtersControl.vars.htmlRefs.sliderPin.addEventListener("mousedown",(t=>{t.preventDefault();const l={x:e.methods.getElementMiddleX(s.filtersControl.vars.htmlRefs.sliderPin)};let o=!1;const n=e=>{if(e.preventDefault(),o=!0,e.clientX>=s.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().left&&e.clientX<=s.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().right){const t={x:l.x-e.clientX};l.x=e.clientX,s.filtersControl.vars.htmlRefs.sliderPin.style.left=s.filtersControl.vars.htmlRefs.sliderPin.offsetLeft-t.x+"px",s.filtersControl.methods.moveProgressBarAlongThePin(),s.filtersControl.methods.setTheFilterEffect(s.filtersControl.methods.getCheckedEffectBtn())}},r=e=>{e.preventDefault(),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r);const t=e=>{e.preventDefault(),s.filtersControl.vars.htmlRefs.sliderPin.removeEventListener("click",t)};o&&s.filtersControl.vars.htmlRefs.sliderPin.addEventListener("click",t)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",r)}))}}}},scaleControl:{vars:{htmlRefs:{scaleControlBlock:document.querySelector(".scale"),scaleValueHolder:document.querySelector(".scale__control--value"),scaleDownBtn:document.querySelector(".scale__control--smaller"),scaleUpBtn:document.querySelector(".scale__control--bigger"),scaleBtnsArrLike:document.querySelectorAll("button.scale__control")}},data:{defaultScale:1},methods:{doDefaultImgScale(e=1){s.scaleControl.vars.htmlRefs.scaleValueHolder.value=100*e+"%",s.filtersControl.vars.htmlRefs.theImg.style.scale=e},handleScaleChangeAttempt(e){e.target===s.scaleControl.vars.htmlRefs.scaleUpBtn&&Number(s.filtersControl.vars.htmlRefs.theImg.style.scale)<1?s.filtersControl.vars.htmlRefs.theImg.style.scale=Number(s.filtersControl.vars.htmlRefs.theImg.style.scale)+.25:e.target===s.scaleControl.vars.htmlRefs.scaleDownBtn&&Number(s.filtersControl.vars.htmlRefs.theImg.style.scale)>.25&&(s.filtersControl.vars.htmlRefs.theImg.style.scale=Number(s.filtersControl.vars.htmlRefs.theImg.style.scale)-.25),s.scaleControl.vars.htmlRefs.scaleValueHolder.value=100*Number(s.filtersControl.vars.htmlRefs.theImg.style.scale)+"%"}},listeners:{scaleChange:{onClick(){s.scaleControl.vars.htmlRefs.scaleBtnsArrLike.forEach((e=>{e.addEventListener("click",(e=>{s.scaleControl.methods.handleScaleChangeAttempt(e)}))}))}}}},validation:{vars:{htmlRefs:{uploadForm:document.querySelector(".img-upload__form"),hashField:document.querySelector(".text__hashtags"),commentField:document.querySelector(".text__description"),submitBtn:document.querySelector(".img-upload__submit"),successUploadMessageTemplate:document.querySelector("#success"),errorUploadMessageTemplate:document.querySelector("#error"),errorUploadCloseModalBtn:document.querySelector(".error__button")}},methods:{getGivenTagsArray:()=>s.validation.vars.htmlRefs.hashField.value.toLowerCase().split(" "),validateHashField(t){let l=s.validation.vars.htmlRefs.hashField;l.style.backgroundColor="LightPink",""===l.value?(l.setCustomValidity(""),l.style.backgroundColor=""):/^#.*/.test(t)?/^#$/.test(t)?l.setCustomValidity('Хэштеги не могут состоять из одиночного "#"'):/^#[a-zA-Z0-9]+$/.test(t)?/^#[a-zA-Z0-9]{1,19}$/.test(t)?e.methods.checkArrayDuplicatesPossesion(s.validation.methods.getGivenTagsArray())?l.setCustomValidity("Хэштеги не должны повторяться"):s.validation.methods.getGivenTagsArray().length>5?l.setCustomValidity("Должно быть не более 5 хэштегов"):(l.setCustomValidity(""),l.style.backgroundColor=""):l.setCustomValidity("длина хэштега не должна превышать 20 символов"):l.setCustomValidity("Хэштеги должны состоять из букв / цифр латинского алфавита и разделяться пробелами"):l.setCustomValidity('Хэштеги должны начинаться с символа "#"'),l.reportValidity()},validateCommentField(){let e=s.validation.vars.htmlRefs.commentField;e.value.length>140?(e.setCustomValidity("Длина комментария не должна превышать 140 симловов"),e.style.backgroundColor="LightPink"):(e.setCustomValidity(""),e.style.backgroundColor="")},xhrHandleFormSend(e){!function(){let t="no error";switch(e.status){case 200:break;case 400:t="Неверный запрос";break;case 401:t="Пользователь не авторизован";break;case 404:t="Ничего не найдено";break;default:t=`Cтатус ответа: ${e.status} ${e.statusText}`}s.modalViewSettings.methods.closeUploadModal(),"no error"===t?(function(){let e=document.createDocumentFragment();e.appendChild(s.validation.vars.htmlRefs.successUploadMessageTemplate.content.cloneNode(!0)),document.querySelector("main").appendChild(e)}(),s.validation.listeners.successModalClose.onBtnClick(),s.validation.listeners.successModalClose.onEsc(),s.validation.listeners.successModalClose.onOutsideClick()):(function(){let e=document.createDocumentFragment();e.appendChild(s.validation.vars.htmlRefs.errorUploadMessageTemplate.content.cloneNode(!0)),document.querySelector("main").appendChild(e)}(),s.validation.listeners.errorModalClose.onBtnClick(),s.validation.listeners.errorModalClose.onEsc(),s.validation.listeners.errorModalClose.onOutsideClick())}()},removeElement(e){document.querySelector(e).remove()},handleErrorModalClose(e){27!==e.keyCode&&e.target!==document.querySelector(".error__button")&&Array.from(document.querySelector(".error").querySelectorAll("*")).includes(e.target)||(document.body.removeEventListener("keydown",s.validation.methods.handleErrorModalClose),document.body.removeEventListener("click",s.validation.methods.handleErrorModalClose),document.querySelector(".error__button").removeEventListener("click",s.validation.methods.handleErrorModalClose),e.target===document.querySelector(".error__button")&&s.modalViewSettings.vars.htmlRefs.newImgUploadBtn.click(),s.validation.methods.removeElement(".error"))},handleSuccessModalClose(e){27!==e.keyCode&&e.target!==document.querySelector(".success__button")&&Array.from(document.querySelector(".success").querySelectorAll("*")).includes(e.target)||(document.body.removeEventListener("keydown",s.validation.methods.handleSuccessModalClose),document.body.removeEventListener("click",s.validation.methods.handleSuccessModalClose),document.querySelector(".success__button").removeEventListener("click",s.validation.methods.handleSuccessModalClose),s.validation.methods.removeElement(".success"))}},listeners:{validatePictureUploadForm:{onSubmit(){s.validation.vars.htmlRefs.submitBtn.addEventListener("click",(()=>{s.validation.methods.getGivenTagsArray().forEach((e=>{s.validation.methods.validateHashField(e),s.validation.methods.validateCommentField()}))}))}},handleFormSend:{onSubmit(){s.validation.vars.htmlRefs.uploadForm.addEventListener("submit",(e=>{e.preventDefault(),n.methods.handleXHR(new FormData(s.validation.vars.htmlRefs.uploadForm),s.validation.methods.xhrHandleFormSend,"POST",n.data.picturePostURL)}))}},errorModalClose:{onEsc(){document.body.addEventListener("keydown",s.validation.methods.handleErrorModalClose)},onOutsideClick(){document.body.addEventListener("click",s.validation.methods.handleErrorModalClose)},onBtnClick(){document.querySelector(".error__button").addEventListener("click",s.validation.methods.handleErrorModalClose)}},successModalClose:{onEsc(){document.body.addEventListener("keydown",s.validation.methods.handleSuccessModalClose)},onOutsideClick(){document.body.addEventListener("click",s.validation.methods.handleSuccessModalClose)},onBtnClick(){document.querySelector(".success__button").addEventListener("click",s.validation.methods.handleSuccessModalClose)}}}}},n={data:{allThumbnailsAndFullscreenViewsDataURL:"https://21.javascript.pages.academy/kekstagram/data",picturePostURL:"https://21.javascript.pages.academy/kekstagram"},methods:{handleXHR(e,t,l,o){let s=new XMLHttpRequest;s.responseType="json",s.open(`${l}`,o),s.onload=function(){t(s)},s.send(e)}}};e.methods.launchTotalSctipt()})();