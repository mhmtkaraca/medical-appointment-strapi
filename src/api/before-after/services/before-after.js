'use strict';

/**
 * before-after service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::before-after.before-after');
