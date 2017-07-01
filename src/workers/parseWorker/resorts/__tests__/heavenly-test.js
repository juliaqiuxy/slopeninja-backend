import fs from 'fs';
import {
  parseHeavenlySnow,
  parseHeavenlyLiftCounts,
  parseHeavenlyLifts,
  parseHeavenlyTrails,
  parseHeavenlyTrailCounts
} from '../heavenly';
import { createHtmlParser, removeBackSlashes } from '../../parserFactory';

test('fetches Heavenly snow data correctly', async () => {
  const htmlText = fs.readFileSync(`${__dirname}/__fixtures__/heavenly-weather.html.input`);

  const resortData = await createHtmlParser('snow', parseHeavenlySnow)(htmlText);
  expect(resortData).toEqual({
    snow: {
      status: 'closed',
      weatherIcon: null,
      temperature: null,
      baseCondition: null,
      newSnow: 0,
      snowDepthBase: null,
      snowDepthSummit: 0,
    },
  });
})

test('fetches all null for nonexisting snow values', async () => {
  const resortData = await createHtmlParser('snow', parseHeavenlySnow)('<html></html>');
  expect(resortData).toEqual({
    snow: {
      status: null,
      weatherIcon: null,
      temperature: null,
      baseCondition: null,
      newSnow: null,
      snowDepthBase: null,
      snowDepthSummit: null,
    }
  });
});

test('fetches Heavenly lifts data correctly', async () => {
  const htmlText = fs.readFileSync(`${__dirname}/__fixtures__/heavenly-weather.html.input`);
  const resortData = await createHtmlParser('liftCounts', parseHeavenlyLiftCounts)(htmlText);
  expect(resortData).toEqual({
    liftCounts: {
      total: null,
      open: null,
    }
  });
});

test('fetches all null for nonexisting lift values', async () => {
  const resortData = await createHtmlParser('liftCounts', parseHeavenlyLiftCounts)('<html></html>');
  expect(resortData).toEqual({
    liftCounts: {
      total: null,
      open: null,
    }
  });
});

test('fetches Heavenly trails data correctly', async () => {
  const htmlText = fs.readFileSync(`${__dirname}/__fixtures__/heavenly-weather.html.input`);
  const resortData = await createHtmlParser('trailCounts', parseHeavenlyTrailCounts)(htmlText);
  expect(resortData).toEqual({
    trailCounts: {
      total: null,
      open: null,
    }
  });
});

test('fetches all null for nonexisting trails values', async () => {
  const resortData = await createHtmlParser('trailCounts', parseHeavenlyTrailCounts)('<html></html>');
  expect(resortData).toEqual({
    trailCounts: {
      total: null,
      open: null,
    }
  });
});

test('fetches Heavenly lift list correctly', async () => {
  const htmlText = fs.readFileSync(`${__dirname}/__fixtures__/heavenly-lifts.html.input`);
  const resortData = await createHtmlParser(
    'lifts',
    parseHeavenlyLifts,
    removeBackSlashes,
  )(htmlText);
  expect(resortData).toMatchSnapshot();
});

test('fetches all null for nonexisting lift list values', async () => {
  const resortData = await createHtmlParser(
    'lifts',
    parseHeavenlyLifts,
    removeBackSlashes,
  )('<html></html>');
  expect(resortData).toMatchObject({ lifts: [] });
});

test('fetches Heavenly trail list correctly', async () => {
  const htmlText = fs.readFileSync(`${__dirname}/__fixtures__/heavenly-lifts.html.input`);
  const resortData = await createHtmlParser(
    'trails',
    parseHeavenlyTrails,
    removeBackSlashes,
  )(htmlText);
  expect(resortData).toMatchSnapshot();
});

test('fetches all null for nonexisting lift list values', async () => {
  const resortData = await createHtmlParser(
    'trails',
    parseHeavenlyTrails,
    removeBackSlashes,
  )('<html></html>');
  expect(resortData).toMatchObject({ trails: [] });
});
