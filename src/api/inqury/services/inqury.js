'use strict';

/**
 * inqury service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inqury.inqury');
