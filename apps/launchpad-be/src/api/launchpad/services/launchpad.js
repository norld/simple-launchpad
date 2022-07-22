'use strict';

/**
 * launchpad service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::launchpad.launchpad');
