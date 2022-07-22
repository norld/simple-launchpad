'use strict';

/**
 * token-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::token-info.token-info');
