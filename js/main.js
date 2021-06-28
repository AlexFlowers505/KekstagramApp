'use strict';

const utils = {
  methods: {
    launchTotalSctipt() {
      // landingThumbnailsPhotos.methods.assembleLandingPageMockThumbnailBlocks();
      landingThumbnailsPhotos.listeners.assembleAndParseXHRThumbnailDataBlocks.onLoad();
      thumbnailsOrderControlBlock.listeners.switchOrderMode.onClick();
      pictureUpload.modalViewSettings.listeners.openUploadModal.onUploadInputChange();
      pictureUpload.filtersControl.listeners.effectPinMoveHandler.onMouseActions();
      pictureUpload.filtersControl.listeners.switchingEffectsHandler.onClick();
      pictureUpload.scaleControl.listeners.scaleChange.onClick();
      pictureUpload.validation.listeners.validatePictureUploadForm.onSubmit();
      pictureUpload.validation.listeners.valiedateImgProps.onUploadInputChange();
      pictureUpload.validation.listeners.handleFormSend.onSubmit();
      thumbnailFullscreen.listeners.showThumbnailFullscreenBlock.onClick();
      thumbnailFullscreen.listeners.showThumbnailFullscreenBlock.onEnter();
      thumbnailFullscreen.listeners.closeThumnbailFullscreenBlock.onEsc();
      thumbnailFullscreen.listeners.closeThumnbailFullscreenBlock.onCancelBtnClick();
      thumbnailFullscreen.listeners.handleCommentsLoader.onClick();
    },
    throttle(cb, lagMillisec) {
      let prevCallTime = 0;
      return (...args) => {
        let currCallTime = new Date().getTime();
        if (currCallTime - prevCallTime > lagMillisec) {
          prevCallTime = currCallTime;
          return cb(...args);
        }
        return true;
      };
    },
    anEmptyFn() {
      return false;
    },
    turnOnBodyModalMode() {
      document.body.classList.add(`modal-open`);
    },
    turnOffBodyModalMode() {
      document.body.classList.remove(`modal-open`);
    },
    shuffleArray(arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * ((max + 1) - min)) + min;
    },
    getRandomArrayItem(array) {
      return array[utils.methods.getRandomNumber(0, array.length - 1)];
    },
    getRandomTextsQuantityString(textsArray, minQnt, maxQnt) {
      let theString = ``;
      let theQuantity = utils.methods.getRandomNumber(minQnt, maxQnt);
      for (let i = 0; i < theQuantity; i++) {
        theString += ` ${utils.methods.getRandomArrayItem(textsArray)}`;
      }
      return theString;
    },
    getElementMiddleX(elm) {
      return elm.getBoundingClientRect().left + elm.getBoundingClientRect().width / 2;
    },
    checkArrayDuplicatesPossesion(array) {
      return new Set(array).size !== array.length;
    }
  },
};
const landingThumbnailsPhotos = {
  vars: {
    htmlRefs: {
      thumbnailTemplate: document.querySelector(`#picture`),
      dynamicThumbnailBlockArrLike() {
        return document.querySelectorAll(`.picture`);
      },
      dynamicThumbnailImgArrLike() {
        return document.querySelectorAll(`.picture__img`);
      },
      dynamicThumbnailCommentsCounterArrLike() {
        return document.querySelectorAll(`.picture__comments`);
      },
      dynamicThumbnailLikesCounterArrLike() {
        return document.querySelectorAll(`.picture__likes`);
      },
      thumbnailsBlock: document.querySelector(`.pictures`)
    },
    landingThumbnailsQuantity: 25,
    thumbnailsIndexesRandomized: utils.methods.shuffleArray(Array.from(Array(25).keys()))
  },
  templateData: {
    aCommentBlockContainer: {
      commentatorAvatar: ``,
      commentatorName: ``,
      theComment: ``
    },
    aThumbnailDataContainer: {
      url: ``,
      desc: ``,
      likesCounter: ``,
      commentsCounter: ``,
      comments: {}
    }
  },
  mockData: {
    commentBlock: {
      theText: [
        `Всё отлично!`,
        `В целом всё неплохо. Но не всё.`,
        `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
        `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
        `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
        `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
      ],
      commentatorFirstName: [
        `Дима`,
        `Гренадир`,
        `Палеший`,
        `Гурин`,
        `Пешкин`,
        `Налик`,
        `Прикатыр`,
        `Нурилий`,
        `Бритасий`,
        `Пулидий`,
        `Никеш`
      ],
      commentatorLastName: [
        `Ктулин`,
        `Причемин`,
        `Зилендиусор`,
        `Парицарий`,
        `Прикайло`,
        `Белый`,
        `Ожогов`,
        `Наглубин`,
        `Писерий`,
        `Кулибин`,
        `Партнекрин`
      ]
    }
  },
  methods: {
    assembleRandomMockCommentBlock(aCommentBlockContainer) {
      Object.assign(aCommentBlockContainer, landingThumbnailsPhotos.templateData.aCommentBlockContainer);
      aCommentBlockContainer.commentatorAvatar = `img/avatar-${utils.methods.getRandomNumber(1, 6)}.svg`;
      aCommentBlockContainer.commentatorName = `${landingThumbnailsPhotos.mockData.commentBlock.commentatorFirstName[utils.methods.getRandomNumber(0, landingThumbnailsPhotos.mockData.commentBlock.commentatorFirstName.length - 1)]} ${landingThumbnailsPhotos.mockData.commentBlock.commentatorLastName[utils.methods.getRandomNumber(0, landingThumbnailsPhotos.mockData.commentBlock.commentatorFirstName.length - 1)]}`;
      aCommentBlockContainer.theComment = utils.methods.getRandomTextsQuantityString(landingThumbnailsPhotos.mockData.commentBlock.theText, 1, 2);
      return aCommentBlockContainer;
    },
    assembleAMockThumbnailData(aThumbnailDataContainer) {
      const getThumbnailArrayLastIndex = () => {
        return landingThumbnailsPhotos.vars.thumbnailsIndexesRandomized.pop();
      };
      Object.assign(aThumbnailDataContainer, landingThumbnailsPhotos.templateData.aThumbnailDataContainer);
      aThumbnailDataContainer.url = `photos/${getThumbnailArrayLastIndex() + 1}.jpg`;
      aThumbnailDataContainer.desc = ``;
      aThumbnailDataContainer.likesCounter = utils.methods.getRandomNumber(15, 200);
      aThumbnailDataContainer.commentsCounter = utils.methods.getRandomNumber(5, 10);
      aThumbnailDataContainer.comments = {};
      return aThumbnailDataContainer;
    },
    assembleLandingPageMockThumbnailBlocks() {
      (function appendEmptyThumbnailFragment() {
        for (let i = 0; i < landingThumbnailsPhotos.vars.landingThumbnailsQuantity; i++) {
          let thumbnailBlockFragment = document.createDocumentFragment();
          thumbnailBlockFragment.appendChild(landingThumbnailsPhotos.vars.htmlRefs.thumbnailTemplate.content.cloneNode(true));
          landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.appendChild(thumbnailBlockFragment);
        }
      })();
      (function insertMockThumbnailData() {
        for (let i = 0; i < landingThumbnailsPhotos.vars.landingThumbnailsQuantity; i++) {
          let mockDiv = {};
          landingThumbnailsPhotos.methods.assembleAMockThumbnailData(mockDiv);
          landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture__img`)[i].src = mockDiv.url;
          landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture__comments`)[i].textContent = mockDiv.commentsCounter;
          landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture__likes`)[i].textContent = mockDiv.likesCounter;
        }
      })();
    },
    removeTheBlocks() {
      for (let block of landingThumbnailsPhotos.vars.htmlRefs.dynamicThumbnailBlockArrLike()) {
        block.remove();
      }
    },
    assembleAndParseXHRThumbnailDataBlocks(dataObjectsArray) {
      for (let aThumbnailData of dataObjectsArray.response) {
        let thumbnailBlockFragment = document.createDocumentFragment();
        thumbnailBlockFragment.appendChild(landingThumbnailsPhotos.vars.htmlRefs.thumbnailTemplate.content.cloneNode(true));
        landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.appendChild(thumbnailBlockFragment);

        let aThumbnailDataContainer = {};
        Object.assign(aThumbnailDataContainer, aThumbnailData);

        let thumbnailsArrLastElm = landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture`)[landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture__img`).length - 1];
        thumbnailsArrLastElm.querySelector(`.picture__img`).src = aThumbnailDataContainer.url;
        thumbnailsArrLastElm.querySelector(`.picture__comments`).textContent = aThumbnailDataContainer.comments.length;
        thumbnailsArrLastElm.querySelector(`.picture__likes`).textContent = aThumbnailDataContainer.likes;
      }
    }
  },
  listeners: {
    assembleAndParseXHRThumbnailDataBlocks: {
      onLoad() {
        window.addEventListener(`load`, () => {
          xhr.methods.handleXHR(``, landingThumbnailsPhotos.methods.assembleAndParseXHRThumbnailDataBlocks, `GET`, xhr.data.allThumbnailsAndFullscreenViewsDataURL);
          thumbnailsOrderControlBlock.methods.unhideTheblock();
        });
      }
    }
  }
};
const thumbnailsOrderControlBlock = {
  vars: {
    htmlRefs: {
      theBlock: document.querySelector(`.img-filters`),
      btnsArrLike: document.querySelectorAll(`.img-filters__button`),
      defaultBtn: document.querySelector(`#filter-default`),
      randomBtn: document.querySelector(`#filter-random`),
      discussedBtn: document.querySelector(`#filter-discussed`)
    }
  },
  methods: {
    unhideTheblock() {
      thumbnailsOrderControlBlock.vars.htmlRefs.theBlock.classList.remove(`img-filters--inactive`);
    },
    switchOrderMode(anEvt) {
      if (!anEvt.target.classList.contains(`img-filters__button--active`) ||
           anEvt.target === thumbnailsOrderControlBlock.vars.htmlRefs.randomBtn) {
        (function switchBtnActive() {
          thumbnailsOrderControlBlock.vars.htmlRefs.btnsArrLike.forEach((btn) => btn.classList.remove(`img-filters__button--active`));
          anEvt.target.classList.add(`img-filters__button--active`);
        })();
        landingThumbnailsPhotos.methods.removeTheBlocks();
        (function applyOrder() {
          if (anEvt.target === thumbnailsOrderControlBlock.vars.htmlRefs.randomBtn) {
            xhr.methods.handleXHR(``, thumbnailsOrderControlBlock.methods.switchToRandom, `GET`, xhr.data.allThumbnailsAndFullscreenViewsDataURL);
          } else if (anEvt.target === thumbnailsOrderControlBlock.vars.htmlRefs.defaultBtn) {
            xhr.methods.handleXHR(``, landingThumbnailsPhotos.methods.assembleAndParseXHRThumbnailDataBlocks, `GET`, xhr.data.allThumbnailsAndFullscreenViewsDataURL);
          } else if (anEvt.target === thumbnailsOrderControlBlock.vars.htmlRefs.discussedBtn) {
            xhr.methods.handleXHR(``, thumbnailsOrderControlBlock.methods.switchToDiscussed, `GET`, xhr.data.allThumbnailsAndFullscreenViewsDataURL);
          }
        })();
      }
    },
    switchToRandom(data) {
      const xhrThumbnailIndexesRandomizedArr = utils.methods.shuffleArray([...Array(data.response.length).keys()]);
      for (let elm of xhrThumbnailIndexesRandomizedArr) {
        let thumbnailBlockFragment = document.createDocumentFragment();
        thumbnailBlockFragment.appendChild(landingThumbnailsPhotos.vars.htmlRefs.thumbnailTemplate.content.cloneNode(true));
        landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.appendChild(thumbnailBlockFragment);

        let aThumbnailDataContainer = {};
        Object.assign(aThumbnailDataContainer, data.response[elm]);

        let thumbnailsArrLastElm = landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture`)[landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture__img`).length - 1];
        thumbnailsArrLastElm.querySelector(`.picture__img`).src = aThumbnailDataContainer.url;
        thumbnailsArrLastElm.querySelector(`.picture__comments`).textContent = aThumbnailDataContainer.comments.length;
        thumbnailsArrLastElm.querySelector(`.picture__likes`).textContent = aThumbnailDataContainer.likes;
      }
    },
    switchToDiscussed(data) {
      let xhrCommentsQntDescendingArr = [];
      for (let thumbnail of data.response) {
        xhrCommentsQntDescendingArr.push(thumbnail.comments.length - 1);
      }
      xhrCommentsQntDescendingArr.sort((a, b) => b - a);
      xhrCommentsQntDescendingArr = Array.from(new Set(xhrCommentsQntDescendingArr));
      for (let commentsQnt of xhrCommentsQntDescendingArr) {
        data.response.forEach((thumbnail) => {
          if (thumbnail.comments.length === commentsQnt) {
            let thumbnailBlockFragment = document.createDocumentFragment();
            thumbnailBlockFragment.appendChild(landingThumbnailsPhotos.vars.htmlRefs.thumbnailTemplate.content.cloneNode(true));
            landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.appendChild(thumbnailBlockFragment);

            let aThumbnailDataContainer = {};
            Object.assign(aThumbnailDataContainer, thumbnail);

            let thumbnailsArrLastElm = landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture`)[landingThumbnailsPhotos.vars.htmlRefs.thumbnailsBlock.querySelectorAll(`.picture__img`).length - 1];
            thumbnailsArrLastElm.querySelector(`.picture__img`).src = aThumbnailDataContainer.url;
            thumbnailsArrLastElm.querySelector(`.picture__comments`).textContent = aThumbnailDataContainer.comments.length;
            thumbnailsArrLastElm.querySelector(`.picture__likes`).textContent = aThumbnailDataContainer.likes;
          }
        });
      }
    }
  },
  listeners: {
    switchOrderMode: {
      onClick() {
        thumbnailsOrderControlBlock.vars.htmlRefs.btnsArrLike.forEach((btn) => {
          btn.addEventListener(`click`, utils.methods.throttle((evt)=>{
            thumbnailsOrderControlBlock.methods.switchOrderMode(evt);
          }, 500));
        });
      }
    }
  }
};
const thumbnailFullscreen = {
  vars: {
    htmlRefs: {
      thumbnailFullscreenBlock: document.querySelector(`.big-picture`),
      theImg: document.querySelector(`.big-picture__img img`),
      likesCounter: document.querySelector(`.likes-count`),
      commentsCountBlock: document.querySelector(`.social__comment-count`),
      allCommentsCounter: document.querySelector(`.comments-count`),
      commentsBlock: document.querySelector(`.social__comments`),
      theImgDescription: document.querySelector(`.social__caption`),
      commentsLoaderBtn: document.querySelector(`.comments-loader`)
    }
  },
  settings: {
    atOpeningCommentsQnt: 5,
    loadMoreCommentsQnt: 3
  },
  methods: {
    addComments(data) {
      let xhrFullscreenPostData = data.response.find(((elm) => elm.url === thumbnailFullscreen.vars.htmlRefs.theImg.src.slice(-elm.url.length)));
      for (let i = 0; i < thumbnailFullscreen.settings.loadMoreCommentsQnt &&
          thumbnailFullscreen.vars.htmlRefs.commentsBlock.childElementCount < xhrFullscreenPostData.comments.length; i++) {
        let nextCommentData = xhrFullscreenPostData.comments[thumbnailFullscreen.vars.htmlRefs.commentsBlock.childElementCount];
        (function assembleAndAppendCommentTemplate() {
          let commentContainer = {};
          Object.assign(commentContainer, nextCommentData);
          let commentFragment = document.createDocumentFragment();
          commentFragment.appendChild(document.createElement(`li`));
          commentFragment.querySelector(`li`).classList.add(`social__comment`);
          commentFragment.querySelector(`.social__comment`).appendChild(document.createElement(`img`));
          commentFragment.querySelector(`img`).classList.add(`social__picture`);
          commentFragment.querySelector(`.social__picture`).alt = `Аватар комментатора фотографии`;
          commentFragment.querySelector(`.social__picture`).setAttribute(`width`, 35);
          commentFragment.querySelector(`.social__picture`).setAttribute(`height`, 35);
          commentFragment.querySelector(`.social__comment`).appendChild(document.createElement(`p`));
          commentFragment.querySelector(`p`).classList.add(`social__text`);
          thumbnailFullscreen.vars.htmlRefs.commentsBlock.appendChild(commentFragment);
        })();
        (function insertCommentData() {
          let theLastCommentBlock = thumbnailFullscreen.vars.htmlRefs.commentsBlock.querySelectorAll(`.social__comment`)[thumbnailFullscreen.vars.htmlRefs.commentsBlock.querySelectorAll(`.social__comment`).length - 1];
          theLastCommentBlock.querySelector(`.social__picture`).src = nextCommentData.avatar;
          theLastCommentBlock.querySelector(`.social__picture`).alt = nextCommentData.name;
          theLastCommentBlock.querySelector(`.social__text`).textContent = nextCommentData.message;
        })();
        (function handleLoaderBtnVisibility() {
          if (thumbnailFullscreen.vars.htmlRefs.commentsBlock.childElementCount < xhrFullscreenPostData.comments.length) {
            thumbnailFullscreen.vars.htmlRefs.commentsLoaderBtn.classList.remove(`hidden`);
          } else {
            thumbnailFullscreen.vars.htmlRefs.commentsLoaderBtn.classList.add(`hidden`);
          }
        })();
      }
    },
    showThumbnailFullscreenBlock(theEvt, thumbnailIndex, ifXHR) {
      function insertRestXhrFullscreenData(anXhr) {
        (function handleCaptionData() {
          thumbnailFullscreen.vars.htmlRefs.thumbnailFullscreenBlock.querySelector(`.social__caption`).textContent = anXhr.response[thumbnailIndex].description;
        })();
        thumbnailFullscreen.methods.addComments(anXhr);
      }
      if (thumbnailFullscreen.vars.htmlRefs.thumbnailFullscreenBlock.classList.contains(`hidden`)) {
        thumbnailFullscreen.methods.removeComments();
        if (theEvt.target.classList.contains(`picture__img`) && theEvt.button === 0 ||
            theEvt.target.classList.contains(`picture`) && theEvt.keyCode === 13) {
          (function showTheBlock() {
            thumbnailFullscreen.vars.htmlRefs.thumbnailFullscreenBlock.classList.remove(`hidden`);
            utils.methods.turnOnBodyModalMode();
          })();
          (function hideUnneededBlock() {
            thumbnailFullscreen.vars.htmlRefs.commentsLoaderBtn.classList.add(`hidden`);
            thumbnailFullscreen.vars.htmlRefs.commentsCountBlock.classList.add(`hidden`);
          })();
          (function dataFillFullscreenBlock() {
            thumbnailFullscreen.vars.htmlRefs.theImg.src = landingThumbnailsPhotos.vars.htmlRefs.dynamicThumbnailImgArrLike()[thumbnailIndex].src;
            thumbnailFullscreen.vars.htmlRefs.likesCounter.textContent = landingThumbnailsPhotos.vars.htmlRefs.dynamicThumbnailLikesCounterArrLike()[thumbnailIndex].textContent;
            thumbnailFullscreen.vars.htmlRefs.allCommentsCounter.textContent = landingThumbnailsPhotos.vars.htmlRefs.dynamicThumbnailCommentsCounterArrLike()[thumbnailIndex].textContent;
            if (ifXHR) {
              xhr.methods.handleXHR(``, insertRestXhrFullscreenData, `GET`, xhr.data.allThumbnailsAndFullscreenViewsDataURL);
            } else {
              thumbnailFullscreen.vars.htmlRefs.theImgDescription.textContent = `Тестим новую камеру!`;
              (function dataMockFillCommentBlocks() {
                const displayedCommentsArrLike = document.querySelectorAll(`.social__comments .social__comment`);
                for (let j = 0; j < displayedCommentsArrLike.length; j++) {
                  let commnentMockBlock = [];
                  landingThumbnailsPhotos.methods.assembleRandomMockCommentBlock(commnentMockBlock);
                  displayedCommentsArrLike[j].querySelector(`.social__picture`).src = commnentMockBlock.commentatorAvatar;
                  displayedCommentsArrLike[j].querySelector(`.social__picture`).alt = commnentMockBlock.commentatorName;
                  displayedCommentsArrLike[j].querySelector(`.social__text`).textContent = commnentMockBlock.theComment;
                }
              })();
            }
          })();
        }
      }
    },
    removeComments() {
      while (thumbnailFullscreen.vars.htmlRefs.commentsBlock.firstChild) {
        thumbnailFullscreen.vars.htmlRefs.commentsBlock.firstChild.remove();
      }
    },
    closeThumnbailFullscreenBlock(theEvt) {
      if (theEvt.target.classList.contains(`big-picture__cancel`) && theEvt.button === 0 ||
          theEvt.keyCode === 27) {

        thumbnailFullscreen.vars.htmlRefs.thumbnailFullscreenBlock.classList.add(`hidden`);
        utils.methods.turnOffBodyModalMode();
        thumbnailFullscreen.methods.removeComments();
        (function removeDescription() {
          thumbnailFullscreen.vars.htmlRefs.theImgDescription.textContent = ``;
        })();
      }
    }
  },
  listeners: {
    showThumbnailFullscreenBlock: {
      onClick() {
        document.body.addEventListener(`click`, (evt) => {
          // if (thumbnailFullscreen.vars.htmlRefs.thumbnailFullscreenBlock.classList.contains(`hidden`) &&
          //     evt.target.classList.contains(`picture__img`)) {
          thumbnailFullscreen.methods.showThumbnailFullscreenBlock(evt, Array.from(landingThumbnailsPhotos.vars.htmlRefs.dynamicThumbnailImgArrLike()).indexOf(evt.target), true);
          // }
        });
      },
      onEnter() {
        document.body.addEventListener(`keydown`, (evt) => {
          if (thumbnailFullscreen.vars.htmlRefs.thumbnailFullscreenBlock.classList.contains(`hidden`) &&
              evt.target.classList.contains(`picture__img`)) {
            thumbnailFullscreen.methods.showThumbnailFullscreenBlock(evt, Array.from(landingThumbnailsPhotos.vars.htmlRefs.dynamicThumbnailImgArrLike()).indexOf(evt.target.querySelector(`.picture__img`)), true);
          }
        });
      }
    },
    closeThumnbailFullscreenBlock: {
      onEsc() {
        document.body.addEventListener(`keydown`, (evt) => {
          thumbnailFullscreen.methods.closeThumnbailFullscreenBlock(evt);
        });
      },
      onCancelBtnClick() {
        document.body.addEventListener(`click`, (evt) => {
          thumbnailFullscreen.methods.closeThumnbailFullscreenBlock(evt);
        });
      }
    },
    handleCommentsLoader: {
      onClick() {
        thumbnailFullscreen.vars.htmlRefs.commentsLoaderBtn.addEventListener(`click`, ()=> {
          xhr.methods.handleXHR(``, thumbnailFullscreen.methods.addComments, `GET`, xhr.data.allThumbnailsAndFullscreenViewsDataURL);
        });
      }
    }
  }
};
const pictureUpload = {
  modalViewSettings: {
    vars: {
      htmlRefs: {
        theBlock: document.querySelector(`.img-upload__overlay`),
        newImgUploadBtn: document.querySelector(`#upload-file`),
        closeModalBtn: document.querySelector(`#upload-cancel`)
      }
    },
    methods: {
      openUploadModal() {
        pictureUpload.modalViewSettings.vars.htmlRefs.theBlock.classList.remove(`hidden`);
        utils.methods.turnOnBodyModalMode();
      },
      openAndAllSetloadModal() {
        pictureUpload.modalViewSettings.methods.openUploadModal();
        pictureUpload.filtersControl.methods.getAtOpenModalSettings();
        (function simulateNoneEffectChoice() {
          pictureUpload.filtersControl.vars.htmlRefs.effectNoneBtn.dispatchEvent(new Event(`click`));
        })();
        pictureUpload.modalViewSettings.listeners.closeUploadModal();
      },
      closeUploadModal() {
        pictureUpload.modalViewSettings.vars.htmlRefs.theBlock.classList.add(`hidden`);
        pictureUpload.validation.vars.htmlRefs.hashField.value = ``;
        pictureUpload.validation.vars.htmlRefs.hashField.style.backgroundColor = ``;
        pictureUpload.validation.vars.htmlRefs.commentField.value = ``;
        pictureUpload.validation.vars.htmlRefs.commentField.style.backgroundColor = ``;
        utils.methods.turnOffBodyModalMode();
      }
    },
    listeners: {
      openUploadModal: {
        onUploadInputChange() {
          pictureUpload.modalViewSettings.vars.htmlRefs.newImgUploadBtn.addEventListener(`input`, () => {
            pictureUpload.modalViewSettings.methods.openAndAllSetloadModal();
          });
        }
      },
      closeUploadModal() {
        (function onEsc() {
          document.body.addEventListener(`keydown`, (evt) => {
            if (evt.keyCode === 27 &&
                !document.activeElement.classList.contains(`text__description`) &&
                !document.activeElement.classList.contains(`text__hashtags`)) {

              pictureUpload.modalViewSettings.listeners.openUploadModal.onUploadInputChange();
              pictureUpload.modalViewSettings.methods.closeUploadModal();
            }
          });
        })();
        (function onCloseBtnClick() {
          pictureUpload.modalViewSettings.vars.htmlRefs.closeModalBtn.addEventListener(`click`, () => {
            pictureUpload.modalViewSettings.methods.closeUploadModal();
            pictureUpload.modalViewSettings.listeners.openUploadModal.onUploadInputChange();
          }, {once: true});
        })();
      }
    }
  },
  filtersControl: {
    vars: {
      htmlRefs: {
        theImg: document.querySelector(`.img-upload__preview img`),
        effectSliderBlock: document.querySelector(`.effect-level`),
        sliderFullBar: document.querySelector(`.effect-level__line`),
        sliderEffectProgressBar: document.querySelector(`.effect-level__depth`),
        sliderPin: document.querySelector(`.effect-level__pin`),
        invisibleEffectValueHolder: document.querySelector(`.effect-level__value`),
        effectsChoiceBtnsArrLike: document.querySelectorAll(`.effects__radio`),
        noEffectChoiceBtn: document.querySelector(`#effect-none`),
        effectNoneBtn: document.querySelector(`#effect-none`)
      }
    },
    data: {
      defaultEffectPinPosition: 100,
      filterNametoCSSCorrelation: {
        chrome: `grayscale()`,
        sepia: `sepia()`,
        marvin: `invert(%)`,
        phobos: `blur(px)`,
        heat: `brightness()`
      },
      filterMinValues: {
        chrome: 0,
        sepia: 0,
        marvin: 0,
        phobos: 0,
        heat: 1
      },
      filterMaxValues: {
        chrome: 1,
        sepia: 1,
        marvin: 100,
        phobos: 3,
        heat: 3,
      },
    },
    methods: {
      moveProgressBarAlongThePin() {
        pictureUpload.filtersControl.vars.htmlRefs.sliderEffectProgressBar.style.width = utils.methods.getElementMiddleX(pictureUpload.filtersControl.vars.htmlRefs.sliderPin) - pictureUpload.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().left + `px`;
      },
      getCheckedEffectBtn() {
        return pictureUpload.modalViewSettings.vars.htmlRefs.theBlock.querySelector(`.effects__radio:checked`);
      },
      setNoneEffectChoice() {
        pictureUpload.filtersControl.vars.htmlRefs.effectNoneBtn.checked = true;
        pictureUpload.filtersControl.vars.htmlRefs.theImg.style.filter = ``;
        pictureUpload.filtersControl.vars.htmlRefs.effectSliderBlock.classList.add(`hidden`);
      },
      getAtOpenModalSettings() {
        pictureUpload.filtersControl.methods.setNoneEffectChoice();
        pictureUpload.scaleControl.methods.doDefaultImgScale(pictureUpload.scaleControl.data.defaultScale);
      },
      getFinalSpecifiedValue(minValue, maxValue, progressBarProgress) {
        return Number(((minValue + ((maxValue - minValue) / 100 * progressBarProgress)).toFixed(1)));
      },
      setTheFilterEffect(theEventElement) {
        if (theEventElement.id === `effect-none`) {
          pictureUpload.filtersControl.methods.setNoneEffectChoice();
        } else {
          let theValue = pictureUpload.filtersControl.methods.getFinalSpecifiedValue(pictureUpload.filtersControl.data.filterMinValues[theEventElement.id.slice(7)], pictureUpload.filtersControl.data.filterMaxValues[theEventElement.id.slice(7)], pictureUpload.filtersControl.methods.getProgressBarProgressPercentage());
          pictureUpload.filtersControl.vars.htmlRefs.theImg.style.filter = pictureUpload.filtersControl.data.filterNametoCSSCorrelation[theEventElement.id.slice(7)].replace(/[(]/, `(${theValue}`);
        }
      },
      getAtSwitchFiltersDefaultSettings(theEvent) {
        (function setPreEffectDefaults() {
          pictureUpload.filtersControl.vars.htmlRefs.invisibleEffectValueHolder.value = pictureUpload.filtersControl.data.defaultEffectPinPosition;
          pictureUpload.filtersControl.vars.htmlRefs.theImg.className = ``;
          pictureUpload.filtersControl.vars.htmlRefs.effectSliderBlock.classList.remove(`hidden`);
          pictureUpload.filtersControl.vars.htmlRefs.sliderPin.style.left = (pictureUpload.filtersControl.vars.htmlRefs.sliderFullBar.clientWidth) + `px`;
          pictureUpload.filtersControl.methods.moveProgressBarAlongThePin();
        })();
        (function setTheEffectClassNameOnImg() {
          if (theEvent.target.id === `effect-none`) {
            pictureUpload.filtersControl.methods.setNoneEffectChoice();
          } else {
            pictureUpload.filtersControl.vars.htmlRefs.theImg.classList.add(`effects__preview--${theEvent.target.id.slice(7)}`);
          }
        })();
        pictureUpload.filtersControl.methods.setTheFilterEffect(theEvent.target);
      },
      getProgressBarProgressPercentage() {
        let fullWidth = pictureUpload.filtersControl.vars.htmlRefs.sliderFullBar.clientWidth;
        let progressWidth = utils.methods.getElementMiddleX(pictureUpload.filtersControl.vars.htmlRefs.sliderPin) - pictureUpload.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().left;
        return Math.floor(progressWidth / (fullWidth / 100));
      }
    },
    listeners: {
      switchingEffectsHandler: {
        onClick() {
          pictureUpload.filtersControl.vars.htmlRefs.effectsChoiceBtnsArrLike.forEach((btn) => {
            btn.addEventListener(`click`, (evt) => {
              pictureUpload.filtersControl.methods.getAtSwitchFiltersDefaultSettings(evt);
            });
          });
        }
      },
      effectPinMoveHandler: {
        onMouseActions() {
          pictureUpload.filtersControl.vars.htmlRefs.sliderPin.addEventListener(`mousedown`, (evt) => {
            evt.preventDefault();
            const startCoords = {
              x: utils.methods.getElementMiddleX(pictureUpload.filtersControl.vars.htmlRefs.sliderPin)
            };
            let dragged = false;
            const onMouseMove = (moveEvt) => {
              moveEvt.preventDefault();
              dragged = true;
              if (moveEvt.clientX >= pictureUpload.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().left
               && moveEvt.clientX <= pictureUpload.filtersControl.vars.htmlRefs.sliderFullBar.getBoundingClientRect().right) {
                const shift = {
                  x: startCoords.x - moveEvt.clientX
                };
                startCoords.x = moveEvt.clientX;
                (function moveThePin() {
                  pictureUpload.filtersControl.vars.htmlRefs.sliderPin.style.left = (pictureUpload.filtersControl.vars.htmlRefs.sliderPin.offsetLeft - shift.x) + `px`;
                })();
                pictureUpload.filtersControl.methods.moveProgressBarAlongThePin();
                pictureUpload.filtersControl.methods.setTheFilterEffect(pictureUpload.filtersControl.methods.getCheckedEffectBtn());
              }
            };
            const onMouseUp = (upEvt) => {
              upEvt.preventDefault();
              document.removeEventListener(`mousemove`, onMouseMove);
              document.removeEventListener(`mouseup`, onMouseUp);
              const onClickPreventDefault = (clickEvt) => {
                clickEvt.preventDefault();
                pictureUpload.filtersControl.vars.htmlRefs.sliderPin.removeEventListener(`click`, onClickPreventDefault);
              };
              if (dragged) {
                pictureUpload.filtersControl.vars.htmlRefs.sliderPin.addEventListener(`click`, onClickPreventDefault);
              }
            };
            document.addEventListener(`mousemove`, onMouseMove);
            document.addEventListener(`mouseup`, onMouseUp);
          });
        }
      }
    }
  },
  scaleControl: {
    vars: {
      htmlRefs: {
        scaleControlBlock: document.querySelector(`.scale`),
        scaleValueHolder: document.querySelector(`.scale__control--value`),
        scaleDownBtn: document.querySelector(`.scale__control--smaller`),
        scaleUpBtn: document.querySelector(`.scale__control--bigger`),
        scaleBtnsArrLike: document.querySelectorAll(`button.scale__control`),
      }
    },
    data: {
      defaultScale: 1
    },
    methods: {
      doDefaultImgScale(defaultScale = 1) {
        pictureUpload.scaleControl.vars.htmlRefs.scaleValueHolder.value = `${defaultScale * 100}%`;
        pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale = defaultScale;
      },
      handleScaleChangeAttempt(theEvent) {
        if (theEvent.target === pictureUpload.scaleControl.vars.htmlRefs.scaleUpBtn &&
            Number(pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale) < 1) {
          pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale = Number(pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale) + 0.25;
        } else if (theEvent.target === pictureUpload.scaleControl.vars.htmlRefs.scaleDownBtn &&
                   Number(pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale) > 0.25) {
          pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale = Number(pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale) - 0.25;
        }
        pictureUpload.scaleControl.vars.htmlRefs.scaleValueHolder.value = `${Number(pictureUpload.filtersControl.vars.htmlRefs.theImg.style.scale) * 100}%`;
      }
    },
    listeners: {
      scaleChange: {
        onClick() {
          pictureUpload.scaleControl.vars.htmlRefs.scaleBtnsArrLike.forEach((btn) => {
            btn.addEventListener((`click`), (evt) => {
              pictureUpload.scaleControl.methods.handleScaleChangeAttempt(evt);
            });
          });
        }
      }
    }
  },
  validation: {
    vars: {
      htmlRefs: {
        uploadForm: document.querySelector(`.img-upload__form`),
        hashField: document.querySelector(`.text__hashtags`),
        commentField: document.querySelector(`.text__description`),
        submitBtn: document.querySelector(`.img-upload__submit`),
        successUploadMessageTemplate: document.querySelector(`#success`),
        errorUploadMessageTemplate: document.querySelector(`#error`),
        errorUploadCloseModalBtn: document.querySelector(`.error__button`)
      }
    },
    methods: {
      getGivenTagsArray() {
        return pictureUpload.validation.vars.htmlRefs.hashField.value.toLowerCase().split(` `);
      },
      validateHashField(eachTag) {
        let hashField = pictureUpload.validation.vars.htmlRefs.hashField;
        hashField.style.backgroundColor = `LightPink`;
        if (hashField.value === ``) {
          hashField.setCustomValidity(``);
          hashField.style.backgroundColor = ``;
        } else if (!/^#.*/.test(eachTag)) {
          hashField.setCustomValidity(`Хэштеги должны начинаться с символа "#"`);
        } else if (/^#$/.test(eachTag)) {
          hashField.setCustomValidity(`Хэштеги не могут состоять из одиночного "#"`);
        } else if (!/^#[a-zA-Z0-9]+$/.test(eachTag)) {
          hashField.setCustomValidity(`Хэштеги должны состоять из букв / цифр латинского алфавита и разделяться пробелами`);
        } else if (!/^#[a-zA-Z0-9]{1,19}$/.test(eachTag)) {
          hashField.setCustomValidity(`длина хэштега не должна превышать 20 символов`);
        } else if (utils.methods.checkArrayDuplicatesPossesion(pictureUpload.validation.methods.getGivenTagsArray())) {
          hashField.setCustomValidity(`Хэштеги не должны повторяться`);
        } else if (pictureUpload.validation.methods.getGivenTagsArray().length > 5) {
          hashField.setCustomValidity(`Должно быть не более 5 хэштегов`);
        } else {
          hashField.setCustomValidity(``);
          hashField.style.backgroundColor = ``;
        }
        hashField.reportValidity();
      },
      validateCommentField() {
        let commentField = pictureUpload.validation.vars.htmlRefs.commentField;
        if (commentField.value.length > 140) {
          commentField.setCustomValidity(`Длина комментария не должна превышать 140 симловов`);
          commentField.style.backgroundColor = `LightPink`;
        } else {
          commentField.setCustomValidity(``);
          commentField.style.backgroundColor = ``;
        }
      },
      xhrHandleFormSend(anXhr) {
        function successCaseHandler() {
        }
        (function errorChecker() {
          let errMessage = `no error`;
          switch (anXhr.status) {
            case 200:
              successCaseHandler();
              break;
            case 400:
              errMessage = `Неверный запрос`;
              break;
            case 401:
              errMessage = `Пользователь не авторизован`;
              break;
            case 404:
              errMessage = `Ничего не найдено`;
              break;
            default:
              errMessage = `Cтатус ответа: ${anXhr.status} ${anXhr.statusText}`;
          }
          pictureUpload.modalViewSettings.methods.closeUploadModal();
          if (errMessage === `no error`) {
            (function successMessageHandler() {
              let successMessageBlockFragment = document.createDocumentFragment();
              successMessageBlockFragment.appendChild(pictureUpload.validation.vars.htmlRefs.successUploadMessageTemplate.content.cloneNode(true));
              document.querySelector(`main`).appendChild(successMessageBlockFragment);
            })();
            pictureUpload.validation.listeners.successModalClose.onBtnClick();
            pictureUpload.validation.listeners.successModalClose.onEsc();
            pictureUpload.validation.listeners.successModalClose.onOutsideClick();
          } else {
            (function errMessageHandler() {
              let errMessageBlockFragment = document.createDocumentFragment();
              errMessageBlockFragment.appendChild(pictureUpload.validation.vars.htmlRefs.errorUploadMessageTemplate.content.cloneNode(true));
              document.querySelector(`main`).appendChild(errMessageBlockFragment);
            })();
            pictureUpload.validation.listeners.errorModalClose.onBtnClick();
            pictureUpload.validation.listeners.errorModalClose.onEsc();
            pictureUpload.validation.listeners.errorModalClose.onOutsideClick();
          }
        })();
        // close Modal, show the message, add errors check
      },
      removeElement(elementSelector) {
        document.querySelector(elementSelector).remove();
      },
      handleErrorModalClose(evt) {
        if (evt.keyCode === 27 ||
            evt.target === document.querySelector(`.error__button`) ||
            !Array.from(document.querySelector(`.error`).querySelectorAll(`*`)).includes(evt.target)) {
          document.body.removeEventListener(`keydown`, pictureUpload.validation.methods.handleErrorModalClose);
          document.body.removeEventListener(`click`, pictureUpload.validation.methods.handleErrorModalClose);
          document.querySelector(`.error__button`).removeEventListener(`click`, pictureUpload.validation.methods.handleErrorModalClose);
          if (evt.target === document.querySelector(`.error__button`)) {
            pictureUpload.modalViewSettings.vars.htmlRefs.newImgUploadBtn.click();
          }
          pictureUpload.validation.methods.removeElement(`.error`);
        }
      },
      handleSuccessModalClose(evt) {
        if (evt.keyCode === 27 ||
            evt.target === document.querySelector(`.success__button`) ||
            !Array.from(document.querySelector(`.success`).querySelectorAll(`*`)).includes(evt.target)) {
          document.body.removeEventListener(`keydown`, pictureUpload.validation.methods.handleSuccessModalClose);
          document.body.removeEventListener(`click`, pictureUpload.validation.methods.handleSuccessModalClose);
          document.querySelector(`.success__button`).removeEventListener(`click`, pictureUpload.validation.methods.handleSuccessModalClose);
          pictureUpload.validation.methods.removeElement(`.success`);
        }
      },
      validateImgProps() {
        const theFile = pictureUpload.modalViewSettings.vars.htmlRefs.newImgUploadBtn.files[0];
        const validFormats = [`gif`, `jpg`, `jpeg`, `png`];
        if (validFormats.some((aFormat) => theFile.name.toLowerCase().endsWith(aFormat))) {
          let theReader = new FileReader();
          theReader.readAsDataURL(theFile);
          theReader.addEventListener(`load`, () => {
            pictureUpload.filtersControl.vars.htmlRefs.theImg.src = theReader.result;
          });
        }
      }
    },
    listeners: {
      validatePictureUploadForm: {
        onSubmit() {
          pictureUpload.validation.vars.htmlRefs.submitBtn.addEventListener(`click`, () => {
            pictureUpload.validation.methods.getGivenTagsArray().forEach((tag) => {
              pictureUpload.validation.methods.validateHashField(tag);
              pictureUpload.validation.methods.validateCommentField();
            });
          });
        }
      },
      handleFormSend: {
        onSubmit() {
          pictureUpload.validation.vars.htmlRefs.uploadForm.addEventListener(`submit`, (evt) => {
            evt.preventDefault();
            xhr.methods.handleXHR(new FormData(pictureUpload.validation.vars.htmlRefs.uploadForm), pictureUpload.validation.methods.xhrHandleFormSend, `POST`, xhr.data.picturePostURL);
          });
        }
      },
      errorModalClose: {
        onEsc() {
          document.body.addEventListener(`keydown`, pictureUpload.validation.methods.handleErrorModalClose);
        },
        onOutsideClick() {
          document.body.addEventListener(`click`, pictureUpload.validation.methods.handleErrorModalClose);
        },
        onBtnClick() {
          document.querySelector(`.error__button`).addEventListener(`click`, pictureUpload.validation.methods.handleErrorModalClose);
        }
      },
      successModalClose: {
        onEsc() {
          document.body.addEventListener(`keydown`, pictureUpload.validation.methods.handleSuccessModalClose);
        },
        onOutsideClick() {
          document.body.addEventListener(`click`, pictureUpload.validation.methods.handleSuccessModalClose);
        },
        onBtnClick() {
          document.querySelector(`.success__button`).addEventListener(`click`, pictureUpload.validation.methods.handleSuccessModalClose);
        }
      },
      valiedateImgProps: {
        onUploadInputChange() {
          pictureUpload.modalViewSettings.vars.htmlRefs.newImgUploadBtn.addEventListener(`change`, pictureUpload.validation.methods.validateImgProps);
        }
      }
    }
  },
};
const xhr = {
  data: {
    allThumbnailsAndFullscreenViewsDataURL: `https://21.javascript.pages.academy/kekstagram/data`,
    picturePostURL: `https://21.javascript.pages.academy/kekstagram`
  },
  methods: {
    handleXHR(data, handlerFn, method, url) {
      let anXhr = new XMLHttpRequest();
      anXhr.responseType = `json`;
      anXhr.open(`${method}`, url);
      anXhr.onload = function () {
        handlerFn(anXhr);
      };
      anXhr.send(data);
    }
  }
};

utils.methods.launchTotalSctipt();
