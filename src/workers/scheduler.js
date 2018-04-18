import { CronJob } from 'cron';
import Raven from 'raven';

// workers
import { run as runParseWorker } from './parseWorker';
import { run as runNewslettersWorker } from './newslettersWorker';
import { run as runNotificationsWorkerAM } from './notificationsWorker/index-am';
import { run as runNotificationsWorkerPM } from './notificationsWorker/index-pm';
import { run as runSocialMediaWorker } from './socialMediaWorker';
import { run as snapshotWorker } from './snapshotWorker';

const TIMEZONE = 'Etc/UTC';
// const EVERY_SECOND = '* * * * * *';
const EVERY_HALF_HOUR = '*/30 * * * *';
// const EVERY_HOUR = '0 * * * *';

// 1 PM PST
const EVERYDAY_AT_8_PM = '0 20 * * *';
// 5 AM PST
const EVERYDAY_AT_12_PM = '0 12 * * *';
// 5 PM PST
const EVERYDAY_AT_12_AM = '0 0 * * *';
// 11:45 PM PST
const EVERYDAY_AT_11_45_PM = '45 23 * * *';

const parserJob = new CronJob(
  EVERY_HALF_HOUR,
  async () => {
    try {
      await runParseWorker();
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable */
      Raven.captureException(error);
    }
  },
  null,
  false, /* Start the job right now */
  TIMEZONE,
);

const newslettersJob = new CronJob(
  EVERYDAY_AT_8_PM,
  async () => {
    try {
      await runNewslettersWorker();
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable */
      Raven.captureException(error);
    }
  },
  null,
  false,
  TIMEZONE,
);

const socialMediaJob = new CronJob(
  EVERYDAY_AT_8_PM,
  async () => {
    try {
      await runSocialMediaWorker();
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable */
      Raven.captureException(error);
    }
  },
  null,
  false,
  TIMEZONE,
);

const notificationsAMJob = new CronJob(
  EVERYDAY_AT_12_PM,
  async () => {
    try {
      await runNotificationsWorkerAM();
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable */
      Raven.captureException(error);
    }
  },
  null,
  false,
  TIMEZONE,
);

const notificationsPMJob = new CronJob(
  EVERYDAY_AT_12_AM,
  async () => {
    try {
      await runNotificationsWorkerPM();
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable */
      Raven.captureException(error);
    }
  },
  null,
  false,
  TIMEZONE,
);

const snapshotJob = new CronJob(
  EVERYDAY_AT_11_45_PM,
  async () => {
    try {
      await snapshotWorker();
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable */
      Raven.captureException(error);
    }
  },
  null,
  false,
  TIMEZONE,
);

export const run = () => {
  parserJob.start();
  newslettersJob.start();
  socialMediaJob.start();
  notificationsAMJob.start();
  notificationsPMJob.start();
  snapshotJob.start();
};
