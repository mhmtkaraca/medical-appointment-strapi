'use strict';

/**
 * before-after router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::before-after.before-after');
