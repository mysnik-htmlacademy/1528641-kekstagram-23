const getRandomNumber = function(min, max) {
  // NOTE implementation from https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);

  // NOTE in case of invalid parameters we return null
  if ((min < 0) || (max <= min)) {
    return null;
  }

  // NOTE include min and max values
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkString = function(str, maxLen){
  return str.length <= maxLen;
};

// NOTE this invokations using for pass linter check
checkString('Hello Kate', 20);

// 4.9. Больше деталей
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

// eslint-disable-next-line arrow-body-style
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

// eslint-disable-next-line arrow-body-style
const createUser = () => {
  return {
    id: '',
    url: '',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(LIKE_MIN, LIKE_MAX),
    comments: [],
  };
};

// eslint-disable-next-line arrow-body-style
const createComment = (newId) => {
  return {
    id: newId,
    avatar: `img/avatar-${getRandomNumber(AVATAR_ID_MIN, AVATAR_ID_MAX)}.svg`,
    userMessage: getRandomArrayElement(USER_MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const similarUsers = new Array(SIMILAR_USER_COUNT).fill(null).map(() => createUser());

let commentIdxCurrent = 0;

for (let idx = 0; idx < SIMILAR_USER_COUNT; idx++){
  similarUsers[idx].id = idx + 1;
  similarUsers[idx].url = `photos/${idx + 1}.jpg`;

  const commentsCount = getRandomNumber(COMMENTS_MIN, COMMENTS_MAX);

  for (let commentIdx = 0; commentIdx < commentsCount; commentIdx++) {
    similarUsers[idx].comments.push(createComment(commentIdxCurrent));
    commentIdxCurrent++;
  }
}

