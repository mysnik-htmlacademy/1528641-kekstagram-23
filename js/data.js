import {getRandomArrayElement, getRandomNumber} from './util.js';

const USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'John',
  'Tyrion',
  'Daenerys',
  'Brienne',
  'Samwell',
  'Jaime',
  'Ned',
  'Jeor',
  'Tormund',
  'Margaery',
  'Davos',
  'Catelyn',
  'Varys',
  'Olenna',
  'Robb',
  'Sansa',
  'Jorah',
  'Oberyn',
  'Arya',
  'Yara',
  'Daario',
  'Melisandre',
  'Stannis',
  'Theon',
  'Bronn',
];

const DESCRIPTIONS = [
  'огонь',
  'дайте две',
  'я кошка',
  'уруру',
  'ну давай',
  'ябрыгвал',
  'аффтар жжот',
  '2007',
  'мать драконов',
  'железный трон',
  'дракарис',
  'катакарис',
  'жукарис',
  'дохаэрис',
  'валар моргулис',
  'наши волки',
  'все котанулись',
  'зима близко',
  'услышь наш рёв',
  'камбалы рулят',
  'на джиэсе писать сложно',
  'я защитю проект',
  'честно-честно',
  'то что мертво умереть не может',
  'дотракийцы топ',
];

const SIMILAR_USER_COUNT = 25;
const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENTS_MIN = 1;
const COMMENTS_MAX = 5;

const createUser = (newId) => ({
  id: newId,
  url: `photos/${newId}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(LIKE_MIN, LIKE_MAX),
  comments: [],
});

const createComment = (newId) => ({
  id: newId,
  avatar: `img/avatar-${getRandomNumber(AVATAR_ID_MIN, AVATAR_ID_MAX)}.svg`,
  message: getRandomArrayElement(USER_MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const similarUsers = new Array(SIMILAR_USER_COUNT).fill(null).map((currElem, currIdx) => createUser(currIdx + 1));

const populateComments = function () {
  let commentIdxCurrent = 0;

  for (let idx = 0; idx < SIMILAR_USER_COUNT; idx++) {
    const commentsCount = getRandomNumber(COMMENTS_MIN, COMMENTS_MAX);

    for (let commentIdx = 0; commentIdx < commentsCount; commentIdx++) {
      similarUsers[idx].comments.push(createComment(commentIdxCurrent));
      commentIdxCurrent++;
    }
  }
};

populateComments();

export {similarUsers};
