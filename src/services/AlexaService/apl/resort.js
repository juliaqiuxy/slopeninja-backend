/* eslint-disable */
const resort = {
  document: {
    type: 'APL',
    version: '1.0',
    theme: 'light',
    import: [
      {
        name: 'alexa-layouts',
        version: '1.0.0',
      },
    ],
    resources: [
      {
        description: 'Stock color for the light theme',
        colors: {
          colorTextPrimary: '#4A4A4A',
        },
      },
      {
        description: 'Secondary Stock color for the light theme',
        colors: {
          colorTextSecondary: '#9B9B9B',
        },
      },
      {
        description: 'Lightest Grey',
        colors: {
          colorTextLight: '#D6D6D6',
        },
      },
      {
        description: 'Stock color for the dark theme',
        when: "${viewport.theme == 'dark'}",
        colors: {
          colorTextPrimary: '#FFFFFF',
        },
      },
      {
        description: 'Standard font sizes',
        dimensions: {
          textSizeBody: 32,
          textSizePrimary: 24,
          textSizeSecondary: 16,
          textSizeDetails: 20,
          textSizeSecondaryHint: 25,
        },
      },
      {
        description: 'Common spacing values',
        dimensions: {
          spacingThin: 6,
          spacingSmall: 12,
          spacingMedium: 24,
          spacingLarge: 48,
          spacingExtraLarge: 72,
        },
      },
      {
        description: 'Common margins and padding',
        dimensions: {
          marginTop: 40,
          marginLeft: 60,
          marginRight: 60,
          marginBottom: 40,
        },
      },
    ],
    styles: {
      textStyleBase: {
        description: 'Base font description; set color and core font family',
        values: [
          {
            color: '@colorTextPrimary',
            fontFamily: 'Amazon Ember Display',
          },
        ],
      },
      textStyleBase0: {
        description: 'Thin version of basic font',
        extend: 'textStyleBase',
        values: {
          fontWeight: '100',
        },
      },
      textStyleBase1: {
        description: 'Light version of basic font',
        extend: 'textStyleBase',
        values: {
          fontWeight: '300',
        },
      },
      textStyleBase2: {
        description: 'Regular version of basic font',
        extend: 'textStyleBase',
        values: {
          fontWeight: '500',
        },
      },
      mixinBody: {
        values: {
          fontSize: '@textSizeBody',
        },
      },
      mixinPrimary: {
        values: {
          fontSize: '@textSizePrimary',
        },
      },
      mixinDetails: {
        values: {
          fontSize: '@textSizeDetails',
        },
      },
      mixinSecondary: {
        values: {
          fontSize: '@textSizeSecondary',
        },
      },
      textStylePrimary: {
        extend: ['textStyleBase1', 'mixinPrimary'],
      },
      textStyleSecondary: {
        extend: ['textStyleBase0', 'mixinSecondary'],
      },
      textStyleBody: {
        extend: ['textStyleBase1', 'mixinBody'],
      },
      textStyleSecondaryHint: {
        values: {
          fontFamily: 'Bookerly',
          fontStyle: 'italic',
          fontSize: '@textSizeSecondaryHint',
          color: '@colorTextPrimary',
        },
      },
      textStyleDetails: {
        extend: ['textStyleBase2', 'mixinDetails'],
      },
      textStyleAddress: {
        description: '',
        values: [
          {
            color: '@colorTextSecondary',
            fontFamily: 'Amazon Ember Display',
            fontSize: '@textSizePrimary',
            fontWeight: '100',
          },
        ],
      },
      headerText: {
        description: '',
        values: [
          {
            color: '@colorTextPrimary',
            fontFamily: 'Amazon Ember Display',
            fontSize: '32',
            fontWeight: '500',
          },
        ],
      },
      detaiText: {
        description: '',
        values: [
          {
            color: '@colorTextPrimary',
            fontFamily: 'Amazon Ember Display',
            fontSize: '@textSizePrimary',
            fontWeight: '300',
          },
        ],
      },
      detaiTextLight: {
        description: '',
        values: [
          {
            color: '@colorTextLight',
            fontFamily: 'Amazon Ember Display',
            fontSize: '@textSizePrimary',
            fontWeight: '300',
          },
        ],
      },
    },
    layouts: {
      MainContainer: {
        parameters: ['title', 'logo', 'hintText', 'data'],
        item: [
          {
            type: 'Container',
            width: '100vw',
            height: '100vh',
            direction: 'column',
            items: [
              {
                type: 'Container',
                when: "${viewport.shape == 'round'}",
                height: 'auto',
                width: '100%',
                paddingTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                item: [
                  {
                    type: 'Image',
                    when: '${logo}',
                    source: '${logo}',
                    width: 48,
                    height: 48,
                  },
                ],
              },
              {
                type: 'Container',
                when: "${viewport.shape == 'rectangle'}",
                direction: 'row',
                height: 'auto',
                width: '100%',
                separator: true,
                paddingLeft: '@marginLeft',
                paddingRight: '@marginRight',
                spacing: 60,
                justifyContent: 'spaceBetween',
                items: [
                  {
                    type: 'Image',
                    when: '${logo}',
                    source: '${logo}',
                    width: 48,
                    height: 48,
                  },
                  {
                    type: 'Text',
                    text: '${title}',
                    style: 'headerText',
                  },
                ],
              },
              {
                type: 'VerticalListItem',
                image: '${data.resortLogo}',
                temperature: '${data.temperature}',
                newSnow: '${data.newSnow}',
                resortName: '${data.resortName}',
                resortStatus: '${data.resortStatus}',
                weatherIcon: '${data.weatherIcon}',
                snowDepth: '${data.snowDepth}',
                openRoutes: '${data.openRoutes}',
                chains: '${data.chains}',
                openLifts: '${data.openLifts}',
                openTrails: '${data.openTrails}',
                paddingLeft: '@marginLeft',
                paddingRight: '@marginRight',
                spacing: 40,
              },
              {
                type: 'AlexaFooter',
                footerHint: '${payload.data.hintText}',
                spacing: 60,
              },
            ],
          },
        ],
      },
      VerticalListItem: {
        parameters: [
          'resortStatus',
          'newSnow',
          'temperature',
          'snowDepth',
          'image',
          'status',
          'weatherIcon',
          'resortName',
          'openRoutes',
          'chains',
          'openLifts',
          'openTrails',
        ],
        items: [
          {
            when: "${viewport.shape == 'round'}",
            type: 'Container',
            direction: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'spaceBetween',
            items: [
              {
                type: 'Container',
                direction: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                items: [
                  {
                    type: 'Image',
                    when: '${image}',
                    source: '${image}',
                    height: 70,
                    width: 70,
                    scale: 'best-fit',
                    align: 'top',
                  },
                  {
                    type: 'Text',
                    text: '${resortName}',
                    style: 'headerText',
                    spacing: 12,
                  },
                ],
              },
              {
                type: 'Container',
                direction: 'row',
                spacing: 12,
                justifyContent: 'center',
                alignItems: 'center',
                items: [
                  {
                    type: 'Text',
                    text: '${temperature}',
                    style: 'detaiText',
                    grow: 1,
                    shrink: 1,
                    fontWeight: '300',
                    maxLines: 1,
                  },
                  {
                    type: 'Image',
                    when: '${weatherIcon}',
                    source: '${weatherIcon}',
                    width: 48,
                    height: 48,
                    spacing: 25,
                  },
                ],
              },
              {
                type: 'Container',
                direction: 'row',
                paddingTop: 12,
                items: [
                  {
                    type: 'Container',
                    items: [
                      {
                        type: 'Text',
                        text: 'New Snow',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Text',
                        text: '${newSnow}',
                        style: 'detaiText',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                    ],
                  },
                  {
                    type: 'Container',
                    spacing: 30,
                    items: [
                      {
                        type: 'Text',
                        text: 'Snow Depth',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Text',
                        text: '${snowDepth}',
                        style: 'detaiText',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'Container',
            direction: 'column',
            height: 'auto',
            width: '100%',
            items: [
              {
                type: 'Container',
                direction: 'row',
                height: 'auto',
                width: '100%',
                spacing: 40,
                backgroundColor: '#EDEDED',
                alignItems: 'center',
                justifyContent: 'spaceBetween',
                items: [
                  {
                    type: 'Container',
                    direction: 'row',
                    alignItems: 'center',
                    items: [
                      {
                        type: 'Image',
                        when: '${image}',
                        source: '${image}',
                        height: 80,
                        width: 80,
                        align: 'top',
                        scale: 'best-fit',
                      },
                      {
                        type: 'Text',
                        text: '${resortName}',
                        style: 'headerText',
                        spacing: 16,
                      },
                    ],
                  },
                  {
                    type: 'Text',
                    text: '${resortStatus}',
                    style: 'textStylePrimary',
                    spacing: 16,
                  },
                ],
              },
              {
                type: 'Container',
                direction: 'row',
                justifyContent: 'spaceBetween',
                spacing: 30,
                height: 80,
                items: [
                  {
                    type: 'Container',
                    direction: 'column',
                    width: '25%',
                    items: [
                      {
                        type: 'Text',
                        text: 'Temperature',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Text',
                        text: '${temperature}',
                        style: 'detaiText',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                    ],
                  },
                  {
                    type: 'Container',
                    width: '25%',
                    items: [
                      {
                        type: 'Text',
                        text: 'New Snow',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Text',
                        text: '${newSnow}',
                        style: 'detaiText',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                    ],
                  },
                  {
                    type: 'Container',
                    width: '25%',
                    items: [
                      {
                        type: 'Text',
                        text: 'Snow Depth',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Text',
                        text: '${snowDepth}',
                        style: 'detaiText',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                    ],
                  },
                  {
                    type: 'Container',
                    width: '25%',
                    items: [
                      {
                        type: 'Text',
                        text: 'Weather Condition',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Image',
                        when: '${weatherIcon}',
                        source: '${weatherIcon}',
                        width: 48,
                        height: 48,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'Container',
                direction: 'row',
                justifyContent: 'spaceBetween',
                spacing: 30,
                items: [
                  {
                    type: 'Container',
                    direction: 'column',
                    width: '25%',
                    items: [
                      {
                        type: 'Text',
                        text: 'Routes',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Container',
                        spacing: 12,
                        items: [
                          {
                            type: 'Text',
                            when: '${openRoutes.open}',
                            text: '${openRoutes.open}',
                            style: 'detaiText',
                            fontWeight: '300',
                            grow: 1,
                            shrink: 1,
                            maxLines: 1,
                          },
                          {
                            type: 'Text',
                            when: '${openRoutes.closed}',
                            text: '${openRoutes.closed}',
                            style: 'detaiTextLight',
                            fontWeight: '300',
                            grow: 1,
                            shrink: 1,
                            maxLines: 1,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'Container',
                    width: '25%',
                    items: [
                      {
                        type: 'Text',
                        text: 'Chains',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Container',
                        spacing: 12,
                        items: [
                          {
                            type: 'Text',
                            when: '${chains.r1}',
                            text: '${chains.r1}',
                            style: 'detaiText',
                            fontWeight: '300',
                          },
                          {
                            type: 'Text',
                            when: '${chains.r2}',
                            text: '${chains.r2}',
                            style: 'detaiText',
                            fontWeight: '300',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'Container',
                    width: '25%',
                    height: 78,
                    items: [
                      {
                        type: 'Text',
                        text: 'Open Lifts',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Text',
                        text: '${openLifts}',
                        style: 'detaiText',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                        spacing: 1,
                      },
                    ],
                  },
                  {
                    type: 'Container',
                    width: '25%',
                    height: 78,
                    items: [
                      {
                        type: 'Text',
                        text: 'Open Trails',
                        style: 'textStyleAddress',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                      {
                        type: 'Text',
                        text: '${openTrails}',
                        style: 'detaiText',
                        fontWeight: '300',
                        grow: 1,
                        shrink: 1,
                        maxLines: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    mainTemplate: {
      parameters: ['payload'],
      item: [
        {
          type: 'MainContainer',
          title: '${payload.data.title}',
          logo: '${payload.data.logoUrl}',
          data: '${payload.data.resortDetails}',
        },
      ],
    },
  },
};
/* eslint-enable */

export default resort;
