const SIERRA_AT_TAHOE_COORDS = {
  lat: 38.795716,
  lng: -120.0796698,
};

const SQUAW_ALPINE_COORDS = {
  lat: 39.1909452,
  lng: -120.248888,
};

export const DB = {
  resorts: [
    {
      id: '81e32949-79e7-43ff-a677-38c1c27c1fe6',
      name: 'Squaw Valley',
      shortName: 'squaw-valley',
      logo: '/images/resorts/squaw.svg',
      location: 'Olympic Valley, CA 96146',
      status: 'Open',
      coords: SQUAW_ALPINE_COORDS,
      weather: {
        condition: 'snow',
        temperature: 28,
        base: 'Powder',
        newSnow: 8,
        snowDepth: 180,
      },
      liftCounts: {
        total: 10,
        open: 5,
      },
      trailCounts: {
        total: 23,
        open: 18,
      },
      routes: {
        hw50: {
          label: '50',
          status: 'Closed',
          chains: 'R1',
        },
        hw80: {
          label: '80',
          status: 'Open',
          chains: 'R2',
        },
        hw88: {
          label: '88',
          status: 'Closed',
          chains: 'R1',
        },
      },
    },
    {
      id: '81e32949-79e7-43ff-a678-38c1c27c1fe6',
      name: 'Sierra-at-Tahoe',
      shortName: 'sierra-at-tahoe',
      logo: '/images/resorts/sierra.svg',
      location: 'Twin Bridges, CA 96146',
      status: 'Closed',
      coords: SIERRA_AT_TAHOE_COORDS,
      weather: {
        condition: 'thunderstorm',
        temperature: 40,
        base: 'Slush',
        newSnow: 12,
        snowDepth: 130,
      },
      liftCounts: {
        total: 8,
        open: 5,
      },
      trailCounts: {
        total: 40,
        open: 16,
      },
      routes: {
        hw50: {
          label: '50',
          status: 'Open',
          // chains: 'R1',
        },
        hw80: {
          label: '80',
          status: 'Closed',
          // chains: 'R1',
        },
        hw88: {
          label: '88',
          status: 'Closed',
          // chains: 'R1',
        },
      },
    },
  ]
};
