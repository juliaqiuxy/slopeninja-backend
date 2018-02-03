import idx from 'idx';

const metadata = {
  'sierra-at-tahoe': {
    name: 'Sierra-at-Tahoe',
    logo: '/images/resorts/sierra.svg',
    coords: { lat: 38.79935, lng: -120.080906 },
    location: 'Twin Bridges, CA 95735',
  },
  'squaw-valley': {
    name: 'Squaw Valley',
    logo: '/images/resorts/squaw.svg',
    coords: { lat: 39.1969822, lng: -120.2431388 },
    location: 'Olympic Valley, CA 96146',
  },
  'alpine-meadows': {
    name: 'Alpine Meadows',
    logo: '/images/resorts/squaw.svg',
    coords: { lat: 39.154969, lng: -120.238209 },
    location: 'Alpine Meadows, CA 96146',
  },
  'diamond-peak': {
    name: 'Diamond Peak',
    logo: '/images/resorts/diamond.svg',
    coords: { lat: 39.253813, lng: -119.92171 },
    location: 'Incline Village, NV 89451',
  },
  heavenly: {
    name: 'Heavenly',
    logo: '/images/resorts/heavenly.svg',
    coords: { lat: 38.929011, lng: -119.906233 },
    location: 'Stateline, NV 89449',
  },
  kirkwood: {
    name: 'Kirkwood',
    logo: '/images/resorts/kirkwood.svg',
    coords: { lat: 38.678233, lng: -120.063198 },
    location: 'Kirkwood, CA 95646',
  },
  northstar: {
    name: 'Northstar',
    logo: '/images/resorts/northstar.svg',
    coords: { lat: 39.258638, lng: -120.133293 },
    location: 'Truckee, CA 96161',
  },
  homewood: {
    name: 'Homewood',
    logo: '/images/resorts/homewood.svg',
    coords: { lat: 39.077952, lng: -120.171985 },
    location: 'Homewood, CA 96141',
  },
  'sugar-bowl': {
    name: 'Sugar Bowl',
    logo: '/images/resorts/sugarbowl.svg',
    coords: { lat: 39.3000277, lng: -120.3437774 },
    location: 'Norden, CA 95724',
  },
  'donner-ski-ranch': {
    name: 'Donner Ski Ranch',
    logo: '/images/resorts/donner.svg',
    coords: { lat: 39.318255, lng: -120.330083 },
    location: 'Norden, CA 95724',
  },
  'mt-rose': {
    name: 'Mt Rose',
    logo: '/images/resorts/mt-rose.svg',
    coords: { lat: 39.314905, lng: -119.881005 },
    location: 'Reno, NV 89511',
  },
  boreal: {
    name: 'Boreal',
    logo: '/images/resorts/boreal.svg',
    coords: { lat: 39.332769, lng: -120.347075 },
    location: 'Soda Springs, CA 95728',
  },
};

const createMetadata = (shortName, resort) => {
  const weatherIcon =
    idx(resort, _ => _.weather.weatherIcon) ||
    idx(resort, _ => _.snow.weatherIcon);

  const temperature =
    idx(resort, _ => _.weather.temperature) ||
    idx(resort, _ => _.snow.temperature);

  const openLifts = resort.lifts.filter(lift => lift.status === 'open');
  let openLiftCounts = openLifts.length;
  if (!openLiftCounts && resort.liftCounts.open) {
    openLiftCounts = resort.liftCounts.open;
  }

  let totalLiftCounts = resort.lifts.length;
  if (!totalLiftCounts && !resort.liftCounts.total) {
    totalLiftCounts = null;
  } else if (!totalLiftCounts && resort.liftCounts.total) {
    totalLiftCounts = resort.liftCounts.total;
  }

  const openTrails = resort.trails.filter(lift => lift.status === 'open');
  let openTrailsCounts = openTrails.length;
  if (!openTrailsCounts && resort.trailCounts.open) {
    openTrailsCounts = resort.trailCounts.open;
  }

  let totalTrailCounts = resort.trails.length;
  if (!totalTrailCounts && !resort.trailCounts.total) {
    totalTrailCounts = null;
  } else if (!totalTrailCounts && resort.trailCounts.total) {
    totalTrailCounts = resort.trailCounts.total;
  }

  let status = 'closed';
  if (openLiftCounts > 0 || openTrailsCounts > 0) {
    status = 'open';
  }

  const roads = Array.isArray(resort.roads) ? resort.roads : [resort.roads];

  return {
    ...metadata[shortName],
    status,
    weather: {
      base: resort.snow.baseCondition,
      newSnow: resort.snow.newSnow,
      condition: weatherIcon,
      snowDepth: resort.snow.snowDepthSummit,
      temperature,
    },
    liftCounts: {
      open: openLiftCounts,
      total: totalLiftCounts,
    },
    trailCounts: {
      open: openTrailsCounts,
      total: totalTrailCounts,
    },
    roads,
    stale: resort.stale,
  };
};

export default createMetadata;
