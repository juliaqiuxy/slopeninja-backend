import {
  degreeOrNull,
  inchOrNull,
  numberOrNull,
  weatherStatusOrNull,
  liftTrailStatusOrNull,
  notEmptyStringOrNull,
  trailLevelOrNull,
} from '../weatherUtil';

const initialWeather = {
  status: null,
  weatherIcon: null,
  temperature: null,
  baseCondition: null,
  newSnow: null,
  snowDepthBase: null,
  snowDepthSummit: null,
};

const initialLifts = {
  total: null,
  open: null,
};

const initialTrails = {
  total: null,
  open: null,
};

export const parseSierraSnow = async ($) => {
  const weatherIcon = $('.snow-report-weather .weather-icon svg').attr('class');
  const temperature = $('.weather-block .value').first().text().trim();
  // 24 Hours
  const newSnow24Hr = $('.weather-block.weather-block-special .value').first().text().trim();
  // Base
  const snowDepthBase = $('.weather-sub .sub-data .value').slice(1, 2).text().trim();
  const snowDepthSummit = $('.weather-sub .sub-data .value').first().text().trim();
  return {
    ...initialWeather,
    weatherIcon: weatherStatusOrNull(weatherIcon),
    temperature: degreeOrNull(temperature),
    newSnow: inchOrNull(newSnow24Hr),
    snowDepthBase: inchOrNull(snowDepthBase),
    snowDepthSummit: inchOrNull(snowDepthSummit),
  };
};

export const parseSierraLiftCounts = async ($) => {
  const openLifts = Number.parseInt(
    $('.lift-trail-stats .lift-trail-stat .value1').first().text(),
    10,
  );
  const totalLifts = Number.parseInt(
    $('.lift-trail-stats .lift-trail-stat .value2').first().text().replace('/', ''),
    10,
  );

  // const liftListsCount = $('.lifts-list table tbody tr').length;

  return {
    ...initialLifts,
    total: numberOrNull(totalLifts),
    open: numberOrNull(openLifts),
  };
};

export const parseSierraTrailCounts = async ($) => {
  const openTrails = Number.parseInt(
    $('.lift-trail-stats .lift-trail-stat .value1').slice(1, 2).text(),
    10,
  );
  const totalTrails = Number.parseInt(
    $('.lift-trail-stats .lift-trail-stat .value2').slice(1, 2).text().replace('/', ''),
    10,
  );

  return {
    ...initialTrails,
    total: numberOrNull(totalTrails),
    open: numberOrNull(openTrails),
  };
};

export const parseSierraLifts = async ($) => {
  const list = [];

  $('.lifts-list tbody > tr').each((index, rowElement) => {
    const tdElements = $(rowElement).find('td');

    const tdElementName = tdElements[1];
    const tdElementStatus = tdElements[2];

    const tableElement = tdElementName.parent.parent.parent;
    const thElementCategory = $(tableElement).find('thead > tr > th').get(1);

    const name = notEmptyStringOrNull($(tdElementName).text().trim());
    const status = liftTrailStatusOrNull($(tdElementStatus).text().trim());
    const category = notEmptyStringOrNull($(thElementCategory).text().trim());

    const lift = {
      name,
      status,
      category,
    };

    list.push(lift);
  });

  return list;
};

export const parseSierraTrails = async ($) => {
  const list = [];

  $('.trails-list tbody > tr').each((index, rowElement) => {
    const tdElements = $(rowElement).find('td');

    const tdElementName = tdElements[1];
    const tdElementStatus = tdElements[2];
    const tdElementCatgory = tdElements[4];

    const tableElement = tdElementName.parent.parent.parent;
    const thElementCategory = $(tableElement).find('thead > tr > th').get(1);

    const name = notEmptyStringOrNull($(tdElementName).text().trim());
    const status = liftTrailStatusOrNull($(tdElementStatus).text().trim());
    const level = trailLevelOrNull($(thElementCategory).text().trim());
    const category = notEmptyStringOrNull($(tdElementCatgory).text().trim());

    const trail = {
      name,
      status,
      category,
      level,
    };

    list.push(trail);
  });

  return list;
};
