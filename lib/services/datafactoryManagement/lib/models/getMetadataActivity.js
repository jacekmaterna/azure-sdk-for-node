/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Activity to get metadata of dataset
 *
 * @extends models['ExecutionActivity']
 */
class GetMetadataActivity extends models['ExecutionActivity'] {
  /**
   * Create a GetMetadataActivity.
   * @member {object} dataset GetMetadata activity dataset reference.
   * @member {string} [dataset.referenceName] Reference dataset name.
   * @member {object} [dataset.parameters] Arguments for dataset.
   * @member {array} [fieldList] Fields of metadata to get from dataset.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of GetMetadataActivity
   *
   * @returns {object} metadata of GetMetadataActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetMetadata',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Activity',
        className: 'GetMetadataActivity',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityDependencyElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    className: 'ActivityDependency'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          linkedServiceName: {
            required: false,
            serializedName: 'linkedServiceName',
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          policy: {
            required: false,
            serializedName: 'policy',
            type: {
              name: 'Composite',
              additionalProperties: {
                type: {
                  name: 'Dictionary',
                  value: {
                      required: false,
                      serializedName: 'ObjectElementType',
                      type: {
                        name: 'Object'
                      }
                  }
                }
              },
              className: 'ActivityPolicy'
            }
          },
          dataset: {
            required: true,
            serializedName: 'typeProperties.dataset',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'DatasetReference'
            }
          },
          fieldList: {
            required: false,
            serializedName: 'typeProperties.fieldList',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetMetadataActivity;
