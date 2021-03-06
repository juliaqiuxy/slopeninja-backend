/* eslint-disable */
const main = {
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
    },
    layouts: {
      MainContainer: {
        parameters: ['title', 'logo', 'hintText', 'listData'],
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
                type: 'Sequence',
                grow: 1,
                height: '80vh',
                scrollDirection: 'vertical',
                paddingLeft: '@marginLeft',
                paddingRight: '@marginRight',
                data: '${listData}',
                numbered: false,
                items: [
                  {
                    type: 'VerticalListItem',
                    image: '${data.image.sources[0].url}',
                    icon: '${data.image.sources[1].url}',
                    primaryText: '${data.textContent.primaryText.text}',
                    secondaryText: '${data.textContent.secondaryText.text}',
                    resortLiftStatus:
                      '${data.textContent.resortLiftStatus.text}',
                    resortTrailStatus:
                      '${data.textContent.resortTrailStatus.text}',
                    resortStatus: '${data.textContent.resortStatus.text}',
                    weatherIcon: '${data.image.sources[1].url}',
                  },
                ],
              },
              {
                type: 'AlexaFooter',
                footerHint: '${payload.data.hintText}',
              },
            ],
          },
        ],
      },
      VerticalListItem: {
        parameters: [
          'primaryText',
          'secondaryText',
          'tertiaryText',
          'resortTrailStatus',
          'resortLiftStatus',
          'resortStatus',
          'image',
          'status',
          'weatherIcon',
        ],
        items: [
          {
            when: "${viewport.shape == 'round'}",
            type: 'Container',
            direction: 'row',
            height: 80,
            spacing: 16,
            width: '100%',
            separator: true,
            alignItems: 'center',
            items: [
              {
                type: 'Image',
                when: '${image}',
                source: '${image}',
                height: 70,
                width: 70,
                spacing: 12,
                scale: 'best-fit',
                align: 'top',
              },
              {
                type: 'Text',
                text: '${primaryText}',
                style: 'headerText',
                paddingLeft: 16,
              },
            ],
          },
          {
            type: 'Container',
            direction: 'row',
            height: 'auto',
            width: '100%',
            separator: true,
            spacing: 50,
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
                type: 'Container',
                spacing: 30,
                width: '78%',
                direction: 'column',
                items: [
                  {
                    type: 'Text',
                    text: '${primaryText}',
                    style: 'textStyleBody',
                    fontWeight: '300',
                    grow: 1,
                    shrink: 1,
                    maxLines: 1,
                  },
                  {
                    type: 'Text',
                    text: '${secondaryText}',
                    style: 'textStyleAddress',
                    fontWeight: '300',
                    grow: 1,
                    shrink: 1,
                    maxLines: 1,
                    spacing: 6,
                  },
                  {
                    type: 'Container',
                    direction: 'row',
                    spacing: 12,
                    items: [
                      {
                        type: 'Container',
                        items: [
                          {
                            type: 'Text',
                            text: 'Open Lifts',
                            style: 'textStyleDetails',
                            fontWeight: '300',
                            grow: 1,
                            shrink: 1,
                            maxLines: 1,
                          },
                          {
                            type: 'Text',
                            text: '${resortLiftStatus}',
                            style: 'textStyleDetails',
                            fontWeight: '300',
                            grow: 1,
                            shrink: 1,
                            maxLines: 1,
                            spacing: 4,
                          },
                        ],
                      },
                      {
                        type: 'Container',
                        spacing: 32,
                        items: [
                          {
                            type: 'Text',
                            text: 'Open Trails',
                            style: 'textStyleDetails',
                            fontWeight: '300',
                            grow: 1,
                            shrink: 1,
                            maxLines: 1,
                          },
                          {
                            type: 'Text',
                            text: '${resortTrailStatus}',
                            style: 'textStyleDetails',
                            fontWeight: '300',
                            grow: 1,
                            shrink: 1,
                            maxLines: 1,
                            spacing: 4,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'Container',
                spacing: 30,
                direction: 'column',
                alignItems: 'center',
                items: [
                  {
                    type: 'Text',
                    text: '${resortStatus}',
                    style: 'textStyleDetails',
                    fontWeight: '300',
                    maxLines: 1,
                  },
                  {
                    type: 'Image',
                    when: '${weatherIcon}',
                    source: '${weatherIcon}',
                    align: 'top',
                    spacing: 20,
                    width: '40',
                    height: '40',
                    scale: 'best-fit',
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
          listData: '${payload.data.listPage.listItems}',
        },
      ],
    },
  },
};
/* eslint-enable */

export default main;
