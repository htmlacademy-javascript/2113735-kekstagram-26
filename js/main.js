const COUNT_USER_PHOTO = 25;

const DISCRIPTIONS = [
  'Предложенная для описания фотография интересна тем, что',
  'При первом взгляде на фотографии',
  'На фотографии мы видим',
  'Фото несёт в себе определённое настроение',
  'Если внимательно посмотреть на изображение, то',
  'Передать атмосферу события помогает',
  'Автор снимка запечатлел',
  'На фотографии изображён(-ы)',
  'Слева (справа/вверху/внизу) виднеется',
  'Завершая описание, хочется отметить',
  'Своё описание хочется закончить'
];

const MIN_COUNT_LIKES = 15;

const MAX_COUNT_LIKES = 200;

const MAX_COUNT_COMMENTS = 10;

const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Арина',
  'Светлана',
  'Инна',
  'Нина',
  'Михаил',
  'Юрий',
  'Федот',
  'Аркадий',
  'Кристина',
  'Елизавета',
  'Леонид',
  'Тамара',
  'Богдан',
  'Артём',
  'Вера'  
];

let idDescription = 0;

let idComment = 0;

const getRandomInt = function (left, right) {
  if (right < left) {
    return null;
  }
  return (Math.floor(Math.random() * (right - left + 1) + left));
};

const checkLengthStr = function (checkString, maxLength) {
  return (checkString.length <= maxLength);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const createComment = () => {
  idComment ++;
  return {
    id: idComment,
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomArrayElement(COMMENTS_TEXT),
    name: getRandomArrayElement(NAMES)
  };
};

const createDescriptionUserPhoto = () => {
  idDescription ++;
  return {
    id: idDescription,
    url: 'photos/' + idDescription + '.jpg',
    discription: getRandomArrayElement(DISCRIPTIONS),
    likes: getRandomInt (MIN_COUNT_LIKES, MAX_COUNT_LIKES),
    comment: Array.from({length: getRandomInt(1, MAX_COUNT_COMMENTS)}, createComment)
  };
};

const descriptionsUserPhoto = Array.from({length: COUNT_USER_PHOTO}, createDescriptionUserPhoto);

checkLengthStr('javascript', 50);
console.log(descriptionsUserPhoto);
