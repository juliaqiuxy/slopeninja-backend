import {
  degreeOrNull,
  inchOrNull,
  resortStatusOrNull,
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

export const parseDiamondSnow = async ($) => {
  const status = $('.surface-conditions p').first().text().trim();
  const weatherIcon = $('.weather-condition .weather-condition-wrapper .weather-forecast').first().text().trim();
  const temperature = $('.conditions-overlay .row.weather-row .large-4.columns').first().text().trim();
  // 24 Hours
  const newSnow24Hr = $('.conditions-overlay .row.weather-row .large-4.columns .weather-data').slice(1, 2).text().trim();
  // Base
  const snowDepthBase = $('.conditions-overlay .row.weather-row .large-4.columns .weather-data').slice(3, 4).text().trim();
  const snowDepthSummit = $('.conditions-overlay .row.weather-row .large-4.columns .weather-data').slice(4, 5).text().trim();
  return {
    ...initialWeather,
    weatherIcon: weatherStatusOrNull(weatherIcon),
    status: resortStatusOrNull(status),
    temperature: degreeOrNull(temperature),
    newSnow: inchOrNull(newSnow24Hr),
    snowDepthBase: inchOrNull(snowDepthBase),
    snowDepthSummit: inchOrNull(snowDepthSummit),
  };
};

export const parseDiamondLiftCounts = async () => {
  return {
    ...initialLifts,
  };
};

export const parseDiamondTrailCounts = async () => {
  return {
    ...initialTrails,
  };
};

export const parseDiamondLifts = async ($) => {
  const list = [];

  $('.lift-trail-conditions .lift-header').each((index, rowElement) => {
    const h1Elements = $(rowElement).find('h1');
    const spanElements = $(rowElement).find('span');

    const name = notEmptyStringOrNull($(h1Elements).text().trim());
    const status = liftTrailStatusOrNull($(spanElements).text().trim());
    const category = null;

    const lift = {
      name,
      status,
      category,
    };

    list.push(lift);
  });

  return list;
};

export const parseDiamondTrails = async ($) => {
  const list = [];

  $('.trail').each((index, rowElement) => {
    const spanElements = $(rowElement).find('span');

    const spanElementName = spanElements[1];
    const spanElementStatus = spanElements[2];
    const spanElementLevel = spanElements[0];

    const parentElement = rowElement.parent.parent.parent;
    const h1ElementCategory = $(parentElement).prev().find('.lift-header').find('h1');

    const name = notEmptyStringOrNull($(spanElementName).text().trim());
    const status = liftTrailStatusOrNull($(spanElementStatus).text().trim());
    const level = trailLevelOrNull($(spanElementLevel).attr('class'));
    const category = notEmptyStringOrNull($(h1ElementCategory).text().trim());

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
