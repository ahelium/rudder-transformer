import { defaultMockFns } from '../mocks';
export const data = [
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'Products Searched' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99v4f979fb997ce453373900f891',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'Products Searched',
              properties: {
                query: 't-shirts',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-22T10:57:58Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
                  timestamp_micros: 1650950229000000,
                  events: [
                    {
                      name: 'search',
                      params: {
                        search_term: 't-shirts',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product list viewed' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              rudderId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99v4f979fb997ce453373900f891',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product list viewed',
              properties: {
                list_id: 'related_products',
                category: 'Related_products',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'view_item_list',
                      params: {
                        item_list_id: 'related_products',
                        item_list_name: 'Related_products',
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'promotion viewed' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'promotion viewed',
              properties: {
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '0',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    creative_name: 'summer_banner2',
                    creative_slot: 'featured_app_1',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'view_promotion',
                      params: {
                        creative_name: 'Summer Banner',
                        creative_slot: 'featured_app_1',
                        location_id: 'L_12345',
                        promotion_id: 'P_12345',
                        promotion_name: 'Summer Sale',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 0,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                            promotion_id: 'P_12345',
                            promotion_name: 'Summer Sale',
                            creative_name: 'summer_banner2',
                            creative_slot: 'featured_app_1',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'promotion clicked' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'promotion clicked',
              properties: {
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '0',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    creative_name: 'summer_banner2',
                    creative_slot: 'featured_app_1',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'select_promotion',
                      params: {
                        creative_name: 'Summer Banner',
                        creative_slot: 'featured_app_1',
                        location_id: 'L_12345',
                        promotion_id: 'P_12345',
                        promotion_name: 'Summer Sale',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 0,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                            promotion_id: 'P_12345',
                            promotion_name: 'Summer Sale',
                            creative_name: 'summer_banner2',
                            creative_slot: 'featured_app_1',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) exclude only 'products' property from 'promotion clicked' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'promotion clicked',
              properties: {
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'select_promotion',
                      params: {
                        creative_name: 'Summer Banner',
                        creative_slot: 'featured_app_1',
                        location_id: 'L_12345',
                        promotion_id: 'P_12345',
                        promotion_name: 'Summer Sale',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product clicked' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product clicked',
              properties: {
                list_id: 'related_products',
                category: 'Related_products',
                product_id: '507f1f77bcf86cd799439011',
                name: 'Monopoly: 3rd Edition',
                coupon: 'SUMMER_FUN',
                brand: 'Google',
                variant: 'green',
                price: '19',
                quantity: '2',
                position: '1',
                affiliation: 'Google Merchandise Store',
                currency: 'USD',
                discount: 2.22,
                item_category2: 'Adult',
                item_category3: 'Shirts',
                item_category4: 'Crew',
                item_category5: 'Short sleeve',
                item_list_id: 'related_products',
                item_list_name: 'Related Products',
                location_id: 'L_12345',
                timezone: {
                  name: 'Europe/Tallinn',
                },
                engagementTimeMsec: 100,
                sessionId: 655,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'select_item',
                      params: {
                        item_list_id: 'related_products',
                        item_list_name: 'Related_products',
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Related_products',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                        timezone_name: 'Europe/Tallinn',
                        engagement_time_msec: 100,
                        session_id: 655,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product viewed' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product viewed',
              properties: {
                currency: 'USD',
                total: '7.77',
                product_id: '507f1f77bcf86cd799439011',
                name: 'Monopoly: 3rd Edition',
                coupon: 'SUMMER_FUN',
                category: 'Apparel',
                brand: 'Google',
                variant: 'green',
                price: '19',
                quantity: '2',
                position: '1',
                affiliation: 'Google Merchandise Store',
                discount: 2.22,
                item_category2: 'Adult',
                item_category3: 'Shirts',
                item_category4: 'Crew',
                item_category5: 'Short sleeve',
                item_list_id: 'related_products',
                item_list_name: 'Related Products',
                location_id: 'L_12345',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'view_item',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'promotion clicked' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'promotion clicked',
              properties: {
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '0',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    creative_name: 'summer_banner2',
                    creative_slot: 'featured_app_1',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                typesOfClient: 'gtag',
                firebaseAppId: '1:17864591371:android:7a9520d3c78962e21f9fee',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'select_promotion',
                      params: {
                        creative_name: 'Summer Banner',
                        creative_slot: 'featured_app_1',
                        location_id: 'L_12345',
                        promotion_id: 'P_12345',
                        promotion_name: 'Summer Sale',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 0,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                            promotion_id: 'P_12345',
                            promotion_name: 'Summer Sale',
                            creative_name: 'summer_banner2',
                            creative_slot: 'featured_app_1',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(firebase) check all property mappings for 'promotion clicked' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'promotion clicked',
              properties: {
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '0',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    creative_name: 'summer_banner2',
                    creative_slot: 'featured_app_1',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                typesOfClient: 'firebase',
                firebaseAppId: '1:17864591371:android:7a9520d3c78962e21f9fee',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                firebase_app_id: '1:17864591371:android:7a9520d3c78962e21f9fee',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  app_instance_id: 'f0dd99b6f979fb551ce583373900f937',
                  events: [
                    {
                      name: 'select_promotion',
                      params: {
                        creative_name: 'Summer Banner',
                        creative_slot: 'featured_app_1',
                        location_id: 'L_12345',
                        promotion_id: 'P_12345',
                        promotion_name: 'Summer Sale',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 0,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                            promotion_id: 'P_12345',
                            promotion_name: 'Summer Sale',
                            creative_name: 'summer_banner2',
                            creative_slot: 'featured_app_1',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product added' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                total: '7.77',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product removed' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product removed',
              properties: {
                currency: 'USD',
                total: '7.77',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
                engagementTimeMsec: 100,
                sessionId: 655,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'remove_from_cart',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                        engagement_time_msec: 100,
                        session_id: 655,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'cart viewed' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'cart viewed',
              properties: {
                currency: 'USD',
                total: '7.77',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'view_cart',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'checkout started' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'checkout started',
              properties: {
                currency: 'USD',
                total: 7.77,
                coupon: 'SUMMER_FUN',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'begin_checkout',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        coupon: 'SUMMER_FUN',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      "(gtag) check all property mappings for 'payment info entered' -> 'add_payment_info' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'payment info entered',
              properties: {
                currency: 'USD',
                value: '7.77',
                coupon: 'SUMMER_FUN',
                payment_method: 'Credit Card',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        coupon: 'SUMMER_FUN',
                        payment_type: 'Credit Card',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                      name: 'add_payment_info',
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      "(gtag) check all property mappings for 'checkout Step Completed' -> 'add_shipping_info' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'checkout Step Completed',
              properties: {
                currency: 'USD',
                value: '7.77',
                coupon: 'SUMMER_FUN',
                shipping_method: 'Ground',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        coupon: 'SUMMER_FUN',
                        shipping_tier: 'Ground',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                      name: 'add_shipping_info',
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'order completed' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'order completed',
              properties: {
                currency: 'USD',
                order_id: 'T_12345',
                total: 12.21,
                affiliation: 'Google Store',
                coupon: 'SUMMER_FUN',
                shipping: 3.33,
                tax: 1.11,
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'purchase',
                      params: {
                        currency: 'USD',
                        transaction_id: 'T_12345',
                        value: 12.21,
                        affiliation: 'Google Store',
                        coupon: 'SUMMER_FUN',
                        shipping: 3.33,
                        tax: 1.11,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'order refunded' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'order refunded',
              properties: {
                currency: 'USD',
                order_id: 'T_12345',
                total: 12.21,
                affiliation: 'Google Store',
                coupon: 'SUMMER_FUN',
                shipping: 3.33,
                tax: 1.11,
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'refund',
                      params: {
                        currency: 'USD',
                        transaction_id: 'T_12345',
                        value: 12.21,
                        affiliation: 'Google Store',
                        coupon: 'SUMMER_FUN',
                        shipping: 3.33,
                        tax: 1.11,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) exclude only 'products' property from 'order refunded' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'order refunded',
              properties: {
                currency: 'USD',
                order_id: 'T_12345',
                total: 12.21,
                affiliation: 'Google Store',
                coupon: 'SUMMER_FUN',
                shipping: 3.33,
                tax: 1.11,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'refund',
                      params: {
                        currency: 'USD',
                        transaction_id: 'T_12345',
                        value: 12.21,
                        affiliation: 'Google Store',
                        coupon: 'SUMMER_FUN',
                        shipping: 3.33,
                        tax: 1.11,
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product added to wishlist' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added to wishlist',
              properties: {
                currency: 'USD',
                total: '7.77',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'add_to_wishlist',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product_shared' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product_shared',
              properties: {
                share_via: 'Twitter',
                content_type: 'image',
                item_id: 'C_12345',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'share',
                      params: {
                        method: 'Twitter',
                        content_type: 'image',
                        item_id: 'C_12345',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'product_shared' event name without it's properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product_shared',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'share',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'cart Shared' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'cart Shared',
              properties: {
                share_via: 'Twitter',
                content_type: 'image',
                item_id: 'C_12345',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'share',
                      params: {
                        method: 'Twitter',
                        content_type: 'image',
                        item_id: 'C_12345',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'cart Shared' event name with empty properties: {}",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'cart Shared',
              properties: {},
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'share',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) check all property mappings for group call',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'group',
              properties: {
                group_id: 'G_12345',
                engagementTimeMsec: 100,
                sessionId: 655,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'group',
                      params: {
                        group_id: 'G_12345',
                        engagement_time_msec: 100,
                        session_id: 655,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) group: send only group event name without it's properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'group',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'group',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'earn virtual currency' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'earn virtual currency',
              properties: {
                virtual_currency_name: 'Gems',
                value: 5,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'earn_virtual_currency',
                      params: {
                        virtual_currency_name: 'Gems',
                        value: 5,
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'earn virtual currency' event name without it's properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'earn virtual currency',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'earn_virtual_currency',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'generate_lead' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'generate_lead',
              properties: {
                currency: 'USD',
                value: 99.99,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'generate_lead',
                      params: {
                        currency: 'USD',
                        value: 99.99,
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'level_up' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'level_up',
              properties: {
                level: 5,
                character: 'Player 1',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'level_up',
                      params: {
                        level: 5,
                        character: 'Player 1',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'level_up' event name without it's properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'level_up',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'level_up',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'login' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'login',
              properties: {
                method: 'Google',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'login',
                      params: {
                        method: 'Google',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'login' event name without it's properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'login',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'login',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'post_score' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'post_score',
              properties: {
                score: 10000,
                level: 5,
                character: 'Player 1',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'post_score',
                      params: {
                        score: 10000,
                        level: 5,
                        character: 'Player 1',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'login' event name with its required `score` properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'post_score',
              properties: {
                score: 10000,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'post_score',
                      params: {
                        score: 10000,
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'select_content' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'select_content',
              properties: {
                content_type: 'product',
                item_id: 'I_12345',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'select_content',
                      params: {
                        content_type: 'product',
                        item_id: 'I_12345',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'group' event name without it's properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'select_content',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'select_content',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'sign_up' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'sign_up',
              properties: {
                method: 'Google',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'sign_up',
                      params: {
                        method: 'Google',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send only 'sign_up' event name without it's properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'sign_up',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'sign_up',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'spend_virtual_currency' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'spend_virtual_currency',
              properties: {
                value: 5,
                virtual_currency_name: 'Gems',
                item_name: 'Starter Boost',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'spend_virtual_currency',
                      params: {
                        value: 5,
                        virtual_currency_name: 'Gems',
                        item_name: 'Starter Boost',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      "(gtag) send only 'spend_virtual_currency' event name with it's required 'value' and 'virtual_currency_name' properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'spend_virtual_currency',
              properties: {
                value: 5,
                virtual_currency_name: 'Gems',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'spend_virtual_currency',
                      params: {
                        value: 5,
                        virtual_currency_name: 'Gems',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send 'tutorial_begin' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutorial_begin',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'tutorial_begin',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send 'tutorial_complete' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutorial_complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'tutorial_complete',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send all properties for 'unlock_achievement' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'unlock_achievement',
              properties: {
                achievement_id: 'A_12345',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'unlock_achievement',
                      params: {
                        achievement_id: 'A_12345',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) send all properties for 'view_search_results' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'view_search_results',
              properties: {
                search_term: 'Clothing',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'view_search_results',
                      params: {
                        search_term: 'Clothing',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) pass only 'products: [...]' property for 'view_search_results' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'view_search_results',
              properties: {
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'view_search_results',
                      params: {
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      "(gtag) pass custom event name 'rudderstack event' to GA4 along with custom properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'rudderstack event',
              properties: {
                total: '10',
                timezone: {
                  name: 'Europe/Tallinn',
                },
                engagementTimeMsec: 100,
                sessionId: 655,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'rudderstack_event',
                      params: {
                        total: '10',
                        timezone_name: 'Europe/Tallinn',
                        engagement_time_msec: 100,
                        session_id: 655,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      "(gtag) pass custom event name 'rudderstack event' to GA4 along with custom properties and user_properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'rudderstack event',
              properties: {
                total: '10',
                user_properties: {
                  price: '19',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  user_properties: {
                    price: {
                      value: '19',
                    },
                  },
                  events: [
                    {
                      name: 'rudderstack_event',
                      params: {
                        total: '10',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error]: (gtag) pass reserved event name to GA4',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'ad_click',
              properties: {
                total: '10',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'track:: Reserved event names are not allowed',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Exclusion]: (gtag) pass reserved property name to GA4 for custom events',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'rudderstack event',
              properties: {
                firebase_conversion: 'firebase_conversion',
                google_id: '1234',
                ga_value: 'ga_value',
                value: '10',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'rudderstack_event',
                      params: {
                        value: '10',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      '[Exclusion]: (gtag) pass reserved property name and reserved properties in `user_properties` to GA4 for custom events',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'rudderstack event',
              properties: {
                firebase_conversion: 'firebase_conversion',
                google_id: '1234',
                ga_value: 'ga_value',
                value: '10',
                user_properties: {
                  first_open_time: 'first_open_time',
                  user_id: 'user_id',
                  firebase_value: 'firebase_value',
                  price: '100',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  user_properties: {
                    price: {
                      value: '100',
                    },
                  },
                  events: [
                    {
                      name: 'rudderstack_event',
                      params: {
                        value: '10',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error]: (gtag) pass reserved event names along with reserved properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'app_remove',
              properties: {
                firebase_conversion: 'firebase_conversion',
                google_id: '1234',
                ga_value: 'ga_value',
                value: '10',
                user_properties: {
                  first_open_time: 'first_open_time',
                  user_id: 'user_id',
                  firebase_value: 'firebase_value',
                  price: '100',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'track:: Reserved event names are not allowed',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Error] (gtag) pass reserved custom prefix names to GA4 events',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'firebase_event1',
              properties: {
                firebase_conversion: 'firebase_conversion',
                google_id: '1234',
                ga_value: 'ga_value',
                value: '10',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Reserved custom prefix names are not allowed',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'product added' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                total: '7.77',
                google_data: 'google_data',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) pass custom event name with its properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'rudderstack event',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'rudderstack_event',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) map 'product added' properties to ga4 'add_to_cart' items array",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                affiliation: 'Google Merchandise Store',
                brand: 'Google',
                category: 'Related_products',
                coupon: 'SUMMER_FUN',
                currency: 'USD',
                discount: 2.22,
                item_category2: 'Adult',
                item_category3: 'Shirts',
                item_category4: 'Crew',
                item_category5: 'Short sleeve',
                item_list_id: 'related_products',
                item_list_name: 'Related Products',
                list_id: 'related_products',
                location_id: 'L_12345',
                name: 'Monopoly: 3rd Edition',
                position: '1',
                price: '19',
                product_id: '507f1f77bcf86cd799439011',
                products: [],
                quantity: '2',
                total: '7.77',
                variant: 'green',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                FORM: {},
                JSON: {
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        currency: 'USD',
                        engagement_time_msec: 1,
                        items: [
                          {
                            affiliation: 'Google Merchandise Store',
                            coupon: 'SUMMER_FUN',
                            currency: 'USD',
                            discount: 2.22,
                            index: 1,
                            item_brand: 'Google',
                            item_category: 'Related_products',
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_id: '507f1f77bcf86cd799439011',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            item_name: 'Monopoly: 3rd Edition',
                            item_variant: 'green',
                            location_id: 'L_12345',
                            price: 19,
                            quantity: 2,
                          },
                        ],
                        list_id: 'related_products',
                        value: 7.77,
                      },
                    },
                  ],
                  non_personalized_ads: true,
                  timestamp_micros: 1650950229000000,
                },
                JSON_ARRAY: {},
                XML: {},
              },
              endpoint: 'https://www.google-analytics.com/mp/collect',
              files: {},
              headers: {
                'Content-Type': 'application/json',
                HOST: 'www.google-analytics.com',
              },
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              type: 'REST',
              version: '1',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      '(gtag) pass event name with invalid data type for products: {...} properties (when products parameter is optional)',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                total: '7.77',
                products: {
                  product_id: '507f1f77bcf86cd799439011',
                  name: 'Monopoly: 3rd Edition',
                  coupon: 'SUMMER_FUN',
                  category: 'Apparel',
                  brand: 'Google',
                  variant: 'green',
                  price: '19',
                  quantity: '2',
                  position: '1',
                  affiliation: 'Google Merchandise Store',
                  currency: 'USD',
                  discount: 2.22,
                  item_category2: 'Adult',
                  item_category3: 'Shirts',
                  item_category4: 'Crew',
                  item_category5: 'Short sleeve',
                  item_list_id: 'related_products',
                  item_list_name: 'Related Products',
                  location_id: 'L_12345',
                },
                affiliation: 'Google Merchandise Store',
                brand: 'Google',
                category: 'Related_products',
                coupon: 'SUMMER_FUN',
                discount: 2.22,
                item_category2: 'Adult',
                item_category3: 'Shirts',
                item_category4: 'Crew',
                item_category5: 'Short sleeve',
                item_list_id: 'related_products',
                item_list_name: 'Related Products',
                list_id: 'related_products',
                location_id: 'L_12345',
                name: 'Monopoly: 3rd Edition',
                position: '1',
                price: '19',
                product_id: '507f1f77bcf86cd799439011',
                quantity: '2',
                variant: 'green',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                FORM: {},
                JSON: {
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        currency: 'USD',
                        engagement_time_msec: 1,
                        items: [
                          {
                            affiliation: 'Google Merchandise Store',
                            coupon: 'SUMMER_FUN',
                            currency: 'USD',
                            discount: 2.22,
                            index: 1,
                            item_brand: 'Google',
                            item_category: 'Related_products',
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_id: '507f1f77bcf86cd799439011',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            item_name: 'Monopoly: 3rd Edition',
                            item_variant: 'green',
                            location_id: 'L_12345',
                            price: 19,
                            quantity: 2,
                          },
                        ],
                        list_id: 'related_products',
                        value: 7.77,
                      },
                    },
                  ],
                  non_personalized_ads: true,
                  timestamp_micros: 1650950229000000,
                },
                JSON_ARRAY: {},
                XML: {},
              },
              endpoint: 'https://www.google-analytics.com/mp/collect',
              files: {},
              headers: {
                'Content-Type': 'application/json',
                HOST: 'www.google-analytics.com',
              },
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              type: 'REST',
              version: '1',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      '[Error] (gtag) pass event name to GA4 with missing fields i.e required in products: [..]',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                total: '7.77',
                products: [
                  {
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'One of product_id or name is required',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description:
      '[Error] (gtag) pass event name to GA4 with missing fields i.e required in properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'Product Viewed',
              properties: {
                currency: 'USD',
                total: '7.77',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'One of product_id or name is required',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Error] (gtag) missing API Secret',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutotial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'API Secret not found. Aborting ',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'configuration',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Error] (gtag) missing measurementId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutotial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: '',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'measurementId must be provided. Aborting',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'configuration',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '(gtag) firing group event with event name. should take event name by default',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'group',
              event: 'tutorial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'join_group',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error] (gtag) payload has missing message.type',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              event: 'tutotial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Message Type is not present. Aborting message.',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Error] (gtag) payload has missing event name',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Event name is required',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '(gtag) taking client_id from anonymousId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutotial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
                  events: [
                    {
                      name: 'tutotial_complete',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error] (firebase) payload has missing ga4AppInstanceId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutotial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: '',
                firebaseAppId: '1:17864591371:android:7a9520d3c78962e21f9fee',
                blockPageViewEvent: false,
                typesOfClient: 'firebase',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'ga4AppInstanceId must be provided under externalId',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Error] (firebase) pass reserved event name',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'app_store_subscription_cancel',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: '',
                firebaseAppId: '1:17864591371:android:7a9520d3c78962e21f9fee',
                blockPageViewEvent: false,
                typesOfClient: 'firebase',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Reserved custom event names are not allowed',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'tutorial complete' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutorial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'tutorial_complete',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) check all property mappings for 'cart viewed' event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'cart viewed',
              properties: {
                currency: 'USD',
                total: '7.77',
                products: [
                  {
                    product_id: 0,
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'view_cart',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: 0,
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error]: (firebase) missing firebaseAppId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'promotion clicked',
              properties: {
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '0',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    creative_name: 'summer_banner2',
                    creative_slot: 'featured_app_1',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: '',
                typesOfClient: 'firebase',
                firebaseAppId: '',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'firebaseAppId must be provided. Aborting',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'configuration',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '(gtag) firing page call',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              rudderId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'page',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  events: [
                    {
                      name: 'page_view',
                      params: {
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) firing page call with custom properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              rudderId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'page',
              event: 'page view',
              properties: {
                view: 'login',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  events: [
                    {
                      name: 'page_view',
                      params: {
                        view: 'login',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error]: (gtag) pass timestamp more than 72 hours into the past',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-20T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutotial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                blockPageViewEvent: false,
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Allowed timestamp is [72 hours] into the past',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Error]: (gtag) pass timestamp more than 15 min into the future',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-05-05T15:47:57Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'tutotial complete',
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                blockPageViewEvent: false,
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Allowed timestamp is [15 minutes] into the future',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description:
      '(gtag) pass custom properties along with products: [..] parameters to GA4 standard events along with its stated ones',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'order completed',
              properties: {
                checkout_id: '12345',
                order_id: '1234',
                myCustomProp: 'My arbitray value',
                affiliation: 'Apple Store',
                total: 20,
                revenue: 15,
                shipping: 22,
                tax: 1,
                discount: 1.5,
                coupon: 'ImagePro',
                currency: 'USD',
                products: [
                  {
                    product_id: '123',
                    sku: 'G-32',
                    name: 'Monopoly',
                    price: 14,
                    quantity: 1,
                    category: 'Games',
                    item_category2: 'Board games',
                    url: 'https://www.website.com/product/path',
                    image_url: 'https://www.website.com/product/path.jpg',
                  },
                ],
                timezone: {
                  name: 'Europe/Tallinn',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'purchase',
                      params: {
                        checkout_id: '12345',
                        transaction_id: '1234',
                        myCustomProp: 'My arbitray value',
                        affiliation: 'Apple Store',
                        value: 20,
                        shipping: 22,
                        tax: 1,
                        discount: 1.5,
                        coupon: 'ImagePro',
                        currency: 'USD',
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '123',
                            sku: 'G-32',
                            item_name: 'Monopoly',
                            price: 14,
                            quantity: 1,
                            item_category: 'Games',
                            item_category2: 'Board games',
                            url: 'https://www.website.com/product/path',
                            image_url: 'https://www.website.com/product/path.jpg',
                          },
                        ],
                        timezone_name: 'Europe/Tallinn',
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      '(gtag) pass custom properties excluding products: [..] parameter to GA4 standard events along with its stated ones',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'promotion clicked',
              properties: {
                'customProp-1': 'check-1',
                'customProp-2': 'check-2',
                timezone: {
                  name: 'Europe/Tallinn',
                },
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'select_promotion',
                      params: {
                        'customProp-1': 'check-1',
                        'customProp-2': 'check-2',
                        timezone_name: 'Europe/Tallinn',
                        creative_name: 'Summer Banner',
                        creative_slot: 'featured_app_1',
                        location_id: 'L_12345',
                        promotion_id: 'P_12345',
                        promotion_name: 'Summer Sale',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: "(gtag) message type group -> 'join_group' with custom event",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'group',
              traits: {
                custom1: 1234,
                custom2: 'custom2',
                timezone: {
                  name: 'Europe/Tallinn',
                },
                engagementTimeMsec: 100,
                sessionId: 655,
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'join_group',
                      params: {
                        custom1: 1234,
                        custom2: 'custom2',
                        timezone_name: 'Europe/Tallinn',
                        engagement_time_msec: 100,
                        session_id: 655,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag): check args keyword for price x currency multiplication',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                price: 2.4,
                quantity: 2,
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        currency: 'USD',
                        value: 4.8,
                        engagement_time_msec: 1,
                        items: [
                          {
                            item_id: '507f1f77bcf86cd799439011',
                            item_name: 'Monopoly: 3rd Edition',
                            coupon: 'SUMMER_FUN',
                            item_category: 'Apparel',
                            item_brand: 'Google',
                            item_variant: 'green',
                            price: 19,
                            quantity: 2,
                            index: 1,
                            affiliation: 'Google Merchandise Store',
                            currency: 'USD',
                            discount: 2.22,
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_id: 'related_products',
                            item_list_name: 'Related Products',
                            location_id: 'L_12345',
                          },
                        ],
                        price: 2.4,
                        quantity: 2,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      "(gtag): take page properties from context.page for 'page' call along with custom properties",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              rudderId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                page: {
                  url: 'http://morkey.in',
                  path: '/cart',
                  title: 'miphone',
                  search: 'MI',
                  referrer: 'morkey',
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'page',
              integrations: {
                All: true,
              },
              properties: {
                cust1: 1234,
                engagementTimeMsec: 100,
                sessionId: 655,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  events: [
                    {
                      name: 'page_view',
                      params: {
                        page_referrer: 'morkey',
                        page_title: 'miphone',
                        page_location: 'http://morkey.in',
                        cust1: 1234,
                        engagement_time_msec: 100,
                        session_id: 655,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error] GA4: event not as string',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: {
                name: 'promotion_viewed',
              },
              properties: {
                creative_name: 'Summer Banner',
                creative_slot: 'featured_app_1',
                location_id: 'L_12345',
                promotion_id: 'P_12345',
                promotion_name: 'Summer Sale',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '0',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    creative_name: 'summer_banner2',
                    creative_slot: 'featured_app_1',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'track:: event name should be string',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '[Error] GA4: client_id not found in all four path',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                price: 2.4,
                quantity: 2,
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: true,
                sendLoginSignup: true,
                newOrExistingUserTrait: 'firstLogin',
                loginSignupMethod: 'method',
                generateLead: true,
                generateLeadValueTrait: 'value',
                generateLeadCurrencyTrait: 'currency',
                clientIdFieldIdentifier: 'properties.client_id',
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'ga4ClientId, anonymousId or messageId must be provided',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'configuration',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description:
      "client_id isn't sent from the path defined in the webapp config, falling back to default values i.e here it is anonymousId",
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                price: 2.4,
                quantity: 2,
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: true,
                sendLoginSignup: true,
                newOrExistingUserTrait: 'firstLogin',
                loginSignupMethod: 'method',
                generateLead: true,
                generateLeadValueTrait: 'value',
                generateLeadCurrencyTrait: 'currency',
                clientIdFieldIdentifier: 'properties.client_id',
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        items: [
                          {
                            index: 1,
                            price: 19,
                            coupon: 'SUMMER_FUN',
                            item_id: '507f1f77bcf86cd799439011',
                            currency: 'USD',
                            discount: 2.22,
                            quantity: 2,
                            item_name: 'Monopoly: 3rd Edition',
                            item_brand: 'Google',
                            affiliation: 'Google Merchandise Store',
                            location_id: 'L_12345',
                            item_list_id: 'related_products',
                            item_variant: 'green',
                            item_category: 'Apparel',
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_name: 'Related Products',
                          },
                        ],
                        price: 2.4,
                        value: 4.8,
                        currency: 'USD',
                        quantity: 2,
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  client_id: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      'any custom or item property with array value, is flattened with underscore delimeter',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'product added',
              originalTimestamp: '2022-04-26T05:17:09Z',
              properties: {
                currency: 'USD',
                total: '7.77',
                product_id: '507f1f77bcf86cd799439011',
                name: 'Monopoly: 3rd Edition',
                coupon: 'SUMMER_FUN',
                category: 'Apparel',
                brand: 'Google',
                variant: 'green',
                price: '19',
                quantity: '2',
                position: '1',
                affiliation: 'Google Merchandise Store',
                discount: 2.22,
                item_category2: 'Adult',
                item_category3: 'Shirts',
                item_category4: 'Crew',
                item_category5: 'Short sleeve',
                item_list_id: 'related_products',
                item_list_name: 'Related Products',
                location_id: 'L_12345',
                address: {
                  city: 'kolkata',
                  district: '24pgs',
                },
                categoryLevels: ['Furniture', 'Bedroom Furniture', 'Dressers & Chests'],
                products: [
                  {
                    product_id: '1234',
                    product_details: {
                      colour: 'red',
                      shape: 'rectangle',
                    },
                    productLevels: ['test1', 'test2', 'test3'],
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2022-11-14T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  client_id: 'client_id',
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        currency: 'USD',
                        value: 7.77,
                        items: [
                          {
                            item_id: '1234',
                            product_details_colour: 'red',
                            product_details_shape: 'rectangle',
                            productLevels_0: 'test1',
                            productLevels_1: 'test2',
                            productLevels_2: 'test3',
                          },
                        ],
                        product_id: '507f1f77bcf86cd799439011',
                        name: 'Monopoly: 3rd Edition',
                        coupon: 'SUMMER_FUN',
                        category: 'Apparel',
                        brand: 'Google',
                        variant: 'green',
                        price: '19',
                        quantity: '2',
                        position: '1',
                        affiliation: 'Google Merchandise Store',
                        discount: 2.22,
                        item_category2: 'Adult',
                        item_category3: 'Shirts',
                        item_category4: 'Crew',
                        item_category5: 'Short sleeve',
                        item_list_id: 'related_products',
                        item_list_name: 'Related Products',
                        location_id: 'L_12345',
                        address_city: 'kolkata',
                        address_district: '24pgs',
                        categoryLevels_0: 'Furniture',
                        categoryLevels_1: 'Bedroom Furniture',
                        categoryLevels_2: 'Dressers & Chests',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: 'extract session_id from context.sessionId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
                sessionId: 16678456735,
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                price: 2.4,
                quantity: 2,
                client_id: 'client@1234',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: true,
                sendLoginSignup: true,
                newOrExistingUserTrait: 'firstLogin',
                loginSignupMethod: 'method',
                generateLead: true,
                generateLeadValueTrait: 'value',
                generateLeadCurrencyTrait: 'currency',
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        items: [
                          {
                            index: 1,
                            price: 19,
                            coupon: 'SUMMER_FUN',
                            item_id: '507f1f77bcf86cd799439011',
                            currency: 'USD',
                            discount: 2.22,
                            quantity: 2,
                            item_name: 'Monopoly: 3rd Edition',
                            item_brand: 'Google',
                            affiliation: 'Google Merchandise Store',
                            location_id: 'L_12345',
                            item_list_id: 'related_products',
                            item_variant: 'green',
                            item_category: 'Apparel',
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_name: 'Related Products',
                          },
                        ],
                        price: 2.4,
                        value: 4.8,
                        currency: 'USD',
                        quantity: 2,
                        session_id: 16678456735,
                        engagement_time_msec: 1,
                        client_id: 'client@1234',
                      },
                    },
                  ],
                  client_id: 'client_id',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) send integer userId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              userId: 34567,
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
                sessionId: 16678456735,
              },
              type: 'track',
              event: 'product added',
              properties: {
                currency: 'USD',
                price: 2.4,
                quantity: 2,
                client_id: 'client@1234',
                products: [
                  {
                    product_id: '507f1f77bcf86cd799439011',
                    name: 'Monopoly: 3rd Edition',
                    coupon: 'SUMMER_FUN',
                    category: 'Apparel',
                    brand: 'Google',
                    variant: 'green',
                    price: '19',
                    quantity: '2',
                    position: '1',
                    affiliation: 'Google Merchandise Store',
                    currency: 'USD',
                    discount: 2.22,
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    location_id: 'L_12345',
                  },
                ],
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: true,
                sendLoginSignup: true,
                newOrExistingUserTrait: 'firstLogin',
                loginSignupMethod: 'method',
                generateLead: true,
                generateLeadValueTrait: 'value',
                generateLeadCurrencyTrait: 'currency',
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'add_to_cart',
                      params: {
                        items: [
                          {
                            index: 1,
                            price: 19,
                            coupon: 'SUMMER_FUN',
                            item_id: '507f1f77bcf86cd799439011',
                            currency: 'USD',
                            discount: 2.22,
                            quantity: 2,
                            item_name: 'Monopoly: 3rd Edition',
                            item_brand: 'Google',
                            affiliation: 'Google Merchandise Store',
                            location_id: 'L_12345',
                            item_list_id: 'related_products',
                            item_variant: 'green',
                            item_category: 'Apparel',
                            item_category2: 'Adult',
                            item_category3: 'Shirts',
                            item_category4: 'Crew',
                            item_category5: 'Short sleeve',
                            item_list_name: 'Related Products',
                          },
                        ],
                        price: 2.4,
                        value: 4.8,
                        currency: 'USD',
                        quantity: 2,
                        session_id: 16678456735,
                        engagement_time_msec: 1,
                        client_id: 'client@1234',
                      },
                    },
                  ],
                  client_id: 'client_id',
                  user_id: '34567',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) login event with user_properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                traits: {
                  campaign: 'advertizing',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'login',
              properties: {
                method: 'facebook',
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'login',
                      params: {
                        method: 'facebook',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  user_properties: {
                    campaign: {
                      value: 'advertizing',
                    },
                  },
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) sign_up event',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                traits: {
                  campaign: 'advertizing',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'sign_up',
              properties: {
                method: 'google',
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'sign_up',
                      params: {
                        method: 'google',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  user_properties: {
                    campaign: {
                      value: 'advertizing',
                    },
                  },
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) generate_lead event',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                traits: {
                  campaign: 'advertizing',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'generate_lead',
              properties: {
                source: 'instagram',
                value: 20,
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'generate_lead',
                      params: {
                        currency: 'USD',
                        value: 20,
                        source: 'instagram',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  user_properties: {
                    campaign: {
                      value: 'advertizing',
                    },
                  },
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) track call with page information such as url, title, referrer',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                page: {
                  initial_referrer: '$direct',
                  path: '/',
                  referrer: '$direct',
                  tab_url: 'https://www.rudderstack.com/',
                  title: 'Document',
                  url: 'https://www.rudderstack.com/',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'generate_lead',
              properties: {
                source: 'instagram',
                value: 20,
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'generate_lead',
                      params: {
                        currency: 'USD',
                        value: 20,
                        source: 'instagram',
                        page_location: 'https://www.rudderstack.com/',
                        page_referrer: '$direct',
                        page_title: 'Document',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      '(gtag) track event with hybrid connection mode using buffer cloud mode event approach',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                traits: {
                  campaign: 'advertizing',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'generate_lead',
              properties: {
                source: 'instagram',
                value: 20,
              },
              integrations: {
                All: true,
                'Google Analytics 4 (GA4)': {
                  clientId: '554581488.1683172875',
                  sessionId: '1683172875',
                },
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                connectionMode: 'hybrid',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'generate_lead',
                      params: {
                        currency: 'USD',
                        value: 20,
                        source: 'instagram',
                        session_id: '1683172875',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  user_properties: {
                    campaign: {
                      value: 'advertizing',
                    },
                  },
                  client_id: '554581488.1683172875',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description:
      '(gtag) track event with hybrid connection mode using override client_id and session_id approach',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                traits: {
                  campaign: 'advertizing',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
                sessionId: 1683172874065,
              },
              type: 'track',
              event: 'generate_lead',
              properties: {
                source: 'instagram',
                value: 20,
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                connectionMode: 'hybrid',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'generate_lead',
                      params: {
                        currency: 'USD',
                        value: 20,
                        source: 'instagram',
                        session_id: 1683172874065,
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  user_properties: {
                    campaign: {
                      value: 'advertizing',
                    },
                  },
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) firing group calls with GA4 hybrid mode connection',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'group',
              event: 'tutorial complete',
              integrations: {
                'Google Analytics 4': {
                  clientId: '4718026.1683606287',
                  sessionId: '1683606287',
                  sessionNumber: 1,
                },
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                connectionMode: 'hybrid',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              body: {
                JSON: {
                  non_personalized_ads: true,
                  client_id: '4718026.1683606287',
                  events: [
                    {
                      name: 'join_group',
                      params: {
                        engagement_time_msec: 1,
                        session_id: '1683606287',
                        session_number: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) sign_up event with all data types of user_properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                traits: {
                  campaign: 'advertizing',
                  name: 'rudder',
                  age: 45,
                  hobby: ['dancing', 'singing', 'reading'],
                  enableEURegion: false,
                  isEnterpriseUser: {
                    value: false,
                  },
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'sign_up',
              properties: {
                method: 'google',
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6BET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'sign_up',
                      params: {
                        method: 'google',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  user_properties: {
                    age: {
                      value: 45,
                    },
                    name: {
                      value: 'rudder',
                    },
                    campaign: {
                      value: 'advertizing',
                    },
                    enableEURegion: {
                      value: false,
                    },
                  },
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '[Error]: (gtag) event name starts with numbers',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: '1234_sign_up',
              properties: {
                total: '10',
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                connectionMode: 'cloud',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error:
              'Event name must start with a letter and can only contain letters, numbers, and underscores',
            statTags: {
              destType: 'GA4',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'ga4',
    description: '(gtag) event having multiple empty array and object parameters',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'logIn',
              userId: 'user@1',
              group_id: 'group@1',
              anon_id: '78e95d6d-58c0-4237-b99e-2ef510b6d502',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'f0dd99b6f979fb551ce583373900f937',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              properties: {
                user_interest: 'Moderate',
                company_interest: '',
                profile: [
                  {
                    is_6qa: true,
                    product: null,
                    product_fit: 'Moderate',
                    product_stage: 'Purchase',
                    intent_score: 89,
                    profile_score: 52,
                    product_display$name: 'rudderstack',
                  },
                ],
                user_company: 'Analytics consulting',
                user_account: '1',
                user_id_mappings: '330098|245252|461224|282599',
                company_naics_6sense: '5173',
                usr_consent: null,
                firebase_user_id: 'kdgMnP',
                google_user_id: 'G-123456',
                company_domain: 'consulting.net',
                company_region: 'New Zealand',
                user_product_interests: {
                  ids: [],
                  list: [
                    {
                      id: 330098,
                      name: [],
                    },
                    {
                      id: 245252,
                      name: {},
                    },
                  ],
                  names: [],
                },
                company_country: {},
                company_industry: 'Business Analytics',
                company_revenue: '$5M - $10M',
                company_annual_revenue: '5568000',
                company_sic_description: '',
                company_naics_description: [],
              },
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-T40PE6KET4',
                firebaseAppId: '',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                connectionMode: 'cloud',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'login',
                      params: {
                        company_annual_revenue: '5568000',
                        company_domain: 'consulting.net',
                        company_industry: 'Business Analytics',
                        company_naics_6sense: '5173',
                        company_region: 'New Zealand',
                        company_revenue: '$5M - $10M',
                        engagement_time_msec: 1,
                        profile_0_intent_score: 89,
                        profile_0_is_6qa: true,
                        profile_0_product_display$name: 'rudderstack',
                        profile_0_product_fit: 'Moderate',
                        profile_0_product_stage: 'Purchase',
                        profile_0_profile_score: 52,
                        user_account: '1',
                        user_company: 'Analytics consulting',
                        user_id_mappings: '330098|245252|461224|282599',
                        user_interest: 'Moderate',
                        user_product_interests_list_0_id: 330098,
                        user_product_interests_list_1_id: 245252,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  client_id: 'client_id',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-T40PE6KET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) campaign_details custom event',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              userId: 'user@1',
              channel: 'web',
              anonymousId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                campaign: {
                  id: 'google_1234',
                  name: 'Summer_fun',
                  source: 'google',
                  medium: 'cpc',
                  term: 'summer+travel',
                  content: 'logo link',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'Campaign Details',
              properties: {},
              integrations: {
                All: true,
              },
            },
            destination: {
              Config: {
                apiSecret: 'QyWKGHj8QhG2L4ePAPiXCA',
                measurementId: 'G-T40PE6BET4',
                typesOfClient: 'gtag',
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      name: 'campaign_details',
                      params: {
                        campaign_id: 'google_1234',
                        campaign: 'Summer_fun',
                        source: 'google',
                        medium: 'cpc',
                        term: 'summer+travel',
                        content: 'logo link',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                  user_id: 'user@1',
                  client_id: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
                  non_personalized_ads: true,
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {
                api_secret: 'QyWKGHj8QhG2L4ePAPiXCA',
                measurement_id: 'G-T40PE6BET4',
              },
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) send consents setting to ga4 with login event',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'dummyGA4AppInstanceId',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'login',
              properties: {
                method: 'Google',
              },
              integrations: {
                All: true,
                GA4: {
                  consents: {
                    ad_personalization: 'GRANTED',
                    ad_user_data: 'GRANTED',
                  },
                },
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-123456',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-123456',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  consent: {
                    ad_personalization: 'GRANTED',
                    ad_user_data: 'GRANTED',
                  },
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'login',
                      params: {
                        method: 'Google',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
  {
    name: 'ga4',
    description: '(gtag) send consents setting to ga4 with login event',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              messageId: 'ec5481b6-a926-4d2e-b293-0b3a77c4d3be',
              originalTimestamp: '2022-04-26T05:17:09Z',
              anonymousId: 'ea5cfab2-3961-4d8a-8187-3d1858c99090',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                device: {
                  adTrackingEnabled: 'false',
                  advertisingId: 'T0T0T072-5e28-45a1-9eda-ce22a3e36d1a',
                  id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  manufacturer: 'Google',
                  model: 'AOSP on IA Emulator',
                  name: 'generic_x86_arm',
                  type: 'ios',
                  attTrackingStatus: 3,
                },
                ip: '0.0.0.0',
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                locale: 'en-US',
                os: {
                  name: 'iOS',
                  version: '14.4.1',
                },
                screen: {
                  density: 2,
                },
                externalId: [
                  {
                    type: 'ga4AppInstanceId',
                    id: 'dummyGA4AppInstanceId',
                  },
                  {
                    type: 'ga4ClientId',
                    id: 'client_id',
                  },
                ],
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
              },
              type: 'track',
              event: 'login',
              properties: {
                method: 'Google',
              },
              integrations: {
                All: true,
                GA4: {
                  consents: {
                    ad_personalization: 'NOT_SPECIFIED',
                    ad_user_data: 'DENIED',
                  },
                },
              },
              sentAt: '2022-04-20T15:20:57Z',
            },
            destination: {
              Config: {
                apiSecret: 'dummyApiSecret',
                measurementId: 'G-123456',
                firebaseAppId: '',
                blockPageViewEvent: false,
                typesOfClient: 'gtag',
                extendPageViewParams: false,
                sendUserId: false,
                eventFilteringOption: 'disable',
                blacklistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                ],
                enableServerSideIdentify: false,
                sendLoginSignup: false,
                generateLead: false,
              },
              Enabled: true,
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://www.google-analytics.com/mp/collect',
              headers: {
                HOST: 'www.google-analytics.com',
                'Content-Type': 'application/json',
              },
              params: {
                api_secret: 'dummyApiSecret',
                measurement_id: 'G-123456',
              },
              body: {
                JSON: {
                  client_id: 'client_id',
                  consent: {
                    ad_user_data: 'DENIED',
                  },
                  timestamp_micros: 1650950229000000,
                  non_personalized_ads: true,
                  events: [
                    {
                      name: 'login',
                      params: {
                        method: 'Google',
                        engagement_time_msec: 1,
                      },
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
    mockFns: defaultMockFns,
  },
];
