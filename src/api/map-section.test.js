import { mapImageGrid, mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid } from './map-section';


import fakeDados from './dados.json'
describe('map-sections', () => {
  test('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  test('should render sections with invalid data', () => {
    const data = mapSections(fakeDados[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  test('should test with invalida date', () => {
    const withNoTextOrImage = mapSections([
      {
        __component:'section.section-grid'
      }
    ]);
    const withNoComponent =  mapSections([{}])

    expect(withNoTextOrImage).toEqual([{
      __component:'section.section-grid'
    }])
    expect(withNoComponent).toEqual([{}])
  });

  test('should test section.section-grid with no images or text', () => {
    const withNoTextOrImage = mapSections([
      {
        __component:'section.section-grid',
        image_grid:[{}]
      },
      {
        __component:'section.section-grid',
        text_grid:[{}]
      },
    ]);
    expect(withNoTextOrImage.length).toBe(2)
  });

  test('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  test('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      __v: 1,
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  test("Should map section content",()=>{
    const section = mapSectionContent()

    expect(section.component).toBe('');
    expect(section.html).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  })

  test("Should map section content if not data",()=>{
    const section = mapSectionContent({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056178',
    })

    expect(section.component).toBe('section.section-two-columns');
    expect(section.html).toBe('');
    expect(section.background).toBe(true);
    expect(section.sectionId).toBe('contact');
  })
  
  test("Should map section content if not data",()=>{
    const data = mapTextGrid({})
    expect(data.component).toBe('');
    expect(data.background).toBe(false);
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
  })
  test('should map grid text with data',() =>{
    const data = mapTextGrid( {
      "__component": "section.section-grid",
      "description": "abc",
      "title": "My Grid",
      "text_grid": [
        {
          "_id": "602fdf2d540c00269e05617c",
          "title": "Teste 1",
          "description": "Coisa",
        },
        {
          "title": "Teste 2",
          "description": "abc",
        },
      ],
      "image_grid": [],
      "metadata": {
        "background": true,
        "section_id": "grid-one",
      },
    },)
    expect(data.component).toBe('section.section-grid');
    expect(data.background).toBe(true);
    expect(data.title).toBe('My Grid');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
    
  })

  test('should map grid text without data',() =>{
    const data = mapTextGrid(undefined)
    expect(data.component).toBe('');
    expect(data.background).toBe(false);
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    
  })

  test('should map grid image without data',() =>{
    const data = mapImageGrid(undefined)
    expect(data.component).toBe('section.section-grid-image');
    expect(data.background).toBe(false);
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    
  })
  test('should map grid image with data',() =>{
    const data = mapImageGrid( {
      "__component": "section.section-grid",
      "description": "abc",
      "title": "Gallery",
      "text_grid": [],
      "image_grid": [
        {
          "image": {
            "alternativeText": "abc",
            "url": "a.svg",
          },
        },
      ],
      "metadata": {
        "background": false,
        "name": "gallery",
        "section_id": "gallery",
      },
    },)
    expect(data.component).toBe('section.section-grid-image');
    expect(data.background).toBe(false);
    expect(data.title).toBe('Gallery');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
    
  })

});